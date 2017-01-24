/*---For active menu item---*/
$(function () {
	$('.footer-menu .menu-list li a').each(function () {
		var location = window.location.pathname;
		var link = this.pathname;
		var result = location.match(link);
		if(result && link.length > 0) {
			$(this).addClass('footer-item-active');
		}
	});
});
$(function () {
	$('.footer-programs .programs-list li a').each(function () {
		var location = window.location.pathname;
		var link = this.pathname;
		var result = location.match(link);
		if(result && link.length > 0) {
			$(this).addClass('footer-item-active');
		}
	});
});
$(function () {
	$('.desctop-navigation .desctop-menu li a').each(function () {
		var location = window.location.pathname;
		var link = this.pathname;
		var result = location.match(link);
		if(result && link.length > 0) {
			$(this).addClass('main-menu-active');
		}
	});
});
$(function () {
	$('.overlay-menu .menu li a').each(function () {
		var location = window.location.pathname;
		var link = this.pathname;
		var result = location.match(link);
		if(result && link.length > 0) {
			$(this).addClass('mobile-menu-active');
		}
	});
});

// FOR DROPDOWN ACTIVE
$(document).ready(function($) {
	$('.ui.dropdown')
	.dropdown();
}); 
// FIND DROPDOVN AND ADD CLASS ANGLE DOWN IN SELECT BLOCK
$(document).ready(function($) {
	$(".select-lenguage").find(".icon").addClass('angle down');
});
// MOBILE MENU
$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	$('#toggle').parents('.inside-page-header').css('padding: 0;')
});

// MAIN PAGE SLIDER
$('.main-slider').slick({
	autoplay: false,
	autoplaySpeed: 3000,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: '0',
	arrows: true,
	nextArrow: '<div class="next-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	prevArrow: '<div class="prev-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></div>'
});

// GALLERY SLIDER ON MAIN PAGE
$('.gallery-slider').slick({
	autoplay: false,
	autoplaySpeed: 3000,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerPadding: '20px',
	variableWidth: true,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '20px',
			slidesToShow: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			arrows: true,
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 1
		}
	}
	],
	arrows: true,
	nextArrow: '<div class="next-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	prevArrow: '<div class="prev-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></div>'

});
// BLOG PAGE MOBILE SLIDER
$('.blog-mobile-slider').slick({
	autoplay: false,
	autoplaySpeed: 3000,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerPadding: '20px',
	arrows: false,
	variableWidth: true,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '20px',
			slidesToShow: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			arrows: true,
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 1
		}
	}
	]
});
// SINGLE THUBNAIL BLOG MORE SLIDER
$(document).ready(function() {

	$('.single-article-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerPadding: '20px',
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0',
				slidesToShow: 1
			}
		}
		]
	});
	// GALLERY MOBILE SLIDER
	$('.gallery-mobile-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '20px',
		arrows: false,
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0',
				slidesToShow: 1
			}
		}
		]
	});
	// GALLERY MORE MOBILE SLIDER
	$('.gallery-more-mobile-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '20px',
		arrows: false,
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0',
				slidesToShow: 1
			}
		}
		]
	});
	
});



$(document).ready(function() {
	$(".single-article-gallery").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		'autoScale'     : false,
		'transitionIn'  : 'none',
		'titleShow'     : false,
		'showCloseButton': true,
		'wrapCSS' : 'custom-gallery-wrapper',
		'transitionOut' : 'none',
		'title'         : '',
		'width'         : 980,
		'height'        : 655,
		'href'          : this.href,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$(".videoWrapper").click(function() {
		$.fancybox({
			'padding'       : 0,
			'autoScale'     : false,
			'transitionIn'  : 'none',
			'titleShow'     : false,
			'showCloseButton': true,
			'titlePosition' : 'inside',
			'transitionOut' : 'none',
			'title'         : '',
			'width'         : 640,
			'height'        : 385,
			'href'          : this.href,
			'type'          : 'iframe',
			'helpers'     : {
				'overlay' : {'closeClick': false}
			},
		});

		return false;
	});

	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});



function openPopup(id)
{
	$(id).addClass('is-visible');
	console.log("good");
}

jQuery(document).ready(function($){


	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('.cd-popup').removeClass('is-visible');
		}
	});
});


// jQuery(document).ready(function($){
// 	//open popup
// 	$('.cd-popup-trigger').on('click', function(event){
// 		event.preventDefault();
// 		$('.cd-popup').addClass('is-visible');
// 	});

// 	//close popup
// 	$('.cd-popup').on('click', function(event){
// 		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
// 			event.preventDefault();
// 			$(this).removeClass('is-visible');
// 		}
// 	});
// 	//close popup when clicking the esc keyboard button
// 	$(document).keyup(function(event){
// 		if(event.which=='27'){
// 			$('.cd-popup').removeClass('is-visible');
// 		}
// 	});
// });

$(document).ready(function() {
	$(".sub-menu-mobile > a")['on']("click", function(){

		if ($(this).parent().children(".sub-menu-block").css("display") == "none"){
			$(".sub-menu-block").css("display","none");
			$(".back-visible").css("display","none");


			$(this).parent().children(".sub-menu-block").css({"display" : "block"});
			$(this).parent().children(".back-visible").css({"display" : "block"});

			return false;
		}

	});
});