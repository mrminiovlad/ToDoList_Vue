
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbH4cmjIkNfGimveDXmtyH9qymqmQJDQs",
  authDomain: "todofirst-aa38c.firebaseapp.com",
  projectId: "todofirst-aa38c",
  storageBucket: "todofirst-aa38c.appspot.com",
  messagingSenderId: "38009622827",
  appId: "1:38009622827:web:eb07462a7d531d9ae4756e",
  measurementId: "G-KKVJPRYLW6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}