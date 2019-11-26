import React, { Component } from 'react';
import './assets/css/bleeder-changer.css';

export default class BleederChanger extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLargeImage: this.props.productHeadImgSrc,
      size: "3/4",
      bleederFrontSrc: this.props.largeBleederFrontSrc.src,
      cuttingEdgeSize: this.props.largeBleederFrontSrc.cuttingEdgeSize,
      cuttingDiameterSize: this.props.largeBleederFrontSrc.cuttingDiameterSize
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    this.setState({
      currentLargeImage: event.currentTarget.getAttribute('data-attr-link'),
      size: event.currentTarget.getAttribute('data-attr-size'),
      bleederFrontSrc: event.currentTarget.getAttribute('data-attr-bleeder-front-src'),
      cuttingEdgeSize: event.currentTarget.getAttribute('data-attr-edge-size'),
      cuttingDiameterSize: event.currentTarget.getAttribute('data-attr-diameter-size')
    });
  }

  render() {
    const showBleederUI = () => {
      if (this.props.smallBleederThumb) {
        return (
          <ul>
            <li
              onClick={this.handleClick}
              data-attr-link={this.props.smallBleederThumbLgImgSrc}
              data-attr-bleeder-front-src={this.props.smallBleederFrontSrc.src}
              data-attr-edge-size={this.props.smallBleederFrontSrc.cuttingEdgeSize}
              data-attr-diameter-size={this.props.smallBleederFrontSrc.cuttingDiameterSize}
              data-attr-size={"1/2"}
              >
              <div>
                <img src={this.props.smallBleederThumb} />
                <p>Show 1/2" Bleeder</p>
              </div>
            </li>
            <li
              onClick={this.handleClick}
              data-attr-link={this.props.largeBleederThumbLgImgSrc}
              data-attr-bleeder-front-src={this.props.largeBleederFrontSrc.src}
              data-attr-edge-size={this.props.largeBleederFrontSrc.cuttingEdgeSize}
              data-attr-diameter-size={this.props.largeBleederFrontSrc.cuttingDiameterSize}
              data-attr-size={"3/4"}
              >
              <div>
                <img src={this.props.largeBleederThumb} />
                <p>Show 3/4" Bleeder</p>
              </div>
            </li>
          </ul>
        );
      } else {
        return null;
      }
    };

    const showDeepSixImg = () => {
      if (this.props.deepSixImgSrc) {
        return (
          <div className="deep-six-wrapper">
            <p>Available with</p>
            <img src={this.props.deepSixImgSrc} />
          </div>
        );
      } else {
        return null
      }
    };

    const showCaption = () => {
      if (this.props.grains !== "200") {
        return <figcaption>Showing Legend Series {this.props.grains} Grains solid broadhead with {this.state.size}" Bleeder</figcaption>;
      } else {
        return <figcaption>Showing D-CAP Series {this.props.grains} Grains</figcaption>;
      }
    }

    return (
      <div className="bleeder-changer">
        { showBleederUI() }
        <figure>
          { showDeepSixImg() }
          <img className="support-image" src={this.state.currentLargeImage} />
          { showCaption() }
        </figure>
        <div className="cutting-diameter">
          <figure>
            <img src={this.state.bleederFrontSrc} />
            <caption>
              <dl>
                <dt>{this.state.size}" Bleeder</dt>
                <dd>{this.state.cuttingEdgeSize}" Total Cutting Edges</dd>
                <dd>{this.state.cuttingDiameterSize}" Cutting Diameter</dd>
              </dl>
            </caption>
          </figure>
        </div>
      </div>
    );
  }

}
