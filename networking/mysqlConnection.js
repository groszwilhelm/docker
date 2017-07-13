const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'usersdb'
});

module.exports = {
    connection: connection
}