const fs = require("fs");
const userinfoLog = require("../LogUserInfo/userinfoLog.json");
const path = require("path");
// const userData = [];

const userInfo = (req, res, next) => {
   console.log("Inside Application Level middleware");

   const newData = {
      url: req.url,
      method: req.method,
   };
   userinfoLog.push(newData);

   fs.writeFile(
      path.join(__dirname, "..", "LogUserInfo", "userinfoLog.json"),
      JSON.stringify(userinfoLog),
      (err) => {
         if (err) {
            return res.status(400).json({
               message: err,
            });
         }

         console.log("User Data inserted");
         next();
      }
   );
};

module.exports = { userInfo };
