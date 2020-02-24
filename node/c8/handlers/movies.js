const db = require('../bootstrap/db');
const movies = require('../models/movies');
db.initDB();

const getMovies = (req, res) => {
    movies.readAll()
        .then(data => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('server errorr');
        })

}
const getMoviesId = (req, res) => {
    movies.getById(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('server errorr');
        })

}
const postMovies = (req, res) => {
    movies.createNew(req.body)
        .then(
            res.send('created')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).send('server errorr');
        })
}
const putMovies = (req, res) => {
    movies.update(req.params.id, req.body)
        .then(() => {
            res.send('update successfull');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('server errorr');
        })
}
const deleteMovies = (req, res) => {
    movies.remove(req.params.id)
        .then(() => {
            res.send('user deleted')
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('server errorr');
        })

}

module.exports = {
    getMovies,
    getMoviesId,
    postMovies,
    putMovies,
    deleteMovies
}