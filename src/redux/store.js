import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducer from "./reducers/indexReducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
