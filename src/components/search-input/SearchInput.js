import React, { useCallback, useState } from "react";
import { connect } from "react-redux/es/exports";
import {
  searchImages,
  resetState,
} from "../../redux/actions/SearchImageAction";
import _debounce from "lodash/debounce";
import { AiOutlineSearch } from "react-icons/ai";

import "./SeachInput.css";

const SearchInput = (props) => {
  const [searchImage, setSearchImage] = useState("");
  const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);

  const seachHandler = (e) => {
    setSearchImage(e.target.value);
    if (e.target.value.length > 2) {
      debounceFn(e.target.value);
    }
    resetState();
  };
  function handleDebounceFn(value) {
    props.searchImages(value, 1);
  }
  return (
    <div className="search-body">
      <AiOutlineSearch size="1.3em" />
      <input
        className="search-bar"
        type="text"
        value={searchImage}
        onChange={seachHandler}
        placeholder="Search for image"
      ></input>
    </div>
  );
};
export default connect(null, { searchImages, resetState })(SearchInput);
