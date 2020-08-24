import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/reset.css";
import "./util/remScale";

import 'antd-mobile/dist/antd-mobile.less';
import { HashRouter } from "react-router-dom"
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
