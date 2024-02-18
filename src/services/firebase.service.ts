// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from "firebase/remote-config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESG_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Remote Config settings
const remoteConfig = getRemoteConfig(app);
remoteConfig.defaultConfig = {
  is_open_work: "",
  portal_url: "",
}; // Don't use default config

export const getConfig = async (key: string): Promise<string> => {
  const val = getValue(remoteConfig, key);

  // Get _value from Value object
  return val.asString();
};

export const initialRemoteConfig = async (): Promise<boolean> => {
  return await fetchAndActivate(remoteConfig);
};

export {
  analytics as firebaseAnalytics,
  app as firebaseApp,
  remoteConfig as firebaseRemoteConfig,
};
