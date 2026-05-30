import React from "react";
import ReactDOM from "react-dom";
import { getToken } from "./utils/api";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createBrowserHistory } from "history";
import { HashRouter, Switch } from "react-router-dom";
import "./style/main.scss";
import "react-toastify/dist/ReactToastify.css";
// const history = createBrowserHistory();

const checkToken = async () => {
  if (new Date().getTime() / 1000 <= Number(localStorage.getItem("expireTime"))) {
    return;
  }
  const res = await getToken();
  if (res.access_token) {
    localStorage.setItem("token", res.access_token);
    localStorage.setItem("expireTime", new Date().getTime() / 1000 + res.expires_in);
  }
};

checkToken();

ReactDOM.render(
  <HashRouter>
    <Switch>
      <App />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
