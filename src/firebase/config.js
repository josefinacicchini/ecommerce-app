import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApqe9DbfDVRoAsOo8OcRZKnH8x82vgV6Q",
  authDomain: "ecommerce-pawsome.firebaseapp.com",
  projectId: "ecommerce-pawsome",
  storageBucket: "ecommerce-pawsome.appspot.com",
  messagingSenderId: "336208744391",
  appId: "1:336208744391:web:ae81a1a22d12e58af893e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider()
