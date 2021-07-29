const Express = require("express");
const BodyParser = require("body-parser");

var users = [
    { name: 'TJ', email: 'tj@vision-media.ca' },
    { name: 'Tobi', email: 'tobi@vision-media.ca' }
];

exports.getUserHtml = (req, res) => {
    res.render('users', { title: 'Title', users: users });
};

exports.getUser = (req, res) => {
    res.send({ title: 'Users', users: users });
};

exports.createUser = (req, res) => {
    res.send({ created: true });
};
