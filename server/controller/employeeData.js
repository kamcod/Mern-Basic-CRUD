
const Tasks = require('../model/schema')

const createNewEmployee = async (req, res) => {
const task = await Tasks.create(req.body);
res.status(201).json(task);

};

const readEmployeeData = async (req, res) => {
    try {
        const data = await Tasks.find({})
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({errMsg: error})
    }

// res.end();  in node
};

module.exports = {createNewEmployee, readEmployeeData}