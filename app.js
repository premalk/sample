var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors  = require('cors');
var controller = require('./controllers');
var cookieParser = require('cookie-parser');
var port = 5657;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser());

app.use('/',controller);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
module.exports = app;