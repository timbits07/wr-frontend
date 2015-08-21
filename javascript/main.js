$(document).ready(function(){
	
	jQuery(function($) {
		$('.slider').sss();
	});

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	$(function() {
	  $(".menu").click(function() {
	    // remove classes from all
	    $(".menu").removeClass("active");
	    // add class to the one we clicked
	    $(this).addClass("active");
	  });
	});

	// Sticky navbar on scroll to top of page
	var stickyTop = $('#nav-container').offset().top;

	$(window).on( 'scroll', function(){
      if ($(window).scrollTop() >= stickyTop) {
          $('#nav-container').addClass('fixed');
      } else {
          $('#nav-container').removeClass('fixed');
      }
  });

  $('#nav-toggle').click(function(){
  	$('#slide-nav').slideToggle();
  });

})