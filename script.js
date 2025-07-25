// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration
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

// ✅ Normal login function
window.normalLogin = function () {
  const username = document.getElementById("username").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!username || !age) {
    alert("Please enter both Username and Age");
    return;
  }

  // Save to localStorage
  localStorage.setItem("user", JSON.stringify({ name: username, age }));
  // Redirect to homepage
  window.location.href = "homepage.html";
};

// ✅ Google Sign-In
document.getElementById("google-signin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify({
        name: user.displayName,
        email: user.email
      }));
      // Redirect to homepage
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error);
      alert("Google sign-in failed.");
    });
});
