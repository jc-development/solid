import React, {Component} from 'react';
import {connect} from 'react-redux';
import some from 'lodash/some';
import './assets/css/selection-ui.css'

import {fetchUpdateStoreCheckout as fetchUpdateStoreCheckoutAction, fetchAddStoreCheckout as fetchAddStoreCheckoutAction} from './../utilities/store-checkout/actions';

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

    this.Standard12Variant = {
      availableForSale: true
    };
    this.Standard34Variant = {
      availableForSale: true
    };
    this.DeepSix12Variant = {
      availableForSale: true
    };
    this.DeepSix34Variant = {
      availableForSale: true
    };

    // this.handleClick = this.handleClick.bind(this);

    this.lineItems = [];
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
      switch (name) {
        case 'Standard12':
          variantLineItem = {
            variantId: this.Standard12Variant.id,
            quantity: parseInt(1, 10)
          };
          if (value) {
            this.lineItems.push(variantLineItem);
          } else {
            this.lineItems.pop(variantLineItem);
          }
          break;
        case 'Standard34':
          variantLineItem = {
            variantId: this.Standard34Variant.id,
            quantity: parseInt(1, 10)
          };
          if (value) {
            this.lineItems.push(variantLineItem);
          } else {
            this.lineItems.pop(variantLineItem);
          }
          break;
        case 'DeepSix12':
          variantLineItem = {
            variantId: this.DeepSix12Variant.id,
            quantity: parseInt(1, 10)
          };
          if (value) {
            this.lineItems.push(variantLineItem);
          } else {
            this.lineItems.pop(variantLineItem);
          }
          break;
        case 'DeepSix34':
          variantLineItem = {
            variantId: this.DeepSix34Variant.id,
            quantity: parseInt(1, 10)
          };
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
    if (process.env.IS_BROWSER)
      window.ga('send', 'event', 'Page Interaction', 'click');

    // console.log('click add to cart')
    this.props.fetchAddStoreCheckout(this.props.checkout.id, this.lineItems);
    // this.props.fetchUpdateStoreCheckout(this.props.checkout.id, this.lineItems)

    this.showModal(this.props.title, this.props.image);
  }

  render() {

    const splitter = (variantsArray, title) => {
      let variantNode
      variantsArray.map((variant) => {
        if (variant.node.title === title) {
          variantNode = variant.node
        }
      })
      return variantNode
    };

    const addVariantIdsToCheckboxes = (variants) => {
      this.Standard12Variant = splitter(variants, '1/2" / Standard');
      this.Standard34Variant = splitter(variants, '3/4" / Standard');
      this.DeepSix12Variant = splitter(variants, '1/2" / Deep Six');
      this.DeepSix34Variant = splitter(variants, '3/4" / Deep Six');
    };

    const testIfVariantsExist = (variants) => {
      if (variants) {
        addVariantIdsToCheckboxes(variants);
      }
    };

    const showStandardVariants = () => {
       if (this.Standard12Variant && this.Standard34Variant) {
         return (
           <dl>
             <dt>Standard</dt>
             {this.Standard12Variant.availableForSale ?
               <dd>
                 <input name="Standard12" type="checkbox" checked={this.state.Standard12} onChange={this.handleInputChange} value={this.Standard12Variant.id}/>
                 <label>{this.props.grains} Grains and 1/2" Bleeder</label>
               </dd>
             :
               <dd>
                 <input name="Standard12" type="checkbox" disabled />
                 <label> 1/2" Bleeder</label>
                 <span className="out-of-stock">Out Of Stock</span>
               </dd>
             }
             {this.Standard34Variant.availableForSale ?
               <dd>
                 <input name="Standard34" type="checkbox" checked={this.state.Standard34} onChange={this.handleInputChange} value={this.Standard34Variant.id}/>
                 <label>{this.props.grains} Grains and 3/4" Bleeder</label>
               </dd>
             :
               <dd>
                 <input name="Standard34" type="checkbox" disabled />
                 <label> 3/4" Bleeder</label>
                 <span className="out-of-stock">Out Of Stock</span>
               </dd>
             }
           </dl>
         )
       }
    }
    const showDeepSixVariants = () => {
       if (this.DeepSix12Variant && this.DeepSix34Variant) {
         return (
           <dl>
             <dt>Deep Six</dt>
             {this.DeepSix12Variant.availableForSale ?
               <dd>
                 <input name="DeepSix12" type="checkbox" checked={this.state.DeepSix12} onChange={this.handleInputChange} value={this.DeepSix12Variant.id}/>
                 <label>{this.props.grains} Grains and 1/2" Bleeder</label>
               </dd>
             :
               <dd>
                 <input name="DeepSix12" type="checkbox" disabled />
                 <label> 1/2" Bleeder</label>
                 <span className="out-of-stock">Out Of Stock</span>
               </dd>
             }
             {this.DeepSix34Variant.availableForSale ?
               <dd>
                 <input name="DeepSix34" type="checkbox" checked={this.state.DeepSix34} onChange={this.handleInputChange} value={this.DeepSix34Variant.id}/>
                 <label>{this.props.grains} Grains and 3/4" Bleeder</label>
               </dd>
             :
               <dd>
                 <input name="DeepSix34" type="checkbox" disabled />
                 <label> 3/4" Bleeder</label>
                 <span className="out-of-stock">Out Of Stock</span>
               </dd>
             }
           </dl>
         )
       }
    }

    return (<div className="selection-ui">
      {testIfVariantsExist(this.props.variants)}
      <img src={this.props.image} />
      <h3>Buy A 3-Pack Legend {this.props.grains} Grains Broadhead</h3>
      <div>
        {showStandardVariants()}
        {showDeepSixVariants()}
      </div>

      <div>
        <button onClick={this.state.Standard12 || this.state.Standard34 || this.state.DeepSix12 || this.state.DeepSix34
            ? this.handleAddProductToCart
            : null}>Add to cart</button>
      </div>

      <AddToCartModal showModal={showModal => this.showModal = showModal}/>
    </div>);
  }
}

const mapStateToProps = ({checkout}) => {
  return {checkout}
}

export default connect(mapStateToProps, {
  fetchUpdateStoreCheckout: fetchUpdateStoreCheckoutAction,
  fetchAddStoreCheckout: fetchAddStoreCheckoutAction,
})(SelectionUI);
