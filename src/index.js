import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
window.store = createStoreWithMiddleware(reducers);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container-fluid")
);
