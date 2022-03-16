$(document).ready(function() {

  // alert("[whatever-little-message-you-want]");

  $(".text4").hover(function(){
  $(".text4").css("opacity", ".2");
  });
  $(".text4").mouseout(function(){
  $(".text4").css("opacity", "1");
  });

  $(".text4").click(function(){
  $(".text4-1").show();
  });
  $(".text4").hover(function(){
  $(".text4-1").show();
  });
  $(".text4").mouseout(function(){
  $(".text4-1").hide();
  });

  // alert("[whatever-little-message-you-want]");

  $(".text3").click(function(){
  $(".text3-1").show();
  });
  $(".text3").hover(function(){
  $(".text3-1").show();
  });
  $(".text3").mouseout(function(){
  $(".text3-1").hide();
  });

  $(".text3").click(function(){
  $(".text3-1").css("color", "grey");
  });
  $(".text3").hover(function(){
  $(".text3").css("color", "grey");
  });
  $(".text3").mouseout(function(){
  $(".text3").css("color", "white");
  });

  // alert("[whatever-little-message-you-want]");

  $(".text2").click(function(){
  $(".text2-1").show();
  });
  $(".text2").click(function(){
  $(".text2").hide();
  });

  $(".text2").hover(function(){
  $(".text2-1").show();
  });
  $(".text2").mouseout(function(){
  $(".text2-1").hide();
  });

  $(".text2").hover(function(){
  $(".text2").hide();
  });
  $(".text2").mouseout(function(){
  $(".text2").show();
  });

  // alert("[whatever-little-message-you-want]");

  $("#text1-1").click(function(){
  $("#text1-2").show();
  });
  $("#text1-1").hover(function(){
  $("#text1-2").show();
  });
  $("#text1-1").mouseout(function(){
  $("#text1-2").hide();
  });

  $("#text1-1").click(function(){
  $("#text1-1").css("color", "grey");
  });
  $("#text1-1").hover(function(){
  $("#text1-1").css("color", "grey");
  });
  $("#text1-1").mouseout(function(){
  $("#text1-1").css("color", "white");
  });

  // alert("[whatever-little-message-you-want]");

  $("#title2-1").hover(function(){
  $("#title2-1").css("font-family", "adobe-handwriting-ernie, sans-serif");
  });
  $("#title2-1").mouseout(function(){
  $("#title2-1").css("font-family", "effra, sans-serif");
  });
  $("#title2-1").hover(function(){
  $("#title2-1").css("font-size", "26px");
  });
  $("#title2-1").mouseout(function(){
  $("#title2-1").css("font-size", "25px");
  });

// alert("[whatever-little-message-you-want]");

$("#[the-id-of-the-item-you-element-to-drag]").draggable();

$("#[the-id-of-element-b]").hover(function(){
$("#[the-id-of-element-a]").show();
});

$("#[the-id-of-what-you'll-hover-on]").hover(function(){
$("#[the-id-of-the-element-you-want-to-have-different-css]").css("[the-new-property]", "[the-new-value]");
});

$("#[the-id-of-what-you'll-hover-on]").mouseout(function(){
$("#[the-id-of-the-element-you-want-to-have-different-css]").css("[the-new-property]", "[the-new-value]");
});

})
