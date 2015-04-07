// YOUR CODE HERE:
// https://api.parse.com/1/classes/chatterbox
// https://api.parse.com

var app = {};
app.init = function(){};
app.server = 'https://api.parse.com/1/classes/chatterbox';
app.send = function(message, data){
  $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};
app.fetch = function(){
  //variables of stuff fetched
  //var message =
  //console.log(data);
  $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    success: function (data) {
      console.log(data);
    },
    error: function () {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send Messagessage');
    }
  });
};

app.addFriend = function(){
};

app.clearMessages = function(){
  $("#chats").remove();
};

app.addMessage = function(message){
  $('#main').append('<div id = "chats"> <div> <div class="username">'+message.username+'</div> <div id = "message send" class="submit">'+message.text+'</div> <div>'+message.roomname+'</div> </div> </div>');
  $('.username').click(function(){
    app.addFriend();
  });
};

app.addRoom = function(room){
  $('#roomSelect').append('<div id = '+room+'>  </div>');
};

app.handleSubmit = function(){
  console.log("anything");
};
$( document ).ready(function() {
    $('#send .submit').submit(function(){
    app.handleSubmit();
  });
});

// app.addMessage = function(message){
//   $('#main').append('<div id = "chats"> <div> <div class="'+message.username+'">'+message.username+'</div> <div>'+message.text+'</div> <div>'+message.roomname+'</div> </div> </div>');
//   $('.'+message.username).click(function(){
//     app.addFriend();
//     console.log("friend added");
//   });
// };
