// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARbIze32w4kRPp-uTOEotyTH9z8oQwzwk",
  authDomain: "maxxyourself.firebaseapp.com",
  projectId: "maxxyourself",
  storageBucket: "maxxyourself.appspot.com",
  messagingSenderId: "493880502561",
  appId: "1:493880502561:web:07035c64c4ff662f04f660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };