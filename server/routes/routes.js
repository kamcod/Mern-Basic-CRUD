const express = require('express');
const router = express.Router();

const {createNewEmployee, readEmployeeData} = require('../controller/employeeData');

router.route('/getDashboardStats').get(readEmployeeData);
router.route('/addNewEmployee').post(createNewEmployee);

module.exports = router;