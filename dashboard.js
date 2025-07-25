// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0dbcTmu0TVEFUeKnLmCuztcn47t_9MyQ",
  authDomain: "virtual-study-room-95bb1.firebaseapp.com",
  projectId: "virtual-study-room-95bb1",
  storageBucket: "virtual-study-room-95bb1.appspot.com",
  messagingSenderId: "995781311316",
  appId: "1:995781311316:web:145128a95373a7d2f1a6c1",
  measurementId: "G-D9DN8X4HH2"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html"; // Redirect to login if not signed in
  }
});

// Create Room
window.createRoom = async function(type) {
  const user = auth.currentUser;
  if (!user) return alert("User not signed in");

  try {
    const roomRef = await addDoc(collection(db, "rooms"), {
      type: type,
      creator: user.uid,
      createdAt: serverTimestamp(),
      participants: type === "multi" ? [user.uid] : [],
    });

    // Save room ID and redirect
    localStorage.setItem("roomId", roomRef.id);
    window.location.href = "room.html";
  } catch (err) {
    console.error("Error creating room:", err);
    alert("Failed to create room.");
  }
};

// Logout
window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
