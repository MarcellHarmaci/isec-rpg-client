import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import "setimmediate";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0-iljbyUTRCY61q3tOPNx_xg7y9Fo2WA",
  authDomain: "isec-rpg.firebaseapp.com",
  projectId: "isec-rpg",
  storageBucket: "isec-rpg.firebasestorage.app",
  messagingSenderId: "774945550590",
  appId: "1:774945550590:web:0631d9d0d7d56f4df1b5af",
  databaseURL: "",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { app, db };
