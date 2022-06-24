const express = require('express');
const router = express.Router();

const {createNewEmployee, readEmployeeData, deleteEmployee} = require('../controller/employeeData');

router.route('/getDashboardStats').get(readEmployeeData);
router.route('/getDashboardStats/:id').delete(deleteEmployee);
router.route('/addNewEmployee').post(createNewEmployee);

module.exports = router;