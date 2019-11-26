import serialize from 'serialize-javascript';

export const renderHeader = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="shortcut icon" href="https://s3.amazonaws.com/solid-broadheads/images/favicon.ico" type="image/png">
      <link rel="stylesheet" type="text/css" href="/assets/stylesheet.css">
      <title>Solid Broadheads - The Sharpest, Strongest, and Best Flying Broadheads - Legend Series: 100 Grain, 125 Grain, 175 Grain; DCAP</title>
    </head>
    <body>
      <div id="root">
`;

export const renderFooter = (loadableState, preloadedState) => `
  </div>
  <script>
    window.__PRELOADED_STATE__ = ${serialize(preloadedState).replace(/</g, '\\u003c')}
  </script>
  <script src="/assets/vendor.js"></script>
  <script src="/assets/client.js"></script>
  ${loadableState.getScriptTag()}
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-37316639-3"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-37316639-3');
  </script>
  <!-- Begin Inspectlet Embed Code -->
  <script type="text/javascript" id="inspectletjs">
  (function() {
  window.__insp = window.__insp || [];
  __insp.push(['wid', 1000586516]);
  function ldinsp(){ if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1643045424&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
  setTimeout(ldinsp, 500); document.readyState != "complete" ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();
  })();
  </script>
  <!-- End Inspectlet Embed Code -->
  <!-- Facebook Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '200852786942024'); // Insert your pixel ID here.
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=131482707230932&ev=PageView&noscript=1"
  /></noscript>
  <!-- DO NOT MODIFY -->
  <!-- End Facebook Pixel Code -->
  <!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3928428.js"></script>
  <!-- End of HubSpot Embed Code -->
`;
