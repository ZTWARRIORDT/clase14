// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATx5JYitHF1pUcQuBC2aBmLNTD_jyMPzc",
  authDomain: "crud14clase.firebaseapp.com",
  projectId: "crud14clase",
  storageBucket: "crud14clase.firebasestorage.app",
  messagingSenderId: "930046138610",
  appId: "1:930046138610:web:43fe0771f75b84c303186b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

