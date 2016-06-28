
/* Note: messageUserValidate is the ID of the form element*/

document.getElementById("messageUserValidate").onsubmit = function () {
    var x = document.forms["messageUserValidate"]["searchMessages"].value;
    var y = document.forms["messageUserValidate"]["comment"].value;

    var submit = true;

    if (x == null || x == "") {
        nameError = "Please enter the name of the user that you would like to connect with!";
        document.getElementById("user_error").innerHTML = nameError;
        submit = false;
    }

    if (y == null || y == "") {
        emailError = "Please enter your message!";
        document.getElementById("message_error").innerHTML = emailError;
        submit = false;
    }



    return submit;




}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("searchMessages").onkeyup = removeWarning;
document.getElementById("comment").onkeyup = removeWarning;
////
/////////
///
///
//var send = document.getElementById("messageButton");

//var confirmation = document.getElementById("messageUser");



//send.addEventListener('click', function(e){


//  messageSent = "Your message has been sent!";






//});
