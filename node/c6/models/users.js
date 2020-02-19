const mongoose = require('mongoose');
const User = mongoose.model(
    'user',
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String
    },
    'user'
);

const readAll = () => {
    return new Promise((success, fail) => {
        User.find({}, (err, data) => {
            if (err) {
                return fail();
            }
            return success(data);
        });
    });
};

const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new User(data);
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
        User.deleteOne({ _id: id }, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        User.updateOne({ _id: id }, data, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const getByEmail = (email) => {
    return new Promise((success, fail) => {
        User.findOne({ email: email }, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        })
    });
}

module.exports = {
    User,
    readAll,
    createNew,
    remove,
    update,
    getByEmail
};