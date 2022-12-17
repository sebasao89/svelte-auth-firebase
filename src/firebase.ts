// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCOLg_njVo5N10QZ_JeN71AbTk4XHB1z8",
  authDomain: "svelte-pruebas.firebaseapp.com",
  projectId: "svelte-pruebas",
  storageBucket: "svelte-pruebas.appspot.com",
  messagingSenderId: "337008183865",
  appId: "1:337008183865:web:4469603194622db3dfdbe8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)