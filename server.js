//var express = require("express");
var app =  require("express")();
var http = require("http").Server(app);
var path = require("path");
var io = require("socket.io")(http);

var PORT = process.env.PORT || 4000;

app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname + "/display/index.html"))

});

io.on("connection", function(socket) {
    console.log("A user connected");


    socket.on("chat message", function(msg) {
        io.emit("chat message", msg);
        console.log("message: " +msg);
    });

    socket.on("disconnect", function() {
        console.log("user disconnected");
    });
});

http.listen(PORT, function(){

    console.log("listening on PORT "+PORT);
});
