$(document).ready(function()  {

	$('.tabs nav a').click(function(){
		var nav_parent = $(this).parent().attr('id');
		var tab_p = '#' + $(this).attr('id') + '_p';
		var proj_parent = $(tab_p).parent().attr('id');
		var deactivate = '#' + nav_parent +' a';
		var deselect = '#' + proj_parent + ' .projectContent';
		$(deactivate).removeClass('active');
		$(deselect).removeClass('selected');
		$(this).addClass('active');
		$(tab_p).addClass('selected');
		console.log(deselect);
	});

	var duration = 1000;
	var $root = $('html, body');

	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		$root.animate({scrollTop:$( $(this).attr('href')).position().top}, duration);
		return false;
	});

	$('.aboutMe').hover(function() {
		$(this).stop(true, false).animate({right: -10}, duration);
	}, function() {
		$(this).stop(true, false).animate({right: -705}, duration);
	});

});

