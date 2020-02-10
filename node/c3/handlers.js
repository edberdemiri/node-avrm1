const express = require ('express');
const bodyParses= require('body-parser');
const handlers = require ('handlers');

const index = (req,res)=>{
    res.send('ok');
};

const ime =(req,res)=>{
    res.send('pero');
};
const greetings = (req,res)=>{
    res.send(req.params.ime);
};

const calc1 = (req,res)=>{
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
  };

  const calc2 = (req,res)=>{
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
  };


module.exports={
    index,
    ime,
    greetings,
    calc1,
    calc2
};