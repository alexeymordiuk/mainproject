"use strict";
window.onscroll = function () { scrolling() };

function topUp() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function scrolling() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("Btn").style.display = "block";
	} else {
		document.getElementById("Btn").style.display = "none";
	}
}

let swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	navigation: {
	  nextEl: ".swiper-button-right",
	  prevEl: ".swiper-button-left",
	},
	breakpoints: {
		// mobile + tablet - 320-990
		320: {
		  slidesPerView: 1
		},
		800:{
			slidesPerView: 2
		},
		991:{
			slidesPerView: 2
		},
		1200:{
			slidesPerView: 2
		},

		1300:{
			slidesPerView: 3
		},
	}
 });

