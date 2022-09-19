// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRWPgJh3bc3HchyehrFoWvmd-gpRos26w",
  authDomain: "hotels-app-31bb9.firebaseapp.com",
  projectId: "hotels-app-31bb9",
  storageBucket: "hotels-app-31bb9.appspot.com",
  messagingSenderId: "403956513902",
  appId: "1:403956513902:web:9d52115891fb0157927a7f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
