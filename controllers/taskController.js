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
});

router.post("/api/tasks", function(req, res) {
    task.create([
      "task_name", "task_description"
    ], [
      req.body.task_name, req.body.task_description
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

module.exports = router;