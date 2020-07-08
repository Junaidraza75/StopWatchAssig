
// stop watch coding
var min = 0;
var sec = 0;
var msec = 0;
var interval;

var minHeading = document.getElementById("min");
var secHeding = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeding.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start() {
    if (!interval) {
        interval = setInterval(timer, 10)
    }
}

function stop() {
    clearInterval(interval)
    interval = false;
}
function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading, innerHTML = min;
    secHeding.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}