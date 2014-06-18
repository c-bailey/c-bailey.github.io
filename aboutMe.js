$(document).ready(function() {
	var duration = 500;

	$('.aboutMe').hover(function() {
		$(this).stop(true, false).animate({left: 0}, duration);
	}, function() {
		$(this).stop(true, false).animate({left: -695}, duration);
	});

});