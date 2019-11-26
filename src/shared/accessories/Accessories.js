import React, { Component } from 'react';
import { connect } from 'react-redux';

import './assets/css/accessories.css';

import { fetchAddStoreCheckout as fetchAddStoreCheckoutAction } from './../utilities/store-checkout/actions';

import AddToCartModal from './../add-to-cart-modal/AddToCartModal';

class Accessories extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedVariantLeatherStrop: {
        title: "Leather Strop",
        image: "https://s3.amazonaws.com/solid-uploads/images/product-strop.png",
        variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTY5MzkwOTYzOA=="
      },
      selectedVariantArmoryCase:{
        title: "Solid Armory",
        image: "https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Broadhead_Box_OPEN_1024x1024.png",
        variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjMwODQyOTc5OTUxNA=="
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
    this.showModal(title, image);
  }

  render() {
    return (
      <div className="accessory">
        <article>
          <header>
            <h1>Leather Strop</h1>
          </header>
          <img src="https://s3.amazonaws.com/solid-uploads/images/product-strop.png" />
          <button onClick={() => this.handleAddProductToCart(this.state.selectedVariantLeatherStrop)}>Add To Cart</button>
          <p>Purchase The Highest Standard Of Quality</p>
          <ul>
            <li>Paddle-style leather strop</li>
            <li>Double-sided; start with suede side, fine tune with smooth, full-grain side</li>
            <li>Best results when used with honing compound</li>
          </ul>
        </article>
        <article>
          <header>
            <h1>Solid Armory</h1>
          </header>
          <img src="https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Broadhead_Box_OPEN_1024x1024.png" />
          <button onClick={() => this.handleAddProductToCart(this.state.selectedVariantArmoryCase)}>Add To Cart</button>
          <p>Protect your investment with the Solid Armory Broadhead Box. Whether you're heading out on the hunt of a lifetime or just down to your favorite stand. Keep your heads sharp and safe in the Armory.</p>
          <ul>
            <li>Specifically engineered to hold 5 Solid Broadheads - either 1/2 inch or 3/4 inch bleeder blades</li>
            <li>Formed foam inserts keep your broadheads firmly in place</li>
            <li>Rugged, durable case allows you to transport your broadheads safely</li>
            <li>Latch locks the Armory up tight - making sure your blades don't escape</li>
            <li>Fits many other brands and most mechanicals</li>
          </ul>
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

export default connect(mapStateToProps, {fetchAddStoreCheckout: fetchAddStoreCheckoutAction})(Accessories);
