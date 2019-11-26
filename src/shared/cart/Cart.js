import React, { Component } from 'react';
import { connect } from 'react-redux'
import _find from 'lodash/find'
import _filter from 'lodash/filter'
import _reduce from 'lodash/reduce'
import _includes from 'lodash/includes'

import CartItem from './CartItem'
import KlarnaImage from './assets/images/klarna-logo.png';

import {
  fetchUpdateStoreCheckout as fetchUpdateStoreCheckoutAction,
  fetchRemoveStoreCheckout as fetchRemoveStoreCheckoutAction
} from './../utilities/store-checkout/actions';


import './assets/css/cart.css';

class Cart extends Component {

  constructor(props) {
  super(props)

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.removeLineItemFromCart = this.removeLineItemFromCart.bind(this);
    this.openCheckout = this.openCheckout.bind(this);

    this.state = {
      showPromo: false
    }

  }

  decrementQuantity(checkoutId, lineItemId, quantity) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const updatedQuantity = quantity - 1
    const lineItems = [{id: lineItemId, quantity: parseInt(updatedQuantity, 10)}];
    this.props.fetchUpdateStoreCheckout(checkoutId, lineItems)
  }

  incrementQuantity(checkoutId, lineItemId, quantity) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const updatedQuantity = quantity + 1
    const lineItems = [{id: lineItemId, quantity: parseInt(updatedQuantity, 10)}];
    this.props.fetchUpdateStoreCheckout(checkoutId, lineItems)
  }

  removeLineItemFromCart(checkoutId, lineItemId) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    // console.log('lineItemId:: : ', lineItemId);
    const lineItemIds = [lineItemId]
    this.props.fetchRemoveStoreCheckout(checkoutId, lineItemIds)
  }

  openCheckout() {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    if (this.props.checkout.lineItems.edges.length > 0) {
      window.open(this.props.checkout.webUrl);
    } else {
      alert('Please Add Items to Your Cart.')
    }
  }

  render () {

    // let cartItemsQuantities = {};
    //
    // const organizeCartItems = () => {
    //   if (this.props.checkout.lineItems) {
    //     this.props.checkout.lineItems.edges.forEach(lineItem => {
    //       if (cartItemsQuantities.hasOwnProperty(lineItem.node.variant.product.productType) ) {
    //         cartItemsQuantities[lineItem.node.variant.product.productType].push({[`${lineItem.node.variant.product.handle}`]: lineItem.node.quantity})
    //       } else {
    //         cartItemsQuantities[lineItem.node.variant.product.productType] = []
    //         cartItemsQuantities[lineItem.node.variant.product.productType].push({[`${lineItem.node.variant.product.handle}`]: lineItem.node.quantity})
    //       }
    //     });
    //   }
    // }

    // const findHiddenProductPromo = () => {
    //   if (this.props.checkout.lineItems) {
    //
    //     const legendBroadheadsTotal = _reduce(cartItemsQuantities.Broadhead, (broadheads, broadhead) => {
    //            for(let data in broadhead) {
    //              if (_includes(data, 'legend')) {
    //                return broadheads + broadhead[data]
    //              } else {
    //                return broadheads
    //              }
    //            }
    //     }, 0);
    //
    //     if (!cartItemsQuantities.Broadhead || legendBroadheadsTotal < 1) {
    //       let promoProductNode = _find(this.props.checkout.lineItems.edges,
    //         (lineItem) => {
    //           // console.log('lineItem: ', lineItem);
    //           if (lineItem.node.variant.product.productType === "DISCOUNT_HIDDEN_PRODUCT") {
    //             return lineItem;
    //           }
    //       });
    //       // console.log('promoProductNode: ', promoProductNode);
    //
    //       if (promoProductNode) {
    //         let promoID = promoProductNode.node.id;
    //         this.removeLineItemFromCart(this.props.checkout.id, promoID);
    //       }
    //
    //     }
    //     // else if (cartItemsQuantities.Broadhead >= 2 && cartItemsQuantities.DISCOUNT_HIDDEN_PRODUCT !== 1)  {
    //     //   // there are 2 or more broadheads, and no hidden shirt, render the shirt to add
    //     //   console.log('show the shirt');
    //     //
    //     // }
    //     else {
    //       console.log('findHiddenProductPromo catch all');
    //       return;
    //     }
    //   }
    // }

    let itemNodes;
    if (this.props.checkout.lineItems.edges.length > 0) {
       itemNodes = this.props.checkout.lineItems.edges.map( (line_item, i) => {
        return (
          <CartItem
          key={i}
          line_item={line_item.node}
          decrementQuantity={this.decrementQuantity}
          incrementQuantity={this.incrementQuantity}
          removeLineItemFromCart={this.removeLineItemFromCart}
          checkout={this.props.checkout.id}
        />
        )
       })
     }


    return (
      <section id="cart" className='width-85 center-content'>
        {/* { organizeCartItems() } */}
        {/* { findHiddenProductPromo() } */}

        <h1>Shopping Cart</h1>
        <div className="cart-content-wrapper">
            <div id="mobile-top-checkout" className='cart-right'>
              <h5 className='total-price'><span>Total:</span> ${this.props.checkout.subtotalPrice}</h5>
              <button role='button' onClick={this.openCheckout}>CHECKOUT</button>
              <div id="klarna-reminder">
                <h6>Financing Available on Checkout through</h6>
                <img src={KlarnaImage} />
              </div>
            </div>

          { this.props.checkout.lineItems.edges.length > 0
            ?
            (
              <div className="inner">
                <div className='cart-left'>
                  {itemNodes}
                </div>

                <div className='cart-right'>
                  <h5 className='total-price'><span>Total:</span> ${this.props.checkout.subtotalPrice}</h5>
                  <button role='button' onClick={this.openCheckout}>CHECKOUT</button>
                  <div id="klarna-reminder">
                    <h6>Financing Available on Checkout through</h6>
                    <img src={KlarnaImage} />
                  </div>
                </div>
              </div>
            )
            :
            null
          }
        </div>
      </section>
    )
  }
}


const mapStateToProps = ({ checkout }) => {
  return {
    checkout
  }
}

export default connect(mapStateToProps, { fetchUpdateStoreCheckout: fetchUpdateStoreCheckoutAction, fetchRemoveStoreCheckout: fetchRemoveStoreCheckoutAction })(Cart);
