import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCMdFeU43Lgh_jLEg0rDS5GE0cC3vETm2Q",
  authDomain: "ke-chat-f078e.firebaseapp.com",
  databaseURL: "https://ke-chat-f078e.firebaseio.com",
  projectId: "ke-chat-f078e",
  storageBucket: "ke-chat-f078e.appspot.com",
  messagingSenderId: "416161001106",
  appId: "1:416161001106:web:dd7d64a06b20e80435c04b",
  measurementId: "G-T54Q2G1RV6"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();

export default app;
