//function that gets date, day and time from momentAPI and inserts into the header
function currentMoment() {
var exactTime = moment().format("[The current date and time is ]dddd, MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").innerHTML = exactTime;
}
// call the function to get current date, day and time
currentMoment();
// interval to update currentMoment function multiple times a second
setInterval(currentMoment, 200);




console.log(hour)


function colorEffect() {
    // var that has the military value of the current hour
    var hour = moment().hours();
    // For every instance in the Window object of the time-block class check to see if the id value I created for each hour is before, after, or matches current hour
    $(".time-block").each(function() {
        var workHour = parseInt($(this).parent().attr("id"));
        //original test to see if workHour pulled correct value
        console.log(workHour)
        // adds past, present, future class's to each parent div of time-block class with corresponding css styling
        if (workHour < hour) {
            $(this).addClass("past");
        } else if ( workHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};
//function that listens for click on a saveNote button, checks value of textarea and time id of corresponding div and saves to localStorage
$(".saveNote").on("click", function() {
    var storageTime = $(this).parent().attr("id");
    var hourNote = $(this).siblings(".notes").val();
    
    console.log(storageTime, hourNote)

    localStorage.setItem(storageTime, hourNote)
    }
);

 colorEffect()