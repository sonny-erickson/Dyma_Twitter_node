const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
const errorHandler = require('errorhandler');
require('./database');

const port = process.env.PORT || 3000;
const app = express();
exports.app = app;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./config/session.config');
require('./config/passport.config');

app.use(morgan('short'));//morgan pour le login
//Pour recup les static style image, css... dans le dossier public
app.use(express.static(path.join(__dirname,'public/')));
// Autre middleware natif, le 1er pour la méthode POST et envoie en JSON et le seond pour les URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);// Appel des routes

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? err.message : err.message
    });
  })
}

app.listen(port);