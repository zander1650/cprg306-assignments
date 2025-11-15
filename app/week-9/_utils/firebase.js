// Part 2: Firebase code starts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW8d9JyFoRlwBofoQOrE0Wvoon8xF_Rbc",
  authDomain: "cprg306-assignments-26d17.firebaseapp.com",
  projectId: "cprg306-assignments-26d17",
  storageBucket: "cprg306-assignments-26d17.firebasestorage.app",
  messagingSenderId: "749538353624",
  appId: "1:749538353624:web:58211ee7f3bd03987552ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Part 2: Firebase code ends