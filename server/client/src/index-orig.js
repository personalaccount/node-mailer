/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk"; // async actions

import App from "./components/App-orig";
import reducers from "./reducers";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
// import "./assets/scss/argon-design-system-react.scss?v1.1.0";

// Use createStore helper to create a new instance of a redux store, passing reducers as arguments
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
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
