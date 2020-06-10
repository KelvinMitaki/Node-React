import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import reducers from "./redux/reducers";
import "materialize-css/dist/css/materialize.min.css";
import Axios from "axios";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
window.Axios = Axios;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
