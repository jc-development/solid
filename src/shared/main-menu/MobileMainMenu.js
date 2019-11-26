import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/fontawesome-free-solid';

import './assets/css/menu.css';
import solidLogoSrc from './assets/images/logo.png';


export const MobileMainMenu = (props) => {

    return (
      <nav id="mobile-main-menu">
        <p className="free-shipping">Free Shipping</p>
        <ul>
          <li><Link to="/"><img className="logo" src={solidLogoSrc} /></Link></li>
          <li><Link to="/menu"><FontAwesomeIcon icon={faBars} size="2x" /></Link></li>
          {/* <li><Link to="/accessories">accessories</Link></li> */}
          {/* <li><Link to="/guiding-principles">about solid</Link></li>
          <li><Link to="/videos">video</Link></li>
          <li><Link to="/support">support</Link></li> */}
          <li className="cart-link-mobile"><Link to="/cart"><div className="cart-items-circle"><span className='cart-item-number'>{props.cartItemsCount}</span></div><FontAwesomeIcon icon={faShoppingCart} size="2x" /></Link></li>
        </ul>
      </nav>
    );
}
