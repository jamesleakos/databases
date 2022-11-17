// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on("click", MessagesView.handleClick);
  },

  render: function() {
    MessagesView.$chats.html('');
    console.log('inside messagesView.Render: ', Messages._data);
    for (let i = Messages._data.length - 1; i >= 0; i--) {
      // if (message.roomname === Rooms.currentRoom) {
      //   MessagesView.renderMessage(message);
      // }
      MessagesView.renderMessage(Messages._data[i]);
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
      username: message.name.replace(/%20/g, ' '),
      message: message.text,
      roomname: 'room: ' + message.room_id
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