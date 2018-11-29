// 导航栏
var $my = $("#my")
var $mysp = $("#mysp")
	$mysp.hide()
$my.mouseenter(function(){
	$mysp.show()
	$my.css({"background":"#fff","height":33,"z-index":20})
});
$my.mouseleave(function(){
	$mysp.hide()
	$my.css("background","#f2f2f2")
});
//banner图
var timer = null,
	$list = $("#banner-img li"),
	$uist = $("#banner-eq li"),
	$ban = $("#bannerB"),
	index = 0;
	timer = setInterval( autoplay ,3000)
	function autoplay(){
		index++
		if( index == $list.length){
			index = 0
		}
		$list.eq(index).fadeIn(3000).siblings().fadeOut(3000);
		$uist.eq(index).addClass('sub').siblings().removeClass('sub');
	}
	$uist.mouseenter(function(){
		clearInterval( timer );
		index = $(this).index()-1;
		autoplay();
	}).mouseleave( function(){
		timer = setInterval( autoplay , 3000 );
	} )
	// banner图NAV的多级菜单
	var $bannav = $("#banner-nav li"),
		$parentSon = $("#parent1")
	$bannav.mouseenter(function(event) {
		// var index = $(this).index()
		$(this).css({"background":"#fff","color":"red"})
		console.log($(this))
	});
