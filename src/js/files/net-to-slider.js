// === NET to SLIDER === //

// const slider = document.querySelector('.publications-slider');

// let publicationsSwiper = null;

// function mobileSlider() {
//   const MOBILE_BREAKPOINT = 949.98;
//   if (window.innerWidth <= MOBILE_BREAKPOINT && slider.dataset.mobile === 'false') {
// 	  publicationsSwiper = new Swiper(slider, {
// 		  slidesPerView: 'auto',
// 		  spaceBetween: 20,
// 		  observer: true,
// 		  observeParents: true,
// 		  observeSlideChildren: true,
// 		  navigation: {
// 			  prevEl: '.publications-slider__nav-prev',
// 			  nextEl: '.publications-slider__nav-next',
// 		  },
// 		  breakpoints: {
// 			  320: {
// 				  slidesPerView: 1,
// 			  },
// 			  649.98: {
// 				  slidesPerView: 2,
// 			  },
// 			  [MOBILE_BREAKPOINT]: {
// 				  slidesPerView: 'auto',
// 			  },
// 		  }
// 	  });

//     slider.dataset.mobile = 'true';
//   }

//   if (window.innerWidth > MOBILE_BREAKPOINT) {
//     slider.dataset.mobile = 'false';

//     if (slider.classList.contains('swiper-container-initialized')) {
//       publicationsSwiper.destroy();
//     }
//   }
// }

// mobileSlider();

// window.addEventListener('load', () => {
// 	mobileSlider();
// });
// const resizeObserver = new ResizeObserver(mobileSlider);
// resizeObserver.observe(document.documentElement);


const slider = document.querySelector('.publications-slider');

let publicationsSwiper = null;

function initSwiper() {
	const MOBILE_BREAKPOINT = 767.98;
	if (window.innerWidth <= MOBILE_BREAKPOINT && slider && slider.dataset.mobile === 'false') {
		publicationsSwiper = new Swiper(slider, {
			slidesPerView: "auto",
			spaceBetween: 10,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			navigation: {
				prevEl: '.publications-slider__nav-prev',
				nextEl: '.publications-slider__nav-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1.1,
				},

				549.98: {
					slidesPerView: 2.1,
				},
				[MOBILE_BREAKPOINT]: {
					slidesPerView: 3.1,
				},
			}
		});

		slider.dataset.mobile = 'true';
	} else if (publicationsSwiper) {
		publicationsSwiper.destroy();
		slider.dataset.mobile = 'false';
	}
}

initSwiper();

window.addEventListener('load', () => {
	initSwiper();
});

const resizeObserver = new ResizeObserver(initSwiper);
resizeObserver.observe(document.documentElement);
