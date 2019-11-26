import React, { Component } from 'react';
import { connect } from 'react-redux';
import some from 'lodash/some';
import './assets/css/selection-ui.css'

import {
  fetchUpdateStoreCheckout as fetchUpdateStoreCheckoutAction,
  fetchAddStoreCheckout as fetchAddStoreCheckoutAction,
  getCheckoutProductTypes as getCheckoutProductTypesAction
} from './../utilities/store-checkout/actions';

import AddToCartModal from './../add-to-cart-modal/AddToCartModal';

class SelectionUI extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddProductToCart = this.handleAddProductToCart.bind(this);

    this.state = {
      Standard12: false,
      Standard34: false,
      DeepSix12: false,
      DeepSix34: false
    };

    this.Standard12VariantID;
    this.Standard34VariantID;
    this.DeepSix12VariantID;
    this.DeepSix34VariantID;

    // this.handleClick = this.handleClick.bind(this);

    this.lineItems = [
      // { variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjMwODQyOTc5OTUxNA==", quantity: parseInt(1, 10)}
    ];
  }

  handleInputChange(event) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => {
      let variantLineItem
      switch(name) {
          case 'Standard12':
                variantLineItem = { variantId: this.Standard12VariantID, quantity: parseInt(1, 10)};
                if (value) {
                  this.lineItems.push(variantLineItem);
                } else {
                  this.lineItems.pop(variantLineItem);
                }
              break;
          case 'Standard34':
                variantLineItem = { variantId: this.Standard34VariantID, quantity: parseInt(1, 10)};
                if (value) {
                  this.lineItems.push(variantLineItem);
                } else {
                  this.lineItems.pop(variantLineItem);
                }
              break;
          case 'DeepSix12':
                variantLineItem = { variantId: this.DeepSix12VariantID, quantity: parseInt(1, 10)};
                if (value) {
                  this.lineItems.push(variantLineItem);
                } else {
                  this.lineItems.pop(variantLineItem);
                }
              break;
          case 'DeepSix34':
                variantLineItem = { variantId: this.DeepSix34VariantID, quantity: parseInt(1, 10)};
                if (value) {
                  this.lineItems.push(variantLineItem);
                } else {
                  this.lineItems.pop(variantLineItem);
                }
              break;
          default:
              //do nothing
      }
    });
  }

  handleAddProductToCart() {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    // console.log('click add to cart')
    this.props.fetchAddStoreCheckout(this.props.checkout.id, this.lineItems);
    // this.props.fetchUpdateStoreCheckout(this.props.checkout.id, this.lineItems)

    this.showModal(this.props.title, this.props.image);
  }


  render() {

    const splitter = (variantsArray, title) => {
      let variantID
      variantsArray.map((variant) => {
        if(variant.node.title === title) {
          variantID = variant.node.id
        }
      })
      return variantID
    };

    const addVariantIdsToCheckboxes = (variants) => {
      this.Standard12VariantID = splitter(variants, '1/2" / Standard');
      this.Standard34VariantID = splitter(variants, '3/4" / Standard');
      this.DeepSix12VariantID = splitter(variants, '1/2" / Deep Six');
      this.DeepSix34VariantID = splitter(variants, '3/4" / Deep Six');
    };

    const testIfVariantsExist = (variants) => {
      if (variants) {
        addVariantIdsToCheckboxes(variants);
      }
    };

    return (
      <div className="selection-ui">
        {testIfVariantsExist(this.props.variants)}
        <h3>Buy A 3-Pack Legend {this.props.grains} Grains Broadhead &amp; FREE armory case</h3>
          <div>
            <dl>
              <dt>Standard</dt>

              <dd>
                <input
                  name="Standard12"
                  type="checkbox"
                  checked={this.state.Standard12}
                  onChange={this.handleInputChange}
                  value={this.Standard12VariantID}
                />
                <label>{this.props.grains} Grains and 1/2" Bleeder</label>
              </dd>

              <dd>
                <input
                  name="Standard34"
                  type="checkbox"
                  checked={this.state.Standard34}
                  onChange={this.handleInputChange}
                  value={this.Standard34VariantID}
                />
                <label>{this.props.grains} Grains and 3/4" Bleeder</label>
              </dd>
            </dl>
            <dl>
              <dt>Deep Six</dt>
              <dd>
                <input
                  name="DeepSix12"
                  type="checkbox"
                  checked={this.state.DeepSix12}
                  onChange={this.handleInputChange}
                  value={this.DeepSix12VariantID}
                />
                <label>{this.props.grains} Grains and 1/2" Bleeder</label>
              </dd>
              <dd>
                <input
                  name="DeepSix34"
                  type="checkbox"
                  checked={this.state.DeepSix34}
                  onChange={this.handleInputChange}
                  value={this.DeepSix34VariantID}
                />
                <label>{this.props.grains} Grains and 3/4" Bleeder</label>
              </dd>
            </dl>
          </div>

          <div>
            <button onClick={this.state.Standard12 || this.state.Standard34 || this.state.DeepSix12 || this.state.DeepSix34 ? this.handleAddProductToCart : null}>Add to cart</button>
            <p className="promo-notice">Use Discount Code on Checkout: ARMORY</p>
          </div>

          <AddToCartModal
            showModal={showModal => this.showModal = showModal}
          />
      </div>
    );
  }
}


const mapStateToProps = ({ checkout }) => {
  return {
    checkout
  }
}

export default connect(mapStateToProps, {fetchUpdateStoreCheckout: fetchUpdateStoreCheckoutAction, fetchAddStoreCheckout: fetchAddStoreCheckoutAction, getCheckoutProductTypes: getCheckoutProductTypesAction })(SelectionUI);
