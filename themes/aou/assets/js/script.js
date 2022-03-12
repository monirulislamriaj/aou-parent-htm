(function ($) {
	'use strict';

	// background color
	$('[data-color]').each(function () {
		$(this).css({
			'background-color': $(this).data('color')
		});
	});

	// Slick
	var $status = $('.pagingInfo');
	var $slickElement = $('.slideshow');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + '/' + slick.slideCount);
	});

	$slickElement.slick({
		autoplay: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'fas fa-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'fas fa-angle-right\'></i></button>'
	});

})(jQuery);