let c1 = require('./classes/c1');
var fetch = require('node-fetch');

let f =c1.c2f(20);
console.log(f);

let q =c1.f2c(68);
console.log(q);

fetch('https://jsonplaceholder.typicode.com/todos')
.then(resa => resa.json())
.then(dataa => console.log(dataa))
.catch(err => console.log(err));

