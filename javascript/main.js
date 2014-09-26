$(document).ready(function(){
	
	jQuery(function($) {
	$('.slider').sss();
	});

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	$('#facebookbutton').mouseover(function(){
		$(this).attr("src", "/img/facebook2.png");
	});
	$('#facebookbutton').mouseleave(function(){
		$(this).attr("src", "/img/facebook1.png");
	});
	$('#instagrambutton').mouseover(function(){
		$(this).attr("src", "/img/instagram2.png");
	});
	$('#instagrambutton').mouseleave(function(){
		$(this).attr("src", "/img/instagram1.png");
	});
	$('#twitterbutton').mouseover(function(){
		$(this).attr("src", "/img/twitter2.png");
	});
	$('#twitterbutton').mouseleave(function(){
		$(this).attr("src", "/img/twitter1.png");
	});
	$('#youtubebutton').mouseover(function(){
		$(this).attr("src", "/img/youtube2.png");
	});
	$('#youtubebutton').mouseleave(function(){
		$(this).attr("src", "/img/youtube1.png");
	});
	$('#tumblrbutton').mouseover(function(){
		$(this).attr("src", "/img/tumblr2.png");
	});
	$('#tumblrbutton').mouseleave(function(){
		$(this).attr("src", "/img/tumblr1.png");
	});
	$('#itunesbutton').mouseover(function(){
		$(this).attr("src", "/img/apple2.png");
	});
	$('#itunesbutton').mouseleave(function(){
		$(this).attr("src", "/img/apple1.png");
	});


})