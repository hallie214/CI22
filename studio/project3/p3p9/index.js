$(document).ready(function() {

// alert("[whatever-little-message-you-want]");

$("#category1").hover(function(){
$("#category1").css("background-color", "black");
$("#category1").css("color", "white");
});
$("#category1").mouseout(function(){
$("#category1").css("background-color", "white");
$("#category1").css("color", "black");
});

$("#category2").hover(function(){
$("#category2").css("background-color", "black");
$("#category2").css("color", "white");
});
$("#category2").mouseout(function(){
$("#category2").css("background-color", "white");
$("#category2").css("color", "black");
});

})
