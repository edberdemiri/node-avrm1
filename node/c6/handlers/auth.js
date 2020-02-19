const bcrypt = require('bcryptjs');
const users = require('../models/users');

const viewLogin = (req, res) => {
    res.render('login');
}
const apiLogin = (req, res) => {
    if (req.body.email != undefined && req.body.email.length > 0 &&
        req.body.password != undefined && req.body.password.length > 0
        ) {
            users.getByEmail(req.body.email)
            .then(data=>{
                if (bcrypt.compareSync(req.body.password, data.password))
            {
                res.send('correct');
            }else{
                res.redirect('/')
            }
            })
            .catch(err=>{
                res.redirect('/');
            })
    }
    else {
        res.redirect('/');
    }
}
const viewRegister = (req, res) => {
    res.render('register');
}
const apiRegister = (req, res) => {
    if (
        req.body.first_name != undefined && req.body.first_name.length > 0 &&
        req.body.last_name != undefined && req.body.last_name.length > 0 &&
        req.body.email != undefined && req.body.email.length > 0 &&
        req.body.password != undefined && req.body.password.length > 0 &&
        req.body.password2 != undefined && req.body.password2.length > 0 &&
        req.body.password2 === req.body.password
    ) {
        let hash = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10)
        );
        users.createNew({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        })
            .then(() => {
                res.status(201).send('created');
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('internal server errorr');
            })
    } else {
        console.log(err);
        res.status(500).send('internal server errorr');
    }
}

module.exports = {
    viewLogin,
    apiLogin,
    viewRegister,
    apiRegister
}