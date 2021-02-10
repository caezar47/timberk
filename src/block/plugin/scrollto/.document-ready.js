$(document.body).on('click.fecss.scrollto', '[data-scrollto-item]', {}, function(event){
	event.preventDefault();
	
	//console.log('body trigger:click.fecss.scrollto');
	
	var btn = $(this);
	
	var el = $(btn.attr('href')).eq(0);
	var diff = parseInt(btn.attr('data-scrollto-diff')) || 0;
	var speed = parseInt(btn.attr('data-scrollto-speed')) || 777;
	
	$('html, body').animate({
		scrollTop: (el.offset().top + diff)
	}, speed);
	$('[data-scrollto-item]').removeClass("is--active");
	btn.addClass("is--active"); 
});	
$(document.body).on('click', '[data-scrollto-navbar].is--open [data-scrollto-item]', {}, function(event){	
	if($(document).width() < 1199) {	
		event.preventDefault();		
		$('[data-scrollto-humb]').trigger('click');
	}	
});