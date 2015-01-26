$(document).ready(function() {

	var duration = 1000;
	var $root = $('html, body');
	var checkPoint = $('#grid2').offset().top;

	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		$root.animate({scrollTop:$( $(this).attr('href')).position().top}, duration);
		return false;
	});
	
	$('.topReturn').css({ left: '-1em'});

	$(window).scroll(function() {
		if ($(this).scrollTop() > checkPoint) {
			$('.topReturn').fadeIn(duration);
		} else {
			$('.topReturn').fadeOut(duration);
		}
	});

	// $('.topReturn').click(function(event) {
	// 	event.preventDefault();
	// 	$root.animate({scrollTop:$('#grid').position().top}, duration);
	// 	return false;
	// });


});