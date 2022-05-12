$(document).ready(function() {

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

})
