import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCKcY_krzeVnASKQUJ1BVundScHAo8tg4Y",
  authDomain: "all-fireb.firebaseapp.com",
  databaseURL: "https://all-fireb.firebaseio.com",
  projectId: "all-fireb",
  storageBucket: "all-fireb.appspot.com",
  messagingSenderId: "781955126191",
  appId: "1:781955126191:web:a06b6b57774d4f7a5f555a",
  measurementId: "G-QQHV6KXHBP"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();

export default app;
