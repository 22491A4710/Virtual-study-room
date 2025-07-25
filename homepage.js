// Room ID generator
function generateRoomId(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Get logged in user
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  alert("Please login first.");
  window.location.href = "index.html";
}

// Update UI
document.getElementById("welcome").textContent = `Welcome, ${user.name}!`;
document.getElementById("confirmation").textContent = "Your Room is Ready!";

// Room Creation
document.getElementById("single-room-btn").addEventListener("click", () => {
  const roomData = {
    type: "Single User",
    roomId: generateRoomId(),
    creator: user.name,
    participants: []
  };

  localStorage.setItem("roomData", JSON.stringify(roomData));
  window.location.href = "room.html";
});

document.getElementById("multi-room-btn").addEventListener("click", () => {
  const participantName = prompt("Enter participant name to invite (optional):");

  const roomData = {
    type: "Multi User",
    roomId: generateRoomId(),
    creator: user.name,
    participants: participantName ? [participantName] : []
  };

  localStorage.setItem("roomData", JSON.stringify(roomData));
  window.location.href = "room.html";
});

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});
