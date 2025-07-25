// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0dbcTmu0TVEFUeKnLmCuztcn47t_9MyQ",
  authDomain: "virtual-study-room-95bb1.firebaseapp.com",
  projectId: "virtual-study-room-95bb1",
  storageBucket: "virtual-study-room-95bb1.appspot.com",
  messagingSenderId: "995781311316",
  appId: "1:995781311316:web:145128a95373a7d2f1a6c1",
  measurementId: "G-D9DN8X4HH2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleSignIn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Signed in user:", result.user);
      window.location.href = "homepage.html"; // Redirect on success
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error);
      alert("Google Sign-In Failed");
    });
});
