import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';

import { FirebaseContext } from './context/firebase';

import App from './App';
import reportWebVitals from './reportWebVitals';

// import { seedDatabase } from './seed';
const config = {
  // add your config here
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase)
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
