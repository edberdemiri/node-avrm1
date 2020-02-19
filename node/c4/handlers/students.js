const fs = require('fs');
const STUDENTS_FILE = './students.json';

const getStudents = (req, res) => {
    fs.readFile(STUDENTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not open and read file');
            res.status(500).send('Could not read file');
            return;
        }
        let out = {
            students: JSON.parse(data)
        };
        res.render('students', out);
    });
};

const postStudents = (req, res) => {
    fs.readFile(STUDENTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not open and read file');
            res.status(500).send('Could not read file');
            return;
        }
        if (req.body.first_name != undefined) {
            data = JSON.parse(data);
            data.push({
                id: new Date().getTime(),
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                avg_grade: Number(req.body.avg_grade)
            });
            data = JSON.stringify(data);
            fs.writeFile(STUDENTS_FILE, data, (err) => {
                if (err) {
                    console.log('Could not write to file');
                    res.status(500).send('Could not write file');
                    return;
                }
                res.redirect('/students');

            });

        }
        if (req.body.deletee != undefined) {
            data = JSON.parse(data);
            delete data[`${req.body.deletee}`];
            
            
            console.log("After removal:", data);
           // data = data.splice(2,1);


            res.send(data);
        }
        if (req.body.ediit != undefined){
            function setUsername(id, edit , column) {
                for (var i = 0; i < data.length; i++) {
                  if (data[i].id === id) {
                    data[i].column = edit;
                    console.log('hellow');
                    return;
                  }
                }
              }
              setUsername(req.body.st udentselect,req.body.ediit,req.body.column);

        }

    });
};

module.exports = {
    getStudents,
    postStudents
};