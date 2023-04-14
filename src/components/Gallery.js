import React from "react";
import lemonShark from "../images/lemonShark.jpg"
import redfish from "../images/redfish.jpg"
import redfish2 from "../images/redfish2.jpg"
import blacktip from "../images/blacktip.jpg"

const Gallery = () => {

  return (
    <>
      <div id="galleryPhotos">
        <img id="lemonShark" src={lemonShark} alt="lemonShark" />
        <img id="redfish" src={redfish} alt="redfish" />
        <img id="redfish2" src={redfish2} alt="redfish2" />
        <img id="blacktip" src={blacktip} alt="blacktip" />
      </div>
    </>

  );
};

export default Gallery;
