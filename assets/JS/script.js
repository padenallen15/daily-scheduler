// Get current date and time
var date = new Date();
$('#currentDay').text(date);
var time = date.getHours();

// Sets color scheme for tasks depending on current time
for(var num = 8; num < 18; num++) {
    // present
    if (num < time) {
        $('#'+num+'Text').css("background-color", "#d3d3d3");
    }
    // current
    else if (num === time) {
        $('#'+num+'Text').css("background-color", "#ff6961");
    }
    // future
    else {
        $('#'+num+'Text').css("background-color", "#77dd77");
    }
}

// task text was clicked
$(".textarea").on("click", function() {
    // get current text of p element
    var text = $(this)
      .text()
      console.log(text);
    // replace p element with a new textarea
    var textInput = $("<textarea>")
        .attr("id", "8Text")
        .addClass("col-8")
        .addClass("textarea")
        .text(text);
        console.log(textInput);
    $(this).replaceWith(textInput);
    // auto focus new element
    textInput.trigger("focus");
});

// when save button is clicked
$(".saveBtn").on("click", function() {
    // get value user entered, doesnt work :(
    var text = $(this)
        .closest(".textarea")
        .text();
        console.log(text);
    // recreate p element, doesnt work
    var taskP = $("<p>")
        .addClass("col-8")
        .addClass("textarea")
        .text(text);
    // replace textarea with p element, doesnt work
    $(this).closest(".textarea").replaceWith(taskP);
})

//localStorage.clear();