
const createNewEmployee = () => {

};

const readEmployeeData = (req, res) => {
res.status(200).json({name: "john", designation: "developer", salary: 40000});
res.end();
};

module.exports = {createNewEmployee, readEmployeeData}