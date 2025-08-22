const express = require("express");
const router = express.Router();

/// Local store 
let Data = [
  {
    "firstName": "John",
    "lastName": "Doe",
    "dob": "1990-01-01"
  },
  {
    "firstName": "Alex",
    "lastName": "li",
    "dob": "1998-11-21"
  },
  {
    "firstName": "Scott",
    "lastName": "Mac",
    "dob": "2000-07-04"
  },
  {
    "firstName": "Bella",
    "lastName": "looe",
    "dob": "2023-02-04"
  },
];

// GET API
router.get("/user", async (req, res) => {
  try {
    res.status(200).json(Data);
  } catch (error) {
    res.status(500).json({ "msg": "Error while getting users" });
  }
});

// POST API
router.post("/user", async (req, res) => {
  try {
    const user = req.body;

    if (!user.firstName || !user.lastName || !user.dob) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    Data.push(user);
    console.log("Updated Users:", Data);

    res.status(201).json({ msg: "User saved successfully", user });
  } catch (error) {
    res.status(500).json({ "msg": "Error while saving user" });
  }
});

module.exports = router;
