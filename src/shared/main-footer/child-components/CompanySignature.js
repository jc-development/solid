import React from 'react';
import solidGuaranteeImgSrc from './../assets/images/solid-guarantee.png';
import togLogoWhiteImgSrc from './../assets/images/tog-logo-white.png';

import './../assets/css/company-signature.css';

export const CompanySignature = (props) => (
  <div id="company-signature">
    <img src={solidGuaranteeImgSrc} alt="If your broadhead fails in a hunting situation, we will replace it." />
    <address>
      <img src={togLogoWhiteImgSrc} alt="The Outdoor Group, LLC" /><br />
      The Outdoor Group, LLC<br/>
      1325 John Street<br/>
      W. Henrietta, NY 14586<br/><br/>
      1-855-802-0866
    </address>
    <article>
      <header><h5>Liability Disclaimer</h5></header>
      <p>The Outdoor Group, LLC is not liable for any personal injury, death, or property damage that may result from your use of this product. The user of this product assumes all risks of property damage or injury to yourself and others that may arise from its use. Use of this product binds the user to this agreement.</p>
    </article>
  </div>
);
