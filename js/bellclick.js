

var messages = document.getElementById('messages');
var bell = document.getElementById('bell');
var message1 = document.getElementById('alertMessage1');
var message2 = document.getElementById('alertMessage2');
var message3 = document.getElementById('alertMessage3');
var messageText = document.getElementById('messagesText');


  bell.addEventListener("click", function(e){
    if(messages.style.display = 'none'){
      messages.style.display = 'block';
    } 

 });



 alertMessage1.addEventListener("click", function(e){
     message1.style.display = 'none';
    messages.style.display = 'none';
 });

 alertMessage2.addEventListener("click", function(e){
     message2.style.display = 'none';
     messages.style.display = 'none';
 });

 alertMessage3.addEventListener("click", function(e){
     message3.style.display = 'none';
     messages.style.display = 'none';
 });



 messages.addEventListener("click", function(e){
  if(message1.style.display === 'none' && message2.style.display === 'none' && message3.style.display === 'none'){
    messages.style.display = 'none';
    messageText.innerHTML = "There are no new messages in your inbox.";

  }

});
