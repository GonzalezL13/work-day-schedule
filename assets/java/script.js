$("#currentDay").text(moment().format("dddd, MMMM Do"));
//listen to click on save button
$(".saveBtn").on("click", function () {
    //get time and text area value
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
});

//load data from localStorage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

//get the current hour
var currentTime = moment().hours();

//time block loop
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("-")[1]);

    // check if we've moved past this time
    if (blockTime < currentTime) {
        $(this).addClass("past");
    }
    else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});