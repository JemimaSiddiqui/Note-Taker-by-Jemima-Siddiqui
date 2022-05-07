const router = require('express').Router();
const notesRoutes = require('./note')

router.use(notesRoutes);

module.exports = router;