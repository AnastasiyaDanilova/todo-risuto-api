const router = require('express').Router();
const { createUser, login } = require('../controllers/userControllers');
// const { registrValidator, authValidator } = require('../middlewares/validator');

router.post('/signup', createUser);

router.post('/signin', login)

module.exports = router;