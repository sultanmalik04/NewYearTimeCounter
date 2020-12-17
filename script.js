const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const seconsEl = document.getElementById('sec');


const newYears = "1 jan 2021";

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds =  (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    seconsEl.innerHTML = formatTime(seconds);
}

// initail call
countDown();

setInterval(countDown, 1000);