// Fetch user
const user = JSON.parse(localStorage.getItem("user"));
const welcomeMsg = document.getElementById("welcomeMsg");
const statusMsg = document.getElementById("statusMsg");

if (user) {
  welcomeMsg.textContent = `Welcome, ${user.name}!`;
  setTimeout(() => {
    statusMsg.textContent = "✅ Your Room is Ready!";
  }, 1000);
} else {
  welcomeMsg.textContent = "User not logged in.";
  statusMsg.textContent = "";
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

// Create room
window.createRoom = async function (type) {
  if (!user) return alert("Login required");

  const roomData = {
    type,
    createdBy: user.name,
    members: [user.name],
    createdAt: new Date().toISOString()
  };

  try {
    const docRef = await addDoc(collection(db, "rooms"), roomData);
    localStorage.setItem("roomID", docRef.id);
    window.location.href = "room.html";
  } catch (e) {
    console.error("Error creating room:", e);
    alert("Failed to create room.");
  }
};
