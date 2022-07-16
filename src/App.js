import React from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ImagesCards from "./components/images-cards/ImagesCards";
import SearchInput from "./components/search-input/SearchInput";

function App() {
  return (
    <Provider store={store}>
      <div className="app-body">
        <SearchInput />
        <hr className="separator" />
        <ImagesCards />
      </div>
    </Provider>
  );
}

export default App;
