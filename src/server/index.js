const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), '/public')));

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is up @ https://localhost:${port}`);
  }
});
