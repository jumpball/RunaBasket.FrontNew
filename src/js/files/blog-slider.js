// === BLOG SLIDER === //
var swiper = new Swiper('.blog-slider', {
	//spaceBetween: 20,
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// autoHeight: true,
	pagination: {
		el: '.blog-slider__pagination',
		clickable: true,
	}
});

// === CALENDAR SLIDER === //
var CalendarSwiper = new Swiper('.calendar-slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		prevEl: '.calendar-slider__nav-prev',
		nextEl: '.calendar-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10,
		},
		549.98: {
			slidesPerView: 2.05,
			spaceBetween: 10,
		},
		767.98: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		991.98: {
			slidesPerView: 3,
			spaceBetween: 20,
		},

	}
});

// === BANNER SLIDER === //
// var PubCardSwiper = new Swiper('.pub-cards-slider', {
// 	slidesPerView:'auto',
// 	spaceBetween: 20,
// 	observer: true,
// 	observeParents: true,
// 	observeSlideChildren: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true,
// 		dynamicBullets:true,
// 	},
// 	navigation: {
// 		prevEl: '.pub-cards-slider__nav-prev',
// 		nextEl: '.pub-cards-slider__nav-next',
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 		},
// 		649.98: {
// 			slidesPerView: 2,
// 		},
// 		949.98: {
// 			slidesPerView: 3,
// 		},
// 		1299.98: {
// 			slidesPerView: 4,
// 			spaceBetween: 20,
// 		},
// 	}
// });

// === BANNER SLIDER === //
var BannerSwiper = new Swiper('.banner-slider', {
	//slidesPerView: 'auto',
	slidesPerView: 1,
	spaceBetween: 20,
	effect: 'fade',
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	//slideToClickedSlide: true,
	//autoHeight: true,
	//centeredSlides: true,
	autoplay: {
		delay: 7000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.banner-slider__nav-prev',
		nextEl: '.banner-slider__nav-next',
	},
	//breakpoints: {
	//320: {
	//	slidesPerView: 1,

	//},
	//679.98: {
	//	slidesPerView: 2,

	//centeredSlides: false,
	//},
	//991.98: {
	//	slidesPerView: 3,

	//},
	//}
});

// === HEAD SLIDER === //
var HeadSwiper = new Swiper('.head-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 1,
	spaceBetween: 20,
	effect: 'fade',
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	slideToClickedSlide: true,
	autoHeight: true,
	centeredSlides: false,
	autoplay: {
		delay: 12000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// effect: 'coverflow',
	// coverflowEffect: {
	// rotate: 15,
	// stretch: 150,
	// slideShadows: true,
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		//dynamicBullets:true,

	},
	navigation: {
		prevEl: '.head-slider__nav-prev',
		nextEl: '.head-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			//spaceBetween: 20,
		},
		1160: {
			slidesPerView: 1,
			//spaceBetween: 20,
		},
	}
});

// === GALERY SLIDER === //
var GalerySwiper = new Swiper('.galery-slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	slideToClickedSlide: true,
	autoHeight: true,
	centeredSlides: true,
	autoplay: {
		delay: 7000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// effect: 'coverflow',
	// coverflowEffect: {
	// rotate: 15,
	// stretch: 150,
	// slideShadows: true,
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,

	},
	navigation: {
		prevEl: '.galery-slider__nav-prev',
		nextEl: '.galery-slider__nav-next',
	},
	breakpoints: {

		320: {
			slidesPerView: 1,

		},
		599.98: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		949.98: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	}
});

// === PUBLICATION MENU === //
var PubMenuSwiper = new Swiper('.pub-menu-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 6,
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	nested: true,
	navigation: {
		prevEl: '.pub-menu-slider__nav-prev',
		nextEl: '.pub-menu-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		470: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		690: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		910: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1140: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1360: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	}
});

