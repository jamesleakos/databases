// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on("click", MessagesView.handleClick);
  },

  render: function() {
    MessagesView.$chats.html('');
    for(var message of Messages._data) {
      if (message.roomname === Rooms.currentRoom) {
        MessagesView.renderMessage(message);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // _.templateSettings = {
    //   evaluate:/\{\{(.+?)\}\}/g,
    //   interpolate:/\{\{=(.+?)\}\}/g,
    //   escape:/\{\{-(.+?)\}\}/g
    // }
    //console.log('rendering message: ' + message.text);
    MessagesView.$chats.append(MessageView.render({
      username: message.username,
      message: message.text,
      roomname: 'room: ' + message.roomname
    }));

  },



  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(event.currentTarget.innerHTML);
    console.log('click');
    // console.log($(event.currentTarget).children('.username')[0].innerHTML);


  }
};
// var template = _.template("<b><%- value %></b>");
// template({value: '<script>'});
// => "<b>&lt;script&gt;</b>"
// };