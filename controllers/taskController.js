const { timingSafeEqual } = require("crypto");
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


router.put("/api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    task.update({
        completed: req.body.completed
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;