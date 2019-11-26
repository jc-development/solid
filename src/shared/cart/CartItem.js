import React, { Component } from 'react';

export default class CartItem extends Component {

  render () {

    // console.log('this.props...productType: ', this.props.line_item.variant.product.productType);

    const decrementQuantity = this.props.decrementQuantity
    const incrementQuantity = this.props.incrementQuantity
    const removeLineItemFromCart = this.props.removeLineItemFromCart

    let selectedOptions;
    if (this.props.line_item.variant.selectedOptions !== undefined) {
      selectedOptions = this.props.line_item.variant.selectedOptions.map((option, i) => {
        return <p key={i} className="cart-item-options">{option.name + ': ' + option.value}</p>
      })
    }
    let customAttributes;
    if (this.props.line_item.customAttributes !== undefined) {
      customAttributes = this.props.line_item.customAttributes.map((custom, i) => {
        return <p key={i} className="">{custom.key+':'}<br></br>{custom.value}</p>
      })
    }

    const testIfPromoProduct = () => {
      if (this.props.line_item.variant.product.productType !== "DISCOUNT_HIDDEN_PRODUCT") {
        return (
          <ul className='cart-item-data'>
            <li className="cart-item-data-quantity-container">
              <h6>Quantity:</h6>
              <div className="cart-item-data-quantity">
              {this.props.line_item.variant.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC84MTUxOTgzMzkwOTM=" ? null : <button className="cart-item-quantity-decrease" onClick={() => decrementQuantity(this.props.checkout, this.props.line_item.id, this.props.line_item.quantity)}>-</button> }
              <span className="cart-item-quantity">{this.props.line_item.quantity}</span>
              {this.props.line_item.variant.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC84MTUxOTgzMzkwOTM=" ? null : <button className="cart-item-quantity-increase" onClick={() => incrementQuantity(this.props.checkout, this.props.line_item.id, this.props.line_item.quantity)}>+</button> }
              </div>
              <button className="cart-item-remove" onClick={() => removeLineItemFromCart(this.props.checkout, this.props.line_item.id)}>Remove</button>
            </li>
            <li className="cart-item-data-price-container">
              <h6>Price:</h6>
              <p>${ (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }</p>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className='cart-item-data'>
            <li className="cart-item-data-quantity-container">
              <h6>Quantity:</h6>
              <div className="cart-item-data-quantity">
              {/* {this.props.line_item.variant.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC84MTUxOTgzMzkwOTM=" ? null : <button className="cart-item-quantity-decrease" onClick={() => decrementQuantity(this.props.checkout, this.props.line_item.id, this.props.line_item.quantity)}>-</button> } */}
              <span className="cart-item-quantity">{this.props.line_item.quantity}</span>
              {/* {this.props.line_item.variant.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC84MTUxOTgzMzkwOTM=" ? null : <button className="cart-item-quantity-increase" onClick={() => incrementQuantity(this.props.checkout, this.props.line_item.id, this.props.line_item.quantity)}>+</button> } */}
              </div>
              <button className="cart-item-remove" onClick={() => removeLineItemFromCart(this.props.checkout, this.props.line_item.id)}>Remove</button>
            </li>
            <li className="cart-item-data-price-container">
              <h6>Price:</h6>
              <p>${ (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }</p>
            </li>
          </ul>
        );
      }
    };

    return (
      <div className='cart-item'>
          {this.props.line_item.variant.image !== null ? <img className='cart-image' src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`}/> : this.props.line_item.variant.product.images.edges.length > 0 ? <img className='cart-image' src={this.props.line_item.variant.product.images.edges[0].node.src} alt={`${this.props.line_item.title} product shot`}/> : null }
          <div>
            <h6 className='cart-item-title'>{this.props.line_item.title}</h6>
            {this.props.line_item.variant.title === 'Default Title' ? null : selectedOptions}
            {this.props.line_item.customAttributes !== undefined ? customAttributes : null}
          </div>
          { testIfPromoProduct() }
      </div>
      )
    }
}
