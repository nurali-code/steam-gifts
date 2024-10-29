$('.btn__menu, .nav__link').on('click', function () {
	window.innerWidth <= 1200 ? $('.btn__menu, .nav, body').toggleClass('is_active') : false;
})

$('.btn__fav').on('click', function (e) {
	$(this).toggleClass('is_active');
});

$('.ddown_btn').on('click', function (e) {
	e.stopPropagation();
	$(this).closest('.ddown').toggleClass('is_active').find('.ddown-content').slideToggle(100);
});

$('.ddown_item').on('click', function () {
	const $dropdown = $(this).closest('.ddown').removeClass('is_active');
	$dropdown.find('.ddown_btn').html($(this).clone().find('input').remove().end().html());
	$dropdown.find('.ddown-content').slideUp(200);
});

$(document).on('click', function (e) {
	if (!$(e.target).closest('.ddown').length) {
		$('.ddown.is_active').removeClass('is_active').find('.ddown-content').slideUp(100);
	}
});

$('.dropdown-btn').on('click', function () {
	$(this).toggleClass('is_active').next().slideToggle(300);
});

$('.service-slider').slick({
	dots: true,
	arrows: false,
	infinite: false,
	swipeToSlide: false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 1,
	centerMode: false,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1500,
			settings: { slidesToShow: 4, }
		},
		{
			breakpoint: 1200,
			settings: { slidesToShow: 2, }
		},
		{
			breakpoint: 720,
			settings: { slidesToShow: 1, }
		},
	]
});

$('.items-slider').slick({
	dots: true,
	arrows: false,
	infinite: false,
	// swipeToSlide: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: false,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1500,
			settings: { slidesToShow: 3, }
		},
		{
			breakpoint: 1200,
			settings: { slidesToShow: 2, }
		},
		{
			breakpoint: 720,
			settings: { slidesToShow: 1, }
		},
	]
});