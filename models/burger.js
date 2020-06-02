// burger path
const orm = require('../config/orm.js')


// Favoriteapp reference
module.exports = {
  getBurgers(cb) {
    orm.getAll('burgers', burgers => cb(burgers))
  },
  getBurgersWhere(where, cb) {
    orm.getAllWhere('burgers', where, burgers => cb(burgers))
  },
  addBurger(burger, cb) {
    orm.createOne('burgers', burger, info => cb(info))
  },
  updateBurger(changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  },
  deleteBurger(where, cb) {
    orm.deleteOne('burgers', where, info => cb(info))
  }
}

// tdr reference

// class List {
//   constructor() {
//     this.items = []
//     this.getItems = () => this.items
//     this.addItem = item => {
//       this.items.push(item)
//     }
//     this.updateItem = text => {
//       this.items.forEach(item => {
//         if (item.text === text) {
//           item.isDone = !item.isDone
//         }
//       })
//     }
//     this.deleteItem = text => {
//       this.items = this.items.filter(item => {
//         if (item.text === text) {
//           return false
//         } else {
//           return true
//         }
//       })
//     }
//   }
// }

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
