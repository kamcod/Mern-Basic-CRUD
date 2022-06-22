const express = require('express');
const router = express.Router();

const {readEmployeeData} = require('../controller/employeeData');

router.route('/getDashboardStats').get(readEmployeeData);

module.exports = router;