// === TEAM LEAD SELECTOR === //

let boxs = document.querySelectorAll(".team-lead-selector__item");
let menu = document.querySelector(".team-lead-selector__menu");
let btns = document.querySelectorAll('.team-lead-selector-button');

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
				btn.classList.remove("team-lead-selector-button-active");
			});
			elem.classList.add("team-lead-selector-button-active");

			let target = event.target.dataset["view"];
			boxs.forEach(el => {
				el.classList.add("hide");
				if (el.classList.contains(target) || target == "all-leaders") {
					el.classList.remove("hide");
				}
			});
		});
	});
}
