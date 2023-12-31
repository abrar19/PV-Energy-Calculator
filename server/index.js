require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');

//Database Connection
connection();

//Middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on port ${port}`));