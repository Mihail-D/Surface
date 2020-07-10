/*global $*/
"use strict";

$(document).ready(function() {
	$(".slider").slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		easing: "linear",
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggble: false,
		waitForAnimate: false,
	});
});
