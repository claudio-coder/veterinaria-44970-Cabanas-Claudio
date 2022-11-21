import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBWZsq3t6HZkCMDD2Q2alpMAc_ZCMP4V_Y",
  authDomain: "centro-medico-veterinario.firebaseapp.com",
  projectId: "centro-medico-veterinario",
  storageBucket: "centro-medico-veterinario.appspot.com",
  messagingSenderId: "1093783079023",
  appId: "1:1093783079023:web:ceaf6a2ff29b2f942e659a",
  measurementId: "G-6XX9RBZGMV"
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
