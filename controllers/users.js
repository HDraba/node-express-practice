const fs = require('fs');
const { userInfo } = require('os');
const path = require('path');

const User = require('../models/user');

const dataPath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'users.json'
);

exports.createUser = (req, res, next) => {
  const user = new User(req.body.name, req.body.age);
  // console.log(user);
  user.save();
  res.redirect('/users');
};

exports.getUsers = (req, res, next) => {
  User.fetchAll((users) => {
    res.render('users', {
      users,
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
  // res.redirect('/users');
};

// fckn garbage 