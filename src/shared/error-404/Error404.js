import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './assets/css/error-404.css';

export default class Error404 extends Component {
  render() {
    return (
      <section id="error-404">
        <h1>PAGE NOT FOUND</h1>
        <p>We can't seem to find the page you're looking for. Click <Link to="/">here</Link> to go to the home page.</p>
      </section>
    );
  }
}
