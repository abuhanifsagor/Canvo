import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

// -------------------------------
// CREATE EMAIL ACCOUNT
// -------------------------------
export async function createAccount(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

// -------------------------------
// UPDATE PROFILE
// -------------------------------
export async function updateUserProfile(user, name, photoURL) {
  return await updateProfile(user, {
    displayName: name,
    photoURL,
  });
}

// -------------------------------
// EMAIL LOGIN
// -------------------------------
export async function loginAccount(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

// -------------------------------
// PASSWORD RESET
// -------------------------------
export async function resetPassword(email) {
  return await sendPasswordResetEmail(auth, email);
}

// -------------------------------
// GOOGLE LOGIN + SAVE TO BACKEND
// -------------------------------
export async function googleLogin() {
  // Sign in with Google Firebase popup
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  return user;
}
