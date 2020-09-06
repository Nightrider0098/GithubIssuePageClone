var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "newton",
  multipleStatements: true
});


con.connect(function (err) {
  if (err) return console.log("failed to connect to book_store pls download mysql", err);

  else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;

