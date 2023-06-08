const mongoose = require("mongoose");
const gameSchema = require("../shemas/game.schema");
const Game = mongoose.model("meanGames", gameSchema, "games");
module.exports=Game