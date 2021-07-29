const Express = require("express");
const BodyParser = require("body-parser");

var posts = [
    { name: 'post1', body: 'post-body' },
    { name: 'post2', body: 'post-body2' },
];

exports.getPost = (req, res) => {
    res.send({ title: 'Posts', post: posts });
};

exports.createPost = (req, res) => {
    res.send({ created: true });
};
