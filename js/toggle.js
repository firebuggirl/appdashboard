/* Hide toggle on tablets and larger screens as page loads*/
$(document).ready(function(){
  if(window.innerWidth >= 551){
  	$('#toggle').hide();
     $('.nav').show();
       $('.flex2').show();
      $('.sideNavIcons').show();
      $('#name').show();
  }
});

$(document).ready(function(){
  if(window.innerWidth <= 750){
  	$('#toggle').show();
    $('.nav').hide();
    $('.flex2').show();
      $('#name').hide();
  }
});

/* Hide/show nav bar in mobile view */
$(document).ready(function () {

$('#toggle').click(function () {

 $('.nav').toggle("slow");

 $('#toggle_class').toggle("slow");



   $('#messages').hide();


});
});



/* Hide/show toggle as page viewport is resized */

$(window).resize(function(){
	if(window.innerWidth >= 750) {
		$(".nav").show();
    $('#toggle_class').hide();
    	$('#toggle').hide();
        $('.sideNavIcons').show();
          $('#name').show();
            $('.flex2').show();
	}
});

$(window).resize(function(){
	if(window.innerWidth < 750) {
    $('#toggle_class').show();
			$('#toggle').show();
      	$(".nav").hide();
          $('#name').hide();
	}
});

//////////////////
//////////////////
////////////////////
///
