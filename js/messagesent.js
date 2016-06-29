//hide arrows on page load
$(document).ready(function () {
  //  $("#bio").hide();//hide arrows div on page load
  //  $("iframe").hide();//hide iframe on page load
  $overlay.hide();
});


//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $messageSent = $("#messageSent");
var $submitButton =('#submitButton');
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


/* Show message that confirms saved settings */
$("#submitButton").click(function (event) {


    event.preventDefault();//prevent default browser behavior

    $("header").hide();
  //Show the overlay.
    $overlay.show();
    $messageSent.html("Your settings have been saved!");
    $messageSent.css("color", "#ffffff");
    $messageSent.css("fontSize", "26px");
    $messageSent.show();

    $('.main-nav ul li').hide();
    $('#wrapper').hide();

    $messageSent.click(function () {/* Use messageSent click function locally to change
                                     the inner HTML of $messageSent om #submitButton independently of
                                     #messageButton click function, then reload the page to go back to original inner HTML*/
        $overlay.hide();
        $("header").show();
        $('#wrapper').show();
        location.reload();

    });


});


/* Show message that confirms saved settings */
$("#cancelButton").click(function (event) {


    event.preventDefault();//prevent default browser behavior

    $("header").hide();
  //Show the overlay.
    $overlay.show();
    $messageSent.html("Your settings have been reset!");
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
