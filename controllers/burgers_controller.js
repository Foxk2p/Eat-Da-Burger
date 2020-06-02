const router = require('express').Router()
// burger path
const { Burger } = require('../models')


// RESTful routing (Representational State Transfer)

// GET all burgers
router.get('/burgers', (req, res) => {
  let burgers = list.getBurgers()
  res.json(burgers)
})

// // Get a burger
// router.get('/burgers/:id', (req, res) => {
//   let burger = list.getBurger()
//   res.json(burger)
// })

// POST a burger
router.post('/burgers', (req, res) => {
  list.addBurger(req.body)
  res.sendStatus(200)
})


// PUT a burger
router.put('/burgers/:burger_name', (req, res) => {
  list.updateBurger(req.params.text)
  res.sendStatus(200)
})


// DELETE a burger
router.delete('/burgers/:burger_name', (req, res) => {
  list.deleteBurger(req.params.text)
  res.sendStatus(200)
})


module.exports = router
