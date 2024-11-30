const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');
//const config = require('config')

const port = 3000;//config.get('Deployment.settings.port');
const host = 'localhost';//config.get('Deployment.settings.host');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/html/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`);
})