const router = require('express').Router()
// burger path
const { Burger } = require('../models')

// GET all movies
router.get('/burgers', (req, res) => Burger
  .getBurgers(burgers => res.json(burgers)))

// GET one movie
router.get('/burgers/:id', (req, res) => Burger
  .getBurgersWhere({ id: req.params.id }, burger => res.json(burger)))

// POST one movie
router.post('/burgers', (req, res) => Burger
  .addBurger(req.body, info => res.json(info)))

// PUT one movie
router.put('/burgers/:id', (req, res) => Burger
  .updateBurger(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE one movie
router.delete('/burgers/:id', (req, res) => Burger
  .deleteBurger({ id: req.params.id }, info => res.json(info)))

module.exports = router

// todoapp repo reference

// module.export = {
//   getBurger: (req, res) => {
//     let burgers = list.getBurgers()
//     res.json(burgers)
//   }
// }
// // RESTful routing (Representational State Transfer)

// // GET all burgers
// router.get('/burgers', (req, res) => {
//   let burgers = list.getBurgers()
//   res.json(burgers)
// })

// // // Get a burger
// // router.get('/burgers/:id', (req, res) => {
// //   let burger = list.getBurger()
// //   res.json(burger)
// // })

// // POST a burger
// router.post('/burgers', (req, res) => {
//   list.addBurger(req.body)
//   res.sendStatus(200)
// })


// // PUT a burger
// router.put('/burgers/:burger_name', (req, res) => {
//   list.updateBurger(req.params.burger_name)
//   res.sendStatus(200)
// })


// // DELETE a burger
// router.delete('/burgers/:burger_name', (req, res) => {
//   list.deleteBurger(req.params.burger_name)
//   res.sendStatus(200)
// })
