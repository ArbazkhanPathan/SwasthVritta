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

// import { initializeApp } from 'firebase/app';
// import { collection, getDocs } from 'firebase/firestore/lite';
// import { getFirestore } from 'firebase/firestore';
// import 'firebase/compat/firestore';

// // import firebase from 'react-native-firebase';

// // const ref = firebase.firestore().collection('cities').doc('London');


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseApp = {
    // apiKey: "AIzaSyCMoBnwX2BEnRCfBeGqP1SVEgjyHZrMjoU",
    // authDomain: "swasthvritta0348.firebaseapp.com",
    // projectId: "swasthvritta0348",
    // storageBucket: "swasthvritta0348.appspot.com",
    // messagingSenderId: "372965467933",
    // appId: "1:372965467933:web:7c6857e1a1ee51a92123f4",
// };

// const app = initializeApp(firebaseApp);
// export const { db } = getFirestore(app);





// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc } from 'firebase/firestore';
// import { collection, getDocs } from 'firebase/firestore/lite';
// import 'firebase/compat/firestore';


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = initializeApp({
//     apiKey: "AIzaSyCMoBnwX2BEnRCfBeGqP1SVEgjyHZrMjoU",
//     authDomain: "swasthvritta0348.firebaseapp.com",
//     projectId: "swasthvritta0348",
//     storageBucket: "swasthvritta0348.appspot.com",
//     messagingSenderId: "372965467933",
//     appId: "1:372965467933:web:7c6857e1a1ee51a92123f4",
// });


// const app = firebaseConfig;
// export const { db } = getFirestore(app);