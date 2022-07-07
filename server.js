require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const apiRoute = require('./routes');

app.use('/api', apiRoute);

app.listen(port, async() => {
    console.log(`server running on port ${port}`);
})