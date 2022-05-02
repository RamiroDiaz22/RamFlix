import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUVlEqQCocxEdf1V3qdgkgwQEPfCrjEmc",

  authDomain: "ramflix-db.firebaseapp.com",

  projectId: "ramflix-db",

  storageBucket: "ramflix-db.appspot.com",

  messagingSenderId: "454024093238",

  appId: "1:454024093238:web:bfb124167f4b438f030297",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
