const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');
// const proxy = require('http-proxy');
// const apiProxy = proxy.createProxyServer();
const port = 80;

// const serverOne = 'http://node1';
// const serverTwo = 'http://node2';
// const serverThree = 'http://node3';

// app.all("/web1.localhost*", function(req, res) {
//     console.log('redirecting to server1');
//     apiProxy.web(req, res, {target: serverOne});
//     apiProxy.on('proxyRes', function(err, pReq, pRes) {
//         res.send(pRes.body);
//     });
// });

// app.all("/web2.localhost*", function(req, res) {
//     console.log('redirecting to server1');
//     apiProxy.web(req, res, {target: serverTwo});
// });

// app.all("/web3.localhost*", function(req, res) {
//     console.log('redirecting to server1');
//     apiProxy.web(req, res, {target: serverThree});
// });

const opts = {
    changeOrigin: true,
    pathRewrite: { '^/.*' : '/' }
}

const proxy1 = proxy('/', {target: 'http://node1', changeOrigin: true, pathRewrite: { '^/.*' : '/' }});
const proxy2 = proxy('/', {target: 'http://node2', changeOrigin: true, pathRewrite: { '^/.*' : '/' }});
const proxy3 = proxy('/', {target: 'http://node3', changeOrigin: true, pathRewrite: { '^/.*' : '/' }});

app.all('/app-1', proxy1);
app.all('/app-2', proxy2);
app.all('/app-3', proxy3);

app.get('/', function (req, res) {
    res.status(200).send('This is proxy server');
});

app.listen(port, function () {
    console.log(`Node running on: ${port}`);
});