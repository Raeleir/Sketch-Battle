let express = require("express");
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoose = require ('mongoose');
let settings =  require('./config/settings.js');
let PORT =  process.env.PORT || settings.port;
mongoose.connect("mongodb://localhost:27017/");

let authRouter = require("./routes/auth.js");
let promptRouter = require("./routes/prompt-route.js");

let app = express();


// socket.io
let socketIO = require('socket.io');

let server = app.listen(PORT, ()=>{
        console.log(`server has started on ${PORT}`)
    });
let io = socketIO(server);
app.use(express.static('../public'));

let line_history = [];

io.on('connection', function (socket) {
   for (let i in line_history) {
      socket.emit('draw_line', { line: line_history[i] } );
   }

   socket.on('draw_line', function (data) {
      line_history.push(data.line);
      io.emit('draw_line', { line: data.line });
   });
});
// socket.io


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/prompt", promptRouter);