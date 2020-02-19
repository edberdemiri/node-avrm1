const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const student = require('./students');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

db.initDB();
app.get('/', (req, res) => {
    student.readAll()
        .then((data) => {
            let out = {
                students: data
            };
            res.render('students1', out);
        })
});

app.post('/', (req, res) => {
    if (req.body.first_name != undefined) {
        student.createNew({
            id: new Date().getTime(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            avg_grade: Number(req.body.avg_grade)
        })
            .then(() => {
                return student.readAll();
            })
            .then((data) => {
                let out = {
                    students: data
                };
                res.render('students1', out);
            })
    }
    if (req.body.deletee != undefined) {
        student.remove(`${req.body.deletee}`)
            .then(() => {
                return student.readAll();
            })
            .then((data) => {
                let out = {
                    students: data
                };
                res.render('students1', out);
            })
    }
    if (req.body.ediit != undefined){
        
        student.update(`${req.body.studentselect}`,{first_name:req.body.ediit})
        .then(() => {
            return student.readAll();
        })
        .then((data) => {
            let out = {
                students: data
            };
            res.render('students1', out);
        })
}

})

app.listen(8080);