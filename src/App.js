import React, { useState, useEffect } from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ImagesCards from "./components/images-cards/ImagesCards";

function App() {
  return (
    <Provider store={store}>
      <div className="app-body">
        <ImagesCards />
      </div>
    </Provider>
  );
}

export default App;
