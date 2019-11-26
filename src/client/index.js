import { render } from 'react-dom';
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { loadComponents } from 'loadable-components';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../shared/app/rootSagas';
import productsReducer from './../shared/utilities/store-products/products-reducer';
import storeCheckoutReducer from '../shared/utilities/store-checkout/store-checkout-reducer';
import broadheadModelReducer from '../shared/broadheads/broadhead-model-reducer';
import ScrollTop from '../shared/app/ScrollTop'

import App from '../shared/app';

import { polyfill } from 'es6-promise'; polyfill();
import "babel-polyfill";

// grab the state from a global variable injected into the server generated HTML
const preloadedState = window.__PRELOADED_STATE__;

const reducer = combineReducers({
  products: productsReducer,
  checkout: storeCheckoutReducer,
  broadhead: broadheadModelReducer,
  routing: routerReducer
});

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

// garbage collect past state
delete window.__PRELOADED_STATE__;

const store = createStore(
  reducer,
  preloadedState,
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSagas);

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollTop>
          <App {...this.props} />
        </ScrollTop>
      </BrowserRouter>
    );
  }
}

loadComponents().then( () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
});
