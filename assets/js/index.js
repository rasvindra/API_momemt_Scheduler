
function currentMoment() {
var exactTime = moment().format("[The current date and time is ]dddd, MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").innerHTML = exactTime;
}
currentMoment();
setInterval(currentMoment, 200);