import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBC-4O8TTJ0x67IIzvjQjox4T44dZt6-KY",
  authDomain: "anonibus-da668.firebaseapp.com",
  databaseURL: "https://anonibus-da668.firebaseio.com",
  projectId: "anonibus-da668",
  storageBucket: "anonibus-da668.appspot.com",
  messagingSenderId: "5352283440",
  appId: "1:5352283440:web:7ea40da9f9d2ef523e7cf5",
  measurementId: "G-YYXDL88FF2"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
