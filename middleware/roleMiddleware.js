const adminOnly = (req, res, next) => {

    if (req.user.role !== "Admin") {
        return res.status(403).render("accessDenied");
    }

    next();
};

module.exports = adminOnly;