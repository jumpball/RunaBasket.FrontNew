// === GAME TIMER === //
(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	let countdownElement = document.getElementById("countdown");
	if (!countdownElement) return;

	let daysElement = document.getElementById("days");
	let hoursElement = document.getElementById("hours");
	let minutesElement = document.getElementById("minutes");
	let secondsElement = document.getElementById("seconds");

	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "03/25/",
		birthday = dayMonth + yyyy;

	today = mm + "/" + dd + "/" + yyyy;
	if (today > birthday) {
		birthday = dayMonth + nextYear;
	}

	const countDown = new Date(birthday).getTime();
	let x = setInterval(function () {
		const now = new Date().getTime();
		const distance = countDown - now;

		daysElement.innerText = Math.floor(distance / day);
		hoursElement.innerText = Math.floor((distance % day) / hour);
		minutesElement.innerText = Math.floor((distance % hour) / minute);
		secondsElement.innerText = Math.floor((distance % minute) / second);

		if (distance < 0) {
			countdownElement.style.display = "none";
			clearInterval(x);
		}
	}, 1000);
})();



