import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/menu-display.css';

export default class MenuDisplay extends Component {

  render() {
    return (
      <div className="menu-wrapper">
        <div>
          <h2>Promos</h2>
          <dl>
            {/* <dt>
              Legend &amp; Legend Dangerous Game
            </dt> */}
            <dd><Link to="/promos">BUY SOLID LEGEND SERIES BROADHEADS</Link></dd>
          </dl>
        </div>
        <div>
          <h2>BROADHEADS</h2>
          <Link to="/broadheads" id="all-heads">All Broadheads</Link>
          <dl>
            <dt>
              Legend Series broadheads
            </dt>
            <dd><Link to="/broadheads/legend-100-grain-broadhead">100 Grains</Link></dd>
            <dd><Link to="/broadheads/legend-125-grain-broadhead">125 grains</Link></dd>
          </dl>

          <dl>
            <dt>
              Legend Dangerous Game Series broadheads
            </dt>
            <dd><Link to="/broadheads/legend-dangerous-game">175 Grains</Link></dd>
          </dl>

          <dl>
            <dt>
              D-CAP Series Broadheads
            </dt>
            <dd><Link to="/broadheads/turkey-d-cap-broadhead">200 Grains</Link></dd>
          </dl>
        </div>

        <div>
          <h2>ACCESSORIES</h2>
          <dl>
            <dt>
              Storage
            </dt>
            <dd><Link to="/accessories/armory-case">Armory Case</Link></dd>
          </dl>
          <dl>
            <dt>
              Maitenance
            </dt>
            <dd><Link to="/accessories/leather-strop">Leather Strop</Link></dd>
          </dl>
        </div>

        <div>
          <h2>APPAREL</h2>
          <dl>
            <dt>
              Shirts
            </dt>
            <dd><Link to="/apparel/solid-performance-tee">Solid Performance Tee</Link></dd>
          </dl>
          <dl>
            <dt>
              Hoodies
            </dt>
            <dd><Link to="/apparel/solid-hoodie">Solid Hoodie</Link></dd>
          </dl>
        </div>

        {/* <div>
          <h2>SOLID BROADHEAD CO.</h2>
          <dl>
            <dt>
              PHILOSOPHY
            </dt>
            <dd><Link to="/guiding-principles">Guiding Principles</Link></dd>
          </dl>
          <dl>
            <dt>
              Social Media
            </dt>
            <dd><Link to="https://facebook.com">facebook</Link></dd>
          </dl>
        </div> */}

        <div>
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
        </div>
      </div>
    );
  }

}
