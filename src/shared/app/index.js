import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainMenu from './../main-menu/MainMenu';
import MainFooter from './../main-footer/MainFooter';
import * as Routes from './routes';

import './assets/css/reset.css';
import './assets/css/ie11fix.css';

const App = () => (
  <div>
    <MainMenu />
    <a id="brochure-link" href="https://s3.amazonaws.com/solid-broadheads/solid-brochure.pdf" target="_blank">Download Solid Brochure</a>
    <Switch>
      <Route exact path='/' component={Routes.Home} />
      <Route path='/menu' component={Routes.MenuDisplay} />
      <Route exact path='/broadheads' component={Routes.Broadheads} />
      <Route path='/broadheads/:broadhead' component={Routes.Broadhead} />


      <Route exact path='/accessories' component={Routes.Accessories} />
      <Route path='/accessories/:accessory' component={Routes.Accessory} />
      <Route exact path='/apparel' component={Routes.Apparel} />
      <Route path='/apparel/:apparelItem' component={Routes.ApparelItem} />
      <Route path='/promos' component={Routes.Promos} />
      {/* <Route path='/guiding-principles' component={Routes.GuidingPrinciples} />
      <Route path='/videos' component={Routes.Videos} /> */}
      <Route path='/support' component={Routes.Support} />
      <Route path='/cart' component={Routes.Cart} />
      <Route exact path='/black-friday-deals' component={Routes.BlackFridayDeals} />

      <Route exact path='*' component={Routes.Error404} />
    </Switch>
    <MainFooter />
  </div>
);

export default App;
