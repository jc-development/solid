import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _reduce from 'lodash/reduce'
import _includes from 'lodash/includes'

// import BoldApparelItem from '../apparel/BoldApparelItem';
// import BoldAccessoryItem from '../accessories/BoldAccessoryItem';

import {
  fetchUpdateStoreCheckout as fetchUpdateStoreCheckoutAction,
} from './../utilities/store-checkout/actions';

import './assets/css/add-to-cart-modal.css';

class AddToCartModal extends Component {

  constructor(props) {
  super(props);

    this.state = {
      showModal: false,
      title: null,
      image: null
    }

    this.handleModalShow = this.handleModalShow.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

  }

  handleModalShow(title, image) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    this.setState({
      showModal: true,
      title: title,
      image: image
    })
  }

  handleModalClose() {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    this.setState({
      showModal: false,
      title: null,
      image: null
    })
  }

  componentDidMount() {
    this.props.showModal(this.handleModalShow);
  }

  render () {
    // let cartItemsQuantities = {};
    // if (this.props.checkout.lineItems) {
    //   this.props.checkout.lineItems.edges.forEach(lineItem => {
    //     if (cartItemsQuantities.hasOwnProperty(lineItem.node.variant.product.productType) ) {
    //       cartItemsQuantities[lineItem.node.variant.product.productType].push({[`${lineItem.node.variant.product.handle}`]: lineItem.node.quantity})
    //     } else {
    //       cartItemsQuantities[lineItem.node.variant.product.productType] = []
    //       cartItemsQuantities[lineItem.node.variant.product.productType].push({[`${lineItem.node.variant.product.handle}`]: lineItem.node.quantity})
    //     }
    //   });
    // }

    // console.log('cartItemsQuantities: ', cartItemsQuantities)

    // const showPromoItem = () => {
    //   const legendBroadheadsTotal = _reduce(cartItemsQuantities.Broadhead, (broadheads, broadhead) => {
    //          for(let data in broadhead) {
    //            if (_includes(data, 'legend')) {
    //              return broadheads + broadhead[data]
    //            } else {
    //              return broadheads
    //            }
    //          }
    //   }, 0);
    //
    //   const discountDcapTotal = _reduce(cartItemsQuantities.DISCOUNT_HIDDEN_PRODUCT, (hiddenProduct, product) => {
    //       for(let data in product) {
    //         if (data === 'turkey-d-cap-broadhead-1') {
    //           return hiddenProduct + product[data]
    //         } else {
    //           return product
    //         }
    //       }
    //   }, 0);
    //
    //   if (legendBroadheadsTotal >= 1 && discountDcapTotal !== 1) {
    //     return (
    //       <BoldAccessoryItem
    //         handleClose={this.handleModalClose}
    //       />
    //     );
    //   } else {
    //     return null;
    //   }
    // }

    if (this.state.showModal) {
      return (
        <div className='hidden-modal'>
          <div className='notify'>
            <div className="added-cart-item">
              <img src={this.state.image} alt={'Solid Broadheads - ' + this.state.title} />
              <h5>{this.state.title}</h5>
              <p>Added to your shopping cart</p>
              <button onClick={this.handleModalClose}>Continue Shopping</button>
              <Link role="button" to='/cart'><button>Go To Shopping Cart</button></Link>
            </div>

            {/* { showPromoItem() } */}

          </div>
        </div>
      )
    } else {
      return null
    }

  }
}

const mapStateToProps = ({ checkout }) => {
  return {
    checkout
  }
}
export default connect(mapStateToProps, { fetchUpdateStoreCheckout: fetchUpdateStoreCheckoutAction })(AddToCartModal);
