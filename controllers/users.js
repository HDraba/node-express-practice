const User = require('../models/user');

exports.postUsers = (req, res, next) => {
  const user = new User(req.body.name, req.body.age);
  console.log(user);
  user.save();
  res.redirect('/party');
};

// exports.getUsers = (req, res, next) => {
//   User.fetchAll(() => {
    // res.render('party', { pageTitle: 'Party' });
//   });
// };
