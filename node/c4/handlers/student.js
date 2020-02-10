const fs = require('fs');
const STUDENT_FILE = './student.json';

const readStudent = (req,res)=>{
    fs.readFile(STUDENT_FILE,'utf8',(err,data)=>{
        if (err){
            console.log('errorr while reading the file');
            res.status(500).send('could not read data');
            return;
        }
        let a = {
            student :JSON.parse(data)}
        res.render('student',a);    
    });
    
};

module.exports= {
    readStudent
};