const express = require("express");
const app = express();
const server = require("http").createServer(app);
const options = {};
const io = require("socket.io")(server, options);
const PORT = process.env.PORT || 3333;

app.use(express.static(__dirname + "/"));

// app.use(express.static("public"));
console.log("My socket is running");

io.on("connection", (socket) => {
  socket.on("text", (arg) => {
    console.log(arg);
    socket.broadcast.emit("text", arg);
  });
  socket.on("emoji", (arg) => {
    console.log(arg);
    socket.broadcast.emit("emoji", arg);
  });
});

server.listen(PORT);
