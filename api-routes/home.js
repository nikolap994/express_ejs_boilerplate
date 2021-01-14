var analytics = require('../services/analytics.js');
var data = require('../data/users.json');

module.exports = function (app, network_information) {
    app.get('/', function (req, res) {
        res.render('home.ejs', { key: "You have visited this page " + analytics.visitCounter() + " times", data: data });
    });
}