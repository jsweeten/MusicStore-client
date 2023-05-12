import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import App from './App';
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui"
import 'firebaseui/dist/firebaseui.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);