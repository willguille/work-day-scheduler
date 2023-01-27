// Display the current day at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Present timeblocks for standard business hours
for (var i = 9; i < 18; i++) {
    var timeblock = $("<div>", { class: "timeblock row" });
    var timeblockHour = $("<div>", { class: "col-1" }).text(`${i}:00`);
    var task = $("<textarea>", { class: "task col-10" });
    var saveBtn = $("<button>", { class: "fas fa-save col-1" });
    timeblock.append(timeblockHour, task, saveBtn);
    $(".container").append(timeblock);
}

// Color-code each timeblock based on past, present, and future
$(".timeblock").each(function() {
    let hour = parseInt($(this).text().split(":")[0]);
    let currentHour = moment().hour();
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

// Allow a user to enter an event when they click a timeblock
$(".task").on("focus", function() {
    $(this).parent().addClass("editing");
  });
  $(".task").on("blur", function() {
    $(this).parent().removeClass("editing");
  });
