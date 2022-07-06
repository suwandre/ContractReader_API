require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, async() => {
    console.log(`server running on port ${port}`);
})