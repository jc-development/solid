import React, { Component } from 'react';
import { connect } from 'react-redux';
import './assets/css/bold-apparel-item.css';

import { fetchAddStoreCheckout as fetchAddStoreCheckoutAction } from './../utilities/store-checkout/actions';

import AddToCartModal from './../add-to-cart-modal/AddToCartModal';

class BoldApparelItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedVariantTee: {
        title: "Solid Hoodie",
        image: "https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Hoodie-logo_1024x1024.png?v=1534272549",
        variantId: null
      }
    }

    this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
    this.handleOptionChangeSolidPerformanceTee = this.handleOptionChangeSolidPerformanceTee.bind(this);

    this.solidPerformanceTeeVariants = [
      {size: "S", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYxNTQ3NjYzNzc4Ng=="},
      {size: "M", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYxNTQ3NjY3MDU1NA=="},
      {size: "L", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYxNTQ3NjcwMzMyMg=="},
      {size: "XL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYxNTQ3NjczNjA5MA=="},
      {size: "XXL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYxNTQ3Njc2ODg1OA=="},
      {size: "XXXL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYxNTQ3NjgwMTYyNg=="},
    ];

  }

  componentWillMount() {
    this.setState(prevState => ({
        selectedVariantTee: {
          ...prevState.selectedVariantTee,
          variantId: this.solidPerformanceTeeVariants[2].id
        }
      })
    );
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

  handleOptionChangeSolidPerformanceTee(event) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const id = event.target.value;
    this.setState(prevState => ({
        selectedVariantTee: {
          ...prevState.selectedVariantTee,
          variantId: id
        }
    }));
  }

  render() {
    const selectSolidPerformanceTee = () => {
      return (
        <fieldset>
          <label>Size</label>
          <select value={this.state.selectedVariantTee.variantId} onChange={this.handleOptionChangeSolidPerformanceTee}>
            { this.solidPerformanceTeeVariants.map((variant) => {
              return <option value={variant.id}>{variant.size}</option>
            })}
          </select>
        </fieldset>
      )
    }

    return (
      <div id="bold-apparel" className="apparel">
          <article>
            <header>
              <h7>GET YOUR DISCOUNTED<br />Solid Hoodie</h7>
            </header>
            <p>now only $22.50 with legend series broadhead pack purchase and armory case</p>
            <img src="https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Hoodie-logo_1024x1024.png?v=1534272549" />
            {selectSolidPerformanceTee()}
            <button onClick={() => this.handleAddProductToCart(this.state.selectedVariantTee)}>Add My Shirt<br />To Cart</button>
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

export default connect(mapStateToProps, {fetchAddStoreCheckout: fetchAddStoreCheckoutAction})(BoldApparelItem);
