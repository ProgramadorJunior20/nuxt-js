import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzXYHRmY7RHABAdTM8uoUlAeFioJBEcho",
    authDomain: "nuxt-2-89a5f.firebaseapp.com",
    projectId: "nuxt-2-89a5f",
    storageBucket: "nuxt-2-89a5f.appspot.com",
    messagingSenderId: "720040557484",
    appId: "1:720040557484:web:75ea74adbcbb974db11809"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}