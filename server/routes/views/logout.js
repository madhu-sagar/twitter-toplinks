module.exports = (req, res) => {
  if (req.user) req.logout();
  res.clearCookie('id', { path: '/' });
  res.redirect('/');
};
