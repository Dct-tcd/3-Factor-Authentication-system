import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw1QmOt0pyIpeS1-ZnTtzlxcYnGgzgHaA",
  authDomain: "dev-social-5f0c7.firebaseapp.com",
  projectId: "dev-social-5f0c7",
  storageBucket: "dev-social-5f0c7.appspot.com",
  messagingSenderId: "192220008599",
  appId: "1:192220008599:web:ab0c22fa4817add8c519d2",
  measurementId: "G-6L82DVB7M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = 
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

// export const firebase;