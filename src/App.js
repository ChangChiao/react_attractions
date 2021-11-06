import "./App.css";
import { Route } from "react-router-dom";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Index from "./page/Index";
import { Provider } from "react-redux";
import Dns from "./page/Dns";
import Log from "./page/Log";
import Waf from "./page/Waf";
import Wan from "./page/Wan";
import { ToastContainer } from "react-toastify";
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Route path="/" exact component={Index} />
          <Route path="/dns" component={Dns} />
          <Route path="/log" component={Log} />
          <Route path="/waf" component={Waf} />
          <Route path="/wan" component={Wan} />
          <ToastContainer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
