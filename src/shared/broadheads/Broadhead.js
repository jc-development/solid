import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBroadhead as fetchBroadheadAction } from './actions';
import HeroVideo from '../reusable/HeroVideo';
import BleederChanger from './BleederChanger';

import { BroadheadCase } from '../reusable/BroadheadCase';
import { BroadheadPurchase } from '../reusable/BroadheadPurchase';

import legend100GImgSrc from './../home/assets/images/legend-100-g.jpg';
import legend125GImgSrc from './../home/assets/images/legend-125-g.jpg';
import legend175GImgSrc from './../home/assets/images/legend-175-g.jpg';
import dCap200GImgSrc from './../home/assets/images/solid-dcap-200g-large.jpg';

import legendLogoSrc from './../home/assets/images/legend-logo.jpg';
import legendDGLogoSrc from './../home/assets/images/legend-dg-logo.jpg';
import dCapLogoSrc from './../home/assets/images/d-cap-logo.jpg';

class Broadhead extends Component {

  constructor(props) {
    super(props);

    this.broadheadProperties = {
      grain100: {
        grains: "100",
        vidPoster: "https://s3.amazonaws.com/solid-broadheads/videos/larry-solid-poster.jpg",
        vidSrc: "https://s3.amazonaws.com/solid-broadheads/videos/Larry_SOLID-web.mp4",
        h1: "Solid Legend Series 100 grains Broadhead",
        smallBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-100g-12-bleeder-small.jpg",
        smallBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-100g-12-bleeder-large.jpg",
        largeBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-100g-34-bleeder-small.jpg",
        largeBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-100g-34-bleeder-large.jpg",
        smallBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/legend-100g-12-bleeder-front.png", cuttingEdgeSize: "4.80", cuttingDiameterSize: "1 1/8" },
        largeBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/legend-100g-34-bleeder-front.png", cuttingEdgeSize: "5.32", cuttingDiameterSize: "1 1/8" },
        productHeadImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-100g-34-bleeder-large.jpg",
        deepSixImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/deep-six.jpg",
        dt:"Legend 100 Benefits",
        dds: [
          "Special purpose auxiliary bleeder blades. 1/2” penetrator for bone blasting -or- 3/4” vented for EXTREME blood letting",
          "S30V Steel cut-on-contact tip",
          "Samurai-style curved blades",
          "20 degree blade angle",
          ".060\" thick stainless S30V steel blades to hold an edge and resist the elements",
          " Zero-tapered ferrule",
          "4.80\" total cutting edge (with 1/2\" bleeder), 5.32\" total cutting edge (3/4\" bleeder)",
          "Available in Standard or Deep Six Furrules",
          "3 Legend Broadheads per pack"
        ],
        headImgSrc: "https://s3.amazonaws.com/solid-uploads/images/100-grain-product-hero.jpg",
        supportText:[
          "Solid broadheads are made from the same stainless S30V steel that premium knife manufacturers choose for their blades.",
          "This stainless steel material is specifically selected for its ability to hold an edge, not to mention that it’s tough-as-nails in the field, and resists corrosion from the elements. You won’t find aluminum or metal injection molding in a Solid Broadhead.",
          "In fact, even the Torx locking screw is stainless steel. With extreme toughness and edge retention, Solid Broadheads are hand crafted in the USA for performance, strength, wear resistance."
        ],
        trophySrc: "https://s3.amazonaws.com/solid-uploads/images/dg-game-1.jpg",

        title: "Solid Legend Series 100 Grains",
        header: "Solid Broadheads are made with S30V stainless steel. This material is selected for its ability to hold an edge, and that it’s tough-as-nails in the field",
        introP: "Buy a 3 PACK Legend Series 100 Grain and GET a free ARMORY CASE. USE CODE on checkout: LOREM",
        p: "Solid broadheads are made from the same stainless S30V steel that premium knife manufacturers choose for their blades.",
        buttonHeader: "Solid resists corrosion from the elements",
        button: "BUY NOW",
        imgBg:legend100GImgSrc,
        learnMore: "/broadheads/legend-100-grain-broadhead",
        name: "Solid Legend 100G",
        broadheadImg: "https://s3.amazonaws.com/solid-uploads/images/product-legend-100-std.png",
        linkToProductPage: "/broadheads/legend-100-grain-broadhead",
        grains: "100",
        // variants={this.legend100}
      },
      grain125: {
        title: "Solid Legend Series 125 Grains",
        header: "When you’re hunting bigger, tougher game, you want the unmatched confidence that comes from having a larger cutting area",
        introP: "Buy a 3 PACK Legend Series 125 Grain and GET a Free ARMORY CASE. USE CODE on checkout: LOREM",
        p: "Solid Broadhead 175G has more than 5” of cutting edge with a 1/2” bleeder blade.",
        buttonHeader: "Rest assured that your harvest will be successful",
        button: "BUY NOW",
        imgBg: legend125GImgSrc,
        learnMore: "/broadheads/legend-125-grain-broadhead",
        name: "Solid Legend 125G",
        broadheadImg: "https://s3.amazonaws.com/solid-uploads/images/product-legend-100-std.png",
        linkToProductPage: "/broadheads/legend-125-grain-broadhead",
        grains: "125",
        vidPoster: "https://s3.amazonaws.com/solid-broadheads/videos/solid-broadhead-poster.jpg",
        vidSrc: "https://s3.amazonaws.com/solid-broadheads/videos/solid-self-filmed-web.mp4",
        h1: "Solid Legend Series 125 grains Broadhead",
        smallBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-125g-12-bleeder-small.jpg",
        smallBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-125g-12-bleeder-large.jpg",
        largeBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-125g-34-bleeder-small.jpg",
        largeBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-125g-34-bleeder-large.jpg",
        smallBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/legend-100g-12-bleeder-front.png", cuttingEdgeSize: "5.60", cuttingDiameterSize: "1 3/8" },
        largeBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/legend-100g-34-bleeder-front.png", cuttingEdgeSize: "6.12", cuttingDiameterSize: "1 3/8" },
        productHeadImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-125g-34-bleeder-large.jpg",
        deepSixImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/deep-six.jpg",
        dt: "Legend 125 Benefits",
        dds:[
          "Special purpose auxiliary bleeder blades. 1/2” penetrator for bone blasting -or- 3/4” vented for EXTREME blood letting",
          "S30V Steel cut-on-contact tip",
          "Samurai-style curved blades",
          "20 degree blade angle",
          ".060\" thick stainless S30V steel blades to hold an edge and resist the elements",
          " Zero-tapered ferrule",
          "6.12\" total cutting edge (with 3/4\" bleeder), 5.60\" total cutting edge (1/2\" bleeder)",
          "Available in Standard or Deep Six Furrules",
          "3 Legend Broadheads per pack"
        ],
        headImgSrc: "https://s3.amazonaws.com/solid-uploads/images/125-grain-product-hero.jpg",
        supportText:[
          "Sometimes bigger is just better. More cutting edge surface and increased F.O.C.",
        ],
        trophySrc: "https://s3.amazonaws.com/solid-uploads/images/slider-legend-125-bear.jpg"
      },
      grain175: {
        title: "Solid Legend Dangerous Game Series 175 Grains",
        header: "The most dangerous game requires the most dangerous broadheads",
        introP: "Buy a 3 PACK Legend Series 175 Grain and GET a Free ARMORY CASE. USE CODE on checkout: LOREM",
        p: "You’re headed to the African savannah to hunt one of the Big 5. Maybe you’re headed into the heart of Canada to hunt grizzly. You'll be ready for anything.",
        buttonHeader: "With Solid Broadheads, equipment failure is not an option",
        button: "BUY NOW",
        imgBg:legend175GImgSrc,
        learnMore: "/broadheads/legend-dangerous-game",
        name: "Solid Legend 175G",
        broadheadImg: "https://s3.amazonaws.com/solid-uploads/images/product-legend-dg-std.png",
        linkToProductPage: "/broadheads/legend-dangerous-game",
        grains: "175",
        vidPoster: "https://s3.amazonaws.com/solid-broadheads/videos/solid-broadhead-poster.jpg",
        vidSrc: "https://s3.amazonaws.com/solid-broadheads/videos/solid-hunters.mp4",
        h1: "Solid Legend Dangerous Game Series 175 grains Broadhead",
        smallBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-12-bleeder-small.jpg",
        smallBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-12-bleeder-large.jpg",
        largeBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-34-bleeder-small.jpg",
        largeBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-34-bleeder-large.jpg",
        smallBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/legend-100g-12-bleeder-front.png", cuttingEdgeSize: "5.60", cuttingDiameterSize: "1 3/8" },
        largeBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/legend-100g-34-bleeder-front.png", cuttingEdgeSize: "6.12", cuttingDiameterSize: "1 3/8" },
        productHeadImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-34-bleeder-large.jpg",
        deepSixImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/deep-six.jpg",
        dt: "Legend Dangerous Game 175 Benefits",
        dds:[
          "Special purpose auxiliary bleeder blades. 1/2” penetrator for bone blasting -or- 3/4” vented for EXTREME blood letting",
          "S30V Steel cut-on-contact tip",
          "Samurai-style curved blades",
          "20 degree blade angle",
          ".060\" thick stainless S30V steel blades to hold an edge and resist the elements",
          " Zero-tapered ferrule",
          "5.60\" total cutting edge (with 1/2\" bleeder), 6.12\" total cutting edge (3/4\" bleeder)",
          "Available in Standard or Deep Six Furrules",
          "3 Legend DG Broadheads per pack"
        ],
        headImgSrc: "https://s3.amazonaws.com/solid-uploads/images/african-savanna.jpg",
        supportText:[
          "Let\'s face it, a bow and arrow is not a rifle, it's actually much more.",
          "But only if you have a Solid Legend Dangerous Game Broadhead on the end of the arrow.",
          "The Legend Dangerous Game is made to take on the dangerous game and come out on top."
        ],
        trophySrc: "https://s3.amazonaws.com/solid-uploads/images/slider-legend-125-gator.jpg",
      },
      grain200: {
        title: "Solid DCAP 200 Grains",
        header: "Ethical bowhunters know the right way to hunt turkey is to shoot a Solid D-CAP and aim for the head and neck",
        // introP: "Buy a 3 PACK Legend Series 175 Grain and GET a Free ARMORY CASE. USE CODE on checkout: LOREM",
        p: "No more fly-aways. No more wounded birds. Solid D-CAPs fly like darts. They’re razor sharp, crazy durable and the .060” thick stainless steel blades mean if you touch a turkey’s head – it’s off.",
        buttonHeader: "Designed to withstand multiple turkey headshots",
        button: "BUY NOW",
        imgBg: dCap200GImgSrc,
        learnMore: "/broadheads/turkey-d-cap-broadhead",
        name: "Solid DCAP 200G",
        broadheadImg: "https://s3.amazonaws.com/solid-uploads/images/product-turkey-dcap.png",
        linkToProductPage: "/broadheads/turkey-d-cap-broadhead",
        grains: "200",
        vidPoster: "https://s3.amazonaws.com/solid-uploads/images/d-cap-double.jpg",
        vidSrc: "https://s3.amazonaws.com/solid-broadheads/videos/dcap.mp4",
        h1: "Solid DCAP 200 grains Broadhead",
        // smallBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-12-bleeder-small.jpg",
        // smallBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-12-bleeder-large.jpg",
        largeBleederThumb: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-34-bleeder-small.jpg",
        // largeBleederThumbLgImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-34-bleeder-large.jpg",
        // smallBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/legend-100g-12-bleeder-front.png", cuttingEdgeSize: "5.60", cuttingDiameterSize: "1 3/8" },
        largeBleederFrontSrc: { src: "https://s3.amazonaws.com/solid-broadheads/images/dcap/dcap-200g-front.jpg", cuttingEdgeSize: "5.10", cuttingDiameterSize: "4" },
        productHeadImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/dcap/solid-dcap-200g-large.jpg",
        // deepSixImgSrc: "https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/deep-six.jpg",
        dt: "DCAP Benefits",
        dds:[
          "SINGLE-BEVEL SHARPENED EDGE FOR INCREASED STRENGTH THROUGH BONE",
          "S30V Steel cut-on-contact tip",
          ".060\” THICK STAINLESS STEEL BLADES",
          "20 degree blade angle",
          ".060\" thick stainless S30V steel blades to hold an edge and resist the elements",
          " Zero-tapered ferrule",
          "5.10\" total cutting edge and 4\" Cutting Diameter",
          "Designed to withstand multiple turkey headshots",
          "2 DCAP Broadheads per pack"
        ],
        headImgSrc: "https://s3.amazonaws.com/solid-uploads/images/d-cap3.jpg",
        supportText:[
          "Ethical bowhunters know the right way to hunt turkey is to shoot a Solid D-CAP and aim for the head and neck. No more fly-aways. No more wounded birds. Solid D-CAPs fly like darts.",
          "They’re razor sharp, crazy durable and the .060\” thick stainless steel blades mean if you touch a turkey’s head – it’s off."
        ],
        trophySrc: "https://s3.amazonaws.com/solid-uploads/images/dcap-turkey-trophy.jpg",
      }
    };

    this.state = {
      currentBroadhead: null
    };

  }

