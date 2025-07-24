const express = require("express");
const router = express.Router();

// Show login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle login form POST
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Replace this logic with your own authentication
  if (email === "admin@example.com" && password === "1234") {
    req.session.user = email;
    res.redirect("/");  // redirect to home page
  } else {
    res.send("Invalid credentials");
  }
});

// Show register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Handle register POST
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  // Save logic here
  res.redirect("/login");
});

module.exports = router;
