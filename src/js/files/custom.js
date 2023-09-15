//ВЫБРАТЬ ПАРАМЕТР ИЗ URL-СТРОКИ START
function getUrlParam(paramName) {
	const match = window.location.search.match("[?&]" + paramName + "(?:&|$|=([^&]*))");
	return match ? (match[1] ? decodeURIComponent(match[1]) : "") : null;
}
window.getUrlParam = getUrlParam;
//ВЫБРАТЬ ПАРАМЕТР ИЗ URL-СТРОКИ END

//ВЫБРАТЬ ПАРАМЕТР ИЗ URL-СТРОКИ START
function getUrlParamWithSpecialName(paramName) {
	return getUrlParam(encodeURIComponent(paramName).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}
window.getUrlParamWithSpecialName = getUrlParamWithSpecialName;
//ВЫБРАТЬ ПАРАМЕТР ИЗ URL-СТРОКИ END

//ПОВЕСИТЬ НА ВЫБРАННЫЙ ЭЛЕМЕНТ РЕДАКТОР TINYMCE START
function initTinyMCE(id) {
	tinymce.init({
		selector: `#${id}`,
		height: 400,
		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table paste code help wordcount'
		],
		toolbar: 'undo redo | formatselect | ' +
			'bold italic backcolor | alignleft aligncenter ' +
			'alignright alignjustify | bullist numlist outdent indent | ' +
			'removeformat | help',
		language: 'ru',
		automatic_uploads: true,
		images_upload_url: '/ru/admin/upload-editor-image',
		images_reuse_filename: true,
		image_dimensions: false,
		paste_data_images: true,
		convert_urls: false,
		image_class_list: [
			{ title: 'Responsive', value: 'img-responsive-publication' }
		]
	});
}

window.initTinyMCE = initTinyMCE;
//ПОВЕСИТЬ НА ВЫБРАННЫЙ ЭЛЕМЕНТ РЕДАКТОР TINYMCE END

//ПОКАЗАТЬ ПРЕВЬЮ ЗАГРУЖАЕМОЙ КАРТИНКИ В БРАУЗЕРЕ START
function showImgPreview(fileFrom, isCropperNeeded) {
	//input[file] - откуда указываем картинку для загрузки
	let fileFromInput = document.querySelector(`#${fileFrom}`);

	//... при каждой смене картинки ...
	fileFromInput.addEventListener('change', function () {
		//Каждый раз очищаем контейнер div с прошлыми загруженными картинками
		let imgContainer = document.getElementById("divTitlePreview");
		imgContainer.innerHTML = "";

		//И каждый раз создаем новый элемент img
		let imgNew = document.createElement("img");
		imgNew.classList.add('images-preview__item');

		//Если файл успешно загружен с компьютера, то в качестве src для картинки указываем его
		const [file] = fileFromInput.files;
		if (file)
			imgNew.src = URL.createObjectURL(file);

		//Вставляем только что созданную и настроенную картинку в контейнер
		imgContainer.appendChild(imgNew);

		//Если нужна обрезка картинки, то подключаем CropperJs
		if (isCropperNeeded) {
			let cropX = document.querySelector('#cropX');
			let cropY = document.querySelector('#cropY');
			let cropWidth = document.querySelector('#cropWidth');
			let cropHeight = document.querySelector('#cropHeight');
			new Cropper(imgNew, {
				aspectRatio: 300 / 250,
				zoomable: false,
				crop(event) {
					cropX.value = event.detail.x;
					cropY.value = event.detail.y;
					cropWidth.value = event.detail.width;
					cropHeight.value = event.detail.height;
				},
			});
		}
	});
}

window.showImgPreview = showImgPreview;
//ПОКАЗАТЬ ПРЕВЬЮ ЗАГРУЖАЕМОЙ КАРТИНКИ В БРАУЗЕРЕ END

//ВЕРНУТЬСЯ НАВЕРХ НА СТРАНИЦЕ START
const btnBackToTop = document.getElementById("btn-goto-top");
if (btnBackToTop)
	btnBackToTop.addEventListener("click", backToTop);
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		btnBackToTop.style.display = "block";
	} else {
		btnBackToTop.style.display = "none";
	}
}
function backToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () { scrollFunction() };
//ВЕРНУТЬСЯ НАВЕРХ НА СТРАНИЦЕ END

//ПОДГРУЖАЕМ НОВЫЕ ПУБЛИКАЦИИ START
//Программируем кнопки-табы для разных типов публикаций
function setPubType() {
	let btns = document.querySelectorAll('.publication-selector__btn');
	let pubType = document.querySelector('#js-pub-type');
	let lnkLoad = document.querySelector('#js-pubs-load-more');

	if (btns && pubType && lnkLoad) {
		btns.forEach(element => {
			element.addEventListener('click', function () {
				if (element.getAttribute('data-view')) {
					//Устанавливаем активный выбранный тип публикаций для подгрузки.
					//См. файл _StuffPartial.cshtml
					pubType.value = element.getAttribute('data-view');
				}
			}, false);
		});

		lnkLoad.addEventListener('click', function () {
			getPubsByType();
		}, false);
	}
}

//Подгружаем новые публикации с сервера
async function getPubsByType() {
	let pubType = document.querySelector('#js-pub-type');
	let pubsContainer = document.querySelector('#js-pubs-container');
	let pubBlockType = pubsContainer.getAttribute('data-type');
	if (pubType) {
		let pubsAll = pubsContainer.querySelectorAll(".pub-container-item");
		let pubsNews = [...pubsAll].filter(elem => elem.classList.contains('pub-news'));
		let pubsInterview = [...pubsAll].filter(elem => elem.classList.contains('pub-interview'));
		let pubsArticle = [...pubsAll].filter(elem => elem.classList.contains('pub-article'));
		let pubsVideo = [...pubsAll].filter(elem => elem.classList.contains('pub-video'));
		let pubsEvent = [...pubsAll].filter(elem => elem.classList.contains('pub-event'));
		//Формируем строку вида "0,0,0,0,0", где указано сколько публикаций каждого типа
		//уже загружено в браузер. Это количество нужно пропустить при следующей подгрузке
		//новых публикаций.
		let strSkip = `${pubsNews.length},${pubsInterview.length},${pubsArticle.length},${pubsVideo.length},${pubsEvent.length}`;
		let response = await fetch('/publications/Load-Publications-Ajax?' +
			new URLSearchParams({
				type: pubBlockType,
				pubType: pubType.value,
				skip: strSkip
			}
			));
		pubsContainer.innerHTML += await response.text();
		setupPubsBlock();
	}
	return false;
}

document.addEventListener('DOMContentLoaded', function () {
	setPubType();
});
//ПОДГРУЖАЕМ НОВЫЕ ПУБЛИКАЦИИ END