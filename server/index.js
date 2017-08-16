let express = require("express"),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require ('mongoose'),
    settings =  require('./config/settings.js'),
    PORT =  process.env.PORT || settings.port;

mongoose.connect("mongodb://localhost:27017/");

let authRouter = require("./routes/auth.js"),
    promptRouter = require("./routes/prompt-route.js"),
    app = express();


// socket.io
let socketIO = require('socket.io'),
    server = app.listen(PORT, ()=>{
        console.log(`server has started on ${PORT}`)
    }),
    io = socketIO(server),
    line_history = [];

app.use(express.static('../public'));

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