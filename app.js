const express = require('express');
const database = require('./config/dataBaseUrl');
const mongoose = require('mongoose');
const app = express();

const stationRouter = require('./routes/station');
const userRouter = require('./routes/user');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json);
app.use(express.urlencoded({extended: true}));

mongoose.connect(database.url, {useNewUrlParser: true});

app.use('/stations', stationRouter);
app.use('/users', userRouter);


app.listen(3000, err =>{
    if(err)console.log(err);
    else console.log('Listening 3000');
});
