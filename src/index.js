import App from 'components/App';
import React from 'react';
import reactDom from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
