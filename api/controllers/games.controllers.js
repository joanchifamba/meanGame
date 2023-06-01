const { parse } = require("dotenv");
const gamesData = require("../data/games.json"); 
module.exports.gamesGetAll = function (req, res) {
    console.log("GET all games"); 
    res.status(200).json(gamesData);
}

module.exports.getAll = function (req, res) {
    console.log("Get all games");
    console.log(req.query);
    let offset=0;
    let count=5;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset,10)
    }
    const pageGames=gamesData.slice(offset, offset+count);
    res.status(200).json(pageGames);
};