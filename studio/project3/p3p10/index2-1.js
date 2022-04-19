$(document).ready(function() {

  // window.addEventListener('DOMContentLoaded', () => {
  // 	const channel = 'mondays-project3';
  //
  // 	fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
  // 		.then(response => response.json())
  // 		.then(data => {
  // 			// console.log(data);
  //       renderTitle(data)
  // 		})

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
