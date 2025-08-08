import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyi2g3VnwgUCu55Ipx2molIk4OT6bKoXM",
  authDomain: "cbta44-e5472.firebaseapp.com",
  projectId: "cbta44-e5472",
  storageBucket: "cbta44-e5472.appspot.com", // <-- corregido aquí
  messagingSenderId: "463880665541",
  appId: "1:463880665541:web:f348fda2af8b8df40ff3ac",
  measurementId: "G-9HCJCFW8QD"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };