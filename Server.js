'use strict';

require("appdynamics").profile({
  controllerHostName: 'siemensil.saas.appdynamics.com',
  controllerPort: 443,
  controllerSslEnabled: true,  // Set to true if controllerPort is SSL
  accountName: 'siemensil',
  accountAccessKey: '2ili1qt6b0eu', //required
  applicationName: 'agent',
  tierName: 'yairagent',
  nodeName: 'yairagent'
 });
const express = require('express');
// Constants
//const PORT = 8080;
const PORT = 8181;
//const HOST = '0.0.0.0';
const HOST = '127.0.0.1';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
  //res.end();
});
app.listen(PORT, HOST);

//console.log('Running on http://${HOST}:${PORT}');
console.log("Running on http://",HOST,":",PORT,"}");