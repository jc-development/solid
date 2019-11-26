import React, { Component } from 'react';
import Broadhead from './Broadhead';
import LargeBroadheadVideo from '../reusable/LargeBroadheadVideo';
import { Link } from 'react-router-dom';

import './assets/css/broadhead.css';
import './assets/css/broadheads.css';

export default class Broadheads extends Component {
  constructor(props) {
    super(props);

    this.grains100Text, this.grains125Text,
    this.grains175Text, this.grains200Text;

    this.checkWindowSize = this.checkWindowSize.bind(this);

    this.state = {
      grains100TextSize: '300px',
      grains125TextSize: '300px',
      grains175TextSize: '300px',
      grains200TextSize: '300px'
    };

  }

  checkWindowSize() {
    if (window.innerWidth > 940) {
      this.setState({
        grains100TextSize: this.grains100Text.offsetHeight,
        grains125TextSize: this.grains125Text.offsetHeight,
        grains175TextSize: this.grains175Text.offsetHeight,
        grains200TextSize: this.grains200Text.offsetHeight
      });
    } else {
      this.setState({
        grains100TextSize: 'auto',
        grains125TextSize: 'auto',
        grains175TextSize: 'auto',
        grains200TextSize: 'auto'
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkWindowSize, false);
    this.checkWindowSize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowSize, false);
  }

  render() {

    const grains100Height = {
      height: this.state.grains100TextSize
    };

    const grains125Height = {
      height: this.state.grains125TextSize
    };

    const grains175Height = {
      height: this.state.grains175TextSize
    };

    const grains200Height = {
      height: this.state.grains200TextSize
    };

    return (
        <section className="broadheads">
          <h1>Solid Legend Series Broadheads</h1>

            <article style={grains100Height}>
              <LargeBroadheadVideo
                src="https://s3.amazonaws.com/solid-broadheads/videos/grains-100-web.mp4"
                poster="https://s3.amazonaws.com/solid-broadheads/videos/grains-100-poster.png"
              />
              <div className="broadhead-text" ref={ (grains100Text) => { this.grains100Text = grains100Text} }>
                <header>
                  <h3>Legend Series 100 Grains</h3>
                </header>
                <ul>
                  <li>Weight (grains): 100</li>
                  <li>Cutting Diameter: 1 1/8"</li>
                  <li>Total Cutting Edges: 5.32"</li>
                  <li>Available With Deep Six Ferrule</li>
                </ul>
                <Link to="/broadheads/legend-100-grain-broadhead"><button>SHOP 100 GRAINS NOW</button></Link>
                <p>Solid Broadheads don’t just cut, they devastate! This is what you get when you combine decades of cutting know how with the best in high-tech engineering.</p>
                <p>Solid Broadheads are the ultimate in performance. The damage begins with a lead cutting tip and curved, Samurai-style main blades. Special purpose auxiliary, or bleeder blades, work together to bust through bone, slice channels through vitals, and destroy anything they contact. Together they combine to create the ultimate devistation machine.</p>
                <Link to="/broadheads/legend-100-grain-broadhead"><button>SHOP 100 GRAINS NOW</button></Link>
              </div>
            </article>

            <article style={grains125Height}>
              <LargeBroadheadVideo
                src="https://s3.amazonaws.com/solid-broadheads/videos/grains-100-web.mp4"
                poster="https://s3.amazonaws.com/solid-broadheads/videos/grains-100-poster.png"
              />
              <div className="broadhead-text" ref={ (grains125Text) => { this.grains125Text = grains125Text} }>
                <header>
                  <h3>Legend Series 125 Grains</h3>
                </header>
                <ul>
                  <li>Weight (grains): 125</li>
                  <li>Cutting Diameter: 1 3/8"</li>
                  <li>Total Cutting Edges: 6.12"</li>
                  <li>Available With Deep Six Ferrule</li>
                </ul>
                <Link to="/broadheads/legend-125-grain-broadhead"><button>SHOP 125 GRAINS NOW</button></Link>
                <p>If you can’t hit it, you can’t kill it; it’s that simple. Arrow flight is the linchpin of our broadhead system. Broadhead flight is about 2 things: aerodynamics and spin (what our engineers call concentricity). Solid broadheads deliver the best of both. Solid Broadheads are designed from the ground up to tolerances that ensure accuracy.</p>
                <p>Shot after shot – harvest after harvest – Solid Broadheads stand up to use and remain razor sharp. In-house testing procedures ensures that every broadhead is aerodynamic and ready to fly from the moment you install it on an arrow. The manufacturing equipment Solid Broadheads uses is also used by some of the world’s best watchmakers – meaning that you can depend on the quality of your Solid Broadhead when it counts.</p>
                <Link to="/broadheads/legend-125-grain-broadhead"><button>SHOP 125 GRAINS NOW</button></Link>
              </div>
            </article>

            <article style={grains175Height}>
              <LargeBroadheadVideo
                src="https://s3.amazonaws.com/solid-broadheads/videos/grains-175-web.mp4"
                poster="https://s3.amazonaws.com/solid-broadheads/videos/grains-175-poster.png"
              />
              <div className="broadhead-text" ref={ (grains175Text) => { this.grains175Text = grains175Text} }>
                <header>
                  <h3>Legend Dangerous Game Series 175 Grains</h3>
                </header>
                <ul>
                  <li>Weight (grains): 175</li>
                  <li>Cutting Diameter: 1 3/8"</li>
                  <li>Total Cutting Edges: 6.12"</li>
                  <li>Available With Deep Six Ferrule</li>
                </ul>
                <Link to="/broadheads/legend-dangerous-game"><button>SHOP 175 GRAINS NOW</button></Link>
                <p>In the Solid Broadhead design, the main blade, bleeder blades and ferrule are all designed to lock together. In the proprietary design of Solid blades, the bleeder blade literally reinforces the main blade.</p>
                <p>This unique Lockdown design ensures extreme and unmatched durability in a broadhead. The Solid Broadhead is made from cutlery-grade stainless steel – the same steel used to craft some of the world’s finest knives. Solid’s ferrules are are crafted from high-quality, impact-tested steel. This is why we can offer the Solid 100% Guarantee. Solid Broadheads are the best broadheads in the world.</p>
                <Link to="/broadheads/legend-dangerous-game"><button>SHOP 175 GRAINS NOW</button></Link>
              </div>
            </article>

            <article style={grains200Height}>
              <LargeBroadheadVideo
                src="https://s3.amazonaws.com/solid-broadheads/videos/grains-200-web.mp4"
                poster="https://s3.amazonaws.com/solid-broadheads/videos/grains-200-poster.png"
              />
              <div className="broadhead-text" ref={ (grains200Text) => { this.grains200Text = grains200Text} }>
                <header>
                  <h3>TURKEY DCAP</h3>
                </header>
                <ul>
                  <li>Weight (grains): 200</li>
                  <li>Cutting Diameter: 4"</li>
                  <li>Total Cutting Edges: 5.1"</li>
                </ul>
                <Link to="/broadheads/turkey-d-cap-broadhead"><button>SHOP 200 GRAINS NOW</button></Link>
                <p>Like any knife or cutting equipment, the ability of the tool to take and hold an edge is critically important. This starts with the base steel, and at Solid, we use cutlery-quality stainless steel. This means that the edge can be honed to razor quality.</p>
                <p>Each batch of Solid broadheads are tested on laboratory equipment and given a final touch on with a leather strop to make sure that you’re shooting the sharpest blades on the market. Make sure that the first thing that touches your animal is the razor-sharp edge of a Solid broadhead.</p>
                <Link to="/broadheads/turkey-d-cap-broadhead"><button>SHOP 200 GRAINS NOW</button></Link>
              </div>
            </article>

        </section>
    );
  }
}
