import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMoBnwX2BEnRCfBeGqP1SVEgjyHZrMjoU",
    authDomain: "swasthvritta0348.firebaseapp.com",
    projectId: "swasthvritta0348",
    storageBucket: "swasthvritta0348.appspot.com",
    messagingSenderId: "372965467933",
    appId: "1:372965467933:web:7c6857e1a1ee51a92123f4"
});

var db = firebaseApp.firestore();

export { db };