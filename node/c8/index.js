const express = require('express');
const bodyParser = require('body-parser');

let api = express();

api.use(bodyParser.json());

api.get('/movies', );
api.get('/movies/:id', );
api.post('/movies', );
api.put('/movies/:id', );
api.delete('/movies/:id', );

api.listen(8080, (err) => {
    if (err) {
        console.log(error);
        return;
    }
});