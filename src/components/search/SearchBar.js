import React, { useState, useEffect } from "react";
import { connect } from "react-redux/es/exports";
import { searchImages } from "./../../redux/actions/SearchImageAction";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    if (searchMovie.length >= 3) {
      props.searchImages(searchMovie, props.imagePage);
    }
  }, [props.imagePage]);
  const seachHandler = (e) => {
    setSearchMovie(e.target.value);
    props.searchImages(searchMovie, 1);
  };

  return (
    <div className="search-body">
      <input
        className="search-bar"
        type="text"
        value={searchMovie}
        onChange={seachHandler}
      ></input>
    </div>
  );
};
const mapStateToSeach = (states) => {
  debugger;
  return { pageNum: states.imagesSeachRes.data.page };
};
export default connect(mapStateToSeach, { searchImages })(SearchBar);
