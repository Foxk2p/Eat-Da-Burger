const router = require('express').Router()
const burgerController = require('../controllers/burgers_controller')
// GET all burgers
router.get('/burgers', burgerController.getBurger)
