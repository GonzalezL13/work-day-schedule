$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //listen to click on save button
    $(".saveBtn").on("click", function () {
        //get time and text area value
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });

    //load data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hou-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    function updateHourly() {
        //get the current hour
        var currentTime = moment().hours();

        //time block loop
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);

            // this will check the hour and depending if it passed or not it'llS change colors
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
    }
    updateHourly();
    var hourUpdate = setInterval(updateHourly, 30000)
});

