// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7o5dC11Ta1MARnCew7Xq2qMkJ4pUQYlg",
  authDomain: "react-auth-d247b.firebaseapp.com",
  projectId: "react-auth-d247b",
  storageBucket: "react-auth-d247b.appspot.com",
  messagingSenderId: "962857076612",
  appId: "1:962857076612:web:ca22ecbb9a27ac2bd63fd1",
  measurementId: "G-HCCHTGB98J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)