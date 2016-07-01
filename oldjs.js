$checkbox = ('#checkbox');
$checkbox2 = ('#checkbox2');

function loadSettings() {

    $('input[value="' + localStorage.checkbox + '"]').prop('checked', true);
    $('input[value="' + localStorage.checkbox2 + '"]').prop('checked', true);
    $("#timezone").val(localStorage.timezone);
}


$(document).ready(function() {
    $(window).unload(saveSettings);
    loadSettings();
});

//$('#submitButton').click(function() { /* currently resets all LS data*/
//  localStorage.timezone = $("#timezone").val();
//  localStorage.checkbox = $('#checkbox').val();
//  localStorage.checkbox2 = $('#checkbox2').val();

//});
$('#checkbox :checkbox').change(function () {
    if ($(this).is(':checked')) {
        console.log($(this).val() + ' is now checked');
    } else {
        console.log($(this).val() + ' is now unchecked');
    }
});

function saveSettings() {

    localStorage.timezone = $("#timezone").val();

    localStorage.checkbox = $('#checkbox').val();


    localStorage.checkbox2 = $('#checkbox2').val();
}


$('#submitButton').click(function(){
  saveSettings();
});


$('#cancelButton').click(function() { /* currently resets all LS data*/
    localStorage.clear();


});
