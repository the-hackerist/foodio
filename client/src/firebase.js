// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "foodio-6cc6b.firebaseapp.com",
  projectId: "foodio-6cc6b",
  storageBucket: "foodio-6cc6b.appspot.com",
  messagingSenderId: "434663719194",
  appId: "1:434663719194:web:445c609e655d8dee916ca3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
