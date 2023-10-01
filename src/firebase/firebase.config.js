// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxt4Mnu_NuTD8fQy9I0hqqdjivqc2j9mQ",
  authDomain: "user-email-password-auth-6a0b2.firebaseapp.com",
  projectId: "user-email-password-auth-6a0b2",
  storageBucket: "user-email-password-auth-6a0b2.appspot.com",
  messagingSenderId: "11857279263",
  appId: "1:11857279263:web:c123f3b06dbd620643182a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;