
// this adds the current time to the jumbotron
let time = moment().format('LLL');
$("#currentDay").text(time);
console.log(time);

//set up an array to use in the for each loop
const workingHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

// function to change the color of each box based on the current time
function style() {
    let currentTime = moment().hours();

    workingHours.forEach((x) => {
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

        else {
            hour.removeClass("past");
            hour.removeClass("present");
            hour.addClass("future");
        }
    })
}

// calling the function
style();

//saves To-Do input data in box1 (8AM) to local storage
let toDoInput = document.getElementById("text1").value;
localStorage.setItem("toDoInput", input);

// Retrieves To Do data input by user
document.getElementById("text1").value = localStorage.getItem("text1");

// need to save data to local storage through save button...hmmm...
