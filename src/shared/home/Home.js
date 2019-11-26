import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SectionArticle } from './../reusable/SectionArticle';
import { SectionArticleVideo } from './../reusable/SectionArticleVideo';

import legend100GImgSrc from './assets/images/legend-100-g.jpg';
import legend125GImgSrc from './assets/images/legend-125-g.jpg';
import legend175GImgSrc from './assets/images/legend-175-g.jpg';

import legendLogoSrc from './assets/images/legend-logo.jpg';
import legendDGLogoSrc from './assets/images/legend-dg-logo.jpg';


import { connect } from 'react-redux';
import { fetchProducts as fetchProductsAction } from './../utilities/store-products/actions';

import './assets/css/home.css';


class Home extends Component {

  constructor(props) {
    super(props);

    this.legend100;
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
    };

    const testIfProductsExist = (products) => {
      if (products) {
        splitProductsfromArray(products);
      }
    };

    const styleBFCMBanner = {
      width: '100%'
    }

    return (
      <section>
        {testIfProductsExist(this.props.products)}
        <Link to="/promos">
          <div className="hero-pitch">
            <h7>Click to BUY SOLID LEGEND SERIES BROADHEADS</h7>
          </div>
        </Link>

        <a href="https://info.solid-broadheads.com/solid-devastation-gallery" target="_blank">
          <div className="hero-promo">
            <h7>Solid Broadhead users know the devastating power of hand-sharpened, S30V steel. Click to share your devastation with the world!</h7>
          </div>
        </a>

        <article className="company-header">
          <header>
            <h1>Quality Craftsmanship &amp; Performance Defined</h1>
            <h3>The Solid Broadhead Company</h3>
            <p>A BOW AND ARROW IS NOT A RIFLE. IT'S MUCH MORE. BUT ONLY IF YOU HAVE A SOLID BROADHEAD.</p>
          </header>
        </article>

        <article className="center-bold-copy">
          <header>
            <img src={legendLogoSrc} className="support-image"/>
            <h4>Solid Broadheads are the best broadheads that will perform every time, in every condition, on every animal</h4>
            <img src={legendDGLogoSrc} className="support-image"/>
          </header>
        </article>

        {this.legend100 ?
          <SectionArticleVideo
            title={"Solid Legend Series 100 Grains"}
            header={"Solid Broadheads are made with S30V stainless steel. This material is selected for its ability to hold an edge, and that it’s tough-as-nails in the field"}
            introP={"Buy a 3 PACK Legend Series 100 Grains and GET a free ARMORY CASE. USE CODE on checkout: LOREM"}
            p={"Solid broadheads are made from the same stainless S30V steel that premium knife manufacturers choose for their blades."}
            buttonHeader={"Solid resists corrosion from the elements"}
            button={"BUY NOW"}
            imgBg={legend100GImgSrc}
            learnMore={"/broadheads/legend-100-grain-broadhead"}
            name={"Solid Legend 100G"}
            broadheadImg={"https://s3.amazonaws.com/solid-uploads/images/product-legend-100-std.png"}
            linkToProductPage={"/broadheads/legend-100-grain-broadhead"}
            grains={"100"}
            // variants={this.legend100}
          /> :
          null
        }

        <SectionArticle
          title={"Solid Legend Series 125 Grains"}
          header={"When you’re hunting bigger, tougher game, you want the unmatched confidence that comes from having a larger cutting area"}
          introP={"Buy a 3 PACK Legend Series 125 Grains and GET a Free ARMORY CASE. USE CODE on checkout: LOREM"}
          p={"Solid Broadhead 175G has more than 5” of cutting edge with a 1/2” bleeder blade."}
          buttonHeader={"Rest assured that your harvest will be successful"}
          button={"BUY NOW"}
          imgBg={legend125GImgSrc}
          learnMore={"/broadheads/legend-125-grain-broadhead"}
          name={"Solid Legend 125G"}
          broadheadImg={"https://s3.amazonaws.com/solid-uploads/images/product-legend-100-std.png"}
          linkToProductPage={"/broadheads/legend-125-grain-broadhead"}
        />

        <SectionArticle
          title={"Solid Legend Series 175 Grains"}
          header={"The most dangerous game requires the most dangerous broadheads"}
          introP={"Buy a 3 PACK Legend Series 175 Grains and GET a Free ARMORY CASE. USE CODE on checkout: LOREM"}
          p={"You’re headed to the African savannah to hunt one of the Big 5. Maybe you’re headed into the heart of Canada to hunt Grizzly. You'll be ready for anything."}
          buttonHeader={"With Solid Broadheads, equipment failure is not an option"}
          button={"BUY NOW"}
          imgBg={legend175GImgSrc}
          learnMore={"/broadheads/legend-dangerous-game"}
          name={"Solid Legend 175G"}
          broadheadImg={"https://s3.amazonaws.com/solid-uploads/images/product-legend-dg-std.png"}
          linkToProductPage={"/broadheads/legend-dangerous-game"}
        />

      </section>
    )
  }
}

const mapStateToProps = ( { products } ) => {
  return {
    products
  };
};

export default connect(mapStateToProps, { fetchProducts: fetchProductsAction })(Home);
