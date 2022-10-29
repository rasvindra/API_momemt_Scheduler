//function that gets date, day and time from momentAPI and inserts into the header
function currentMoment() {
var exactTime = moment().format("[The current date and time is ]dddd, MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").innerHTML = exactTime;
}
// call the function to get current date, day and time
currentMoment();
// interval to update currentMoment function multiple times a second
setInterval(currentMoment, 200);

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
//function that listens for click on a saveNote button, checks value of textarea and time id of corresponding div and saves notes to localStorage with key value matching timeid of the div
$(".saveNote").on("click", function() {
    var storageTime = $(this).parent().attr("id");
    var hourNote = $(this).siblings(".notes").val();
    // test to make sure on click function is saving data
    console.log(storageTime, hourNote)
    localStorage.setItem(storageTime, hourNote)
    }
);

//tried to create loop to iterate over localstorage and pull value into corresponding id's on the window. simplified by pulling each key and its value and inserting into div with matching id. 
function getStoredNotes() {
    // for (var i = 0; i < localStorage.length; i++) {
    //     // set iteration key name
    //     var key = localStorage.key(i);
    //     // use key name to retrieve the corresponding value
    //     var value = JSON.parse(localStorage.getItem(key));
    //     // console.log the iteration key and value
    //     console.log('Key: ' + key + ', Value: ' + value);
    //     // creating new li's and appending them with pulled data and to HTML

    //     document.getElementById(i+"Slot").innerHTML = localStorage.getItem(i)
    // }
    document.getElementById("9Slot").innerHTML = localStorage.getItem("9");
    document.getElementById("10Slot").innerHTML = localStorage.getItem("10");
    document.getElementById("11Slot").innerHTML = localStorage.getItem("11");
    document.getElementById("12Slot").innerHTML = localStorage.getItem("12");
    document.getElementById("13Slot").innerHTML = localStorage.getItem("13");
    document.getElementById("14Slot").innerHTML = localStorage.getItem("14");
    document.getElementById("15Slot").innerHTML = localStorage.getItem("15");
    document.getElementById("16Slot").innerHTML = localStorage.getItem("16");
    document.getElementById("17Slot").innerHTML = localStorage.getItem("17");

};


 colorEffect()
 getStoredNotes()