

  $(document).ready(function () {
        $("#alert").show();
    });

    $('#close').click(function () {

     $('#alert').hide();

     $('#weekly').css("margin-top", "-50px");



    });

    $('button').click(function(){
      $('button').removeClass('selected');
      $(this).closest('button').addClass('selected');
    });





$(document).ready(function(){
      if(window.innerWidth <= 750){
$('.trafficTitlesMobileView').show();


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
