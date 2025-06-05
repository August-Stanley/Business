// script.js - Typing effect

const roles = [
  "Frontend Developer",
  "Web3 UI Architect",
  "Tech Explorer",
  "Interface Engineer"
];

let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;
const speed = 100;

function type() {
  const display = document.getElementById("typing-text");

  if (!isDeleting && j <= roles[i].length) {
    currentRole = roles[i].slice(0, j++);
  } else if (isDeleting && j > 0) {
    currentRole = roles[i].slice(0, j--);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(type, 1000);
    return;
  }

  display.textContent = currentRole;
  setTimeout(type, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", type);
