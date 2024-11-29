import express from 'express';
import { resolve, dirname, join } from 'path';
const app = express();

const port = 3000;
const __dirname = resolve(dirname('')); 


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
  });

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, 'views/index.html'))
});


