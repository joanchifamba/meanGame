const mongoose = require("mongoose");
require("../shemas/game.schema")
require("./games-model")


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology:true});

mongoose.connection.on("connected", function () {
    console.log("Mangoose connected to"+ process.env.DB_NAME );
});


mongoose.connection.on("disconnected", function () {
    console.log("Mangoose disconnected");
});

mongoose.connection.on("error", function (err) {
    console.log("Mangoose connection error " + err);
});

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected");
        process.exit(0)
    });
});


process.once("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app restart");
        process.kill(process.pid, "SIGUSR2");
    });
});