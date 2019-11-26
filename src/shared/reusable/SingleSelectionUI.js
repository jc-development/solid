import React, {Component} from 'react';
import {connect} from 'react-redux';
import some from 'lodash/some';
import './assets/css/selection-ui.css'

import {fetchAddStoreCheckout as fetchAddStoreCheckoutAction} from './../utilities/store-checkout/actions';

import AddToCartModal from './../add-to-cart-modal/AddToCartModal';

class SingleSelectionUI extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddProductToCart = this.handleAddProductToCart.bind(this);

    this.state = {
      selectedVariantDCap: {
        title: "DCAP Turkey Series 200 Grains Broadhead",
        image: "https://cdn.shopify.com/s/files/1/1123/4878/products/product-fam-turkey-dcap_500x.png?v=1455552291",
        variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNzEwNDI5Mjc0OA=="
      }
    };

    // this.handleClick = this.handleClick.bind(this);

    this.lineItems = [
      {
        variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjMwODQyOTc5OTUxNA==",
        quantity: parseInt(1, 10)
      }
    ];
  }

  handleInputChange(event) {
    if (process.env.IS_BROWSER)
      window.ga('send', 'event', 'Page Interaction', 'click');
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => {
      let variantLineItem
      variantLineItem = {
        variantId: this.Standard12VariantID,
        quantity: parseInt(1, 10)
      };
      if (value) {
        this.lineItems.push(variantLineItem);
      } else {
        this.lineItems.pop(variantLineItem);
      }
    });
  }

  handleAddProductToCart(variant) {

    // console.log('this.state SingleSelectionUI: ', this.state);

    if (process.env.IS_BROWSER)
      window.ga('send', 'event', 'Page Interaction', 'click');
    const checkoutId = this.props.checkout.id;
    const lineItems = {
      variantId: variant.variantId,
      quantity: parseInt(1, 10)
    };
    // console.log('click add to cart: ' + checkoutId + lineItems)
    this.props.fetchAddStoreCheckout(checkoutId, lineItems)

    const title = this.state.selectedVariantDCap.title;
    const image = this.state.selectedVariantDCap.image; // this.props.image;
    this.showModal(title, image);
  }

  // handleClick(event) {
  //   const target = event.target.querySelector('input');
  //
  //   console.log('target: ', target);
  // }

  render() {

    // console.log('this.props SingleSelectionUI: ', this.props);

    return (<div className="selection-ui">
      <article>
        <img src={this.props.image} />
          <h3>Buy a 2-Pack Turkey DCAP Broadhead</h3>
        <button onClick={() => this.handleAddProductToCart(this.state.selectedVariantDCap)}>Add To Cart</button>
      </article>
      <AddToCartModal showModal={showModal => this.showModal = showModal}/>
    </div>);
  }
}

const mapStateToProps = ({checkout}) => {
  return {checkout}
}

export default connect(mapStateToProps, {fetchAddStoreCheckout: fetchAddStoreCheckoutAction})(SingleSelectionUI);
