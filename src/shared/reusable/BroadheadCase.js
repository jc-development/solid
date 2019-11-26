import React from 'react';
import './assets/css/broadhead-case.css';
import SelectionUI from './../reusable/SelectionUI';
import SingleSelectionUI from './../reusable/SingleSelectionUI'

export const BroadheadCase = (props) => {
  return (<article className="combo-display">
    <header>
      {props.grains === "200" ?
        <h4>Turkey DCAP {props.grains} Grains Broadhead</h4>
      : <h4>Legend Series {props.grains} Grains Broadhead</h4> }
    </header>
    {/* <div className="combo-images">
        <img src={props.broadheadImg} />
        <img src="https://s3.amazonaws.com/solid-uploads/images/shopify-dark-gray-button.png" />
        <img src="https://cdn.shopify.com/s/files/1/1123/4878/products/Solid_Broadhead_Box_OPEN_1024x1024.png" />
      </div> */
    }
    {props.grains === "200" ?
      <SingleSelectionUI grains={props.grains} variants={props.variants} title={`Turkey DCAP ${props.grains} Grains Broadhead`} image={props.broadheadImg} />
    :
      <SelectionUI grains={props.grains} variants={props.variants} title={`Legend Series ${props.grains} Grains Broadhead`} image={props.broadheadImg}/>
    }

  </article>);
}
