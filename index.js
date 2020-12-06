const app = require("express")();
const server = require("http").createServer(app);
const options = {};
const io = require("socket.io")(server, options);

// app.use(express.static("public"));
console.log("My socket is running");

io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(3333);