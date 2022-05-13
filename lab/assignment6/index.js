$(document).ready(function() {

//time clock



// function startTime(){
//
//   var today = new Date();
//
//   var hours = today.getHours();
//   var minutes = today.getMinutes();
//   var seconds = today.getSeconds();
//
//   var amPm = "am";
//
//   if (hour > 12) {
//     amPm = "pm";
//     hours = hours - 12;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//
//   var time = hours + ':' + minutes + ':' + seconds + '' + amPm;
//
//   document.getElementById("currentTime").innerHTML = time;
//
//   setTimeout(functrion(){startTime()}, 1000);
//
// }

//text on top

$("#button1").click(function(){
  $("#text2-1").show();
  $("#text2-2").hide();
  $("#text2-3").hide();
  $("#text2-4").hide();
  $("#text2-5").hide();
  });

$("#button2").click(function(){
  $("#text2-2").show();
  $("#text2-1").hide();
  $("#text2-3").hide();
  $("#text2-4").hide();
  $("#text2-5").hide();
  });

$("#button3").click(function(){
  $("#text2-3").show();
  $("#text2-1").hide();
  $("#text2-2").hide();
  $("#text2-4").hide();
  $("#text2-5").hide();
  });

$("#button4").click(function(){
  $("#text2-4").show();
  $("#text2-1").hide();
  $("#text2-2").hide();
  $("#text2-3").hide();
  $("#text2-5").hide();
  });

$("#button5").click(function(){
  $("#text2-5").show();
  $("#text2-1").hide();
  $("#text2-2").hide();
  $("#text2-3").hide();
  $("#text2-4").hide();
  });

//button for video show

$("#button1").click(function(){
$("#video1").css("z-index", "600");
});
$("#button1").click(function(){
$("#video2").css("z-index", "400");
});
$("#button1").click(function(){
$("#video3").css("z-index", "300");
});
$("#button1").click(function(){
$("#video4").css("z-index", "200");
});
$("#button1").click(function(){
$("#video5").css("z-index", "100");
});

$("#button2").click(function(){
$("#video1").css("z-index", "500");
});
$("#button2").click(function(){
$("#video2").css("z-index", "600");
});
$("#button2").click(function(){
$("#video3").css("z-index", "300");
});
$("#button2").click(function(){
$("#video4").css("z-index", "200");
});
$("#button2").click(function(){
$("#video5").css("z-index", "100");
});

$("#button3").click(function(){
$("#video1").css("z-index", "500");
});
$("#button3").click(function(){
$("#video2").css("z-index", "400");
});
$("#button3").click(function(){
$("#video3").css("z-index", "600");
});
$("#button3").click(function(){
$("#video4").css("z-index", "200");
});
$("#button3").click(function(){
$("#video5").css("z-index", "100");
});

$("#button4").click(function(){
$("#video1").css("z-index", "500");
});
$("#button4").click(function(){
$("#video2").css("z-index", "400");
});
$("#button4").click(function(){
$("#video3").css("z-index", "300");
});
$("#button4").click(function(){
$("#video4").css("z-index", "600");
});
$("#button4").click(function(){
$("#video5").css("z-index", "100");
});

$("#button5").click(function(){
$("#video1").css("z-index", "500");
});
$("#button5").click(function(){
$("#video2").css("z-index", "400");
});
$("#button5").click(function(){
$("#video3").css("z-index", "300");
});
$("#button5").click(function(){
$("#video4").css("z-index", "200");
});
$("#button5").click(function(){
$("#video5").css("z-index", "600");
});

})
