//var alert, close;
// alert = document.getElementsById("alert");
// close = document.getElementsById("close");

//  close.addEventListener("click", function(){
//    alert.display = "hidden";
//  });

  $(document).ready(function () {
        $("#alert").show();
    });

    $('#close').click(function () {

     $('#alert').hide();

     $('#weekly').css("margin-top", "-50px");



    });





$(document).ready(function(){
      if(window.innerWidth <= 750){
$('.trafficTitlesMobileView').show();
      //  $('.trafficTitlesTabletView').hide();

      }
    });

    $(document).ready(function(){
      if(window.innerWidth >= 750){

        $('.trafficTitlesTabletView').show();
          //$('.trafficTitlesMobileView').hide();

      }
    });

    $(window).resize(function(){
    	if(window.innerWidth >= 750) {
        $('.trafficTitlesTabletView').show();
         $('.trafficTitlesMobileView').hide();

    	}
    });

    $(window).resize(function(){
    	if(window.innerWidth <= 750) {
        $('.trafficTitlesTabletView').hide();
          $('.trafficTitlesMobileView').show();

    	}
    });





    
