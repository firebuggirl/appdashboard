

Font used: https://www.google.com/fonts/


Javascripot notes:

- savesettings.js is for saving and resetting user settings in settings form

-search.js creates fake data that is searchable for search bar @ top of page



-toggle.js hides and shows toggle bar-icon for page/site navigation according/depending on viewport width/size


- validateform.js prevents user submission of message user form unless both input fields are filled.

- radiobutton.js prevents more than one radio button from being selected (note: note yet used in this project)

- nav.js file hides nav (that has been opened via toggle click event in toggle.js) in mobile view when nav link is clicked on to free up viewport space

- name-autocomplete.js file creates member data via an array/function then creates suggestions based on names in data/array

- messagesent.js file
            -Creates an overlay to house popup confirmation messages for form submissions   and settings
             -Captures the click event on send button that shows/appends confirmation message on click if input fields have been filled
             -When close button is clicked hide the overlay, re-introduce elements
             -Shows message that confirms saved settings for message user form
             -Uses messageSent click function locally to change
             the inner HTML of $messageSent on #submitButton independently of
             #messageButton click function, then reload the page to go back to original inner HTML of paragraph that contains/houses all popup messages
             -function to show message that confirms settings for message user form have been reset

- chart.js/Chart.min.js/chartstandardbuild.js Scripts for charts with chart.js for customization

- bellclick.js  Displays new messages on bell click event

- alert.js  Pop up that alerts user that there are unread messages in app inbox + adds class ".selected" to buttons in Traffic table

- app.js file contains all of the JS files in this project that have been pipe to app.js via gulpfile.js.
