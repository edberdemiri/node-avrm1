const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
const hbs = require('hbs');
const db = require('./bootstrap/db');
const users = require('./handlers/users');
const auth = require('./handlers/auth');
const dashboard = require('./handlers/dashboard');

db.initDB();

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use((req, res, next) => {
    let whitelist = [
        '/',
        '/register'
    ];
    if (!whitelist.includes(req.path)) {
        if (req.cookies.jwt) {
            jwt.verify(req.cookies.jwt, auth.tokenKey, (err, payload) => {
                if (err) {
                    return res.status(401).send('unathorized');
                }
                return next();
            })
        } else {
            return res.status(401).send('unathorized');
        }
    } else {
        return next();
    }
});

app.get('/', auth.viewLogin);
app.post('/', auth.apiLogin);

app.get('/register', auth.viewRegister);
app.post('/register', auth.apiRegister);

app.get('/dashboard', dashboard.viewDashboard);

app.listen(8080, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Started on port 8080');
})