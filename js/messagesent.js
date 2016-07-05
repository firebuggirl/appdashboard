

/* Hide overlay on page load */
$(document).ready(function () {
  $overlay.hide();
});


// Create an overlay

var $overlay = $('<div id="overlay"></div>');

// paragraph that contains sent message confirmation popup
var $messageSent = $("#messageSent");

// Send button
var $submitButton =('#submitButton');


//Add message to overlay
$overlay.append($messageSent);


//Add overlay
$("body").append($overlay);



//Capture the click event on send button that shows/appends confirmation message on click if input fields have been filled
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


/* Show message that confirms saved settings for message user form */

var closeX = ('<p class="closeX"> X </p>');
$("#submitButton").click(function (event) {


    event.preventDefault();//prevent default browser behavior

    $("header").hide();
  //Show the overlay.
    $overlay.show();
    $messageSent.html("Your settings have been saved ").append(closeX);
    $messageSent.css("color", "#ffffff");
    $messageSent.css("fontSize", "36px");
    $messageSent.show();

    $('.main-nav ul li').hide();
    $('#wrapper').hide();

    $messageSent.click(function () {/* Use messageSent click function locally to change
                                     the inner HTML of $messageSent on #submitButton independently of
                                     #messageButton click function, then reload the page to go back to original inner HTML*/
        $overlay.hide();
        $("header").show();
        $('#wrapper').show();
        location.reload();

    });


});


var closeX2 = ('<p class="closeX"> X </p>');
/* Show message that confirms settings for message user form have been reset */
$("#cancelButton").click(function (event) {


    event.preventDefault();//prevent default browser behavior

    $("header").hide();
  //Show the overlay.
    $overlay.show();
    $messageSent.html("Your settings have been reset!").append(closeX2);
    $messageSent.css("color", "#ffffff");
    $messageSent.css("fontSize", "26px");
    $messageSent.show();

    $('.main-nav ul li').hide();
    $('#wrapper').hide();

    $messageSent.click(function () {

        $overlay.hide();
        $("header").show();
        $('#wrapper').show();
        location.reload();

    });


});
