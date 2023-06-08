const mongoose = require("mongoose");
const gameSchema = require("../shemas/game.schema");
const Game = mongoose.model("meanGames", gameSchema, "games");


const getOne = function (req, res) {
    console.log("GET One Publisher Controller");
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function (err, game) {
        console.log("Found publisher ", game.publisher, " for Game ", game);
        res.status(200).json(game.publisher);
    });
}

const addOne = function (req, res) {
    console.log("Add One Publisher Controller");
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function (err, game) {
        console.log("Found game ", game);
        const response = {
            status: 200,
            message: game
        };
        if (err) {
            console.log("Error finding game");
            response.status = 500; response.message = err;
        } else if (!game) {
            console.log("Error finding game");
            response.status = 404;
            response.message = { "message": "Game ID not found " + gameId };
        }
        if (game) {
            _addPublisher(req, res, game);
        } else {
            res.status(response.status).json(response.message);
        }
    });
}
const _addPublisher = function (req, res, game) {
    game.publisher.name = req.body.name;
    game.publisher.country = req.body.country;
    game.publisher.established = req.body.established;
    game.publisher.location.coordinates = [parseFloat(req.body.lng),
    parseFloat(req.body.lat)];
    game.save(function (err, updatedGame) {
        const response = {
            status: 200,
            message: []
        };
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            response.status = 201;
            response.message = updatedGame.publisher;
        }
        res.status(response.status).json(response.message);
    });
}

const _updateOne = function (req, res, publisherUpdateCallback) {
    console.log("Update One Publisher Controller");
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function (err, game) {
        console.log("Found publisher ", game.publisher, " for Game ", game);
        const response = { status: 204, message: game };
        if (err) {
            console.log("Error Finding game");
            response.status = 500; response.message = err;
        } else if (!game) {
            console.log("Game with given ID not found");
            response.status = 404;
            response.message = { message: "Game ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        }
        publisherUpdateCallback(req, res, game);
    });
}
const _fullPublisherUpdate = function (req, res, game) {
    game.publisher.name = req.body.name;
    game.publisher.country = req.body.country;
    game.publisher.established = req.body.established;
    game.publisher.location.coordinates = [parseFloat(req.body.lng),
    parseFloat(req.body.lat)]; game.save(function (err, updatedGame) {
        const response = {
            status: 204,
            message: updatedGame.publisher
        };
        if (err) {
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}
const _partialPublisherUpdate = function (req, res, game) {
    if (req.body.name) { game.publisher.name = req.body.name;}
    if (req.body.country) {game.publisher.country = req.body.country;}
    if (req.body.established) {game.publisher.established = req.body.established; }
    if (req.body.lng && req.body.lat) {game.publisher.location.coordinates = [parseFloat(req.body.lng), parseFloat(req.body.lat)];}
    game.save(function (err, updatedGame) {
        const response = { status: 204, message: updatedGame.publisher }; if (err) {
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const fullUpdateOne = function (req, res) {
    console.log("Full Update One", req.body);
    _updateOne(req, res, _fullPublisherUpdate);
}
const partialUpdateOne = function (req, res) {
    console.log("Partial Update One", req.body);
    _updateOne(req, res, _partialPublisherUpdate);
}


const deletePublisher= function (req, res, game) {
    game.publisher = { name: "NoName" }; game.save(function(err, updatedGame) {
    const response= { status: 204,
    message: [] };
    if (err) {
    response.status= 500; response.message= err;
    }else { response.status= 201;
    response.message= updatedGame.publisher; }
    res.status(response.status).json(response.message); });
    }


module.exports = {
    deletePublisher:deletePublisher,
    getOne: getOne,
    addOne: addOne,
    fullUpdateOne: fullUpdateOne,
    partialUpdateOne: partialUpdateOne
}

