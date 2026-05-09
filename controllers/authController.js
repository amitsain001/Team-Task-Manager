const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.signup = async (req, res) => {

    const { name, email, password, role } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    const token = generateToken(user._id);
    res.cookie("token", token);
    res.redirect("/projects");
};

exports.login = async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.send("Invalid Credentials");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.send("Invalid Credentials");
    }

    const token = generateToken(user._id);
    res.cookie("token", token);
    res.redirect("/projects");
};

exports.logout = (req, res) => {

    res.clearCookie("token");
    res.redirect("/auth/login");

};