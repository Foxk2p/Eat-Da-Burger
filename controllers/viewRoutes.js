const router = require('express').Router()
// burger path. Burger was Originally Movie. Included song model too.

const { Burger } = require('../models')
// favoriteapp equivalent
// const { Movie, Song, Game } = require('../controllers')

// router.get('/', (req, res) => {
//   res.render('burgers')
// })


router.get('/', (req, res) => {
  Burger.getBurgers(burgers => {
    res.render('burgers', { burgers })
  })
})


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
