var express = require("express");
var app =  express();
var path = require("path");
var io = require("socket.io")(app);

var PORT = process.env.PORT || 4000;

app.get("/", function(req, res) {

    res.sendfile(path.join(__dirname + "/display/index.html"))

});

io.on("connection", function(socket) {
    console.log("A user connected");
})


app.listen(PORT, function(){

    console.log("listening on PORT "+PORT);
});




