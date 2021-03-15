const { brotliCompress } = require("zlib");
const { query } = require("../config/connection.js");
var connection = require("../config/connection.js");

// function helps add ? depending on the amount of values being passed.
function printQuestionMarks(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};


function objToSql(ob) {
    var arr = [];

    for(var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            // checks to make sure that if the value has spaces to add quotations around it as long as the space isnt the first past of the value
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                vale = "'" + value + "'";
            }
            // pushes the key and the value into the array as one item.
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
};

var orm = {
    // select all
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err
            }
            cb(result);
        });
    },
    // adding values
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);

        console.log(vals)
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

    // udating an existing task
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            } 
            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETED FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            } 
            cb(result)
        });
    }
}

module.exports = orm;