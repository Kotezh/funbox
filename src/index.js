import React from 'react';
import ReactDOM from 'react-dom';
// import { API_KEY } from "./utils/constants";
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
