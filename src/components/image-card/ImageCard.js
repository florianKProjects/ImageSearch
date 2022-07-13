import React from "react";
import "./ImageCard.css";
const ImageCard = ({ _ref = undefined, url, imageId }) => {
  return (
    <li className="image-card" ref={_ref}>
      <img src={url} loading="lazy"></img>
    </li>
  );
};

export default ImageCard;
