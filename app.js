const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');
//const config = require('config')
const mongoose = require('mongoose');
const cors = require('cors'); 
const port = 3000;//config.get('Deployment.settings.port');
const host = 'localhost';//config.get('Deployment.settings.host');
const router = express.Router();
const userController = require('./controllers/userController');
const pug = require('pug');

var url = "mongodb://localhost:27017/hackathon";

 
 // Use the cors middleware to enable Cross-Origin Resource Sharing
 app.use(cors());
 app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect("mongodb://localhost:27017/hackathon?directConnection=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 


// collection.insertOne({ hello : 'me' }, (err, result) => {
//   if (err) {
//     console.error('Error inserting document:', err);
//     return res.status(500).json({ error: 'Failed to insert document' });
//   }

//   res.status(201).json(result.ops[0]);
// });

app.post('/login', (req, res) => {
  console.log(req.body);
  const html = path.join(__dirname+'/public/html/index.html');
  res.json({html:html.toString()});
})


app.get('/index', (req, res) => {
  const html = path.join(__dirname+'/public/html/ApplicationStatus.html');
  res.sendFile(html);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/html/login.html'));
})


app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`);
})
