$(document).ready(function() {


  $("#key1").click(function(){
  $("#week1").show();
  });

  // alert("[whatever-little-message-you-want]");

  $("#key").hover(function(){
  $("#key").css("background-color", "black");
  $("#key").css("color", "white");
  });
  $("#key").mouseout(function(){
  $("#key").css("background-color", "white");
  $("#key").css("color", "black");
  });

  // alert("[whatever-little-message-you-want]");

$("#selection2").hover(function(){
$("#selection2").css("color", "white");
$(".selection").css("color", "white");
$(".selection").css("background-color", "black");
});
$("#selection2").mouseout(function(){
$("#selection2").css("color", "black");
$(".selection").css("color", "black");
$(".selection").css("background-color", "white");
});

// alert("[whatever-little-message-you-want]");

$("#back").hover(function(){
$("#back").css("background-color", "black");
$("#back").css("color", "white");
});
$("#back").mouseout(function(){
$("#back").css("background-color", "white");
$("#back").css("color", "black");
});

})
