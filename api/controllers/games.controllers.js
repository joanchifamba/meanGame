const gamesData = require("../data/games.json"); 
module.exports.gamesGetAll = function (req, res) {
    console.log("GET all games"); 
    res.status(200).json(gamesData);
}

module.exports.getAll = function (req, res) {
    console.log("JSON GET received");
    res.status(200).json({ "jsonData": "GET" });
};