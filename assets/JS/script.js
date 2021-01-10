var tasks = JSON.parse(localStorage.getItem('schedule')) || [];
var date = new Date();
$('#currentDay').text(date);

// task text was clicked
$(".textarea").on("click", function() {
    // get current text of p element
    var text = $(this)
      .text()
    // replace p element with a new textarea
    var textInput = $("<textarea>")
        .addClass("col-8")
        .addClass("textarea")
        .text(text);
    $(this).replaceWith(textInput);
    // auto focus new element
    textInput.trigger("focus");
});

$(".saveBtn").on("click", function() {
    var text = $(this)
        .closest(".textarea")
        .text();
    // recreate p element
    var taskP = $("<p>")
        .addClass("col-8")
        .addClass("textarea")
        .text(text);
    // replace textarea with p element
    $(this).closest(".textarea").replaceWith(taskP);
})

localStorage.setItem('schedule', JSON.stringify(tasks));