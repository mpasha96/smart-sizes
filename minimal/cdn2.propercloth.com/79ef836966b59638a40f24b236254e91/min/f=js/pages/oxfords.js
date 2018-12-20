jQuery(document).ready(function($){$('.hero').addClass("visible");$(document).on("scroll",function(){var pageTop=$(document).scrollTop()
var pageBottom=pageTop+$(window).height()
var tags=$("section")
for(var i=0;i<tags.length;i++){var tag=tags[i]
if($(tag).position().top<pageBottom){$(tag).addClass("visible")}else{$(tag).removeClass("visible")}}});$('.hero a').click(function(e){e.preventDefault()
$('html, body').animate({scrollTop:$("#content").offset().top-70},300);});$('.jump-to-products').click(function(e){e.preventDefault()
$('html, body').animate({scrollTop:$("#collection").offset().top-90},300);});});