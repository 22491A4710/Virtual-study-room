const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('googleBtn').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => window.location.href = "welcome.html")
    .catch(err => alert(err.message));
});

function login() {
  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;

  if (username && age) {
    localStorage.setItem("user", JSON.stringify({ username, age }));
    window.location.href = "welcome.html";
  } else {
    alert("Please fill in all fields.");
  }
}
