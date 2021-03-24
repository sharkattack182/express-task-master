var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.envJAWSDB_URL)
} else {
   var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "rootroot",
    database: "tasks_db"
}); 
}


connection.connect();


module.exports = connection;