//hide arrows on page load
$(document).ready(function () {
  //  $("#bio").hide();//hide arrows div on page load
  //  $("iframe").hide();//hide iframe on page load
  $overlay.hide();
});


//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $messageSent = $("#messageSent");
//var $caption = $("<p></p>");

//An message to overlay
$overlay.append($messageSent);


//Add overlay
$("body").append($overlay);



//Capture the click event on a send button
$("#messageButton").click(function (event) {

  if (document.getElementById("searchMessages").value === "") {
      $("#user_error").text("Please enter the name of the user that you would like to connect with!");
  } else{
    event.preventDefault();//prevent default browser behavior

    $("header").hide();
  //Show the overlay.
    $overlay.show();

    $messageSent.show();

    $('.main-nav ul li').hide();
    $('#wrapper').hide();

 }
});

//When close button is clicked hide the overlay, re-introduce elements


$("#closeOverlay").click(function () {

    $overlay.hide();
    $("header").show();
    $('#wrapper').show();

});
