const Project = require("../models/Project");

exports.getProjects = async (req, res) => {

    const projects = await Project.find()
        .populate("createdBy")
        .populate("teamMembers");

    res.render("projects", {
        projects,
        user: req.user
    });
};

exports.createProject = async (req, res) => {

    const { projectName, description } = req.body;

    await Project.create({
        projectName,
        description,
        createdBy: req.user._id
    });

    res.redirect("/projects");
};