const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

const opts = {
    changeOrigin: true,
    pathRewrite: { '^/.*' : '/' }
};
const proxy1 = proxy('/', {target: 'http://webappa'});
const proxy2 = proxy('/', {target: 'http://webappb'});
const proxy3 = proxy('/', {target: 'http://webappc'});

app.use('/app-1', proxy1);
app.use('/app-2', proxy2);
app.use('/app-3', proxy3);

app.get('/', function (req, res) {
    res.type('html');
    res.send('<html><head><title>proxy</title></head><body><h1>This is the proxy speaking</h1></body></html>');
});

app.listen(80);
