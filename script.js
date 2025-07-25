import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0dbcTmu0TVEFUeKnLmCuztcn47t_9MyQ",
  authDomain: "virtual-study-room-95bb1.firebaseapp.com",
  projectId: "virtual-study-room-95bb1",
  storageBucket: "virtual-study-room-95bb1.appspot.com",
  messagingSenderId: "995781311316",
  appId: "1:995781311316:web:145128a95373a7d2f1a6c1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Normal Login (just for redirection demo)
window.normalLogin = function () {
  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;

  if (username && age) {
    // You can store these in localStorage or Firestore
    localStorage.setItem("username", username);
    localStorage.setItem("age", age);
    window.location.href = "homepage.html";
  } else {
    alert("Please fill both fields");
  }
};

// Google Login
window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("username", result.user.displayName);
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      alert("Google Sign-In failed: " + error.message);
    });
};
