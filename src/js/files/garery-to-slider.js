// === GALERY to SLIDER === //

const slider = document.querySelector('.galery-slider');

let galerySwiper = null;

function initSwiper() {
  const MOBILE_BREAKPOINT = 949.98;
  if (window.innerWidth <= MOBILE_BREAKPOINT && slider && slider.dataset.mobile === 'false') {
    galerySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
        prevEl: '.galery-slider__nav-prev',
        nextEl: '.galery-slider__nav-next',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        649.98: {
          slidesPerView: 2,
        },
        [MOBILE_BREAKPOINT]: {
          slidesPerView: 3,
        },
      }
    });
    
    slider.dataset.mobile = 'true';
  } else if (galerySwiper) {
    galerySwiper.destroy();
    slider.dataset.mobile = 'false';
  }
}

initSwiper();

window.addEventListener('load', () => {
  initSwiper();
});

const resizeObserver = new ResizeObserver(initSwiper);
resizeObserver.observe(document.documentElement);
