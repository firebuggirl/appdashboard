//var bellclick = document.getElementById("bell");
//var nav = document.querySelector(".nav");

//bell.addEventListener("click", function(e){
//  nav.style.display = "block";
//})
//
//
//

var messages = document.getElementById('messages');
var bell = document.getElementById('bell');



  bell.addEventListener("click", function(e){
    if(messages.style.display = 'none'){
      messages.style.display = 'block';
    }

 });



 messages.addEventListener("click", function(e){
     messages.style.display = 'none';
 });
