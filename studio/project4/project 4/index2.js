$(document).ready(function() {

//heart

$(".titlename").click(function(){
$("#title3").hide();
$("#title4").hide();
});
$("#title1").click(function(){
$("#title3").hide();
$("#title4").hide();
});
$("#title2").click(function(){
$("#title3").hide();
$("#title4").hide();
});

// $(".titlename").hover(function(){
//   $("#title4").show();
//   $("#title3").hide();
// });
//
// $("#title1").hover(function(){
//   $("#title4").show();
//   $("#title3").hide();
// });
//
// $("#title2").hover(function(){
//   $("#title4").show();
//   $("#title3").hide();
// });

//cover and title

$("#title1").hover(function(){
$("#title1").css("color", "white");
$("#title2").css("color", "white");
});
$("#title1").mouseout(function(){
$("#title1").css("color", "#bf586f");
$("#title2").css("color", "#bf586f");
});
$("#title2").hover(function(){
$("#title1").css("color", "white");
$("#title2").css("color", "white");
});
$("#title2").mouseout(function(){
$("#title1").css("color", "#bf586f");
$("#title2").css("color", "#bf586f");
});

$(".titlename").click(function(){
$(".titlename").hide();
$("#name").hide();
$("#rectangle2").hide();
});

//button 2 - random template

$("#button3-1").click(function(){
  $("#button3-1").hide();
  $("#button3-2").show();
  $("#button3-3").hide();
});
$("#button3-1").click(function(){
  $("#image1").show();
  $("#image2").hide();
  $("#image3").hide();
});

$("#button3-2").click(function(){
  $("#button3-1").hide();
  $("#button3-3").show();
  $("#button3-2").hide();
});
$("#button3-2").click(function(){
  $("#image2").show();
  $("#image1").hide();
  $("#image3").hide();
});

$("#button3-3").click(function(){
  $("#button3-2").hide();
  $("#button3-1").show();
  $("#button3-3").hide();
});
$("#button3-3").click(function(){
  $("#image3").show();
  $("#image2").hide();
  $("#image1").hide();
});

})
