const express = require('express')
const userControllar = require('../Controlar/userControlar')
const authControlar = require('../Controlar/authControlar')

const router = express.Router()

router.post('/signup' , authControlar.signup)
router.post('/login' , authControlar.login)

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
