import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPV3qWiAvI4Mx5C-dx1G0bJia_qSsrcD8",
  authDomain: "clone-e8003.firebaseapp.com",
  databaseURL: "https://clone-e8003.firebaseio.com",
  projectId: "clone-e8003",
  storageBucket: "clone-e8003.appspot.com",
  messagingSenderId: "1021831912859",
  appId: "1:1021831912859:web:247b1653cb23a5b7b7153e",
  measurementId: "G-BSLWRT88XP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
