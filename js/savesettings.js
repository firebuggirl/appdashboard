

$(document).ready(function() {
    $(window).unload(saveSettings);
    loadSettings();
});

$('#submitButton').click(function() { /* currently resets all LS data*/
  localStorage.timezone = $("#timezone").val();
  localStorage.checkbox = $('#checkbox').val();
  localStorage.checkbox2 = $('#checkbox2').val();
});

function loadSettings() {

    $('input[value="' + localStorage.checkbox + '"]').prop('checked', true);
    $('input[value="' + localStorage.checkbox2 + '"]').prop('checked', true);
    $("#timezone").val(localStorage.timezone);
}
loadSettings();

function saveSettings() {

    localStorage.timezone = $("#timezone").val();
    localStorage.checkbox = $('input[type=radio]:checked').val();
    localStorage.checkbox2 = $('input[type=radio]:checked').val();
}

saveSettings();

$('#cancelButton').click(function() { /* currently resets all LS data*/
    localStorage.clear();
});
