const express = require("express");
const router = express.Router();
const adminOnly = require("../middleware/roleMiddleware");

const protect = require("../middleware/authMiddleware");

const {
    getTasks,
    createTask,
    updateStatus
} = require("../controllers/taskController");

router.get("/", protect, getTasks);

router.post("/create", protect, adminOnly, createTask);

router.post("/status/:id", protect, updateStatus);

module.exports = router;