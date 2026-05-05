// proj.js
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // Example credentials
  let validUser = "student";
  let validPass = "12345";

  if(user === validUser && pass === validPass){
    alert("Access granted");
    window.location.href = "dashboard.html";
  } else {
    alert("Access denied");
  }
});
