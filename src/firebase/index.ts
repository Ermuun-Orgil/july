import { getApp, getApps, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "july-fa242.firebaseapp.com",
  projectId: "july-fa242",
  storageBucket: "july-fa242.appspot.com",
  messagingSenderId: "126323572587",
  appId: "1:126323572587:web:ec519db2a5899e1db2562e",
};

// Initialize Firebase
export const firebaseApp =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export * from "./useFirestoreCollection";
export * from "./useFirestoreDoc";
