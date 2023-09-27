'use strict';

function Tabs() {
	var bindAll = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].addEventListener('click', change, false);
		}
	}

	var clear = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].classList.remove('active');
			var id = menuElements[i].getAttribute('data-tab');
			document.getElementById(id).classList.remove('active');
		}
	}

	var change = function (e) {
		clear();
		e.target.classList.add('active');
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('active');
	}

	bindAll();
}

var connectTabs = new Tabs();




var swiper = new Swiper('.team-slider', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	loop: true,
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		prevEl: '.team-slider__nav-prev',
		nextEl: '.team-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,

		},
		359.98: {
			slidesPerView: 2.1,
			spaceBetween: 10,
		},

		879.98: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1169.98: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1459.98: {
			slidesPerView: 5,
			spaceBetween: 10,
		},
	}
});

var swiper = new Swiper('.leaders-slider', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	loop: true,
	// autoplay: {
	// 	delay: 6000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		prevEl: '.leaders-slider__nav-prev',
		nextEl: '.leaders-slider__nav-next',
	},
	breakpoints: {

		320: {
			slidesPerView: 1.05,
			spaceBetween: 10,
		},
		549.98: {
			slidesPerView: 1,
			spaceBetween: 10,
		},

	}
});








var swiper = new Swiper('.team-slider-1', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	freeMode: true,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		//dynamicBullets:true,

	},
	navigation: {
		prevEl: '.team-slider__nav-prev-1',
		nextEl: '.team-slider__nav-next-1',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
		},
		609.98: {
			slidesPerView: 2,
			spaceBetween: 20,

		},
		879.98: {
			slidesPerView: 3,
			spaceBetween: 20,

		},
		1169.98: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1459.98: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	}
});
