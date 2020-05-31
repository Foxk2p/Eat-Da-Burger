const router = require('express').Router()
// burger path. Burger was Originally Movie. Included song model too.
const { Burger } = require('../models')

router.get('/', (req, res) => {
  res.render('home', {
    name: 'BURGER'
  })
})

// router.get('/movies', (req, res) => {
//   Movie.getMovies(movies => {
//     res.render('movies', { movies })
//   })
// })

module.exports = router





// router.get('/', (req, res) => {
//   res.render('home', {
//     name: 'John Doe'
//   })
// })

// router.get('/movies', (req, res) => {
//   Movie.getMovies(movies => {
//     res.render('movies', { movies })
//   })
// })

// router.get('/songs', (req, res) => {
//   Song.getSongs(songs => {
//     res.render('songs', { songs })
//   })
// })
