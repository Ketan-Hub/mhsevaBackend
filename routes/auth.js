const express = require('express');
const { signup, signin} = require('../controllers/Admin/auth');
const {getusers,getone} = require('../controllers/user');

// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validator/Admin/auth');
const router = express.Router();



router.post('/signup', signup);
router.post('/signin', signin);
router.get('/user/getAll',getusers);
router.get('/user/getone/:id',getone);




module.exports = router;