import React from 'react';
import ReactDOM from 'react-dom';
import Count from './Count.js';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.unregister();
