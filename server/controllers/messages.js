var models = require('../models/messages.js');

// get the client
const mysql = require('mysql2');

module.exports = {
  get: function (req, res) {
    models.getAll((results) => {
      res.send(results);
    });
  //in the post section. req.body { username: 'a', text: 'asdfsdf', roomname: 'James Room' }
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.create(req.body);
  }
};

