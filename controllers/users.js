const User = require('../models/user');

exports.createUser = (req, res, next) => {
  const user = new User(null, req.body.name, req.body.age);
  // console.log(user);
  user.save();
  res.redirect('/users');
};

exports.getUsers = (req, res, next) => {
  User.fetchAll((users) => {
    res.render('users', {
      users: users,
      pageTitle: 'Users',
      path: '/users',
    });
  });
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId, (user) => {
    res.render('user-detail', {
      user: user,
      pageTitle: user.name,
      path: '/users',
    });
  });
};

exports.getEditUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId, (user) => {
    res.render('edit-user', {
      user: user,
      pageTitle: 'Edit User ' + user.name,
      path: '/users',
    });
  });
};

exports.postEditUsers = (req, res, next) => {
  console.log('request body: ', req.body);
  const userId = req.body.userId;
  const userName = req.body.name;
  const userAge = req.body.age;
  const updatedUser = new User(userId, userName, userAge);
  updatedUser.save();
  res.redirect('/users');
};
