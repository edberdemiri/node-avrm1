const fs = require ("fs");
fs.writeFile('message.txt','hello world', (err) =>{
    if (err){ 
       throw err;
    }
console.log('the file has been saved!');
fs.appendFile('message.txt','hello world 2', (err) =>{
    if (err){ 
       throw err;
   }
console.log('the file has been saved!');
fs.readFile('message.txt','utf8',(err,data) =>
{
if (err) {console.log("errorr while reading")}
console.log(data);
}
);
});
});
const write = (file,content)=>{
    return new Promise ((succes, fail)=>{
        fs.writeFile(file,content,(err)=>{
            if (err){
                return fail(err);
            }
            return succes();
        });
    });
};
const append = (file, contentap)=>{
    return new Promise ((succes,fail)=>{
        fs.appendFile(file,contentap,(err)=>{
            if (err){
                return fail(err);
            }
            return succes();
        });
    });
};
const read = (file)=>{
    return new Promise ((succes,fail)=>{
        fs.readFile(file,'utf8',(err,data)=>{
            if (err){
                return fail(err);
            }
            return succes();
        });
    });
};
write('file.txt', 'some content')
.then(() => {
    return append('file.txt','SoMe Other CoNtEnT');
})
.then(()=>{
    return read('file.txt');
})
.then (data=>{
    console.log(data);
})
.catch (err =>{
    console.log('an error has occured')
});

let ime = `Edber`;
let pozdrav = `zdravo jas sum ${ime}`;

console.log(pozdrav);
console.log(pozdrav.length);

let poz =pozdrav.split('a');
console.log(poz);
