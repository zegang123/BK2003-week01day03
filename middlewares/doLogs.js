const os = require("os");
const fs = require("fs");

const setLog = (req,res,next) =>{
    let log = [];
    // ip
    log.push(req.ip);
    let time = new Date();
    let year = time.getFullYear;
    log.push(time);
    let fileName = time.toLocaleDateString().split("/").join("");
    log.push(req.url);
    log.push(req.headers["user-agent"]);
    fs.appendFile(`./logs/${fileName}.log`,log.join("  ") + os.EOL, (err) => {
        req.log = log;
        next();
    });
};
module.exports = setLog;