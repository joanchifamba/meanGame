const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controllers");
router.route("/")
    .get(function (req, res) {
        console.log('GET received');
    });

router.route("/game")
    .get(gamesController.getAll);


router.route("/json")
    .get(function (req, res) {
        console.log("JSON request received");
        res.status(200).json({ "JSON_DATA": true });
    });

router.route("/games/:gameId")
    .get(gamesController.gamesGetAll);

module.exports = router;