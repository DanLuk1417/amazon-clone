import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9DN6mccZi_YJSBmuEzT4DExR74lGh9Pw",
  authDomain: "clone-b30e2.firebaseapp.com",
  databaseURL: "https://clone-b30e2.firebaseio.com",
  projectId: "clone-b30e2",
  storageBucket: "clone-b30e2.appspot.com",
  messagingSenderId: "966403215485",
  appId: "1:966403215485:web:39eaf7452cc89eccd0e114",
  measurementId: "G-7F6LDT5MFM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };