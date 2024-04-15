// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQob9uBUMNzwJbwAED2fU5jkxNVDdmMz0",
  authDomain: "schedule-savvy.firebaseapp.com",
  projectId: "schedule-savvy",
  storageBucket: "schedule-savvy.appspot.com",
  messagingSenderId: "768319179504",
  appId: "1:768319179504:web:7f055dcda98df7d459d035",
  measurementId: "G-MGMZNKWZXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);