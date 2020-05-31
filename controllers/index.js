const router = require('express').Router()
// burger path
router.use('/api', require('./burgers_controller.js'))


router.use(require('./viewRoutes.js'))

module.exports = router

// router.use('/api', require('./songRoutes.js'))