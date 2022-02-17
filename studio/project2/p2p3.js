$(document).ready(function() {

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
