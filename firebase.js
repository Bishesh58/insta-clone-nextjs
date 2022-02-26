// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ7Hmihsozbd55Rrf1SXVxsIWMdpZGlSc",
  authDomain: "insta-clone-703bd.firebaseapp.com",
  projectId: "insta-clone-703bd",
  storageBucket: "insta-clone-703bd.appspot.com",
  messagingSenderId: "799488055176",
  appId: "1:799488055176:web:97da5229c5be26b2ce0c3d",
  measurementId: "G-MRB4VLJ5WV"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);

//deb
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};