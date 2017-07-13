const express = require('express');
const app = express();
const port = 80;

app.listen(port, function () {
    console.log(`Node running on: ${port}`);
});

app.get('/', function (req, res) {
    res.status(200).send('This is server two');
});
