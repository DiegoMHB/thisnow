import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebase = import.meta.env.VITE_FIREBASE_API;

const firebaseConfig = {
  apiKey: firebase,
  authDomain: "thisnow-ad749.firebaseapp.com",
  projectId: "thisnow-ad749",
  storageBucket: "thisnow-ad749.firebasestorage.app",
  messagingSenderId: "948922319113",
  appId: "1:948922319113:web:5deb5321c6098243d8d3d8",
  measurementId: "G-N2EGH8CX25"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
