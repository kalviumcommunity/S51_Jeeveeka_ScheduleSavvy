// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA2VXAiv_YIs0XEZeCWmJSkuOj9AXJSlg",
  authDomain: "schedulesavvy17.firebaseapp.com",
  projectId: "schedulesavvy17",
  storageBucket: "schedulesavvy17.appspot.com",
  messagingSenderId: "1022862462057",
  appId: "1:1022862462057:web:3b59ffca9cf66fcb84a6f8",
  measurementId: "G-C2RP0M80L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const db =getFirestore(app)
export{auth,app,db}