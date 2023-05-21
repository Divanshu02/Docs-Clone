import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMNFLi56rqfgQcyM8WTDCYAPJoPuML5p8",
  authDomain: "docxx-dd782.firebaseapp.com",
  databaseURL: "https://docxx-dd782-default-rtdb.firebaseio.com",
  projectId: "docxx-dd782",
  storageBucket: "docxx-dd782.appspot.com",
  messagingSenderId: "5600562702",
  appId: "1:5600562702:web:4de373652488c501b7365f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
