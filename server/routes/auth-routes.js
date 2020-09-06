const router = require('express').Router();
const passport = require('passport');
const requireUserAPI = require('./authmiddleware');

const host = process.env.HOST_NAME || 'localhost';
const port = process.env.APP_PORT || 3000;
const userhome = `http://${host}:${port}/userhome`;

router.get('/login/twitter', passport.authenticate('twitter'));

router.get('/twitter/returncallback',
  passport.authenticate('twitter', {
    failureRedirect: '/login' }),
  (req, res) => {
    const target = req.cookies.target || userhome;
    res.clearCookie('target', { path: '/' });
    return res.redirect(target);
  });

// router.get('/login/success', (req, res) => {
//   if (req.user) {
//     return res.json({
//       success: true,
//       message: 'user has successfully authenticated',
//       user: req.user,
//       cookies: req.cookies,
//     });
//   }
// });

// router.get('/login/failed', (req, res) => res.status(401).json({
//   success: false,
//   message: 'user failed to authenticate.',
// }));

router.get('/logout', require('./views/logout'));

module.exports = router;
