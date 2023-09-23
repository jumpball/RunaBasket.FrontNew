const slider = document.querySelector('.publications-slider');
const MOBILE_BREAKPOINT = 991.98;
let publicationsSwiper = null;

function initSwiper() {
	if (window.innerWidth <= MOBILE_BREAKPOINT && slider) {
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
	} else if (publicationsSwiper) {
		publicationsSwiper.destroy();
	}
}

initSwiper();

window.addEventListener('load', () => {
	initSwiper();
});

const resizeObserver = new ResizeObserver(initSwiper);
resizeObserver.observe(document.documentElement);
