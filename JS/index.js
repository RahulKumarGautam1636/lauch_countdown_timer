window.onload = rePosition(); // Reposition the timers when page load completes.
var d = new Date(2021, 25, 25, 11, 40, 00);

function countDown() {
  var n = new Date();                  // Get device's time.
  var count = new Date(d - n);         // Converts device time into Count Down.
  setTimeout(function() {
    $(".seconds.frontH1").text(count.getSeconds()); // function to update the timers, time defference between update is important.
    $(".minutes.frontH1").text(count.getMinutes());
    $(".hours.frontH1").text(count.getHours());
    $(".days.frontH1").text(count.getDate());
  }, 250)
  setTimeout(function() {
    $(".seconds.backH1").text(count.getSeconds());
    $(".minutes.backH1").text(count.getMinutes());
    $(".hours.backH1").text(count.getHours());
    $(".days.backH1").text(count.getDate());
  }, 10)
  setTimeout(function() {
    $(".seconds.bottomH1").text(count.getSeconds());
    $(".minutes.bottomH1").text(count.getMinutes());
    $(".hours.bottomH1").text(count.getHours());
    $(".days.bottomH1").text(count.getDate());
  }, 600)
}

function rePosition() {             // plays the initial translate effect.
  setTimeout(function() {
    $(".card").css("transform", "translate(0)");
  }, 500)
  setTimeout(function() {
    $(".heading").removeClass("hide");
    $(".footer img").removeClass("hide");
    $(".time").removeClass("hide");
  }, 1800)
}

function rotateDiv(i) {             // Flips the timers by manipulating classes.
  $(i + ".back").removeClass("moveBack");
  $(i + ".front").addClass("moveFront");
  setTimeout(function() {
    $(i + ".back").addClass("moveBack");
    $(i + ".front").removeClass("moveFront");
  }, 250);
};
setTimeout(function() {             // Flips all timers once on page load.
  rotateDiv(".minute");
  rotateDiv(".hour");
  rotateDiv(".day");
}, 1000);
setInterval(countDown, 1000);       // Call countdowm every second and update the timers.
setInterval(function() {            // function to flip the timers according to the time.
  rotateDiv(".second")
  if ($(".seconds.frontH1").html() === "0") {
    rotateDiv(".minute");
  }
  if ($(".minutes.frontH1").html() === "0" && $(".seconds.frontH1").html() === "0") {
    rotateDiv(".hour");
  }
  if ($(".hours.frontH1").html() === "0" && $(".minutes.frontH1").html() === "0" && $(".seconds.frontH1").html() === "0") {
    rotateDiv(".day");
  }
}, 1000);
