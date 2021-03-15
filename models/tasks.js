var orm = require("../config/orm");

var task = {
    all: function(cb) {
        orm.all("task", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals,cb) {
        orm.create("task", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("task", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("task", conditon, function(res) {
            cb(res);
        });
    }
};


module.exports = task;