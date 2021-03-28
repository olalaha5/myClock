let thisSecond = +(Date().charAt(22) + Date().charAt(23));
let thisMinute = Date().charAt(19) + Date().charAt(20);
let thisHour = +(Date().charAt(16) + Date().charAt(17)) + thisMinute / 60 + thisSecond / 3600;

// запускаем секундную стрелку

function rotateSecondHand() {
	thisSecond = thisSecond + 0.01;
	let secondHand = document.getElementById('secondHand');
	let secondDeg = thisSecond * 6 + 90;
	secondHand.setAttribute("style", `transform:rotate(${secondDeg}deg)`);
};
setInterval(rotateSecondHand, 10);

//запускаем минутную стрелку

function rotateMinuteHand() {
	let MinuteHand = document.getElementById('minuteHand');
	MinuteDeg = thisMinute * 6 + 90 + thisSecond / 10;
	MinuteHand.setAttribute("style", `transform:rotate(${MinuteDeg}deg)`);
};
setInterval(rotateMinuteHand, 10);

//запускаем часовую стрелку

function rotateHourHand() {
	let hourHand = document.getElementById('hourHand');
	let hourDeg = thisHour * 30 + 90 + thisSecond * 30 / 3600;
	hourHand.setAttribute("style", `transform:rotate(${hourDeg}deg)`);
};
setInterval(rotateHourHand, 10);
