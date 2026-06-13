import { createRoot } from "react-dom/client";
import { getToken } from "./utils/api";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./style/main.scss";
import "react-toastify/dist/ReactToastify.css";

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

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
