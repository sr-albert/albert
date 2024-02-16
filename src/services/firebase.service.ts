// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7JrtJLWvrGppXKtLNz3f353FRKziPayA",
  authDomain: "albert-a2b3f.firebaseapp.com",
  projectId: "albert-a2b3f",
  storageBucket: "albert-a2b3f.appspot.com",
  messagingSenderId: "998247590505",
  appId: "1:998247590505:web:34356f4aa70172740010f8",
  measurementId: "G-P0GNG2BFGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app as firebaseApp, analytics as firebaseAnalytics };
