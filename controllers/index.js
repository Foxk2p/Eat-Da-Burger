const router = require('express').Router()
// burger path
router.use('/api', require('./burgers_controller.js'))

// for handlebars view
router.use(require('./viewRoutes.js'))

module.exports = router
