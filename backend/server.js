const express = require('express');
const mongoose = require('./mongoSetup');

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
