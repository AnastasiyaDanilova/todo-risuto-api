const router = require('express').Router();

const {createProject} = require('../controllers/projectControllers')

router.post('/', createProject)

module.exports = router;