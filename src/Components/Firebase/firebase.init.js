// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6jnj91alZOPSmNE3A8saiiNx0CvopKog",
  authDomain: "gadget-heaven-dd2fc.firebaseapp.com",
  projectId: "gadget-heaven-dd2fc",
  storageBucket: "gadget-heaven-dd2fc.firebasestorage.app",
  messagingSenderId: "634157943244",
  appId: "1:634157943244:web:85d6518b4cad3026153569",
  measurementId: "G-4PHSXQGLC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;