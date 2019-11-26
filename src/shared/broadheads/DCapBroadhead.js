import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBroadhead as fetchBroadheadAction } from './actions';
import HeroVideo from '../reusable/HeroVideo';
import BleederChanger from './BleederChanger';

import { BroadheadCase } from '../reusable/BroadheadCase';

import legend100GImgSrc from './../home/assets/images/legend-100-g.jpg';
import legend125GImgSrc from './../home/assets/images/legend-125-g.jpg';
import legend175GImgSrc from './../home/assets/images/legend-175-g.jpg';
import dCap200GImgSrc from './../home/assets/images/solid-dcap-200g-large.jpg';

import legendLogoSrc from './../home/assets/images/legend-logo.jpg';
import legendDGLogoSrc from './../home/assets/images/legend-dg-logo.jpg';
import dCapLogoSrc from './../home/assets/images/d-cap-logo.jpg';

class DCapBroadhead extends Component {

  constructor(props) {
    super(props);

    this.broadheadProperties = {
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
        broadheadImg: "https://s3.amazonaws.com/solid-uploads/images/product-legend-dg-std.png",
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

    const showBroadheadCase = () => {
      if (this.props.broadhead.variants && this.props.broadhead.variants.edges.length > 0) {
        return (
          <BroadheadCase
            broadheadImg={this.state.currentBroadhead.broadheadImg}
            grains={this.state.currentBroadhead.grains}
            variants={this.props.broadhead.variants.edges}
          />
        );
      } else {
        return null;
      }
    }

    const displayContent = () => {
      if (this.state.currentBroadhead) {
        return (
          <div className="broadhead-wrapper">
            <article>
              <HeroVideo
                poster={this.state.currentBroadhead.vidPoster}
                src={this.state.currentBroadhead.vidSrc}
              />
            </article>

            <div className="broadhead-page-header">
              { showSeriesLogo() }
              <h1>{this.state.currentBroadhead.h1}</h1>
            </div>

            { showBroadheadCase() }

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

export default connect(mapStateToProps, ({ fetchBroadhead: fetchBroadheadAction }))(DCapBroadhead)
