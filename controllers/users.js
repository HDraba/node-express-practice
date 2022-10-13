const User = require('../models/user');

exports.createUser = (req, res, next) => {
  const user = new User(req.body.name, req.body.age);
  console.log(user);
  user.save();
  res.redirect('/user');
};

exports.getUsers = (req, res, next) => {
  User.fetchAll((users) => {
    res.render('user', { 
      users, 
      pageTitle: 'User' 
    });
  });
};