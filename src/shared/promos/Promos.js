import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BroadheadCase } from '../reusable/BroadheadCase';

import './assets/css/promos.css';

import { fetchProducts as fetchProductsAction } from './../utilities/store-products/actions';

class Promos extends Component {

  constructor(props) {
    super(props);

    this.legend100;
    this.legend125;
    this.legend175;
    this.dcap
  }

  componentWillMount() {
    if (this.props.products.length < 1) {
      this.props.fetchProducts();
    }
  }

  render() {

    const splitter = (productsArray, productHandle) => {
      let variants
      productsArray.map((product) => {
        if(product.node.handle === productHandle) {
          variants = product.node.variants.edges
        }
      })
      return variants
    };

    const splitProductsfromArray = (products) => {
      this.legend100 = splitter(products, "legend-100-grain-broadhead");
      this.legend125 = splitter(products, "legend-125-grain-broadhead");
      this.legend175 = splitter(products, "legend-dangerous-game");
      this.dcap = splitter(products, "turkey-d-cap-broadhead");
    };

    const testIfProductsExist = (products) => {
      if (products) {
        splitProductsfromArray(products);
      }
    };

    return (
      <section className="promos">
        {testIfProductsExist(this.props.products)}
        <article>
          <header>
            <h1>BUY SOLID LEGEND SERIES BROADHEADS</h1>
          </header>

          {/* <BroadheadCase
            broadheadImg={"https://s3.amazonaws.com/solid-uploads/images/product-turkey-dcap.png"}
            grains={"200"}
            variants={this.dcap}
          /> */}

          <BroadheadCase
            broadheadImg={"https://s3.amazonaws.com/solid-uploads/images/product-legend-100-std.png"}
            grains={"100"}
            variants={this.legend100}
          />

          <BroadheadCase
            broadheadImg={"https://s3.amazonaws.com/solid-uploads/images/product-legend-125-std.png"}
            grains={"125"}
            variants={this.legend125}
          />

          <BroadheadCase
            broadheadImg={"https://s3.amazonaws.com/solid-uploads/images/product-legend-dg-std.png"}
            grains={"175"}
            variants={this.legend175}
          />

        </article>
      </section>
    );
  }
}

const mapStateToProps = ( { products } ) => {
  return {
    products
  };
};

export default connect(mapStateToProps, { fetchProducts: fetchProductsAction })(Promos);
