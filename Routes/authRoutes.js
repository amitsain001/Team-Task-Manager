const express = require("express");
const router = express.Router();

const {
    signup,
    login,
    logout
} = require("../controllers/authController");

router.get("/signup", (req, res) => {
    res.render("auth/signup");
});

router.post("/signup", signup);

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post("/login", login);

router.get("/logout", logout);

module.exports = router;