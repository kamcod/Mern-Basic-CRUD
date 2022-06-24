const express = require('express');
const router = express.Router();

const {createNewEmployee, readEmployeeData, deleteEmployee, updateEmployee} = require('../controller/employeeData');

router.route('/getDashboardStats').get(readEmployeeData);
router.route('/getDashboardStats/:id').delete(deleteEmployee).patch(updateEmployee);
router.route('/addNewEmployee').post(createNewEmployee);

module.exports = router;