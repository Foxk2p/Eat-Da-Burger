const router = require('express').Router()
const burgerController = require('../controllers/burger_controller')
// GET all burgers
router.get('/burgers', burgerController.getBurger)
