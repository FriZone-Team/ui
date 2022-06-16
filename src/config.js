import * as firebaseApp from "firebase/app";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export const appName = "FriZone";

export const domain = "frizone.tk";
export const supportEmail = `info@${domain}`;

export const website = `www.${domain}`;

export const year = new Date().getUTCFullYear();

const setupFirebase = () => {
  const app = firebaseApp.initializeApp({
    apiKey:
      process.env.FIREBASE_API_KEY ?? "AIzaSyBU5luOzk4BJUodpGEGGkJDpQSwyl8Jn5Y",
    authDomain:
      process.env.FIREBASE_AUTH_DOMAIN ?? "frizone-dev.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID ?? "frizone-dev",
    storageBucket:
      process.env.FIREBASE_STORAGE_BUCKET ?? "frizone-dev.appspot.com",
    messagingSenderId:
      process.env.FIREBASE_MESSAGING_SENDER_ID ?? "726231295908",
    appId:
      process.env.FIREBASE_APP_ID ??
      "1:726231295908:web:2ca6cc74b30c2486698331",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID ?? "G-KCKS6Q2JS8",
  });

  const providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
  };

  return { app, providers };
};

export const firebase = setupFirebase();
