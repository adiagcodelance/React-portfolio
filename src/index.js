import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQhWkasOxoeArGLNv5L6-7qUm6TmL1Pxk",
  authDomain: "reactportfoliopage.firebaseapp.com",
  databaseURL: "https://reactportfoliopage-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactportfoliopage",
  storageBucket: "reactportfoliopage.appspot.com",
  messagingSenderId: "129693764255",
  appId: "1:129693764255:web:5de96201e662c24b6d70aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
