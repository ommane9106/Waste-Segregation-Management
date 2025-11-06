// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // serve HTML, CSS, JS

// Handle contact form POST
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email) {
    return res.json({ success: false, error: "Name and Email are required." });
  }

  console.log("New Contact Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // You can save it to a file or DB here
  return res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
