const Express = require("express");
const BodyParser = require("body-parser");

var users = [
    { FirstName: 'TJ', LastName:'br',email: 'tj@vision-media.ca' },
    { FirstName: 'Tobi', LastName:'cd',email: 'tobi@vision-media.ca' }
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
