$(document).ready(function() {

$("#snoopy1").hover(function(){
$("#text1").show();
});
$("#snoopy1").mouseout(function(){
$("#text1").hide();
});

$("#snoopy2").hover(function(){
$("#snoopy3").show();
});
$("#snoopy2").mouseout(function(){
$("#snoopy3").hide();
});

$("#snoopy7").hover(function(){
$("#snoopy4").show();
});
$("#snoopy4").hover(function(){
$("#snoopy5").show();
});
$("#snoopy5").hover(function(){
$("#snoopy6").show();
});
$("#snoopy6").hover(function(){
$("#snoopy8").show();
});
// $("#[the-id-of-the-item-you-element-to-drag]").draggable();
//
// $("#sn").hover(function(){
// $("#[the-id-of-element-a]").show();
// });
//
// $("#[the-id-of-what-you'll-hover-on]").hover(function(){
// $("#[the-id-of-the-element-you-want-to-have-different-css]").css("[the-new-property]", "[the-new-value]");
// });
// $("#[the-id-of-what-you'll-hover-on]").mouseout(function(){
// $("#[the-id-of-the-element-you-want-to-have-different-css]").css("[the-new-property]", "[the-new-value]");
// });

})
