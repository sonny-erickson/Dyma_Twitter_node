const router = require('express').Router();
const { signinForm, signin, signout} = require('../controllers/auth.controller');

//Définir les routes ci-dessous
router.get('/signin/form', signinForm );
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router; 