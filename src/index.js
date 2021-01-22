import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/styles/globalStyle'
import { Provider } from 'react-redux'
import Toastr from './config/toastr'
import Router from './router'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <Router/>
    <Toastr/>
  </Provider>,
  document.getElementById('root')
);
