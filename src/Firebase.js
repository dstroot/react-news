import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_SENDER_ID
};

// Initialize Firebase
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
export let db = firebase.firestore();

export default firebase;
