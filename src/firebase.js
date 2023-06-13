// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd5ip7OepnzEX9jmYV4IPqV8lPmAEWS0M",
  authDomain: "pets-auth-b0716.firebaseapp.com",
  projectId: "pets-auth-b0716",
  storageBucket: "pets-auth-b0716.appspot.com",
  messagingSenderId: "518225242382",
  appId: "1:518225242382:web:c781f8417824933b804f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)