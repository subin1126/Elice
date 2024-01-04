var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
const port = 8080;

http.createServer(function(req, res){
    if(req.method === "GET"){
        fs.readFile("./index.html", "utf8", function(error, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        })
    }

    else if(req.method === "POST"){
        req.on("data", function(chunk){
            console.log(chunk.toString());
            var data = querystring.parse(chunk.toString());
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end("id: "+data.id+", pw: "+data.pw);
        });
    };
})
.listen(port, function(){
    console.log("Server is running...");
})