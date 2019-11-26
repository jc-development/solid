import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './assets/css/menu.css';
import solidLogoSrc from './assets/images/logo.png';


export const DesktopMainMenu = (props) => {
    return (
      <nav id="main-menu">
        <p className="free-shipping">Free Shipping</p>
        <ul>
          <li><Link to="/"><img className="logo" src={solidLogoSrc} /></Link></li>
          <li><Link to="/promos">promos</Link></li>
          <li>
            {/*  onClick={props.handleDropdownClick} */}
            <Link id="broadheadsDropdown" to="/broadheads">broadheads</Link>
            {/* <ul className={props.dropdownVisibleBroadheads ? 'dropdown-menu open' : 'dropdown-menu'} ref={props.dropdownMenu}>
              <li><Link to='/broadheads/legend-100-grain-broadhead' onClick={props.handleSubMenuClick}>Legend 100 Grain</Link></li>
              <li><Link to="/broadheads/legend-125-grain-broadhead" onClick={props.handleSubMenuClick}>Legend 125 Grain</Link></li>
              <li><Link to="/broadheads/legend-dangerous-game" onClick={props.handleSubMenuClick}>Legend 175 Grain</Link></li>
            </ul> */}
          </li>
          <li>
            <Link id="accessoriesDropdown" to="/accessories" onClick={props.handleDropdownClick}>accessories</Link>
            <ul className={props.dropdownVisibleAccessories ? 'dropdown-menu open' : 'dropdown-menu'} ref={props.dropdownMenu}>
              <li><Link to='/accessories/leather-strop' onClick={props.handleSubMenuClick}>Leather Strop</Link></li>
              <li><Link to="/accessories/armory-case" onClick={props.handleSubMenuClick}>Solid Armory Case</Link></li>
            </ul>
          </li>
          {/* <li><Link to="/guiding-principles">about solid</Link></li>
          <li><Link to="/videos">video</Link></li> */}
          <li>
            <Link id="apparelDropdown" to="/apparel" onClick={props.handleDropdownClick}>apparel</Link>
            <ul className={props.dropdownVisibleApparel ? 'dropdown-menu open' : 'dropdown-menu'} ref={props.dropdownMenu}>
              <li><Link to="/apparel/solid-performance-tee" onClick={props.handleSubMenuClick}>Solid Performance Tee</Link></li>
              <li><Link to='/apparel/solid-hoodie' onClick={props.handleSubMenuClick}>Solid Hoodie</Link></li>
            </ul>
          </li>
          <li><Link to="/support">support</Link></li>
          <li className="cart-link-desktop"><Link to="/cart"><div className="cart-items-circle"><span className='cart-item-number'>{props.cartItemsCount}</span></div>cart</Link></li>
        </ul>
      </nav>
    );
}
