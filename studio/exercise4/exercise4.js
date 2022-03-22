$(document).ready(function() {

// alert("[whatever-little-message-you-want]");

$("#img1").draggable();
$("#img2").draggable();
$("#img3").draggable();
$("#img4").draggable();

// alert("[whatever-little-message-you-want]");

var audio1 = new Audio("audio1(flushing).m4a");
var img1 = document.getElementById("img1")

// sound play

function play1 () {
  audio1.play();
}
img1.addEventListener("click", play1);

// second audio

var audio2 = new Audio("audio2(aaa1).m4a");
var img2 = document.getElementById("img2")

// sound play

function play2 () {
  audio2.play();
}
img2.addEventListener("click", play2);

// third audio

var audio3 = new Audio("audio3(aaa2).m4a");
var img3 = document.getElementById("img3")

// sound play

function play3 () {
  audio3.play();
}
img3.addEventListener("click", play3);

// fourth audio

var audio4 = new Audio("audio4(fart).mp3");
var img4 = document.getElementById("img4")

// sound play

function play4 () {
  audio4.play();
}
img4.addEventListener("click", play4);

// fifth audio

var audio5 = new Audio("audio5.mp3");
var img5 = document.getElementById("img5")

// sound play

function play5 () {
  audio5.play();
}
img5.addEventListener("click", play5);
s
// alert("[whatever-little-message-you-want]");

// $("#[the-id-of-element-b]").hover(function(){
// $("#[the-id-of-element-a]").show();
// });
// $("#[the-id-of-element-b]").mouseout(function(){
// $("#[the-id-of-element-a]").hide();
// });
//
// $("#[the-id-of-what-you'll-hover-on]").hover(function(){
// $("#[the-id-of-the-element-you-want-to-have-different-css]").css("[the-new-property]", "[the-new-value]");
// });

})
