const express = require('express')
const projectControlar = require('../Controlar/projectControlar')

const router = express.Router()

router
.route('/')
.get(projectControlar.getAllproject)
.post(projectControlar.createproject)


router
.route('/:id')
.get(projectControlar.getproject)
.patch(projectControlar.updateproject)
.delete(projectControlar.deleteproject)

module.exports = router