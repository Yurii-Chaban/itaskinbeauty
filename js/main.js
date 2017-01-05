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

});
