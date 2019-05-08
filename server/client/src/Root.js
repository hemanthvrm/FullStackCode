import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

export default ({ children, initialState = {} }) => {
  //set if any
  let preloadedState = {};

  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(reduxThunk)
  );

  return <Provider store={store}>{children}</Provider>;
};
