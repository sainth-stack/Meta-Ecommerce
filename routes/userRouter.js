const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const router = express.Router();
const middleware = require("../middleware");
const jwt = require("jsonwebtoken");
const UserData = require("../models/userModel");
const res = require("express/lib/response");
router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password, conformpassword } = req.body;
    let exist = await UserData.findOne({ email });
    if (exist) {
      return res.status(400).send("user already exist");
    }
    if (password !== conformpassword) {
      return res.status(400).send("password are not matching");
    }
    let newUser = new UserData({
      username,
      email,
      password,
      conformpassword,
    });
    await newUser.save();
    res.status(200).send("Register Successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exist = await UserData.findOne({ email });
    if (!exist) {
      return res.status(400).send("User not found");
    }
    if (exist.password !== password) {
      return res.status(400).send("Invalid credentials");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };

    jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

router.get("/myprofile", middleware, async (req, res) => {
  try {
    let exist = await UserData.findById(req.user.id);
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

router.post("/update", async (req, res) => {
  const { userEmail, updatedUser } = req.body;

  const userData = await UserData.find({ email: userEmail });
  console.log(userData);
  userData.username = updatedUser.name;
  userData.email = updatedUser.email;

  userData.save((err) => {
    if (err) {
      return res.status(400).json({ message: "Something went Wrong" });
    } else {
      res.send("review submitted successfully");
    }
  });
});
router.get("/getallusers",(req,res)=>{
    console.log('hello')
    UserData.find({},(err,docs)=>{
        if(err){
            return res.status(400).json({message:'something went wrong'})
        }
        else{
            res.send(docs)
        }
    })
})

module.exports = router;
