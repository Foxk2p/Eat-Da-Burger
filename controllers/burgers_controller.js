const router = require('express').Router()
// burger path
const { Burger } = require('../models')

// GET all movies
router.get('/movies', (req, res) => Movie
  .getMovies(movies => res.json(movies)))

// GET one movie
router.get('/movies/:id', (req, res) => Movie
  .getMoviesWhere({ id: req.params.id }, movie => res.json(movie)))

// POST one movie
router.post('/movies', (req, res) => Movie
  .addMovie(req.body, info => res.json(info)))

// PUT one movie
router.put('/movies/:id', (req, res) => Movie
  .updateMovie(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE one movie
router.delete('/movies/:id', (req, res) => Movie
  .deleteMovie({ id: req.params.id }, info => res.json(info)))

module.exports = router


// tdr reference


// RESTful routing (Representational State Transfer)

// GET all items

router.get('/items', (req, res) => {
  let items = list.getItems()
  res.json(items)
})

// POST an item
router.post('/items', (req, res) => {
  list.addItem(req.body)
  res.sendStatus(200)
})

// PUT an item
router.put('/items/:text', (req, res) => {
  list.updateItem(req.params.text)
  res.sendStatus(200)
})

// DELETE an item
router.delete('/items/:text', (req, res) => {
  list.deleteItem(req.params.text)
  res.sendStatus(200)
})
