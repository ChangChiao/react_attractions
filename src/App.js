import { Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "./store";
import DefaultTemp from "./components/DefaultTemp";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./page/Index/index";
import Intro from "./page/Intro";
import Search from "./page/Search";
import { ToastContainer } from "react-toastify";
import "./assets/font/NotoSans-Bold.ttf";
import "./assets/font/NotoSans-BoldItalic.ttf";
import "./assets/font/NotoSans-Italic.ttf";
import "./assets/font/NotoSans-Regular.ttf";
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <DefaultTemp>
            <ScrollToTop>
              <Route path="/" exact component={Index} />
              <Route path="/search" exact component={Search} />
              <Route path="/intro" component={Intro} />
            </ScrollToTop>
          </DefaultTemp>
          <ToastContainer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
