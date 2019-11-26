import React, { Component } from 'react';
import { ComparisonChart } from '../comparison-chart/ComparisonChart';
import { CompanySignature } from './child-components/CompanySignature';

import './assets/css/main-footer.css';

export default class MainFooter extends Component {
  render() {
    return (
      <footer>
        <ComparisonChart />
        <CompanySignature />
      </footer>
    );
  }
}

/*
import { Link } from 'react-router-dom';
import './assets/css/main-footer.css';

<nav>
  <ul>
    <Link to="/promos"><li>Select your legend series 3 Pack &amp; get your FREE Armory Case</li></Link>
  </ul>
</nav>
*/
