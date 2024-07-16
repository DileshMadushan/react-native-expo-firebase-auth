
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDqWNKGY6vyPSzhHBSuwTx0as3kDURNmfk",
  authDomain: "codescale-95e2b.firebaseapp.com",
  projectId: "codescale-95e2b",
  storageBucket: "codescale-95e2b.appspot.com",
  messagingSenderId: "665764877840",
  appId: "1:665764877840:web:dff593227b5f1cb9dd5c95"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);