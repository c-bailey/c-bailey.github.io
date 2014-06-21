$(document).ready(function() {
	var duration = 500;

	$('.aboutMe').hover(function() {
		$(this).stop(true, false).animate({right: -10}, duration);
	}, function() {
		$(this).stop(true, false).animate({right: -705}, duration);
	});

});