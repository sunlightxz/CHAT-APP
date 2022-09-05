import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBccBG5ruH_2e2ehFVFfoShYn_r0-nyi64",
  authDomain: "intagram-test-a2c51.firebaseapp.com",
  projectId: "intagram-test-a2c51",
  storageBucket: "intagram-test-a2c51.appspot.com",
  messagingSenderId: "1091240673164",
  appId: "1:1091240673164:web:92ef81aa6603758dbf60a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
