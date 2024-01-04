var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
const port = 8080;

http.createServer(function(req, res){
    if(req.method === "GET"){
        fs.readFile("./index.html", "utf8", function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    };
})
.listen(port, function(){
    console.log("Server is running...");
});