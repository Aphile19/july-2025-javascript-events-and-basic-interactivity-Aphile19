// ------------------
// Part 1: Event Handling
// ------------------
document.getElementById("messageBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "You clicked the button! 🎉";
});

// ------------------
// Part 2: Interactive Elements
// ------------------

// Dark/Light Mode
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// FAQ Toggle
document.querySelector(".faq-question").addEventListener("click", function() {
  document.querySelector(".faq-answer").classList.toggle("hidden");
});

// ------------------
// Part 3: Form Validation
// ------------------
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let feedback = "";

  // Validation rules
  if (name.length < 2) {
    feedback += "Name must be at least 2 characters long. ❌\n";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback += "Please enter a valid email. ❌\n";
  }
  if (password.length < 6) {
    feedback += "Password must be at least 6 characters. ❌\n";
  }

  if (feedback === "") {
    document.getElementById("formFeedback").textContent = "✅ Form submitted successfully!";
  } else {
    document.getElementById("formFeedback").textContent = feedback;
  }
});
