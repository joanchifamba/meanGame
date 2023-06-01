const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const routes= require("./api/routes");


app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
})
app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/",routes);
app.use("/json",routes);
app.use("/games",routes);

app.use("/games/:gameId",routes);


const server= app.listen(process.env.PORT, function(){
    const port= server.address().port;
    console.log(process.env.MSG_SERVER,port)
})
