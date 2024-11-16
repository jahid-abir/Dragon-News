// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS1dUMBdj0ne89cI_nHWkNZik9h1MV-Sk",
  authDomain: "dragon-news-9ea26.firebaseapp.com",
  projectId: "dragon-news-9ea26",
  storageBucket: "dragon-news-9ea26.firebasestorage.app",
  messagingSenderId: "801048655234",
  appId: "1:801048655234:web:a7a7e5050ca27aadf78b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);