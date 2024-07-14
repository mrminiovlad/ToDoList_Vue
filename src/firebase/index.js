
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQ-8-zWj1JBsvIgeQG0ghZz2EKLiAHVLw",
    authDomain: "mytodo-6a418.firebaseapp.com",
    projectId: "mytodo-6a418",
    storageBucket: "mytodo-6a418.appspot.com",
    messagingSenderId: "1012704569314",
    appId: "1:1012704569314:web:1db49dba6474be5451bbbb"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}