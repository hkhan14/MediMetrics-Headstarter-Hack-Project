const express = require('express');
const mongoose = require('./mongoSetup'); // This will connect to MongoDB

const app = express();
const port = 3000;

// Your express routes and middleware

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
