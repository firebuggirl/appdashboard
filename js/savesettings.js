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
