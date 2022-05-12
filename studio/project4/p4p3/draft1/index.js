$(document).ready(function() {

// alert("[whatever-little-message-you-want]");

//input text
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}

//simple js

$(".titlename").hover(function(){
$(".titlename").css("color", "white");
});
$(".titlename").mouseout(function(){
$(".titlename").css("color", "#bf586f");
});

})