// === ROSTER MENU === //
var RosterMenuSwiper = new Swiper('.roster-menu-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 6,
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: false,
	//freeMode: true,
	nested: true,
	navigation: {
		prevEl: '.roster-menu-slider__nav-prev',
		nextEl: '.roster-menu-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10,
		},
		509.98: {
			slidesPerView: 2.1,
			spaceBetween: 10,
		},
		749.98: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

	}
});

// === LEADERS MENU === //
var LeadersMenuSwiper = new Swiper('.leaders-menu-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 6,
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: false,
	//freeMode: true,
	nested: true,
	navigation: {
		prevEl: '.leaders-menu-slider__nav-prev',
		nextEl: '.leaders-menu-slider__nav-next',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10,
		},
		509.98: {
			slidesPerView: 2.1,
			spaceBetween: 10,
		},
		749.98: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

	}
});

// === TEAM LEAD MENU === //
var TeamLeadMenuSwiper = new Swiper('.team-lead-menu-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 6,
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	nested: true,
	navigation: {
		prevEl: '.team-lead-menu-slider__nav-prev',
		nextEl: '.team-lead-menu-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		449.98: {
			slidesPerView: 3,
		},
		767.98: {
			slidesPerView: 4,
		},
		991.98: {
			slidesPerView: 5,
		},
		1199.98: {
			slidesPerView: 6,
		},
		1399.98: {
			slidesPerView: 7,
		},
		1499.98: {
			slidesPerView: 8,
		},
	}
});

// === CLUB HISTORY MENU === //
var ClubHistoryMenuSwiper = new Swiper('.club-history-menu-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 6,
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	nested: true,
	navigation: {
		prevEl: '.club-history-menu-slider__nav-prev',
		nextEl: '.club-history-menu-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			//spaceBetween: 20,
		},
		449.98: {
			slidesPerView: 3,
			//spaceBetween: 20,
		},
		767.98: {
			slidesPerView: 4,
			//spaceBetween: 20,
		},
		991.98: {
			slidesPerView: 5,
			//spaceBetween: 20,
		},
		1199.98: {
			slidesPerView: 6,
			//spaceBetween: 20,
		},
		1399.98: {
			slidesPerView: 7,
			//spaceBetween: 20,
		},
		1499.98: {
			slidesPerView: 8,
			//spaceBetween: 20,
		},
	}
});

// === TEAM LEADERS / GAME SLIDER === //
var TeamLeadGameSwiper1 = new Swiper('.team1-leaders-game-slider', {
	slidesPerView: 'auto',
	//slidesPerGroup: 1,
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	direction: 'vertical',
	centeredSlides: false,
	//stopOnLastSlide: true,
	//autoplay: {
	//delay: 7000,
	//stopOnLastSlide: false,
	//disableOnInteraction: false,
	//},
	//loop: true,
	//slideToClickedSlide: true,
	navigation: {
		prevEl: '.team1-leaders-game-slider__nav-prev',
		nextEl: '.team1-leaders-game-slider__nav-next',
	},
	//pagination: {
	//el: '.swiper-pagination',
	//type: 'bullets',
	//clickable: true,
	//dynamicBullets:true,

	//},
	breakpoints: {

		320: {
			slidesPerView: 1,

		},
		767.98: {
			slidesPerView: 5,

		},
	}
});
var TeamLeadGameSwiper2 = new Swiper('.team2-leaders-game-slider', {
	slidesPerView: 'auto',
	//slidesPerGroup: 1,
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	direction: 'vertical',
	centeredSlides: false,
	//stopOnLastSlide: true,
	//autoplay: {
	//delay: 7000,
	//stopOnLastSlide: false,
	//disableOnInteraction: false,
	//},
	//loop: true,
	//slideToClickedSlide: true,
	navigation: {
		prevEl: '.team2-leaders-game-slider__nav-prev',
		nextEl: '.team2-leaders-game-slider__nav-next',
	},
	//pagination: {
	//el: '.swiper-pagination',
	//type: 'bullets',
	//clickable: true,
	//dynamicBullets:true,

	//},
	breakpoints: {

		320: {
			slidesPerView: 1,
		},

		767.98: {
			slidesPerView: 5,
		},
	}
});

