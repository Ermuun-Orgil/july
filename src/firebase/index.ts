import { getApp, getApps, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "july-a9a1f.firebaseapp.com",
  projectId: "july-a9a1f",
  storageBucket: "july-a9a1f.appspot.com",
  messagingSenderId: "53494904497",
  appId: "1:53494904497:web:a059c13e3cf2552ee25490",
};

// Initialize Firebase
export const firebaseApp =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export * from "./useFirestoreCollection";
export * from "./useFirestoreDoc";