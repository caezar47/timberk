


$("img").addClass("img-responsive");
var catalog_btn=$("[data-btn-catalog]"),menu_btn=$("[data-btn-humb]"),humb=$("[data-hamburger]"),collapse=$(".navbar__aside"),html=$("html");humb.on("click",function(){$(this).toggleClass("is--active"),$(collapse).toggleClass("is--open"),$(html).toggleClass("is--open-navbar")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__aside-container").length&&0==$(a.target).closest("[data-hamburger]").length&&(humb.removeClass("is--active"),$(html).removeClass("is--open-navbar"),$(collapse).removeClass("is--open"))});

var prevArrow='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',nextArrow='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',index=$("[data-slick-index]"),snew=$("[data-slick-new]"),articles=$("[data-slick-articles]"),team=$("[data-slick-team]"),team_full=$("[data-slick-team-full]"),adv=$("[data-slick-adv]");index.slick({slidesToShow:1,slidesToScroll:1,dots:!0,prevArrow:prevArrow,nextArrow:nextArrow,draggable:!1,pauseOnFocus:!1,pauseOnHover:!1,swipe:!1,touchMove:!1,fade:!0,autoplay:!0,speed:1e3,autoplaySpeed:7e3}),snew.slick({slidesToShow:6,slidesToScroll:1,arrows:!0,dots:!1,variableWidth:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:1200,settings:{}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),articles.slick({slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),team.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!0,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:768,settings:{}}]}),adv.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow}),team_full.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,autoplay:!1}),767<$(document).width()&&(adv.slick("unslick"),team_full.slick("unslick"));