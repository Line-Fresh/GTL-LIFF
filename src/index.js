import React from 'react';
import ReactDOM from 'react-dom';
import { LiffProvider } from 'react-liff';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const liffId = process.env.REACT_APP_LINE_LIFF_ID;
const stubEnabled = process.env.NODE_ENV !== 'production';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <LiffProvider liffId={liffId} stubEnabled={stubEnabled}>
        <App />
      </LiffProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);