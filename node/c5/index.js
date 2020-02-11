const db = require('./bootstrap/db');
const produkt = require('./models/produkt');

db.initDB();

produkt.createNew({
    "ime" : "tel",
    "proizvoditel" : "vitamiedbernka",
    "cena" : 1500.23,
    "tezina" : 5300.0,
    "parcinja" : 1
})
.then (()=>{
    return produkt.update("5e42b11c7398be20882cf088",{ime:"smoki so kikiriki"});
})
.then(()=>{
    return produkt.remove("5e42b24b7398be20882d38f0");
})
.then(()=>{
    return produkt.readAll();
})
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})