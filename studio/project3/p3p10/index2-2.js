$(document).ready(function() {

  // alert("[whatever-little-message-you-want]");

$("#selection2").hover(function(){
  $("#selection2").css("color", "black");
  $(".selection").css("color", "black");
  $(".selection").css("background-color", "white");

});
$("#selection2").mouseout(function(){
  $("#selection2").css("color", "white");
  $(".selection").css("color", "white");
  $(".selection").css("background-color", "black");
});

// alert("[whatever-little-message-you-want]");

$("#back").hover(function(){
  $("#back").css("background-color", "white");
  $("#back").css("color", "black");
});
$("#back").mouseout(function(){
  $("#back").css("background-color", "black");
  $("#back").css("color", "white");
});

})
