// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmBQghrHvjEb-LgBuwRKkxmA3lIEL6MwE",
  authDomain: "expencetracker-b345d.firebaseapp.com",
  projectId: "expencetracker-b345d",
  storageBucket: "expencetracker-b345d.appspot.com",
  messagingSenderId: "744618964396",
  appId: "1:744618964396:web:8f2bee642295c216aeb609",
  measurementId: "G-0RFRHZZ8FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;