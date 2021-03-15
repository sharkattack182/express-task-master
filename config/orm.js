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
        if(Obkect.hasOwnProperty.call(ob, key)) {
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



