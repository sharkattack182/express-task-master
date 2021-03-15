var express = require("express");
var router = express.Router();
var task = require("../models/tasks");

router.get("/", function(req, res) {
    task.all(function(data) {
        var hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

module.exports = router;