
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
   import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'
import lgAutoplay from 'lightgallery/plugins/autoplay/lg-autoplay.min.js'
import lgComment from 'lightgallery/plugins/comment/lg-comment.min.js'
import lgHash from 'lightgallery/plugins/hash/lg-hash.min.js'
import lgPager from 'lightgallery/plugins/pager/lg-pager.min.js'
import lgRotate from 'lightgallery/plugins/rotate/lg-rotate.min.js'
import lgShare from 'lightgallery/plugins/share/lg-share.min.js'
import lgVideo from 'lightgallery/plugins/video/lg-video.min.js'


// Базовые стили
 //import '@scss/libs/gallery/lightgallery.scss';
// Стили дополнений
// import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
   import '@scss/libs/gallery/lightgallery-bundle.scss';



// Запуск
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	let galleyItems = [];
	galleries.forEach(gallery => {
		galleyItems.push({
			gallery,
			galleryClass: lightGallery(gallery, {
				plugins: [lgZoom, lgThumbnail, lgAutoplay, lgComment, lgHash, lgPager, lgRotate, lgShare, lgVideo],
				licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
				speed: 500,
			})
		})
	});
	// Добавляем в объект модулей
	flsModules.gallery = galleyItems;
}

// === NEW GALLERY === //
// lightGallery(document.getElementById('person-gallery'), {
// 	selector: '.person-gallery__item',
// 	speed: 500,
// 	mode: 'lg-fade',
// 	thumbnail: true,
// 	plugins: [lgZoom, lgThumbnail],
// 	thumbWidth: 80,
// 	thumbHeight: "60px",
// 	thumbMargin: 10
// });

// === CLUB GALLERY-1 === //
// Проверяем наличие галереи на странице
const gallery1 = document.querySelector('.club-gallery-1');
if (gallery1) {
  // Если галерея есть, инициализируем ее
  const galleryItems1 = gallery1.querySelectorAll('.club-gallery-1__item');
  // Скрываем все фотографии, кроме первой
  for (let i = 1; i < galleryItems1.length; i++) {
    galleryItems1[i].style.display = 'none';
  }
  // Добавляем обработчик события на клик по первой фотографии
	galleryItems1[0].addEventListener('click', () => {
		// Инициализируем галерею lightgallery
		lightGallery(document.querySelector('[data-gallery]'), {
			dynamic: true,
			dynamicEl: [
				{
					src: galleryItems1[0].querySelector('.club-gallery-1__image').src,
					thumb: galleryItems1[0].querySelector('.club-gallery-1__image').src,
				},
				{
					src: galleryItems1[1].querySelector('.club-gallery-1__image').src,
					thumb: galleryItems1[1].querySelector('.club-gallery-1__image').src,
				},
				{
					src: galleryItems1[2].querySelector('.club-gallery-1__image').src,
					thumb: galleryItems1[2].querySelector('.club-gallery-1__image').src,
				},
			],
			exThumbImage: true, // Отображение превью изображений в качестве миниатюр
			rotate: true, // Поворот изображений
			zoom: true, // Масштабирование изображений
			hash: true, // Использование URL-адреса фрагмента для сохранения текущего изображения
			share: true, // Кнопка для общего доступа к текущему изображению в социальных сетях
			video: true, // Поддержка видеофайлов
			autoplay: true, // Автоматическое воспроизведение видеофайлов
			pager: true, // Отображение номера текущего изображения и общего количества изображений
			download: true, // Скачивание текущего изображения
			lgSetCaption: true, // Отображение подписей к изображениям
		});
	});
}

// === CLUB GALLERY-2 === //
// Проверяем наличие галереи на странице
const gallery2 = document.querySelector('.club-gallery-2');
if (gallery2) {
	// Если галерея есть, инициализируем ее
	const galleryItems2 = document.querySelectorAll('.club-gallery-2__item');
	// Скрываем все фотографии, кроме первой
	for (let i = 1; i < galleryItems2.length; i++) {
		galleryItems2[i].style.display = 'none';
	}
	// Добавляем обработчик события на клик по первой фотографии
	galleryItems2[0].addEventListener('click', () => {
		// Инициализируем галерею lightgallery
		lightGallery(document.querySelector('[data-gallery]'), {
			dynamic: true,
			dynamicEl: [
				{
					src: galleryItems2[0].querySelector('.club-gallery-2__image').src,
					thumb: galleryItems2[0].querySelector('.club-gallery-2__image').src,
				},
				{
					src: galleryItems2[1].querySelector('.club-gallery-2__image').src,
					thumb: galleryItems2[1].querySelector('.club-gallery-2__image').src,
				},
				{
					src: galleryItems2[2].querySelector('.club-gallery-2__image').src,
					thumb: galleryItems2[2].querySelector('.club-gallery-2__image').src,
				},
				
			],
			exThumbImage: true, // Отображение превью изображений в качестве миниатюр
			rotate: true, // Поворот изображений
			zoom: true, // Масштабирование изображений
			hash: true, // Использование URL-адреса фрагмента для сохранения текущего изображения
			share: true, // Кнопка для общего доступа к текущему изображению в социальных сетях
			video: true, // Поддержка видеофайлов
			autoplay: true, // Автоматическое воспроизведение видеофайлов
			pager: true, // Отображение номера текущего изображения и общего количества изображений
			download: true, // Скачивание текущего изображения
			lgSetCaption: true, // Отображение подписей к изображениям
		});
	});
}
	// === CLUB GALLERY-3 === //

	// Проверяем наличие галереи на странице
	const gallery3 = document.querySelector('.club-gallery-3');
	if (gallery3) {
		// Если галерея есть, инициализируем ее
		const galleryItems3 = document.querySelectorAll('.club-gallery-3__item');
		// Скрываем все фотографии, кроме первой
		for (let i = 1; i < galleryItems3.length; i++) {
			galleryItems3[i].style.display = 'none';
		}
		// Добавляем обработчик события на клик по первой фотографии
		galleryItems3[0].addEventListener('click', () => {
			// Инициализируем галерею lightgallery
			lightGallery(document.querySelector('[data-gallery]'), {
				dynamic: true,
				dynamicEl: [
					{
						src: galleryItems3[0].querySelector('.club-gallery-3__image').src,
						thumb: galleryItems3[0].querySelector('.club-gallery-3__image').src,
					},
					{
						src: galleryItems3[1].querySelector('.club-gallery-3__image').src,
						thumb: galleryItems3[1].querySelector('.club-gallery-3__image').src,
					},
					{
						src: galleryItems3[2].querySelector('.club-gallery-3__image').src,
						thumb: galleryItems3[2].querySelector('.club-gallery-3__image').src,
					},
				
				],
				exThumbImage: true, // Отображение превью изображений в качестве миниатюр
				rotate: true, // Поворот изображений
				zoom: true, // Масштабирование изображений
				hash: true, // Использование URL-адреса фрагмента для сохранения текущего изображения
				share: true, // Кнопка для общего доступа к текущему изображению в социальных сетях
				video: true, // Поддержка видеофайлов
				autoplay: true, // Автоматическое воспроизведение видеофайлов
				pager: true, // Отображение номера текущего изображения и общего количества изображений
				download: true, // Скачивание текущего изображения
				lgSetCaption: true, // Отображение подписей к изображениям
			});
		});
	}
