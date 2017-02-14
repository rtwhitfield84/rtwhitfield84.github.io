"use strict";

// intro animation on page load
	$(window).scroll(function() {
		$('#intro').each(function(){
		});
	});
// collapse dropdown menu in mobile view
	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	        $(this).collapse('hide');
	    }
	});
