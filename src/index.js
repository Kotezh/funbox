import React from 'react';
import ReactDOM from 'react-dom';
// import { API_KEY } from "./utils/constants";
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
{/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script> */}

{/* <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`}></script> */}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
