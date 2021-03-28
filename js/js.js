let thisSecond;
let thisMinute;
let thisHour;
// запускаем секундную стрелку
console.log(Date());
function rotateSecondHand() {
	thisSecond = Date().charAt(22) + Date().charAt(23);
	let secondHand = document.getElementById('secondHand');
	let secondDeg = thisSecond * 6 + 90;
	secondHand.setAttribute("style", `transform:rotate(${secondDeg}deg)`);
};
rotateSecondHand();
setInterval(rotateSecondHand, 100);

//запускаем минутную стрелку

function rotateMinuteHand() {
	thisMinute = Date().charAt(19) + Date().charAt(20);
	let MinuteHand = document.getElementById('minuteHand');
	let MinuteDeg = thisMinute * 6 + 90 + thisSecond / 10;
	MinuteHand.setAttribute("style", `transform:rotate(${MinuteDeg}deg)`);
};
rotateMinuteHand();
setInterval(rotateMinuteHand, 100);

//запускаем часовую стрелку

function rotateHourHand() {
	thisHour = Date().charAt(16) + Date().charAt(17);
	let hourHand = document.getElementById('hourHand');
	let hourDeg = thisHour * 30 + thisSecond * 6 / 3600 + 90;
	hourHand.setAttribute("style", `transform:rotate(${hourDeg}deg)`);
};
rotateHourHand();
setInterval(rotateHourHand, 100);