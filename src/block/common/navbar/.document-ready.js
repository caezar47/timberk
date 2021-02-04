
/*var catalog_btn = $("[data-btn-catalog]");
var menu_btn 	= $("[data-btn-humb]");
var humb = $("[data-hamburger]");
//var resize = $("[data-resize]");
var collapse = $(".navbar__aside");
var html = $("html");

humb.on('click',function() {	
	$(this).toggleClass("is--active");			
	$(collapse).toggleClass("is--open");
	$(html).toggleClass("is--open-navbar");
});
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__aside-container').length == 0 && $(event.target).closest('[data-hamburger]').length == 0){	
		humb.removeClass("is--active");
		$(html).removeClass("is--open-navbar");
		$(collapse).removeClass("is--open");
	}		
});	
$(".header__block .menucatalog__btn").click(function(e){
    e.preventDefault();
    $(".sitemenu__block").removeClass("show");
    $(".catalogmenu__block").addClass("show");
    return false;
});

$(".catalogmenu__lay").click(function(){
    $(".catalogmenu__block").removeClass("show");
});

$(".header__menu .menu__btn").click(function(e){
    e.preventDefault();
    $(".catalogmenu__block").removeClass("show");
    $(".sitemenu__block").addClass("show");
    return false;
});

$(".sitemenu__lay").click(function(){
    $(".sitemenu__block").removeClass("show");
});

$(".catalogmenu__top__close").click(function(){
    $(".catalogmenu__block").removeClass("show");
});
$(".sitemenu__top__close").click(function(){
    $(".sitemenu__block").removeClass("show");
});
*/