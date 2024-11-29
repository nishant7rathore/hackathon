const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
const __dirname = path.resolve(path.dirname('')); 

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});


