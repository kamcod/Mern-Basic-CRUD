const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: String,
    designation: String,
    salary: Number
});

module.exports = mongoose.model('Employees', employeeSchema);