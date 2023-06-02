const fs = require(("fs"));
const userinfoLog = require("../LogUserInfo/userinfoLog.json");

// const userData = [];

const userInfo = (req, res, next) => {
    console.log("Inside Application Level middleware");

    const newData = {
        "url": req.url,
        "method": req.method
    };
    userinfoLog.push(newData);
    // console.log(userData);

    fs.writeFile("LogUserInfo/userinfoLog.json", JSON.stringify(userinfoLog), (err) => {
        if (err) {
            res.status(400).json({
                message: err
            });
        }
        console.log("User Data inserted");
    });

    next();
};

module.exports = { userInfo };