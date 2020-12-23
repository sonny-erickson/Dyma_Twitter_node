const passport = require('passport');

exports.signinForm = async (req, res,next) =>{
    res.render('auth/auth-form', {errors:null, isAuthenticated: req.isAuthenticated(), currentUser: req.user});
}
exports.signin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        next(err);
      } else if (!user) {
        res.render('auth/auth-form', { errors: [ info.message ], isAuthenticated: req.isAuthenticated(), currentUser: req.user});
      } else {
        req.login(user, (err) => {
          if (err) { next(err) } else {
            res.redirect('/tweets');
          }
        })
      }
    })(req, res, next);
  }
exports.signout = async (req, res,next) =>{
    req.logout();
    res.redirect('/auth/signin/form');
}
