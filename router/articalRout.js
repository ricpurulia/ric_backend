const express = require('express')
const articalControlar = require('./../controlar/articalControlar')

const router = express.Router()

router
.route('/')
.get(articalControlar.getAllproject)
.post(articalControlar.createproject)


router
.route('/:id')
.get(articalControlar.getproject)
.patch(articalControlar.updateproject)
.delete(articalControlar.deleteproject)

module.exports = router