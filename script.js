// Firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyB0dbcTmu0TVEFUeKnLmCuztcn47t_9MyQ",
  authDomain: "virtual-study-room-95bb1.firebaseapp.com",
  projectId: "virtual-study-room-95bb1",
  storageBucket: "virtual-study-room-95bb1.appspot.com",
  messagingSenderId: "995781311316",
  appId: "1:995781311316:web:145128a95373a7d2f1a6c1",
  measurementId: "G-D9DN8X4HH2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Manual Login
function manualLogin() {
  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;

  if (username && age) {
    localStorage.setItem("username", username);
    localStorage.setItem("age", age);
    window.location.href = "homepage.html";
  } else {
    alert("Please enter both username and age.");
  }
}

// Google Sign-In
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      localStorage.setItem("username", result.user.displayName);
      localStorage.setItem("email", result.user.email);
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error.message);
      alert("Google sign-in failed.");
    });
}