// === PERSON MENU === //
var PersonMenuSwiper = new Swiper('.person-menu-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 6,
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	slideToClickedSlide: true,
	//freeMode: true,
	//loop: true,
	nested: true,
	navigation: {
		prevEl: '.person-menu-slider__nav-prev',
		nextEl: '.person-menu-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,

		},
		349.98: {
			slidesPerView: 2,

		},
		559.98: {
			slidesPerView: 3,

		},
		767.98: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		// 1140: {
		// 	slidesPerView: 5,
		// 	spaceBetween: 20,
		// },
		// 1360: {
		// 	slidesPerView: 6,
		// 	spaceBetween: 20,
		// },
	}
});

// === MONTH SLIDER === //
var MonthSwiper = new Swiper('.month-slider', {
	slidesPerView: 1,
	//slidesPerView: 3,
	//spaceBetween: 20,

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: true,
	//freeMode: true,
	loop: true,
	//slideToClickedSlide: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	//autoHeight: true,
	// autoplay: {
	// 	delay: 7000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false,
	// },
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.month-slider__nav-prev',
		nextEl: '.month-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,

		},
		767.98: {
			slidesPerView: 1,

		},
		991.98: {
			slidesPerView: 1,

		},
	}
});

// === DAY SLIDER === //
var DaySwiper = new Swiper('.day-slider', {
	slidesPerView: 1,
	//slidesPerView: 3,
	//spaceBetween: 20,

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: true,
	//freeMode: true,
	loop: true,
	//slideToClickedSlide: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	//autoHeight: true,
	// autoplay: {
	// 	delay: 7000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false,
	// },
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.day-slider__nav-prev',
		nextEl: '.day-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,

		},
		767.98: {
			slidesPerView: 1,

		},
		991.98: {
			slidesPerView: 1,

		},
	}
});

// === VIDEO SLIDER === //
var swiper = new Swiper('.video-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 3,
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: false,
	//slideToClickedSlide: true,
	//autoHeight: true,
	//centeredSlides: true,
	autoplay: {
		delay: 12000,
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
		prevEl: '.video-slider__nav-prev',
		nextEl: '.video-slider__nav-next',
	},
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,

	// 	},
	// 	679.98: {
	// 		slidesPerView: 2,

	// 		//centeredSlides: false,
	// 	},
	// 	991.98: {
	// 		slidesPerView: 3,

	// 	},
	// }
});

// === TEAM LEADER SLIDER === //
var TeamLeadersSwiper = new Swiper('.team-leaders-slider', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: false,
	navigation: {
		prevEl: '.team-leaders-slider__nav-prev',
		nextEl: '.team-leaders-slider__nav-next',
	},
	breakpoints: {
		300: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		479.98: {
			slidesPerView: 2,
		},
		1149.98: {
			slidesPerView: 3,
			spaceBetween: 20,
			direction: 'horizontal',
		},
		1429.98: {
			slidesPerView: 4,
			direction: 'vertical',
		},
	}
});

// === STORE SLIDER === //
var StoreSwiper = new Swiper('.store-slider', {
	slidesPerView: 'auto',

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	loop: true,
	autoplay: {
		delay: 7000,
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
		prevEl: '.store-slider__nav-prev',
		nextEl: '.store-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		650: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1279.98: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1600: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	}
});

// === PARTNERS SLIDER === //

var swiper = new Swiper('.partners-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 3,
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	loop: true,
	slideToClickedSlide: true,
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// navigation: {
	// 	prevEl: '.banner-slider__nav-prev',
	// 	nextEl: '.banner-slider__nav-next',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,

		},
		470: {
			slidesPerView: 2,

		},
		690: {
			slidesPerView: 3,

		},
		910: {
			slidesPerView: 4,

		},
		1140: {
			slidesPerView: 4,

		},
		1360: {
			slidesPerView: 5,

		},
	}
});

