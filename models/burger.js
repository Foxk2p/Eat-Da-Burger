// burger path
const orm = require('../config/orm.js')

module.exports = {
  getMovies(cb) {
    orm.getAll('movies', movies => cb(movies))
  },
  getMoviesWhere(where, cb) {
    orm.getAllWhere('movies', where, movies => cb(movies))
  },
  addMovie(movie, cb) {
    orm.createOne('movies', movie, info => cb(info))
  },
  updateMovie(changes, where, cb) {
    orm.updateOne('movies', changes, where, info => cb(info))
  },
  deleteMovie(where, cb) {
    orm.deleteOne('movies', where, info => cb(info))
  }
}

// tdr reference

class List {
  constructor() {
    this.items = []
    this.getItems = () => this.items
    this.addItem = item => {
      this.items.push(item)
    }
    this.updateItem = text => {
      this.items.forEach(item => {
        if (item.text === text) {
          item.isDone = !item.isDone
        }
      })
    }
    this.deleteItem = text => {
      this.items = this.items.filter(item => {
        if (item.text === text) {
          return false
        } else {
          return true
        }
      })
    }
  }
}

// SongController.js example from favoriteapp
// note: burger.js syntax based on movieController.js from favoriteapp.

// const orm = require('../orm')

// module.exports = {
//   getSongs (cb) {
//     orm.getAll('songs', songs => cb(songs))
//   },
//   getSongsWhere (where, cb) {
//     orm.getAllWhere('songs', where, songs => cb(songs))
//   },
//   addSong (song, cb) {
//     orm.createOne('songs', song, info => cb(info))
//   },
//   updateSong (changes, where, cb) {
//     orm.updateOne('songs', changes, where, info => cb(info))
//   },
//   deleteSong (where, cb) {
//     orm.deleteOne('songs', where, info => cb(info))
//   }
// }
