import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'

import App from "./App";
import React from "react";
import {Provider} from 'react-redux'
import store from "./Store/store";
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from "react-toastify";

ReactDOM.render(

        <Provider store={store}>

            <BrowserRouter>

                <ToastContainer/>

                <App/>

            </BrowserRouter>

             </Provider>
             
   , document.getElementById('root'));








