import React, { useEffect, useState } from "react";
import "./ImageCard.css";
const ImageCard = ({ _ref, url, imageId }) => {
  return (
    <li className="image-card" ref={_ref}>
      <img key={imageId} src={url} loading="lazy"></img>
    </li>
  );
};

export default ImageCard;
