var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';

var index  		= $('[data-slick-index]');
var snew  		= $('[data-slick-new]');
var articles  	= $('[data-slick-articles]');


var team  		= $('[data-slick-team]');
var team_full  	= $('[data-slick-team-full]');
var adv 		= $('[data-slick-adv]');

index.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,	
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	draggable: false,
	pauseOnFocus: false,
	pauseOnHover: false,
	swipe: false,
	touchMove: false,
	fade: true, 	
	//infinite: false, 
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 7000,
});
snew.slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: true,
	dots: false,		
	variableWidth: true,
	infinite: false,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	responsive: [
	   
	    {
			breakpoint: 1200,
			settings: {				
			}
	    },
	    {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
			//settings: "unslick"
	    }
	]
});
articles.slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,	
	infinite: false,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	responsive: [
	   
	    {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,				
			}
	    },
	    {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
			//settings: "unslick"
	    }
	]
});




team.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	fade: true, 	
	infinite: true, 
	//autoplay: true,
	//autoplaySpeed: 4000,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
  	responsive: [	
	    {
			breakpoint: 768,
			settings: {
			}
	    }
	]
});
adv.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	fade: true, 	
	infinite: false,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
});
team_full.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	fade: true, 	
	infinite: false,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	autoplay: false,
});
if($(document).width() > 767) {
	adv.slick('unslick');
	team_full.slick('unslick');
}