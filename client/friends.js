// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},
  loadUsers: function(messages) {
    for (let message of messages) {
      if (!Friends._data[message.username]) {
        Friends._data[message.username] = false;
      }
    }
  },
  toggleStatus: function(friend) {
    Friends._data[friend] = !Friends._data[friend];
    console.log(Friends._data);
  },
  isFriend: function (friend) {
    return Friends._data[friend];
  }




  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};