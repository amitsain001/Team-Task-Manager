const Task = require("../models/Task");
const User = require("../models/User");
const Project = require("../models/Project");

exports.getTasks = async (req, res) => {

    const tasks = await Task.find()
        .populate("assignedTo")
        .populate("project");

    const users = await User.find();
    const projects = await Project.find();

    res.render("tasks", {
        tasks,
        users,
        projects
    });
};

exports.createTask = async (req, res) => {

    const {
        title,
        description,
        assignedTo,
        project,
        dueDate
    } = req.body;

    await Task.create({
        title,
        description,
        assignedTo,
        project,
        dueDate
    });

    res.redirect("/tasks");
};

exports.updateStatus = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.send("Task Not Found");
        }

        // RBAC Check

        if (
            task.assignedTo.toString() !== req.user._id.toString()
            &&
            req.user.role !== "Admin"
        ) {
            return res.status(403).render("accessDenied");
        }

        const allowedStatus = [
            "Pending",
            "In Progress",
            "Completed"
        ];

        if (!allowedStatus.includes(req.body.status)) {
            return res.send("Invalid Status");
        }

        // Update Task Status

        task.status = req.body.status;
        await task.save();
        res.redirect("/tasks");

    } catch (error) {

        console.log(error);
        res.send("Server Error");

    }

};