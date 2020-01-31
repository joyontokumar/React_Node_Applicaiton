// required express
const express = require('express');
const app = express();
app.use(express.json());
let cors = require('cors');
app.use(cors());
// add request
const request = require('request');
// require mongoose
const mongoose = require('mongoose');
// require router
const userRoute = require('./routes/userRoute');
// import database file
const config = require("./config/index");
const PORT = process.env.PORT || 5050;
// request moddleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// database connect 
(async () => {
    try {
        await mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected");
    } catch (error) {
        console.log(error)
    }
})()
// get all data
app.use('/api/users', userRoute);
app.listen(PORT, () => {
    console.log('server running');
})