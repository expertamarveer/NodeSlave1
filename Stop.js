
const express = require('express');

const PORT = 8181;
//const HOST = '0.0.0.0';
const HOST = '127.0.0.1';
const app = express();
app.set('port', process.env.PORT || 8181);
//app.HOST  = HOST;
//app.PORT  = PORT;
app.close();
//process.exit();
 