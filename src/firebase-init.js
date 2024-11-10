// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqH4gXMDo-KKlRJ5DmMaPGLehlhgqfBE",
  authDomain: "email-firebase-auth-dbda6.firebaseapp.com",
  projectId: "email-firebase-auth-dbda6",
  storageBucket: "email-firebase-auth-dbda6.firebasestorage.app",
  messagingSenderId: "175054074817",
  appId: "1:175054074817:web:2b29ecb73d7b5573bab540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
