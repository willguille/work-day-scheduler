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

