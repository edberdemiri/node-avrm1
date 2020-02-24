const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./handlers/movies');

let api = express();

api.use(bodyParser.json());

api.get('/movies', movies.getMovies);
api.get('/movies/:id', movies.getMoviesId);
api.post('/movies', movies.postMovies);
api.put('/movies/:id', movies.putMovies);
api.delete('/movies/:id', movies.deleteMovies);

api.listen(8080, (err) => {
    if (err) {
        console.log(error);
        return;
    }
});