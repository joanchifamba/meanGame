const express = require("express");
const router = express.Router();
require("../data/db")

const gamesController = require("../controllers/games.controllers");
const controllerPublisher = require("../controllers/publisher.controller");
const reviewsController = require("../controllers/reviews.controllers");

router.route("/games")
    .get(gamesController.getAll)
    .post(gamesController.addOne)


router.route("/games/:gameId")
    .get(gamesController.getOne)
    .put(gamesController.fullUpdateOne)
    .patch(gamesController.partialUpdateOne)
    .delete(gamesController.deleteOne);

router.route("/games/:gameId/publisher")
    .get(controllerPublisher.getOne)
    .post(controllerPublisher.addOne)
    .put(controllerPublisher.fullUpdateOne)
    .delete(controllerPublisher.deletePublisher);

router.route("/games/:gameId/reviews")
    .get(reviewsController.getAll)

router.route("/games/:gameId/reviews/:reviewId")
    .get(reviewsController.getOne)

module.exports = router;