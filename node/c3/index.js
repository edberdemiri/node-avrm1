const express = require ('express');
const bodyParses= require('body-parser');
const handlers = require ('handlers');
var app = express();
app.use(bodyParses.urlencoded({extended:false})); // reading body from post request 

app.get ('/',handlers.index);
app.get ('/ime',handlers.ime);
app.get ('/page/:ime',handlers.greetings);

app.get ('/calc/:meth/:num1/:num2',handlers.calc1);

app.post('/values', (req,res)=>{
 res.send(`response:'+ ${req.body.age} + ${req.body.ime}`);
})

app.post ('/calc/',handlers.calc2);


app.listen(8080);