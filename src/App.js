import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Form from "./components/Form";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Main></Main>
    </Provider>
  );
}

export default App;
