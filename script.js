// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);

// Monitor login status
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// Room Creation
async function createRoom() {
  const user = auth.currentUser;
  const roomType = document.getElementById("roomType").value;
  const task = document.getElementById("task").value;
  const timer = document.getElementById("timer").value;

  if (!task || !timer) {
    alert("Please enter task and timer.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "rooms"), {
      roomType: roomType,
      createdBy: user.uid,
      task: task,
      timer: timer,
      members: roomType === "multi" ? [user.uid] : [],
      createdAt: new Date()
    });

    const roomId = docRef.id;
    window.location.href = `room.html?roomId=${roomId}`;
  } catch (e) {
    console.error("Error adding room: ", e);
  }
}

// Logout
function logout() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  }).catch(error => {
    console.error("Sign out error:", error);
  });
}

window.createRoom = createRoom;
window.logout = logout;
