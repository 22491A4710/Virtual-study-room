// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0dbcTmu0TVEFUeKnLmCuztcn47t_9MyQ",
  authDomain: "virtual-study-room-95bb1.firebaseapp.com",
  projectId: "virtual-study-room-95bb1",
  storageBucket: "virtual-study-room-95bb1.appspot.com",
  messagingSenderId: "995781311316",
  appId: "1:995781311316:web:145128a95373a7d2f1a6c1",
  measurementId: "G-D9DN8X4HH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign-in button event
document.getElementById("google-login").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Signed in as: " + user.displayName);
      // Redirect or show homepage here
    })
    .catch((error) => {
      console.error(error);
      alert("Google sign-in failed: " + error.message);
    });
});
