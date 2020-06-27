$("#currentDay").text(moment().format("dddd, MMMM Do"));
//listen to click on save button
$(".saveBtn").on("click", function() {
    //get time and text area value
    var value = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, value);
});