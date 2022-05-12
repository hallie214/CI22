$(document).ready(function() {

// alert("[whatever-little-message-you-want]");

//input text
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}

//simple js

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
$("#rectangle2").hide();
});



})
