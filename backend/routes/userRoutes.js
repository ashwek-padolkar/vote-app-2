const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { jwtAuthMiddleware, generateToken } = require("../jwt");

const checkAdminExists = async (req) => {
  try {
    if (req.body.role === "admin") {
      const adminExist = await User.findOne({ role: "admin" });

      if (adminExist) {
        return true;
      }
    }
  } catch (err) {
    return false;
  }
};

// POST method to send the user data
router.post("/signup", async (req, res) => {
  try {
    // Check if admin already exists. If yes then return error because only one admin is allowed.
    if (await checkAdminExists(req)) {
      return res
        .status(401)
        .json({ error: "Admin is already present. Only one admin is allowed" });
    }

    // Creating new user
    const data = req.body; // Assuming the request body contains the user data.

    console.log(data);

    // Create a new User document using the Mongoose model.
    const newUser = new User(data);

    // Save the new User to the database.
    const response = await newUser.save();
    console.log("data saved");

    const payload = {
      id: response.id,
    };

    console.log(JSON.stringify(payload));
    const token = generateToken(payload);
    console.log("Token is :", token);

    res.status(200).json({ response: response, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    // Extract username and password from request body
    const { aadharCardNumber, password } = req.body;

    // Find the user by aadharCardNumber
    const user = await User.findOne({ aadharCardNumber: aadharCardNumber });

    // If user does not exists or password does not match, return error
    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ error: "Invalid Aadharcard Number and password" });
    }

    // generate Token
    const payload = {
      id: user.id,
    };

    const token = generateToken(payload);

    // return token as response
    res.json({ token: token, role: user.role });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Profile Route
router.get("/profile", jwtAuthMiddleware, async (req, res) => {
  try {
    const userData = req.user;

    const userId = userData.id;
    const user = await User.findById(userId);

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Password
router.put("/profile/password", jwtAuthMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Extract the id from the token.
    const { currentPassword, newPassword } = req.body; // Extract the current and new password from the request body.

    // Find the user by userId
    const user = await User.findById(userId);

    // If password does not match, return error
    if (!(await user.comparePassword(currentPassword))) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Update the user's password
    user.password = newPassword; // Update the password.
    await user.save();

    console.log("password updated");
    res.status(200).json({ message: "Password updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
