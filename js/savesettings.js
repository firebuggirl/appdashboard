/* Notes: "#checkbox" represents the first checkbox in the settings form.
"#settingsForm" represents the form itself, "checkbox2" represents the 2nd checkbox
and "#timezone represents the select dropdown"*/


$(document).ready(function () {
    function init() { /* checks for stored data and fills in... */
        if (localStorage["checkbox"]) {
            $('#checkbox').val(localStorage["checkbox"]);
        }

    }
    init();
});

$('.stored').keyup(function () { /* keyup runs when key is pressed in a form with "stored"... Write to LS */
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#settingsForm').submit(function() { /* currently resets all LS data*/
    localStorage.clear();
});

$(function () {
    var data = localStorage.getItem("stored");

    if (data !== null) {
        $("input[name='checkbox']").attr("checked", "checked");
    }


});

//////////////////////////////////
///2nd version trying to get local storage of settings
$(document).ready(function () {
  /*
   * check browser supports local storage
   */
  if (localStorage) {
    /*
     * if form field values exist in local storage use
     * them to populate the form when the page loads
     */
    if (localStorage.type) {
      $("#checkbox").find("option[value=" + localStorage.type + "]").attr("selected", true);
    }
    if (localStorage.name) {
      $("#checkbox").val(localStorage.name);
    }
  //  if (localStorage.email) {
//      $("#email").val(localStorage.email);
  //  }
//    if (localStorage.message) {
//      $("#message").val(localStorage.message);
//    }
    if (localStorage.subscribe === "checked") {
      $("#checkbox").attr("checked", "checked");
    }

    /*
     * when a form field changes store it's value in local storage
     */
    //$("input[type=text],select,textarea").change(function(){
  //    $this = $(this);
  //    localStorage[$this.attr("name")] = $this.val();
  //  });
    $("input[type=checkbox]").change(function(){
      $this = $(this);
      localStorage[$this.attr("name")] = $this.attr("checked");
    });

    $("form")
      /*
       * clear local storage when the form is submitted
       */
    //  .submit(function(){
    //    localStorage.clear();
    //  })
      /*
       * output local storage to the console each time the form changes
       * (you may want to remove this code on the production server)
       */
      .change(function(){
        console.log(localStorage);
      });
  }
});
