var db = require('../db');
// get the client
const mysql = require('mysql2');

// var Sequelize = require('sequelize');

// const database = new Sequelize('chat', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// var Messages = database.define('messages', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   text: Sequelize.STRING,
//   userId: Sequelize.INTEGER,
//   roomId: Sequelize.INTEGER,
// });

// var Users = database.define('users', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: Sequelize.STRING
// });

// var Rooms = database.define('rooms', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   roomname: Sequelize.STRING
// });

// Messages.belongsTo(Users, {foreignKey: 'userId'});
// Messages.belongsTo(Rooms, {foreignKey: 'roomId'});


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

    // Messages.findAll({
    //   attributes: ['text'],
    //   include: [{
    //     model: Users,
    //     required: false
    //   }]
    // })
    //   .then((messages) => {
    //     console.log('messages: ' + JSON.stringify(messages));
    //     callback(messages);
    //   })
    //   .catch((err) => {
    //     console.log('error: ' + err);
    //   });
  },
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
