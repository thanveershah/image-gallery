const checkAuth = (req, res, next) => {
    const { auth } = req.body;
    if (!auth) {
        return res.status(401).json({
            message: "unauthorized"
        });
    }
    console.log("Inside Specific middleware : CheckAuth");
    next();
}

module.exports = { checkAuth };