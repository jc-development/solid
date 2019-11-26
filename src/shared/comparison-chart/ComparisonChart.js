import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/comparison-chart.css';

export const ComparisonChart = (props) => (
  <div id="table-wrapper">
    <h3>Solid Broadheads Comparison Chart</h3>
  <div>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th><img src="https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-100g-12-bleeder-small.jpg" /><br />Legend 100 with 1/2" Bleeder Blade</th>
          <th><img src="https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-100g-34-bleeder-small.jpg" /><br />Legend 100 with 3/4" Bleeder Blade</th>
          <th><img src="https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-125g-12-bleeder-small.jpg" /><br />Legend 125 with 1/2" Bleeder Blade</th>
          <th><img src="https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-125g-34-bleeder-small.jpg" /><br />Legend 125 with 3/4" Bleeder Blade</th>
          <th><img src="https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-12-bleeder-small.jpg" /><br />Legend DG 175 with 1/2" Bleeder Blade</th>
          <th><img src="https://s3.amazonaws.com/solid-broadheads/images/legend-series/images/solid-legend-dg-175g-34-bleeder-small-cc.jpg" /><br />Legend DG 175 with 3/4" Bleeder Blade</th>
          <th><img src="https://s3.amazonaws.com/solid-broadheads/images/dcap/solid-dcap-200g-small.jpg" /><br />Turkey D-Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Weight (Grains)</td>
          <td>100</td>
          <td>100</td>
          <td>125</td>
          <td>125</td>
          <td>175</td>
          <td>175</td>
          <td>200</td>
        </tr>
        <tr>
          <td>Cutting Diameter</td>
          <td>1 1/8"</td>
          <td>1 1/8"</td>
          <td>1 3/8"</td>
          <td>1 3/8"</td>
          <td>1 3/8"</td>
          <td>1 3/8"</td>
          <td>4"</td>
        </tr>
        <tr>
          <td>Total Cutting Edges</td>
          <td>4.80"</td>
          <td>5.32"</td>
          <td>5.60"</td>
          <td>6.12"</td>
          <td>5.60"</td>
          <td>6.12"</td>
          <td>5.1"</td>
        </tr>
        <tr>
          <td>Available With Deep Six Ferrule</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
);
