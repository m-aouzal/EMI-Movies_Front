
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged, signInAnonymously,
  signInWithEmailAndPassword, signInWithPopup
} from "@angular/fire/auth";
import firebase from "firebase/compat";
import User = firebase.User;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxS4naNKkdd_0p9H0_o4v6BGIkRhZGzhs",
  authDomain: "emimovies-7cffb.firebaseapp.com",
  projectId: "emimovies-7cffb",
  storageBucket: "emimovies-7cffb.appspot.com",
  messagingSenderId: "676503450416",
  appId: "1:676503450416:web:dc0b9dca067f25f5b8cef5",
  measurementId: "G-PTYN4G4BGD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export const registerUser = async (email : string, password : string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email : string, password : string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

/*
export const getCurrentUser = async () => {
  return new Promise<User | null>((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
*/

export const signInAnonymouslyUser = async () => {
  return await signInAnonymously(auth);
}

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
}

export const logoutUser = () => {
  return auth.signOut();
}
