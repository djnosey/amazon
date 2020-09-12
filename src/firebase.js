import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDexw_iRoKj8VWAvM0YN7KINdzbyqrS7zw",
  authDomain: "clone-d29c9.firebaseapp.com",
  databaseURL: "https://clone-d29c9.firebaseio.com",
  projectId: "clone-d29c9",
  storageBucket: "clone-d29c9.appspot.com",
  messagingSenderId: "839358073063",
  appId: "1:839358073063:web:7b998454be9efd8e7c3a42",
  measurementId: "G-MJLG8EPKRH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
