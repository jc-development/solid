import React from 'react';
import './assets/css/broadhead-case.css';
import SelectionUI from './../reusable/SelectionUI';
import SingleSelectionUI from './../reusable/SingleSelectionUI'

export const BroadheadPurchase = (props) => {
  // console.log('props: ', props);
  return (
    <article className="combo-display">
      <header>
        <h4>{props.grains === "200" ? " Turkey DCAP" : "Legend Series" } {props.grains} Grains Broadhead</h4>
      </header>
      {props.grains === "200" ?
        <SingleSelectionUI
          grains={props.grains}
          variants={props.variants}
          title={`Legend Series ${props.grains} Grains Broadhead`}
          image={props.broadheadImg}
        />
      :
        <SelectionUI
          grains={props.grains}
          variants={props.variants}
          title={`Legend Series ${props.grains} Grains Broadhead`}
          image={props.broadheadImg}
        />
      }
    </article>
  );
}
