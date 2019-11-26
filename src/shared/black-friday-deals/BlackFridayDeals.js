import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './assets/css/black-friday-deals.css';

export default class BlackFridayDeals extends Component {
  render () {
    return (
      <section id='black-friday-deals'>
        <h1>Black Friday Deals</h1>
        <p className="time-start-end">DEALS HAVE EXPIRED. STAY TUNED FOR MORE HOLIDAY SAVINGS.</p>
        {/*
          // <div className="bf-two-column">
          //   <article className="deal-wrapper">
          //     <img className="image" src="https://s3.amazonaws.com/solid-uploads/images/product-legend-100-std-big.png" />
          //     <div className="content">
          //       <div className="text">
          //         <h2>20% OFF LEGEND 100 GRAIN</h2>
          //         <p>Save 20% on your favorite broadheads.</p>
          //       </div>
          //       <Link role="button" className="btn" to="/broadheads/legend-100-grain-broadhead">SHOP NOW</Link>
          //     </div>
          //   </article>
          //   <article className="deal-wrapper">
          //     <img className="image" src="https://s3.amazonaws.com/solid-uploads/images/product-turkey-dcap.png" />
          //     <div className="content">
          //       <div className="text">
          //         <h2>Turkey DCAP</h2>
          //         <p>Save 25% on next season's DCAP Action.</p>
          //       </div>
          //       <Link role="button" className="btn" to="/broadheads/turkey-d-cap-broadhead">SHOP NOW</Link>
          //     </div>
          //   </article>
          // </div>
          // <div className="bf-one-column">
          //   <article className="deal-wrapper">
          //     <img className="image" src="https://s3.amazonaws.com/solid-uploads/images/product-legend-100-std-big.png"/>
          //     <div className="content">
          //       <h2>20% OFF LEGEND 100 GRAIN + FREE TEE</h2>
          //       <p>Save 20% on your favorite broadheads and get a FREE tee</p>
          //       <a className="btn" href="https://store.solid-broadheads.com/products/legend-100-grain-broadhead" target="_blank" rel="noopener noreferrer">SHOP NOW</a>
          //     </div>
          //   </article>
          // </div>
        */}


      </section>
    )
  }
}
