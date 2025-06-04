// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFmwSwpltKxkLHNXs9oFjE-kJVhOCoKPY",
  authDomain: "reparaequipo-32c84.firebaseapp.com",
  databaseURL: "https://reparaequipo-32c84-default-rtdb.firebaseio.com",
  projectId: "reparaequipo-32c84",
  storageBucket: "reparaequipo-32c84.firebasestorage.app",
  messagingSenderId: "511971725437",
  appId: "1:511971725437:web:f8dbd47c09414c376c2114",
  measurementId: "G-9771Z4LH52"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
