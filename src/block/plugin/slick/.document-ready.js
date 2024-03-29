var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';

var index  			= $('[data-slick-index]');
var snew  			= $('[data-slick-new]');
var articles  		= $('[data-slick-articles]');
var articles_lg  	= $('[data-slick-articles-lg]');
var catalog 		= $('[data-slick-catalog]');
var catalog_nav 	= $('[data-slick-catalog-nav]');
var catalog_m 		= $('[data-slick-modal]');
var catalog_m_nav 	= $('[data-slick-modal-nav]');
var catalog_note 	= $('[data-slick-catalog-note]');

var team 			= $('[data-slick-team]');
var history 		= $('[data-slick-history]');

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
	slidesToShow: 5,
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
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	articles.slick('setPosition');
})
catalog.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,		
	infinite: true, 
	fade: true, 
	draggable: false,
  	asNavFor: catalog_nav,
	//autoplay: true,
	//autoplaySpeed: 4000,
	//prevArrow: prevArrow,
	//nextArrow: nextArrow,
  	/*responsive: [	
	    {
			breakpoint: 768,
			settings: {
				dots: true,
			}
	    }
	]*/
});
catalog_nav.slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: catalog,
	//centerMode: true,
	arrows: true,	
	vertical: true,	
	//variableWidth: true,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	focusOnSelect: true,
	responsive: [	
	    {
			breakpoint: 768,
			settings: {
				vertical: false,
			}
	    }
	]
});
catalog_m.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,		
	infinite: true, 
	fade: true, 
	draggable: false,
  	asNavFor: catalog_m_nav,
	//autoplay: true,
	//autoplaySpeed: 4000,
	//prevArrow: prevArrow,
	//nextArrow: nextArrow,
  	/*responsive: [	
	    {
			breakpoint: 768,
			settings: {
				dots: true,
			}
	    }
	]*/
});
catalog_m_nav.slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: catalog_m,
	arrows: true,
	//infinite: false,	
	variableWidth: true,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	focusOnSelect: true,
});
$('.modal').on('shown.bs.modal', function (e) {
    catalog_m.slick('setPosition');
    catalog_m_nav.slick('setPosition');
    $('[data-slick-wrap]').addClass('show');
});
catalog_note.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	draggable: false,
	pauseOnFocus: false,
	pauseOnHover: false,
	swipe: false,
	touchMove: false,
	fade: true, 	
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 7000,
});
articles_lg.slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	dots: false,	
	infinite: false,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	responsive: [
	    {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
	    }
	]
});


	team.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [	
		  
		    {
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2, 
				}
		    },
		  
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2, 
				}
		    }, 
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
		    }
		]
	});
    history.slick({
        responsive: [   
            {
                breakpoint: 99999,
                settings: "unslick"
            },          
            {
                breakpoint: 767,
                settings: {                    
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: true,
                    variableWidth: true,
                    //adaptiveHeight: true,
                }
            }, 
        ]
    });