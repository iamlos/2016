//= require_tree .

var update_timer = function() {
  var event = new Date("2016-04-08 21:00:00 GMT-0500");
  var now = new Date();
  if (event - now > 0) {
    var seconds = Math.floor((event-now)/1000);
    var minutes = Math.floor(seconds/60);
    seconds -= minutes * 60;
    var hours = Math.floor(minutes/60);
    minutes -= hours * 60;
    $("#timer").text("Starting in " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");
  } else {
    $("#timer").text("CarlHacks has started!");
  }
};

setInterval(update_timer, 1000);
update_timer();
