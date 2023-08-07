const express = require('express');
const AdminController = require('../controllers/AdminControlar');

const router = express.Router();
router.route('/').get(AdminController.getAllAdmin);

module.exports = router;