// === CONTENT BLOCK & PUBLICATION PHOTO SLIDER === //
var ClubPhotoRightSwiper = new Swiper('.club-photo-slider-right', {
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: true,
	//freeMode: true,
	loop: true,
	//slideToClickedSlide: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoHeight: true,
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.pub-photo-slider-right__nav-prev',
		nextEl: '.pub-photo-slider-right__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,

		},
		767.98: {
			slidesPerView: 1,

		},
		991.98: {
			slidesPerView: 1,

		},
	}
});
var PubPhotoLeftSwiper = new Swiper('.pub-photo-slider-left', {
	slidesPerView: 1,
	spaceBetween: 8,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.pub-photo-slider-left__nav-prev',
		nextEl: '.pub-photo-slider-left__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,

		},

		749.98: {
			slidesPerView: 1,
		},
	}
});
var PubPhotoRightSwiper = new Swiper('.pub-photo-slider-right', {
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: true,
	//freeMode: true,
	loop: true,
	//slideToClickedSlide: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoHeight: true,
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.pub-photo-slider-right__nav-prev',
		nextEl: '.pub-photo-slider-right__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,

		},
		767.98: {
			slidesPerView: 1,

		},
		991.98: {
			slidesPerView: 1,

		},
	}
});




// === SIDEBAR BANNER SLIDER === //
var SidebarBannerSwiper = new Swiper('.sidebar-banner-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 3,
	spaceBetween: 16,

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	slideToClickedSlide: true,
	//autoHeight: true,
	//centeredSlides: true,
	direction: 'vertical',
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	//dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.sidebar-banner-slider__nav-prev',
		nextEl: '.sidebar-banner-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 3,
			spaceBetween: 16,
			//direction: 'horizontal',
		},
		// 599.98: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 16,
		// 	direction: 'horizontal',
		// },
		// 991.98: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 16,
		// 	direction: 'vertical',
		// },
		// 1149.98: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 16,
		// 	direction: 'vertical',
		// },
		// 1249.98: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 16,
		// 	direction: 'vertical',
		// },
	}
});

// === SIDEBAR STORE SLIDER === //
var swiper = new Swiper('.sidebar-store-slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	autoplay: {
		delay: 9000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	//pagination: {
	//el: '.swiper-pagination',
	//type: 'bullets',
	//clickable: true,
	//dynamicBullets:true,

	//},
	navigation: {
		prevEl: '.sidebar-store-slider__nav-prev',
		nextEl: '.sidebar-store-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,

		},
		650: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		880: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		991.98: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

	}
});


// === BIG SCREEN SLIDER === //
var BigScreenSwiper = new Swiper('.screen-menu-slider', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: false,
	navigation: {
		prevEl: '.screen-menu-slider__nav-prev',
		nextEl: '.screen-menu-slider__nav-next',
	},
	breakpoints: {
		300: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		479.98: {
			slidesPerView: 2,
		},
		1149.98: {
			slidesPerView: 3,
			spaceBetween: 20,
			direction: 'horizontal',
		},
		1429.98: {
			slidesPerView: 4,
			direction: 'vertical',
		},
	}
});

var ScreenMenuSwiper = new Swiper('.big-screen-slider', {
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	centeredSlides: true,
	//freeMode: true,
	loop: true,
	//slideToClickedSlide: true,
	//effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoHeight: true,
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,

	// },
	navigation: {
		prevEl: '.big-screen-slider__nav-prev',
		nextEl: '.big-screen-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,

		},
		767.98: {
			slidesPerView: 1,

		},
		991.98: {
			slidesPerView: 1,

		},
	}
});