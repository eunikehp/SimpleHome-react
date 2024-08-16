
import { getFirestore } from 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiyUm2-D0HXMWm4jDthUsJOBmFPFqE-4A",
  authDomain: "react-simple-home.firebaseapp.com",
  projectId: "react-simple-home",
  storageBucket: "react-simple-home.appspot.com",
  messagingSenderId: "785315747242",
  appId: "1:785315747242:web:20b527a2be41cb233347d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
