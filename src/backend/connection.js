let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "calendario"
  });

let data;
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM events", function (err, result, fields) {
      if (err) throw err;
       data = result;
       
    });
  }
);




