var models = require('../models');

// get the client
const mysql = require('mysql2');

module.exports = {
  get: function (req, res) {
    // create the connection to database
    const connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      database: 'chat'
    });

    console.log('in the get section');
    connection.query(
      'SELECT * FROM `messages`',
      function(err, results, fields) {
        if (err) {
          console.log(err);
        }
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
      }
    );

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('in the post section', req, res);

  } // a function which handles posting a message to the database
};
