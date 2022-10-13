const User = require('../models/user');

exports.createUser = (req, res, next) => {
  const user = new User(req.body.name, req.body.age);
  console.log(user);
  user.save();
  res.redirect('/user');
};

exports.getUsers = (req, res, next) => {
  res.render('user', { pageTitle: 'user' });
  // User.fetchAll(() => {
    // console.log(products);
  // });
};

exports.getUser = (req, res, next) => {
  console.log('getUser hallo')
  res.render('user', { pageTitle: 'user' });
  
  // User.fetchAll(() => {
    // console.log(products);
  // });
};

