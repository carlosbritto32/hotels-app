// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRWPgJh3bc3HchyehrFoWvmd-gpRos26w",
  authDomain: "hotels-app-31bb9.firebaseapp.com",
  projectId: "hotels-app-31bb9",
  storageBucket: "hotels-app-31bb9.appspot.com",
  messagingSenderId: "403956513902",
  appId: "1:403956513902:web:9d52115891fb0157927a7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)