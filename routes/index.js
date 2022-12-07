const router = require('express').Router();
const authRegisterRouter = require('./authRegisterRouter');
const projectRouter = require('./project')

router.use(authRegisterRouter);

router.use('/projects', projectRouter)

module.exports = router;