const CostOfLivingController = require('../controllers/CostOfLivingController')
const UsersController = require('../controllers/UsersController')
const CommentController = require('../controllers/CommentController')

const express = require('express')
const router = express.Router()

//users
router.get('/users', UsersController.getUsers)
router.post('/users/signup', UsersController.signUp)
router.post('/users/login', UsersController.logIn)

//comments
router.get('/comments/:countryName', CommentController.getCommentsByCountry)
router.post('/comments/new', CommentController.createComment)
router.get('/comments', CommentController.getComments)
router.delete('/comments/delete/:commentId', CommentController.deleteComment)


//countries
router.get('/:countryName', CostOfLivingController.getDataByCountry)
router.get('/compare/:firstCountry/:secondCountry', CostOfLivingController.compareCountries)

module.exports = router;