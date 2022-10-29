
function currentMoment() {
var exactTime = moment().format("[The current date and time is ]dddd, MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").innerHTML = exactTime;
}
currentMoment();
setInterval(currentMoment, 200);





function colorEffect() {
    var hour = moment().hours();

    $(".time-block").each( fucnction() {
    var workHour = parseInt(this).parent().attr("id"));

        if (workHour < hour) {
            $(this).addClass("past");
        } else if ( workHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }

    })

 })

}