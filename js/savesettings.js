/* Save user settings with local storage for settings form (#settingsForm)..
"#checkbox ID is for first (email) checkbox, "#checkbox2" is ID for 2nd checkbox (profile),
and "#timezone" ID represents the timezone drop down/select menu */


function loadSettings() {
	if (localStorage.email == "unchecked") {
    $('#checkbox').prop('checked', false);
}
	if (localStorage.profile == "unchecked") {
    $('#checkbox2').prop('checked', false);
}
    $('#timezone').val(localStorage.timezone);
}


function saveSettings() {
	if ($('#checkbox').is(":checked")) {
		localStorage.email = "checked";
	} else {
		localStorage.email = "unchecked";
	}

	if ($('#checkbox2').is(":checked")) {
		localStorage.profile = "checked";
	} else {
		localStorage.profile = "unchecked";
	}
    localStorage.timezone = $('#timezone').val();
}
/* Save user settings when save button is clicked */
$("#submitButton").click( function() {
	saveSettings();

});

/* Reset user settings when cancel button is clicked */

$("#cancelButton").click( function() {
	localStorage.timezone = 0;
	localStorage.profile = "unchecked";
	localStorage.email = "unchecked";
});

loadSettings();
