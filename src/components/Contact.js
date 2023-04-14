import React from "react";
import matt from "../images/matt.png.jpg"
import wells from "../images/wells.jpg"

const Contact = () => {
  return (
    <div id="aboutMain">
      <div id="aboutTitle">About Us</div>
      <div id="aboutContent">
        <img id="wells" src={wells} alt="wells" />
        <p>
          Based in Jacksonville Florida, We are a team of passionate anglers, with
          a specific focus on sharks. Check out our instagram @schuran_and_sons
        </p>
        <img id="matt" src={matt} alt="matt" />
      </div>
    </div>
  );
};

export default Contact;
