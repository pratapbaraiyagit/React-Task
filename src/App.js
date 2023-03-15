import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import Routes from './Routes/Routes'
import { setupAxios } from "./Utils";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const { PUBLIC_URL } = process.env;

setupAxios(axios, store)

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Suspense fallback={<Spinner/>}>
        <BrowserRouter basename={PUBLIC_URL}>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </Provider >
  );
}

export default App;
