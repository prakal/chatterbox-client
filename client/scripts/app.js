// YOUR CODE HERE:
// https://api.parse.com/1/classes/chatterbox
// https://api.parse.com
var app = {};
app.init = function(){};
app.server = 'https://api.parse.com/1/classes/chatterbox';

app.send = function(message){
  $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function () {
      console.log('chatterbox: Message sent');
    },
    error: function () {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};
var fetched;
app.fetch = function(){
  //variables of stuff fetched
  //var message =
  //console.log(data);
  $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data:{order: "-updatedAt", limit: 100 },
    success: function (data) {
      _.each(data.results, app.addMessage);
    },
    error: function () {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send Messagessage');
    }
  });
  return fetched;
};

app.addFriend = function(){
};

app.clearMessages = function(){
  $("#chats").remove();
};

app.addMessage = function(message){
  message.text = _.escape(message.text);
  message.username = _.escape(message.username);
  message.roomname = _.escape(message.roomname);

  $('#main').append('<div id = "chats"> <div> <div class="username">'+message.username+'</div> <div id = "message send" class="submit">'+message.text+'</div> <div>'+message.roomname+'</div> </div> </div>');
  $('.username').click(function(){
    app.addFriend();
  });
};

app.addRoom = function(room){
  $('#roomSelect').append('<div id = '+room+'>  </div>');
};

app.handleSubmit = function(){
  var messageContents = $("#messageField").val();
  var userName = $("#userName").val();
  var room = $("#room").val();

  var message = {
    'username': userName,
    'text': messageContents,
    'roomname': room
  };
  debugger;
  console.log('dfsfs');$()

  app.send(message);
  event.preventDefault();
};

$( document ).ready(function() {
    $('#send').click(function(){
  event.preventDefault();

    app.handleSubmit();
  });
    app.fetch();

});

// app.addMessage = function(message){
//   $('#main').append('<div id = "chats"> <div> <div class="'+message.username+'">'+message.username+'</div> <div>'+message.text+'</div> <div>'+message.roomname+'</div> </div> </div>');
//   $('.'+message.username).click(function(){
//     app.addFriend();
//     console.log("friend added");
//   });
// };
