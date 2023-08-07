const express = require('express')
const eventController = require("../controllers/eventController")

const router = express.Router();

router.route('/').get(eventController.getAllEvent)
router.route('/').post(eventController.createEvent)

router.route('/:id').get(eventController.getevent)
router.route('/:id').get(eventController.updateEvent)
router.route('/:id').get(eventController.deleteEvent)
module.exports = router;