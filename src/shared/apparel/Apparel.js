import React, { Component } from 'react';
import { connect } from 'react-redux';

import './assets/css/apparel.css';

import { fetchAddStoreCheckout as fetchAddStoreCheckoutAction } from './../utilities/store-checkout/actions';

import AddToCartModal from './../add-to-cart-modal/AddToCartModal';

class Apparel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedVariantTee: {
        title: "Solid Performance Tee",
        image: "https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Tee-logo_1024x1024.png?v=1534277104",
        variantId: null
      },
      selectedVariantHoodie:{
        title: "Solid Hoodie",
        image: "https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Hoodie-logo_1024x1024.png?v=1534272549",
        variantId: null
      }
    }

    this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
    this.handleOptionChangeSolidPerformanceTee = this.handleOptionChangeSolidPerformanceTee.bind(this);
    this.handleOptionChangeSolidHoodie = this.handleOptionChangeSolidHoodie.bind(this);

    this.solidPerformanceTeeVariants = [
      {size: "S", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA3NjM4MjI5OA=="},
      {size: "M", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA3NjQxNTA2Ng=="},
      {size: "L", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA3NjQ0NzgzNA=="},
      {size: "XL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA3NjQ4MDYwMg=="},
      {size: "XXL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA3NjUxMzM3MA=="},
      {size: "XXXL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA3NjU0NjEzOA=="},
    ];

    this.solidHoodieVariants = [
      {size: "S", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA4NDQ0MzIyNg=="},
      {size: "M", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA4NDUwODc2Mg=="},
      {size: "L", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA4NDU3NDI5OA=="},
      {size: "XL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA4NDYzOTgzNA=="},
      {size: "XXL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA4NDcwNTM3MA=="},
      {size: "XXXL", id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjM1MjA4NDczODEzOA=="},
    ];

  }

  componentWillMount() {
    this.setState(prevState => ({
        selectedVariantTee: {
          ...prevState.selectedVariantTee,
          variantId: this.solidPerformanceTeeVariants[0].id
        },
        selectedVariantHoodie: {
          ...prevState.selectedVariantHoodie,
          variantId: this.solidHoodieVariants[0].id
        }
    }));
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

  handleOptionChangeSolidHoodie(event) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const id = event.target.value;
    this.setState(prevState => ({
        selectedVariantHoodie: {
          ...prevState.selectedVariantHoodie,
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

    const selectSolidHoodie = () => {
      return (
        <fieldset>
          <label>Size</label>
          <select value={this.state.selectedVariantHoodie.variantId} onChange={this.handleOptionChangeSolidHoodie}>
            { this.solidHoodieVariants.map((variant) => {
              return <option value={variant.id}>{variant.size}</option>
            })}
          </select>
        </fieldset>
      )
    }

    return (
      <div className="apparel">
        <h1>Apparel</h1>
        <article>
          <header>
            <h1>Solid Performance Tee</h1>
          </header>
          <img src="https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Tee-logo_1024x1024.png?v=1534277104" />
          {selectSolidPerformanceTee()}
          <button onClick={() => this.handleAddProductToCart(this.state.selectedVariantTee)}>Add To Cart</button>
          <p>When you buy Solid, you know that you're buying craftsmanship. We think of craftsmanship as our obligation and responsibility.</p>
          <p>Our apparel is no different. </p>
          <p>The grey finishes represent how our broadheads are made from the highest-quality steel and sharpened by hand.</p>
          <ul>
            <li>100% cotton</li>
            <li>Machine wash cold</li>
            <li>Only non-chlorine bleach</li>
            <li>Tumble dry low</li>
            <li>Do not iron decoration</li>
          </ul>
        </article>
        <article>
          <header>
            <h1>Solid Hoodie</h1>
          </header>
          <img src="https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Hoodie-logo_1024x1024.png?v=1534272549" />
          {selectSolidHoodie()}
          <button onClick={() => this.handleAddProductToCart(this.state.selectedVariantHoodie)}>Add To Cart</button>
          <p>When you buy Solid, you know that you're buying craftsmanship. We think of craftsmanship as our obligation and responsibility.</p>
          <p>This hoodie is the hallmark of our commitment to quality.</p>
          <p>The grey finishes represent how our broadheads are made from the highest-quality steel and sharpened by hand.</p>
          <ul>
            <li>100% Polyester</li>
            <li>Machine wash cold with like colors</li>
            <li>Do not use bleach</li>
            <li>Tumble dry low</li>
            <li>Do not iron</li>
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

export default connect(mapStateToProps, {fetchAddStoreCheckout: fetchAddStoreCheckoutAction})(Apparel);
