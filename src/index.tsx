import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from "./store/Store";
import MainViewport from './containers/MainViewPort/MainViewport.container';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainViewport />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
