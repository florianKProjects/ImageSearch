import React, { useRef, useCallback, Suspense } from "react";
import ImageCard from "../image-card/ImageCard";
import { connect } from "react-redux/es/exports";
import {
  searchImages,
  resetState,
} from "./../../redux/actions/SearchImageAction";
import { TailSpin } from "react-loader-spinner";
import "./ImagesCards.css";

const ImagesCards = (props) => {
  const observer = useRef(); // infinite-scroll call back last com
  const lastImageElementRef = useCallback(
    (node) => {
      if (props.loading) return;
      if (props.data.page === props.data.pages) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          props.data.page = props.data.page + 1;
          props.searchImages(props.imageSearchWord, props.data.page);
        }
      });
      if (node) observer.current.observe(node);
    },
    [props.loading]
  );

  const createImagesCards = () => {
    return props.data.photo.map((image, index) => {
      if (props.data.photo.length === index + 1) {
        return (
          <ImageCard
            _ref={lastImageElementRef}
            url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            index={index}
            description={image.title}
            key={index}
          ></ImageCard>
        );
      } else {
        return (
          <ImageCard
            url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            index={index}
            key={index}
          ></ImageCard>
        );
      }
    });
  };

  return (
    <>
      <div className="images-body">
        <Suspense fallback={<div>Loading</div>}>
          <ul className="images">{createImagesCards()}</ul>
        </Suspense>
        {props.loading ? (
          <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
        ) : (
          <></>
        )}
      </div>
      {props.data.page === props.data.pages ? (
        <div style={{ fontSize: "25px" }}>No more results</div>
      ) : (
        <></>
      )}
    </>
  );
};
const mapStateToImages = (states) => {
  return { ...states.imagesSeachRes };
};

export default connect(mapStateToImages, { searchImages, resetState })(
  ImagesCards
);
