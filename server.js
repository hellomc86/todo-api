const express = require('express');
const route = require('./src/route');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(cors({ origin: '*' }));

app.use('/', route);

const server = app.listen(8081, function () {
  
   const port = server.address().port
   
   console.log("Example app listening port %s", port)
})