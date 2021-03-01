
// this adds the current time to the jumbotron
let time = moment().format('LLL');
$("#currentDay").text(time);
console.log(time);

// function to change the color of each box based on the current time
function style() {
    var currentTime = moment().hours();
    for (let x = 8; x < 17; x++) {
        let hour = $("#" + x);

        if (x < currentTime) {
            hour.addClass("past");
            hour.removeClass("present");
            hour.removeClass("future");
        }

        else if (x == currentTime) {
            hour.removeClass("past");
            hour.addClass("present");
            hour.removeClass("future");
        }

        else (x > currentTime) {
            hour.removeClass("past");
            hour.removeClass("present");
            hour.addClass("future");
        }
    }
}


style();
