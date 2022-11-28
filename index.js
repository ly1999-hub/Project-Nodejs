const express = require('express')
const app = express();
const InitDB = require('./internal/models/initDB')
const bodyParser = require('body-parser')

InitDB.initMongoDB()

const port = 8080;
const attire = require('./product/routers/attire')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/attire', attire);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});