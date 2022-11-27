const express = require('express')
const router = express.Router()

const attire = require('../controllers/attire')

router.get('/', attire.getAllAttire)
router.get('/search',attire.searchAttire)
router.get('/:id',attire.getDetailAttire)

module.exports = router