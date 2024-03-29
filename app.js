/*&apikey=thewdb*/
var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.get("/results", function(req,res){
    var query = req.query.search;
    request("http://www.omdbapi.com/?s="+query+"&apikey=thewdb",function(error,response,body){
        if(!error && response.statusCode == 200){
            var parsedData=JSON.parse(body);
            res.render("results" ,{data : parsedData});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!!!");
});