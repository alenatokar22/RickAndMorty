import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "character-14fe6.firebaseapp.com",
  projectId: "character-14fe6",
  storageBucket: "character-14fe6.appspot.com",
  messagingSenderId: "588381692630",
  appId: "1:588381692630:web:5c6b4908309ec7d6e09f77",
};

export const authorization = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
