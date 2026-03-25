import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For this to work, you need to create a .env.local file in the root directory
// and add your Firebase project keys there.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
// Avoid initializing twice in Next.js (hot reload issue)
let app: any = null;
let auth: any = null; 
let db: any = null;

if (typeof window !== 'undefined' && !firebaseConfig.apiKey) {
  console.warn("Firebase config is missing. Login/Signup will not work.");
} else if (firebaseConfig.apiKey) {
   app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
   auth = getAuth(app);
   db = getFirestore(app);
}

export { app, auth, db };
