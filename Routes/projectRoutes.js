const express = require("express");
const router = express.Router();
const adminOnly = require("../middleware/roleMiddleware");

const protect = require("../middleware/authMiddleware");

const {
    getProjects,
    createProject
} = require("../controllers/projectController");

router.get("/", protect, getProjects);

router.post("/create", protect, adminOnly, createProject);

module.exports = router;