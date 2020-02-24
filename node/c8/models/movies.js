const mongoose = require('mongoose');
const Movie = mongoose.model(
    'movies', {
        title: String,
        release_date: Date,
        director: String,
        actors: [String],
        genre: [String]
    },
    'movies'
);

const readAll = () => {
    return new Promise((success, fail) => {
        Movie.find({}, (err, data) => {
            if (err) {
                return fail();
            }
            return success(data);
        });
    });
};

const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new Movie(data);
        p.save((err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const remove = (id) => {
    return new Promise((success, fail) => {
        Movie.deleteOne({ _id: id }, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        Movie.updateOne({ _id: id }, data, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const getByEmail = (email) => {
    return new Promise((success, fail) => {
        Movie.findOne({ email: email }, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        })
    });
}
const getById = (id) => {
    return new Promise((success, fail) => {
        Movie.findOne({ _id: id }, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        })
    });
}

module.exports = {
    Movie,
    readAll,
    createNew,
    remove,
    update,
    getByEmail,
    getById
};