/* Purpose: Hide nav in mobile view when nav link is clicked on to free up viewport space*/

var dashboardNav = document.getElementById('flexDashBoardClick');
var nav = document.querySelector('.nav');
var membersNav = document.getElementById('membersClick');
var visitsNav = document.getElementById('visitsClick');
var settingsNav = document.getElementById('settingsClick');

var mq = window.matchMedia( "(max-width: 750px)" );

dashboardNav.addEventListener("click", function(e){
 if (mq.matches) {
    nav.style.display = 'none';
 }

});

membersNav.addEventListener("click", function(e){
    if (mq.matches) {
    nav.style.display = 'none';

 }
});

visitsNav.addEventListener("click", function(e){
  if (mq.matches) {
    nav.style.display = 'none';
  }

});

settingsNav.addEventListener("click", function(e){
  if (mq.matches) {
    nav.style.display = 'none';

 }
});
