// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm0CgWT7XE9UNeqoBvyUaw9TFDItnBMhM",
  authDomain: "netflix-gpt-22d5f.firebaseapp.com",
  projectId: "netflix-gpt-22d5f",
  storageBucket: "netflix-gpt-22d5f.appspot.com",
  messagingSenderId: "781921034361",
  appId: "1:781921034361:web:abc2cd3816687c89b1b4a8",
  measurementId: "G-LRPX1CM4NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth();