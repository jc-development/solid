import React, { Component } from 'react';
import { connect } from 'react-redux';

import './assets/css/accessory.css';

import { fetchAddStoreCheckout as fetchAddStoreCheckoutAction } from './../utilities/store-checkout/actions';

import AddToCartModal from './../add-to-cart-modal/AddToCartModal';

class Accessory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedVariant:{
        title: "Turkey D-Cap Broadhead (Pack of 2)",
        image: "https://s3.amazonaws.com/solid-uploads/images/product-turkey-dcap.png",
        variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYzNDc0OTQ5NzQzNA=="
      }
    };

    this.handleAddProductToCart = this.handleAddProductToCart.bind(this);

  }

  handleAddProductToCart(variant) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const checkoutId = this.props.checkout.id;
    const lineItems= [{ variantId: variant.variantId, quantity: parseInt(1, 10)}]
    this.props.fetchAddStoreCheckout(checkoutId, lineItems);

    const title = variant.title;
    const image = variant.image;
    // this.showModal(title, image);
    // redirect to cart via react-router or history so don't lose free shirt cart item
    this.props.handleClose();

  }

  render() {
    return (
      <div className="accessory">
        <article>
          <header>
            <h7>GET YOUR 50% Off <br/> Turkey D-Cap Broadhead (Pack of 2)</h7>
          </header>
          <p>Now only $32.50 when you buy a pack of Solid legend series broadheads</p>
          <img src="https://s3.amazonaws.com/solid-uploads/images/product-turkey-dcap.png" />
          <button onClick={() => this.handleAddProductToCart(this.state.selectedVariant)}>Add To Cart</button>
        </article>
        <AddToCartModal showModal={showModal => this.showModal = showModal} />
      </div>
    )
  }
}

const mapStateToProps = ({ checkout }) => {
  return {
    checkout
  }
};

export default connect(mapStateToProps, {fetchAddStoreCheckout: fetchAddStoreCheckoutAction})(Accessory);
