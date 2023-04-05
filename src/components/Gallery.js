import React from "react";
import lemonShark from "../lemonShark.jpg"

const Gallery = () => {
  return (
    <img id="lemonShark" src={lemonShark} alt="lemonShark" />
    // <div id="youTube">
    //   <iframe
    //     width="560"
    //     height="315"
    //     src="https://www.youtube.com/embed/ymvMmSxgboc"
    //     title="YouTube video player"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowfullscreen
    //   ></iframe>
    // </div>
  );
};

export default Gallery;
