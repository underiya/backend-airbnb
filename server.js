// server.js
const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

// Enable CORS for all origins
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// API routes
const router = jsonServer.router(path.join(__dirname, "db.json"));
app.use("/api", router);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server URL: http://localhost:${PORT}/api/locations`);
});
