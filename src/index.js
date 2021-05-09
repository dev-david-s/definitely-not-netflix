import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';

import { FirebaseContext } from './context/firebase';

import App from './App';
import reportWebVitals from './reportWebVitals';

// import { seedDatabase } from './seed';
const config = {
  apiKey: "AIzaSyBbwx87qE3kaPw8imQNCAM49PyYz_wbnuA",
  authDomain: "netflix-clone-acc57.firebaseapp.com",
  projectId: "netflix-clone-acc57",
  storageBucket: "netflix-clone-acc57.appspot.com",
  messagingSenderId: "369968478541",
  appId: "1:369968478541:web:50da102ff09912a51cdf04"
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
