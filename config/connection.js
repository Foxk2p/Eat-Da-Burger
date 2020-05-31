const mysql = require('mysql2')

const db = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL)

module.exports = db


// favoriteapp reference

// module.exports = mysql.createConnection('mysql://root:rootroot@localhost:3306/burgers_db')
