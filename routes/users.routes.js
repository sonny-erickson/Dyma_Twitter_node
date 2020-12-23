const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config');
const { signupForm, signup, uploadImage} = require('../controllers/users.controller');

//Définir les routes ci-dessous
router.get('/signup/form', signupForm );
router.post('/signup', signup);
router.post('/update/image', ensureAuthenticated, uploadImage);


module.exports = router; 