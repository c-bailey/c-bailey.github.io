$(document).ready(function() {
	var duration = 500;

	$('.aboutMe').hover(function() {
		$(this).stop(true, false).animate({left: -10}, duration);
	}, function() {
		$(this).stop(true, false).animate({left: -705}, duration);
	});

});