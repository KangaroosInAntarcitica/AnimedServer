const mysql = require("mysql2");

const connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);

connection.connect();
connection.query(`CREATE DATEBASE animed;`, (err,row, field) => {
    if (err){
        throw  err;
    }
});

module.exports = true;