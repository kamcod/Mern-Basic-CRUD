const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: String,
    designation: String,
    salary: Number

    // VALIDATION /////
    // name: {
    //     type: String,
    //     required: [true, 'must provide some name'],
    //     maxlength: [20, 'maximum words you can add is 20'],
    //     trim: true,
    //      default: "kam"
    // },
});

module.exports = mongoose.model('Employees', employeeSchema);