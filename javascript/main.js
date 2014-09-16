$(document).ready(function(){

	jQuery(function($) {
	$('.slider').sss();
	});

	$('#facebookbutton').mouseover(function(){
		$(this).attr("src", "/img/facebookbuttonhover2.png");
	});
	$('#facebookbutton').mouseleave(function(){
		$(this).attr("src", "/img/facebookbutton2.png");
	});
	$('#instagrambutton').mouseover(function(){
		$(this).attr("src", "/img/instagrambuttonhover2.png");
	});
	$('#instagrambutton').mouseleave(function(){
		$(this).attr("src", "/img/instagrambutton2.png");
	});
	$('#twitterbutton').mouseover(function(){
		$(this).attr("src", "/img/twitterbuttonhover2.png");
	});
	$('#twitterbutton').mouseleave(function(){
		$(this).attr("src", "/img/twitterbutton2.png");
	});
	$('#youtubebutton').mouseover(function(){
		$(this).attr("src", "/img/youtubebuttonhover2.png");
	});
	$('#youtubebutton').mouseleave(function(){
		$(this).attr("src", "/img/youtubebutton2.png");
	});

})