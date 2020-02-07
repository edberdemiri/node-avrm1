const express = require ('express');
const bodyParses= require('body-parser');



var app = express();

app.use(bodyParses.urlencoded({extended:false})); // reading body from post request 
app.get ('/',(req,res)=>{
    res.send('ok');
});

app.get ('/ime',(req,res)=>{
    res.send('pero');
});

app.get ('/page/:ime',(req,res)=>{
    res.send(req.params.ime);
});

app.get ('/calc/:meth/:num1/:num2',(req,res)=>{
  let a = 0;
    if(req.params.meth == 'add'){
        a = Number(req.params.num1) + Number(req.params.num2);        
    }
    if(req.params.meth == 'div'){
        a = Number(req.params.num1) / Number(req.params.num2);        
    }
    if(req.params.meth == 'mul'){
        a = Number(req.params.num1) * Number(req.params.num2);    
    }
    if(req.params.meth == 'sub'){
        a = Number(req.params.num1) - Number(req.params.num2);        
    }
    res.send(''+a);
});

app.post('/values', (req,res)=>{
 res.send(`response:'+ ${req.body.age} + ${req.body.ime}`);
})

app.post ('/calc/',(req,res)=>{
    let a = 0;
      if(req.body.meth == 'add'){
          a = Number(req.body.num1) + Number(req.body.num2);        
      }
      if(req.body.meth == 'div'){
          a = Number(req.body.num1) / Number(req.body.num2);        
      }
      if(req.body.meth == 'mul'){
          a = Number(req.body.num1) * Number(req.body.num2);    
      }
      if(req.body.meth == 'sub'){
          a = Number(req.body.num1) - Number(req.body.num2);        
      }
      res.send(''+a);
  });


app.listen(8080);