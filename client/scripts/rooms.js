// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},
  currentRoom: 'James Room',
  loadRooms: function(messages, callback) {
    for (let message of messages) {
      if (!Rooms._data[message.roomname]) {
        Rooms._data[message.roomname] = true;
      }
    }
    callback();
  },

  add: function(roomname) {
    if (!Rooms._data[roomname]) {
      Rooms._data[roomname] = true;
    }
    Rooms.currentRoom = roomname;
  },

  selectRoom: function (roomname) {
    Rooms.currentRoom = roomname;
  }

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};