  componentWillMount() {
    this.props.fetchBroadhead(this.props.match.params.broadhead);
    switch (this.props.match.params.broadhead) {
      case 'legend-100-grain-broadhead':
        this.setState({currentBroadhead: this.broadheadProperties.grain100 });
        break;

      case 'legend-125-grain-broadhead':
        this.setState({currentBroadhead: this.broadheadProperties.grain125 });
        break;

      case 'legend-dangerous-game':
        this.setState({currentBroadhead: this.broadheadProperties.grain175 });
        break;

      case 'turkey-d-cap-broadhead':
        this.setState({currentBroadhead: this.broadheadProperties.grain200 });
        break;

      default:
       return;
    }
  }

  render() {

    const getDDs = (dds) => {
      return dds.map((dd, i) => {
        return <dd key={i}>{dd}</dd>;
      })
    };

    const getSupportPs = (supportText) => {
      return supportText.map((p, i) => {
        return <p className="support-text" key={i}>{p}</p>
      })
    }

    const showSeriesLogo = () => {
      // <img src={ this.state.currentBroadhead.grains !== '175' ? legendLogoSrc : legendDGLogoSrc } className="support-image-90" />
      switch (this.state.currentBroadhead.grains) {
        case '175':
          return <img src={ legendDGLogoSrc } className="support-image-90" />;
          break;

        case '200':
          return <img src={ dCapLogoSrc } className="support-image-90" />;
          break;

        default:
          return <img src={ legendLogoSrc } className="support-image-90" />;
          break;
      }
    }

    const showBroadheadPurchase = () => {
      // alter this to show proper component
      if (this.props.broadhead.variants && this.props.broadhead.variants.edges.length > 0) {
        return (
          <BroadheadPurchase
            broadheadImg={this.state.currentBroadhead.broadheadImg}
            grains={this.state.currentBroadhead.grains}
            variants={this.props.broadhead.variants.edges}
          />
        );
      }
    };

    const displayContent = () => {
      if (this.state.currentBroadhead) {
        return (
          <div className="broadhead-wrapper">
            <div className="broadhead-page-header">
              { showSeriesLogo() }
              <h1>{this.state.currentBroadhead.h1}</h1>
            </div>

            <article>
              <HeroVideo
                poster={this.state.currentBroadhead.vidPoster}
                src={this.state.currentBroadhead.vidSrc}
              />
            </article>

            { showBroadheadPurchase() }

            <BleederChanger
              grains={this.state.currentBroadhead.grains}
              smallBleederThumb={this.state.currentBroadhead.smallBleederThumb}
              smallBleederThumbLgImgSrc={this.state.currentBroadhead.smallBleederThumbLgImgSrc}
              largeBleederThumb={this.state.currentBroadhead.largeBleederThumb}
              largeBleederThumbLgImgSrc={this.state.currentBroadhead.largeBleederThumbLgImgSrc}
              productHeadImgSrc={this.state.currentBroadhead.productHeadImgSrc}
              smallBleederFrontSrc={this.state.currentBroadhead.smallBleederFrontSrc}
              largeBleederFrontSrc={this.state.currentBroadhead.largeBleederFrontSrc}
              deepSixImgSrc={this.state.currentBroadhead.deepSixImgSrc}
            />

            <dl className="broadhead-features">
              <dt>{this.state.currentBroadhead.dt}</dt>
              {getDDs(this.state.currentBroadhead.dds)}
            </dl>
            <img className="support-image" src={this.state.currentBroadhead.headImgSrc} />
            {getSupportPs(this.state.currentBroadhead.supportText)}
            <img className="support-image" src={this.state.currentBroadhead.trophySrc} />
          </div>
        );
      } else {
        return null;
      }
    }

    return (displayContent());

  }

}

const mapStateToProps = ({ broadhead }) => {
  return {
    broadhead
  }
};

export default connect(mapStateToProps, ({ fetchBroadhead: fetchBroadheadAction }))(Broadhead)
