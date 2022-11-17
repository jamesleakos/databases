var db = require('../db');
// get the client
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'chat'
});

const messagesInsert = (text, userId) => {
  connection.query(
    'INSERT INTO `messages` (text, user_id) VALUES (?, ?)',
    [text, userId],
    function(err, results, fields) {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
};

module.exports = {
  getAll: function (callback) {
    connection.query(
      'SELECT messages.text, users.name FROM `messages` LEFT JOIN `users` ON messages.user_id=users.id',
      function(err, results, fields) {
        if (err) {
          console.log(err);
        }
        callback(results);
      }
    );
  }, // a function which produces all the messages
  create: function ({text, username}) {
    connection.query(
      'SELECT id FROM `users` where `name` = ?',
      [username],
      function(err, results, fields) {
        if (err) {
          console.log(err);
        }
        if (results.length === 0) {
          connection.query(
            'INSERT INTO `users` (name) VALUES (?)',
            [username],
            function(err, results, fields) {
              if (err) {
                console.log(err);
              } else {
                messagesInsert(text, results.insertId);
              }
            }
          );
        } else {
          messagesInsert(text, results[0].id);
        }
      }
    );
  } // a function which can be used to insert a message into the database
};
