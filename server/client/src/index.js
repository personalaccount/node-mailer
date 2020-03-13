import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// Use createStore helper to create a new instance of a redux store, passing reducers as arguments
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Pass a component instance <App />, which is created by using jsx tags as a second argument
// provide a reference to an existing Dom node inside an existing html document
ReactDom.render(
  /*
        <Provider> tag is a react component that knows how to read changes from a redux store.
        Any time a redux store gets some new state produced insided of it, the provider component will update all the
        nested components with a new state
     */
  //pass the store to the provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
