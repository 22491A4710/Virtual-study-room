// script.js

function login() {
  const username = document.getElementById("username").value.trim();
  const age = document.getElementById("age").value.trim();

  if (username && age) {
    alert(`Welcome ${username}!`);
    document.getElementById("login-section").style.display = "none";
    document.getElementById("mode-selection").style.display = "block";
  } else {
    alert("Please enter both username and age.");
  }
}

function googleSignup() {
  alert("Google Signup is under development.");
}

function enterSingleMode() {
  document.getElementById("mode-selection").style.display = "none";
  document.getElementById("single-mode").style.display = "block";
}

function addTask() {
  const task = document.getElementById("task").value.trim();
  const time = document.getElementById("time").value;

  if (task && time) {
    const li = document.createElement("li");
    li.textContent = `${task} - ${time}`;
    document.getElementById("todo-list").appendChild(li);

    document.getElementById("task").value = "";
    document.getElementById("time").value = "";
  } else {
    alert("Please enter task and time.");
  }
}