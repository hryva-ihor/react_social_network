import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

export let RenderAPP = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App dispatch={store.dispatch.bind(store)} store={store} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

RenderAPP(store.getState());

store.subscribe(RenderAPP);

reportWebVitals();
