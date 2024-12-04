// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8C9grIcSo0N7vQH4WHtdJblJTj2A15ZQ",
  authDomain: "web-dr-7bc6f.firebaseapp.com",
  projectId: "web-dr-7bc6f",
  storageBucket: "web-dr-7bc6f.firebasestorage.app",
  messagingSenderId: "1004948535019",
  appId: "1:1004948535019:web:ef47defd466ffa9220f0ae",
  measurementId: "G-CKW0FMLKHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

