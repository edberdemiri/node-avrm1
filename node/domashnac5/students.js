const mongoose = require('mongoose');
const Student = mongoose.model(
    'students',
    { 
        id: Number,
        first_name: String,
        last_name: String,
        address: String,
        avg_grade: Number
    },
    'students'
);

const readAll = () => {
    return new Promise((success, fail) => {
        Student.find({}, (err, data) => {
            if (err) {
                return fail();
            }
            return success(data);
        });
    });
};

const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new Student(data);
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
        Student.deleteOne({ id: id }, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        Student.updateOne({ id: id }, data, (err) => {
            if (err) {
                return fail();
            }
            return success();
        });
    });
};

module.exports = {
    Student,
    readAll,
    createNew,
    remove,
    update
};