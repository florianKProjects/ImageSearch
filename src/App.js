import React, { useState, useEffect } from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchBar from "./components/search/SearchBar";
import ImagesCards from "./components/images-cards/ImagesCards";

function App() {
  const [page, setpage] = useState(1);

  return (
    <Provider store={store}>
      <div className="app-body">
        <SearchBar imagePage={page} setImagePage={setpage} />
        <hr className="separator" />
        <ImagesCards setImagePage={setpage} />
      </div>
    </Provider>
  );
}

export default App;
