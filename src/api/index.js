require('dotenv-flow').config();

const express = require('express');

const {addV1Routes} = require("./v1/index.js");

const {HTTP_PORT} = require('../constants.js');

const app = express();

addV1Routes(app);

app.listen(HTTP_PORT, () => console.log(`App listening at http://localhost:${HTTP_PORT}`));