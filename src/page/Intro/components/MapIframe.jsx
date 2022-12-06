import React from "react";

function MapIframe({ Name }) {
  return <iframe width="100%" height="250" loading="lazy" src={`https://maps.google.com/maps?q=${Name}&hl=zh-TW&z=16&output=embed`}></iframe>;
}

export default MapIframe;
