const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res){
res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmicalculator",function(req,res){
var height=parseFloat(req.body.height);
var weight=parseFloat(req.body.weight);
var bmi=weight/(height*height);

res.send("<b>The Calculated BMI is :</b>" + bmi);

});



app.listen(3000,function(){
console.log("server is started on the port 3000");


});