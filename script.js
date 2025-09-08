// ================================
// Part 1: Event Handling
// ================================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// Dropdown Menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

dropdownMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    dropdownBtn.textContent = item.textContent;
    dropdownMenu.style.display = "none";
  });
});

// Tabbed Interface
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active classes
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Add active to clicked tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ================================
// Part 3: Form Validation
// ================================
const form = document.getElementById("registerForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Invalid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Registration successful!";
    form.reset();
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});
