const User = require('../models/user')

exports.postUsers = (req, res, next) => {
    const user = new User(req.body.name, req.body.age)
    console.log(user)
    user.save()
    res.redirect('/party')
}