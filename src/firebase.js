// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZgAH5FCpLlW_EVN20jCgomM1Co7R55HM",
  authDomain: "react-form-5211a.firebaseapp.com",
  projectId: "react-form-5211a",
  storageBucket: "react-form-5211a.appspot.com",
  messagingSenderId: "301705166239",
  appId: "1:301705166239:web:a3b308f7705bd8d48451aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

