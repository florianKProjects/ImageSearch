import React, { useEffect, useState, useRef, useCallback } from "react";
import ImageCard from "../image-card/ImageCard";
import { connect } from "react-redux/es/exports";

import "./ImagesCards.css";

const ImagesCards = (props) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (images.length == 0) {
      setImages((images) => images.concat(props.data.photo));
    }
  }, [props.data.loading]);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      debugger;
      if (props.loading) return;
      if (images.length != 0) {
        setImages((images) => images.concat(props.data.photo));
      } else {
        setImages((images) => (images = props.data.photo));
      }
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          debugger;
          props.data.page = props.data.page + 1;
          props.setImagePage(props.data.page);
        }
      });
      if (node) observer.current.observe(node);
    },
    [props.loading]
  );

  return (
    <div className="images-body">
      <ul className="images">
        {!props.loading ? (
          images.map((image, index) => {
            if (images.length === index + 1) {
              debugger;
              return (
                <ImageCard
                  _ref={lastBookElementRef}
                  url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                  imageId={image.id}
                ></ImageCard>
              );
            } else {
              return (
                <ImageCard
                  url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                  imageId={image.id}
                ></ImageCard>
              );
            }
          })
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};
const mapStateToImages = (states) => {
  return { ...states.imagesSeachRes };
};

export default connect(mapStateToImages, {})(ImagesCards);
