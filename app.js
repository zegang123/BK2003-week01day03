const express = require("express");

const app = express();
const setLog = require("./middlewares/doLogs.js");
app.use(setLog);

app.get("", (req,res) =>{
    res.send(req.log);
});
app.listen(8080 , () =>{
    console.log("server is running at http://127.0.0.1:8080");
});