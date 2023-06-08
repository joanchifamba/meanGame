require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

require("./api/data/db");
require("./api/shemas/game.schema.js")

const routes = require("./api/routes");


app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/", routes);

app.use("/api", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested - With, Content - Type, Accept');
    next();
});


const server = app.listen(process.env.PORT, function () {
    const port = server.address().port;
    console.log(process.env.MSG_SERVER, port)
})
