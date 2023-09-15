// ===================== CHART SHOT % =================== //


// Получение ссылки на элемент canvas в DOM
const $jsChart1 = document.querySelector("#jsChart1");
// Tags - это метки, которые идут по оси X.  
const jsChart1X = ["% 2-х очковых"]
// У нас может быть несколько наборов данных.
const jsChart1Y = {
	labels: "% 2-х очковых",
	data: [55.6, 44.4], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 1, // Толщина границ
	backgroundColor: [
		'#c0cb9b',
		'#ffffff'
	],// Цвет фона
	//hoverOffset: 5,
};

if ($jsChart1)
	new Chart($jsChart1, {
		type: 'doughnut', // Тип графики
		data: {
			//labels: jsChart1X,
			datasets: [
				jsChart1Y,

				// Больше данных ...
			]
		},
		options: {
			// scales: {
			// 	yAxes: [{
			// 		ticks: {
			// 			beginAtZero: true
			// 		}
			// 	}],
			// },
		}
	});


	// Получение ссылки на элемент canvas в DOM
const $jsChart2 = document.querySelector("#jsChart2");
// Tags - это метки, которые идут по оси X.  
const jsChart2X = ["% 3-х очковых"]
// У нас может быть несколько наборов данных.
const jsChart2Y = {
	labels: "% 3-х очковых",
	data: [37.9, 62.1], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 1, // Толщина границ
	backgroundColor: [
		'#ff9191',
		'#ffffff'
	],// Цвет фона
	//hoverOffset: 5,
};

if ($jsChart2)
	new Chart($jsChart2, {
		type: 'doughnut', // Тип графики
		data: {
			//labels: jsChart2X,
			datasets: [
				jsChart2Y,

				// Больше данных ...
			]
		},
		options: {
			// scales: {
			// 	yAxes: [{
			// 		ticks: {
			// 			beginAtZero: true
			// 		}
			// 	}],
			// },
		}
	});

	
	// Получение ссылки на элемент canvas в DOM
const $jsChart3 = document.querySelector("#jsChart3");
// Tags - это метки, которые идут по оси X.  
const jsChart3X = ["% штрафных"]
// У нас может быть несколько наборов данных.
const jsChart3Y = {
	labels: "% штрафных",
	data: [79.5, 21.5], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 1, // Толщина границ
	backgroundColor: [
		'#ffd28f',
		'#ffffff'
	],// Цвет фона
	//hoverOffset: 5,
};

if ($jsChart3)
	new Chart($jsChart3, {
		type: 'doughnut', // Тип графики
		data: {
			//labels: jsChart3X,
			datasets: [
				jsChart3Y,

				// Больше данных ...
			]
		},
		options: {
			// scales: {
			// 	yAxes: [{
			// 		ticks: {
			// 			beginAtZero: true
			// 		}
			// 	}],
			// },
		}
	});












// Получение ссылки на элемент canvas в DOM
const $box = document.querySelector("#box");
// Tags - это метки, которые идут по оси X.  
const boxX = ["03.04", "08.04", "14.04", "19.04", "22.04"]
// У нас может быть несколько наборов данных.
const boxY1 = {
	label: "2-х",
	data: [55.6, 32.8, 35.6, 41.8, 20.6], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	backgroundColor: '#c0cb9b', // Цвет фона
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	//borderColor: '#c0cb9b',
	borderWidth: 1, // Толщина границ
};
const boxY2 = {
	label: "3-х",
	data: [35.2, 42.8, 32.5, 22.8, 23.8], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	backgroundColor: '#ff9191', // Цвет фона
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	//borderColor: '#ff9191',
	borderWidth: 1, // Толщина границ
};
const boxY3 = {
	label: "шт",
	data: [87.2, 66.8, 72.5, 69.5, 77.2], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	backgroundColor: ' #ffd28f', // Цвет фона
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	//borderColor: '#ffd28f',
	borderWidth: 1, // Толщина границ
};
if ($box)
	new Chart($box, {
		type: 'bar', // Тип графики
		//type: 'line',
		data: {
			labels: boxX,
			datasets: [
				boxY1,
				boxY2,
				boxY3,
				// Больше данных ...
		
			]
		},
		options: {
			scales: {
				y: {
					suggestedMin: 0,
					suggestedMax: 100,
					// title: {
					// 	color: 'black',
					// 	display: true,
					// 	text: '%'
					// }
				},

				//  x: {
				// 	title: {
				// 		color: 'black',
				// 		display: true,
				// 		text: 'Динамика'
				// 	}
				// }
			}
		}

	});