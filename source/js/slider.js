/*global $*/
"use strict";

$(document).ready(function () {
	let sliderOne = function () {
		$(".slider").slick({
			dots: true,
			arrows: false,
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			easing: "linear",
			infinite: true,
			initialSlide: 0,
			autoplay: true,
			autoplaySpeed: 1000,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			draggble: false,
			waitForAnimate: false,
		});
	};
	// $(window).on("load resize", function () {
	// 	let withWindow = window.innerWidth;
	// 	if (withWindow < 768) {
	// 		sliderOne();
	// 	} else {
	// 		$(".slider").slick("unslick");
	// 	}
	// });
	sliderOne();
});

