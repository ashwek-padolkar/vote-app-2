const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

// Handling cors
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET, POST, DELETE, PATCH, PUT, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Welcome");
});

// 1. User Router
// Import the router files
const userRoutes = require("./routes/userRoutes");

// Use the router
app.use("/user", userRoutes);

// 2. Candidate Router
// Import the router files
const candidateRoutes = require("./routes/candidateRoutes");
const { method } = require("lodash");

// Use the router
app.use("/candidate", candidateRoutes);

// Listening to Port
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});

// Done.
