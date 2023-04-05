import React from "react";
import lemonShark from "../images/lemonShark.jpg"
import redfish from "../images/redfish.jpg"
import lemonSharkRelease from "../images/lemonSharkRelease.mp4"
import redfish2 from "../images/redfish2.jpg"
const Gallery = () => {
  return (
    <>
      <div id="galleryPhotos">
        <img id="lemonShark" src={lemonShark} alt="lemonShark" />
        <img id="redfish" src={redfish} alt="redfish" />
        <img id="redfish2" src={redfish2} alt="redfish2" />
        <img id="lemonSharkRelease" src={lemonSharkRelease} alt="lemonSharkRelease" />
      </div>
    </>

  );
};

export default Gallery;
