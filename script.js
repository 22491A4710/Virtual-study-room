// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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
const auth = getAuth();
const provider = new GoogleAuthProvider();

window.normalLogin = function () {
  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  if (username && age) {
    alert(`Welcome ${username}, Age: ${age}`);
    // You can redirect to homepage here
  } else {
    alert("Please enter username and age");
  }
};

document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome ${user.displayName}!`);
      // Redirect to dashboard/home
    })
    .catch((error) => {
      alert("Google sign-in failed: " + error.message);
    });
});
