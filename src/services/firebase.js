import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFireStore, connectFireStoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyDU0FNUTtujwKXJ-FFrA3TRUTimVKUeTtQ",
  authDomain: "vuecosmetics-13e7b.firebaseapp.com",
  projectId: "vuecosmetics-13e7b",
  storageBucket: "vuecosmetics-13e7b.appspot.com",
  messagingSenderId: "566633904417",
  appId: "1:566633904417:web:28dc20d0dff23a0c1ae660",
  measurementId: "G-5Q6HRXVSTP"
};

const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

const firestore = getFireStore();
connectFireStoreEmulator(firestore, "localhost", 8080);

const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5001);

// Initialize Firebase
// const app = 
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
