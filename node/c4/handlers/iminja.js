const fs = require('fs');
const IMINJA_FILE = './iminja.txt';
const getIminja=(req,res)=>{
    fs.readFile(IMINJA_FILE,'utf8',(err,data)=>{
        if (err){
            console.log('errorr while reading the file');
            res.status(500).send('could not read data');
            return;
        }
        let out = {
            iminja:data.split(' ')
        };
        res.render('iminja',out);
    });
    
};

const postIminja=(req , res )=>{
    fs.appendFile(IMINJA_FILE,` ${req.body.ime}`,(err)=>{
        if (err){
            console.log('errorr while uploading the file');
            res.status(500).send('could not update data');
            return;
        }
    });
    res.redirect('/iminja');
};

module.exports = {
    getIminja,
    postIminja
};