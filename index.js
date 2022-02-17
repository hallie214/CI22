$(document).ready(function() {

$("#link").hover(function(){
$("#link").css("color", "red");
});
$("#[the-id-of-what-you'll-hover-on]").mouseout(function(){
$("#[the-id-of-the-element-you-want-to-have-different-css]").css("[the-new-property]", "[the-new-value]");
});

})
