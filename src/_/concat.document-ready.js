


$("img").addClass("img-fluid");


$(document.body).on("click.fecss.scrollto","[data-scrollto-item]",{},function(t){t.preventDefault();var o=$(this),a=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,l=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+e},l),$("[data-scrollto-item]").removeClass("is--active"),o.addClass("is--active")}),$(document.body).on("click","[data-scrollto-navbar].is--open [data-scrollto-item]",{},function(t){$(document).width()<1199&&(t.preventDefault(),$("[data-scrollto-humb]").trigger("click"))});
var prevArrow='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',nextArrow='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',index=$("[data-slick-index]"),snew=$("[data-slick-new]"),articles=$("[data-slick-articles]"),articles_lg=$("[data-slick-articles-lg]"),catalog=$("[data-slick-catalog]"),catalog_nav=$("[data-slick-catalog-nav]"),catalog_m=$("[data-slick-modal]"),catalog_m_nav=$("[data-slick-modal-nav]"),catalog_note=$("[data-slick-catalog-note]"),team=$("[data-slick-team]"),history=$("[data-slick-history]");index.slick({slidesToShow:1,slidesToScroll:1,dots:!0,prevArrow:prevArrow,nextArrow:nextArrow,draggable:!1,pauseOnFocus:!1,pauseOnHover:!1,swipe:!1,touchMove:!1,fade:!0,autoplay:!0,speed:1e3,autoplaySpeed:7e3}),snew.slick({slidesToShow:5,slidesToScroll:1,arrows:!0,dots:!1,variableWidth:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:1200,settings:{}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),articles.slick({slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$('a[data-toggle="tab"]').on("shown.bs.tab",function(o){articles.slick("setPosition")}),catalog.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0,fade:!0,draggable:!1,asNavFor:catalog_nav}),catalog_nav.slick({slidesToShow:3,slidesToScroll:1,asNavFor:catalog,arrows:!0,vertical:!0,prevArrow:prevArrow,nextArrow:nextArrow,focusOnSelect:!0,responsive:[{breakpoint:768,settings:{vertical:!1}}]}),catalog_m.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0,fade:!0,draggable:!1,asNavFor:catalog_m_nav}),catalog_m_nav.slick({slidesToShow:3,slidesToScroll:1,asNavFor:catalog_m,arrows:!0,variableWidth:!0,prevArrow:prevArrow,nextArrow:nextArrow,focusOnSelect:!0}),$(".modal").on("shown.bs.modal",function(o){catalog_m.slick("setPosition"),catalog_m_nav.slick("setPosition"),$("[data-slick-wrap]").addClass("show")}),catalog_note.slick({slidesToShow:1,slidesToScroll:1,prevArrow:prevArrow,nextArrow:nextArrow,draggable:!1,pauseOnFocus:!1,pauseOnHover:!1,swipe:!1,touchMove:!1,fade:!0,autoplay:!0,speed:1e3,autoplaySpeed:7e3}),articles_lg.slick({slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}),team.slick({slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,infinite:!0,centerMode:!0,variableWidth:!0,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),history.slick({responsive:[{breakpoint:99999,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,infinite:!1,centerMode:!0,variableWidth:!0}}]});