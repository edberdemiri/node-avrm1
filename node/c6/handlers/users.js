const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const users = require('../models/users');

const tokenKey = 'pwd123!';

const viewEditUser = (req, res) => {
    let user_id = req.params.id;
    let first_name = req.params.first_name;
    let last_name = req.params.last_name;
    let email = req.params.email;
    res.render('user_edit', { user_id: user_id, first_name: first_name, last_name: last_name, email: email });
}

const viewNewUser = (req, res) => {
    res.render('new_user')
}
const apiNewUser = (req, res) => {

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
                res.redirect('/dashboard')
                // res.status(201).send('created');
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
const apiEditUser = (req, res) => {
    if (req.body.first_name != undefined && req.body.first_name.length > 0) {
        users.update(req.body.id, { first_name: req.body.first_name });
    }
    if (req.body.last_name != undefined && req.body.last_name.length > 0) {
        users.update(req.body.id, { last_name: req.body.last_name });
    }
    if (req.body.email != undefined && req.body.email.length > 0) {
        users.update(req.body.id, { email: req.body.email });
    }
    if (req.body.password != undefined && req.body.password.length > 0 &&
        req.body.password2 != undefined && req.body.password2.length > 0 &&
        req.body.password2 === req.body.password) {
        let hash = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10) );   
        users.update(req.body.id, { password: hash });
    }
    
    res.redirect('/dashboard')
}
const viewDeleteUser = (req, res) => {
    let user_id = req.params.id;
    let email = req.params.email;
    res.render('user_delete', { user_id: user_id, email: email });
}
const apiDeleteUser = (req, res) => {
    users.remove(req.body.id)
    .then(()=>{
    res.redirect('/dashboard')})
}

module.exports = {
    viewEditUser,
    viewNewUser,
    apiNewUser,
    apiEditUser,
    apiDeleteUser,
    viewDeleteUser
}