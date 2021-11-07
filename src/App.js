import "./App.css";
import { Route } from "react-router-dom";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import DefaultTemp from "./components/DefaultTemp";
import Index from "./page/Index/index";
import Attraction from "./page/Attraction";
import Festival from "./page/Festival";
import Food from "./page/Food";
import Intro from "./page/Intro";
import { ToastContainer } from "react-toastify";
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <DefaultTemp>
            <Route path="/" exact component={Index} />
            <Route path="/attraction" component={Attraction} />
            <Route path="/festival" component={Festival} />
            <Route path="/food" component={Food} />
            <Route path="/intro" component={Intro} />
          </DefaultTemp>
          <ToastContainer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
