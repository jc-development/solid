import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { getLoadableState } from 'loadable-components/server';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from '../shared/app';
import configureStore from './store';
import { renderHeader, renderFooter } from './render';
import rootSagas from '../shared/app/rootSagas';
const bodyParser = require('body-parser');
const expressStaticGzip = require("express-static-gzip");

const app = express();

const forceSsl =  (req, res, next) => {
   if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
       return res.redirect(301,['https://', req.hostname, req.url].join(''));
   }
   return next();
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(forceSsl);

app.use( '/assets', expressStaticGzip('./dist') );

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get( '*', async (req, res) => {
  const store = configureStore();
  const context = {};

  const appWithRouter = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  let loadableState = {};

  store.runSaga(rootSagas).done.then( () => {
    res.status(200).write(renderHeader());

    const preloadedState = store.getState();

    const htmlStream = renderToNodeStream(appWithRouter);
    htmlStream.pipe(res, { end: false });
    htmlStream.on('end', () => {
      res.write(renderFooter(loadableState, preloadedState));
      return res.send();
    })
  });

  // Trigger sagas for component to runSaga
  loadableState = await getLoadableState(appWithRouter);

  // dispatch a close event so sagas stop listening after they're resolved
  store.close();

} );

app.listen(process.env.PORT || 3000, () => console.log('Server listening.'));
