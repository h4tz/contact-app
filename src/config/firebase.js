// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr7sjlncpAxhkkukAlYK58HolAyytHE40",
  authDomain: "vite-contact-93aba.firebaseapp.com",
  projectId: "vite-contact-93aba",
  storageBucket: "vite-contact-93aba.appspot.com",
  messagingSenderId: "939945079963",
  appId: "1:939945079963:web:4cf7d301876af046a8823e",
  measurementId: "G-7ZD1R5E9JB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
