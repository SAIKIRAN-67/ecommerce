import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage}  from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAfT7373L0_mwVWT-DXjm-aBq9OB5ZqNPg",
  authDomain: "ecommerce-16589.firebaseapp.com",
  projectId: "ecommerce-16589",
  storageBucket: "ecommerce-16589.appspot.com",
  messagingSenderId: "355266883878",
  appId: "1:355266883878:web:30b905f222f16db3a111e7",
  measurementId: "G-TTW74V5FW3"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export const googleProvider=new GoogleAuthProvider();

