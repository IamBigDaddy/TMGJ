var $my = $("#my")
var $mysp = $("#mysp")
	$mysp.find("a").css({"width":"100","height":"300"})
$my.mouseenter(function(){
	$mysp.show()
	$my.css("background","#fff")
});
$my.mouseleave(function(){
	$mysp.hide()
	$my.css("background","#f2f2f2")
});