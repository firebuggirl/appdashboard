/* Note: messageUserValidate is the ID of the form element and "searchMessages" & "comment" IDs are for the input fields in the Message User Form*/

var emailError,
    nameError,
    popup,
    popup2;

document.getElementById("messageUserValidate").onsubmit = function () {
    var x = document.forms.messageUserValidate.searchMessages.value;
    var y = document.forms.messageUserValidate.comment.value;

    var submit = true;

    if (x === null || x === "") {
        nameError = "Please enter user!";
        document.getElementById("innerHTML1").innerHTML = nameError;
          document.getElementById("popup").style.display = "block";
        submit = false;
    }

    if (y === null || y === "") {
        emailError = "Please enter message!";
        document.getElementById("innerHTML2").innerHTML = emailError;
          document.getElementById("popup2").style.display = "block";
        submit = false;
    }



    return submit;

};

function removeWarning1() {
  //  document.getElementById(this.id + "_error").innerHTML = "";
      document.getElementById("popup").style.display = "none";

}

function removeWarning2() {
  //  document.getElementById(this.id + "_error").innerHTML = "";
      document.getElementById("popup2").style.display = "none";
}

document.getElementById("searchMessages").onkeyup = removeWarning1;
document.getElementById("comment").onkeyup = removeWarning2;
////
/////////
