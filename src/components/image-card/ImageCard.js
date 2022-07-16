import React from "react";
import "./ImageCard.css";
const ImageCard = ({ _ref = undefined, url, description }) => {
  return (
    <li className="image-card" ref={_ref}>
      <img src={url} loading="lazy" alt={description}></img>
    </li>
  );
};

export default ImageCard;
