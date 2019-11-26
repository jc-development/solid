import React, { Component } from 'react';
import './assets/css/support.css';

export default class Support extends Component {
  render() {
    return (
      <section className="desktop menu-wrapper">
        <h2>CONTACT SOLID</h2>
        <dl>
          <dt>
            customer service
          </dt>
          <dd>Monday-Friday 8:00 AM - 8:00 PM EST</dd>
        </dl>
        <dl>
          <dt>
            Address
          </dt>
          <dd>
            1325 John Street<br />
            West Henrietta, NY 14586<br />
            United States
          </dd>
        </dl>
        <dl>
          <dt>email</dt>
          <dd>techsupport.north@togllc.com</dd>
        </dl>

        <dl>
          <dt>Phone Number</dt>
          <dd>1-844-HUNT-OUTDOORS (844-486-8688)</dd>
        </dl>

          <dl>
            <dt>fax number</dt>
            <dd>585-444-0209</dd>
          </dl>
      </section>
    )
  }
}
