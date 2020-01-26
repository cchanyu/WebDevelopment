import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDddnny7hV7X4Yll0vmNgGje4vwSDdejTk",
    authDomain: "campusmanager-66533.firebaseapp.com",
    databaseURL: "https://campusmanager-66533.firebaseio.com",
    projectId: "campusmanager-66533",
    storageBucket: "campusmanager-66533.appspot.com",
    messagingSenderId: "412358630607",
    appId: "1:412358630607:web:f5f3a1d62753b790cb2bba",
    measurementId: "G-EWCTM5D20T"
  };
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));