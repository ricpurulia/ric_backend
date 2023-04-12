const express = require('express')
const contactusController = require("../controllers/contactusController")

const router = express.Router();

router.route('/').get(contactusController.getAllContact)
router.route('/').post(contactusController.createContact)

router.route('/:id').get(contactusController.getContact)
router.route('/:id').put(contactusController.updateContact)
router.route('/:id').delete(contactusController.deleteContact)
module.exports = router;