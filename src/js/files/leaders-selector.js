// === LEADERS SELECTOR === //

let boxs = document.querySelectorAll(".leaders-selector__item");
let menu = document.querySelector(".leaders-selector__menu");
let btns = document.querySelectorAll('.ldr-selector-button');

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
				btn.classList.remove("ldr-selector-button-active");
			});
			elem.classList.add("ldr-selector-button-active");

			let target = event.target.dataset["view"];
			boxs.forEach(el => {
				el.classList.add("hide");
				if (el.classList.contains(target) || target == "all-lead") {
					el.classList.remove("hide");
				}
			});
		});
	});
}
