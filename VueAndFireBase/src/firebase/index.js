// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// funciones y metodos requeridos para autenticar con firebase
import {getAuth} from 'firebase/auth';



// Los valores del objeto recuerda colocarlos en un archivo .env
const firebaseConfig = {
  apiKey: "AIzaSyC4zmNlIgMN4P4YGMzWWrclc8j7Ot04g4E",
  authDomain: "basedeprueba-49737.firebaseapp.com",
  projectId: "basedeprueba-49737",
  storageBucket: "basedeprueba-49737.firebasestorage.app",
  messagingSenderId: "199974949927",
  appId: "1:199974949927:web:2a5c914c9aea04ae116a02",
  measurementId: "G-4E16TLFBJW"
};

// Initialize Firebase
export const conectFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(conectFirebase);

