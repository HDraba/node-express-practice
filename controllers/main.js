
exports.renderMain = (req, res, next) => {
    res.render('main', {pageTitle: 'Main', path: '/main'})
}