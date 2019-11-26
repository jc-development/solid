import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './assets/css/menu.css';
import solidLogoSrc from './assets/images/logo.png';

import { fetchCreateStoreCheckout as fetchCreateStoreCheckoutAction } from './../utilities/store-checkout/actions';

import { MobileMainMenu } from './MobileMainMenu';
import { DesktopMainMenu } from './DesktopMainMenu';

import _debounce from 'lodash/debounce';

class MainMenu extends Component {

  constructor (props) {
   super (props)
    this.state = {
      cartItemsCount: 0,
      navWidth: null,
      dropdownVisibleBroadheads: false,
      dropdownVisibleAccessories: false,
      dropdownVisibleApparel: false
    };

    this.handleNavWidth = _debounce(this.handleNavWidth.bind(this), 150);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleSubMenuClick = this.handleSubMenuClick.bind(this);

  };

  componentWillReceiveProps(nextProps) {
    // console.log('this.props.checkout: ', this.props.checkout);
    // console.log('nextProps.checkout: ', nextProps.checkout);
    if (this.props.checkout.lineItems && nextProps.checkout.lineItems) {
      if (nextProps.checkout.lineItems.edges.length >= 0) {
        if (this.props.checkout.lineItems.edges !== nextProps.checkout.lineItems.edges) {
          this.setState({
            cartItemsCount: nextProps.checkout.lineItems.edges.length
          });
        }
      }
    }
  }

  // componentWillMount() {
  //
  // }

  componentDidMount() {
    this.props.fetchCreateStoreCheckout();
    this.handleNavWidth();
    window.addEventListener('resize', this.handleNavWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleNavWidth);
  }

  handleNavWidth() {
    this.setState({navWidth: this.mainNav.clientWidth});
  }

  handleDropdownClick(event) {
  event.preventDefault();
  const id = event.target.id;

    switch(id) {
        case 'broadheadsDropdown':
          this.setState({
            dropdownVisibleBroadheads: true,
            dropdownVisibleAccessories: false,
            dropdownVisibleApparel: false
          });
          break;
        case 'accessoriesDropdown':
          this.setState({
            dropdownVisibleBroadheads: false,
            dropdownVisibleAccessories: true,
            dropdownVisibleApparel: false
          });
          break;
        case 'apparelDropdown':
          this.setState({
            dropdownVisibleBroadheads: false,
            dropdownVisibleAccessories: false,
            dropdownVisibleApparel: true
          });
          break;
        default:
            //do nothing
    }
  }

  handleSubMenuClick() {
    this.setState({
      dropdownVisibleBroadheads: false,
      dropdownVisibleAccessories: false,
      dropdownVisibleApparel: false
    });
  }

  render() {
    return (
    <header ref={(mainNav) => { this.mainNav = mainNav }}>
      { this.state.navWidth !== null ?
         this.state.navWidth > 940 ?
          <DesktopMainMenu
            cartItemsCount={this.state.cartItemsCount}
            handleDropdownClick={this.handleDropdownClick}
            handleSubMenuClick={this.handleSubMenuClick}
            dropdownVisibleBroadheads={this.state.dropdownVisibleBroadheads}
            dropdownVisibleAccessories={this.state.dropdownVisibleAccessories}
            dropdownVisibleApparel={this.state.dropdownVisibleApparel}
          />
         :
          <MobileMainMenu
            cartItemsCount={this.state.cartItemsCount}
          />
        : null
      }
    </header>
    );
  }

}

const mapStateToProps = ({ checkout }) => {
  return {
    checkout
  }
}

export default connect(mapStateToProps, { fetchCreateStoreCheckout: fetchCreateStoreCheckoutAction })(MainMenu);
