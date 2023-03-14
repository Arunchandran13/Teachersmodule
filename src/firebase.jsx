import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz9XTfUMgMLP9phKCP2OGccg5V-HeHMsM",
  authDomain: "teachersmodule.firebaseapp.com",
  projectId: "teachersmodule",
  storageBucket: "teachersmodule.appspot.com",
  messagingSenderId: "465015343159",
  appId: "1:465015343159:web:4d4f996d8bf0a41dc517b2",
  measurementId: "G-7F1P82B8Z6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);