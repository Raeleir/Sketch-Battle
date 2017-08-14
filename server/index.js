let express = require("express");
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoose = require ('mongoose');
let settings =  require('./config/settings.js');
let PORT =  process.env.PORT || settings.port;
mongoose.connect("mongodb://localhost:27017/");

let authRouter = require("./routes/auth.js");

let app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);

app.listen(PORT, ()=>{
    console.log(`server has started on ${PORT}`)
})