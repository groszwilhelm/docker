const express = require('express');
const app = express();
const appName = process.env.APP_NAME;
const appMessage = process.env.APP_MESSAGE;

app.get(new RegExp('/.*'), function (req, res) {
    res.type('html');
    res.send(`  <html>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
      <title>webapp no. ${appName}</title>
    </head>
    <body class="pure-g">
      <div class="pure-u-2-24"></div>
      <div class="pure-u-20-24">
        <h1>I SAY</h1>
        <p>${appMessage}</p>
      </div>
    </body>
  </html>`);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
