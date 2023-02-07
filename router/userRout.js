const express = require('express')
const userControllar = require('./../Controlar/userControlar')
const authcontrolar = require('../Controlar/authControlar')

const router = express.Router()

router.post('/signup' , authcontrolar.signup)
router.post('/login' , authcontrolar.login)

router
.route('/')
.get(userControllar.getAllUsers)
.post(userControllar.createUser)


router
.route('/:id')
.get(userControllar.getUser)
.patch(userControllar.updateUser)
.delete(userControllar.deleteUser)

module.exports = router
