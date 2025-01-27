'use strict';
const timer = document.getElementById('timer');
let startTime = 5;
setTime();

function setTime()
{
	timer.innerText = startTime;
	startTime--;
	setTimeout(() =>
	{
		if (startTime)
		{
			setTime();
		}
		else
		{
			makeAfterTime();
		};
	}, 1000);
}

function makeAfterTime()
{
	window.location.replace('https://eth.mendeo.ru');
}


