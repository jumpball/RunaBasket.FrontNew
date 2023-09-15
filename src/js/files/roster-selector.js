// === ROSTER SELECTOR === //

let boxs = document.querySelectorAll(".roster-selector__item");
let menu = document.querySelector(".roster-selector__menu");
let btns = document.querySelectorAll('.rst-selector-button');

if (menu && btns) {
  // скрываем все элементы, кроме тех, которые соответствуют первому идентификатору
	let firstBtn = btns[0];
	let firstTarget = firstBtn.dataset["view"];
	boxs.forEach(el => {
		if (!el.classList.contains(firstTarget)) {
			el.classList.add("hide");
		}
	});

	btns.forEach(elem => {
		elem.addEventListener("click", function (event) {
			btns.forEach(btn => {
				btn.classList.remove("rst-selector-button-active");
			});
			elem.classList.add("rst-selector-button-active");

			let target = event.target.dataset["view"];
			boxs.forEach(el => {
				el.classList.add("hide");
				if (el.classList.contains(target) || target == "all-players") {
					el.classList.remove("hide");
				}
			});
		});
	});
}
