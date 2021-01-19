var topPos = $(document).scrollTop();		
var snb = $('.navbar__block.is--scroll');	

if(snb.hasClass('is--bg')) {
	if(topPos <= 200) {
		snb.removeClass('is--bg');
	}
} else {
	if(topPos > 200) {
		snb.addClass('is--bg');
	}
}/*	
if(snb.hasClass('fixed')) {
	if(topPos <= 400) {
		snb.removeClass('fixed');
	}
} else {
	if(topPos > 400) {
		snb.addClass('fixed'); 
	}
} 
if(snb.hasClass('scroll-navbar')) {
	if(topPos <= 500) {
		snb.removeClass('scroll-navbar');
	} 
} else {
	if(topPos > 500) {
		snb.addClass('scroll-navbar');
	} 
}*/