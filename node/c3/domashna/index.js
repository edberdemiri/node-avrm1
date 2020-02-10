const fs = require ('fs');
const express = require ('express');
const bodyParses= require('body-parser');
var app = express();
app.use(bodyParses.urlencoded({extended:false})); 

app.get('/ime',(req,res)=>{
    fs.readFile('iminja.txt', 'utf8',(err,data)=>{
        if(err){console.log('could not read from file')};
      
    res.send(data);  
    })
});

app.post('/ime',(req,res)=>{
    fs.appendFile('iminja.txt'," , "+req.body.ime,(err)=>{
        if (err){console.log('could not append the file')};
        res.send('file updated succesfully');
    })
})

app.listen(8080);

