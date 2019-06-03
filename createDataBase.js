const mysql = require("mysql2");

const connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);

connection.connect();
connection.query(`DROP DATABASE CREATE DATEBASE animed;`, (err,row, field) => {
    console.log(err);
});

module.exports = true;