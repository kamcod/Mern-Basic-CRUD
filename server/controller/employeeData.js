
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
};
const deleteEmployee = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const data = await Tasks.findOneAndDelete({_id : taskId})
        if(!data){
            return res.status(400).json({msg: `No record found for this id`})
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({errMsg: error})
    }
};

const updateEmployee = async (req, res) =>{
    try {
        const {id: taskId} = req.params;
        const task = await Tasks.findOneAndUpdate({_id: taskId}, req.body, {
            new: true,
            runValidator: true
        })
        if(!task){
            return res.status(404).json({msg:`No record found for this id`})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {createNewEmployee, readEmployeeData, deleteEmployee, updateEmployee}