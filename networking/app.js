const express = require('express');
const connection = require('./mysqlConnection').connection;
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log(`Node running on: ${port}`);
});

app.get('/', function (req, res) {
    sendData(res);
});

function sendData(res) {
    let query = 'SELECT * FROM users';

    connection.query(query, function (err, rows) {
        if (err) {
            return err;
        } else {
            let template = '';
            for (let i = 0; i < rows.length; i++) {
                template += 
                    `<div> 
                        <p> Id: ${rows[i].id} </p>
                        <p> Username: ${rows[i].name} </p>
                        <p> Email: ${rows[i].email} </p>
                        <p> Created: ${rows[i].created_at} </p>
                    </div>`
            }

            return res.send(template);
        }
    });
}
