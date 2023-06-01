const express = require("express");
const router = express.Router();

router.route("/")
    .get(function (req, res) {
        console.log('GET received');
    });


router.route("/json")
    .get(function (req, res) {
        console.log("JSON request received");
        res.status(200).json({ "JSON_DATA": true });
    });

module.exports = router;