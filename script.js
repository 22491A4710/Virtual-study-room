// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB0dbcTmu0TVEFUeKnLmCuztcn47t_9MyQ",
  authDomain: "virtual-study-room-95bb1.firebaseapp.com",
  projectId: "virtual-study-room-95bb1",
  storageBucket: "virtual-study-room-95bb1.appspot.com",
  messagingSenderId: "995781311316",
  appId: "1:995781311316:web:145128a95373a7d2f1a6c1",
  measurementId: "G-D9DN8X4HH2"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Check Auth Status
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("welcome-message").textContent = `Welcome, ${user.displayName}!`;
    document.getElementById("user-photo").src = user.photoURL;
  } else {
    window.location.href = "index.html"; // Redirect if not logged in
  }
});

// Logout
document.getElementById("logout-btn").onclick = () => {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
};

// Task Logic
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskTime = document.getElementById("task-time");
  const list = document.getElementById("task-list");

  if (!taskInput.value || !taskTime.value) {
    alert("Please enter both task and time.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskInput.value} - ⏱ ${taskTime.value} mins 
    <button onclick="this.parentElement.remove()">❌</button>
  `;
  list.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
}
