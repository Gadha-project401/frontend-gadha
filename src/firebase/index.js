import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAwPHJGWC0p7Yx0yrjQ_iWLXtNbetbzb9c",
    authDomain: "gadha-final.firebaseapp.com",
    databaseURL: "https://gadha-final.firebaseio.com",
    projectId: "gadha-final",
    storageBucket: "gadha-final.appspot.com",
    messagingSenderId: "987564599747",
    appId: "1:987564599747:web:3634d87387fbb684033576",
    measurementId: "G-YZ8LB2Y89Q"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export {storage , firebase as default};