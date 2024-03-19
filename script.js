document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "hafiz" && password === "1234") {
    window.location.href = "marklist.html"; // Redirect to marklist page
  } else {
    document.getElementById("loginMessage").textContent = "Invalid username or password. Please try again.";
  }
});
