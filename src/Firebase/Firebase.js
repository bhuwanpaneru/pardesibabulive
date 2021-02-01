import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0aqkaSX_Aki3slW_mL5eAqSQ-Shuv4lg",
    authDomain: "clone-a65f3.firebaseapp.com",
    projectId: "clone-a65f3",
    storageBucket: "clone-a65f3.appspot.com",
    messagingSenderId: "873766591781",
    appId: "1:873766591781:web:a960a202e978a274398ecc",
    measurementId: "G-YRD2W7MV46"
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
