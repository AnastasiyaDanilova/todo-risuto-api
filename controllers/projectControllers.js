// const Project = require('../models/project')

// const NotFoundError = require('../errors/NotFoundError');
// const BadRequestError = require('../errors/BadRequestError');
// const ForbiddenError = require('../errors/ForbiddenError');

// const {
//   validationErrorText,
//   notFoundFilmErrorText,
//   forbiddenErrorFilmText,
//   badRequestErrorFilmText,
// } = require('../utils/const');

// function createProject (req, res, next) {
//   const { _id } = req.user;                                        // откуда юзер? 
//   console.log(req.user)

//   Project.create({ owner: _id, ...req.body })
//     .then((project) => {
//       res.send(project);
//     })
//     .catch((err) => {
//       if (err.name === 'ValidationError') {
//         const errObject = Object.keys(err.errors).join(', ');

//         next(new NotFoundError(validationErrorText(errObject)));
//         return;
//       }
//       next(err);
//     });
// }

// module.exports = {
//   createProject,
// };