// 导航栏
{
let $my = $("#my")
let $mysp = $("#mysp")
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
let timer = null,
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

	let $bannav = $("#banner-nav li"),
		$parentSon = $("#parent1"),
		$parent1 = $("#parent1")
	$bannav.hover(function() {
		// let index = $(this).index()
		let color = getColor();
		$(this).css({"background":"#fff","color":color})
		$parent1.show()
		$parent1.find("a").css("color",color)
	},function(){
		$(this).css({"background":"rgba(109,107,103,0)","color":"#fff"})
		$parent1.hide()
	});
	$parent1.hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
	//domo 划过效果
	let $demoimg = $("#demo div>li")
	$demoimg.hover(function(){
		this.div = $("<div></div>");
		this.div.css({
			"width":$(this).width(),
			"height":$(this).height(),
			"background":"rgba(255,255,255,0.3)",
			"position":"absolute",
			"left":0,
			"top":0
		})
		this.div.appendTo($(this))
	},function(){
		this.div.remove()
	})

	//navimg划过效果
	let $navlist = $("#navimg li")
	$navlist.hover(function(){
		this.div = $("<div>Hello Word<a href=''>点击进入</a></div>");
		this.div.css({
			"width":$(this).width(),
			"height":$(this).height()- 40,
			"background":"rgba(10,10,10,0.7)",
			"color":"#fff",
			"text-align":"center",
			"padding-top":"40px",
			"position":"absolute",
			"left":0,
			"top":0
		})
		this.div.find("a").css({
			"display":"block",
			"width":"80",
			"height":"20",
			"border-radius":"12px",
			"color":"#fff",
			"text-align":"center",
			"line-height":"20px",
			"margin":"0 auto",
			"background":"#ff0036"
		})
		this.div.appendTo($(this))	
	},function(){
		this.div.remove()
	})
//list大图划过效果
	let $listbot = $("#listbot>li")
	$listbot.hover(function(){
		this.div = $("<a href=''></a>");
		this.div.css({
			"width":$(this).width(),
			"height":$(this).height(),
			"background":"rgba(255,255,255,0.3)",
			"position":"absolute",
			"left":0,
			"top":0
		})
		this.div.appendTo($(this))
	},function(){
		this.div.remove()
	})
//list 小图划过效果
	let $listbotsmall = $("#listbot>ul li")
	$listbotsmall.hover(function(){
		this.div = $("<a href=''></a>");
		this.div.css({
			"width":$(this).width(),
			"height":$(this).height(),
			"background":"rgba(255,255,255,0.3)",
			"border":"1px solid red",
			"position":"absolute",
			"left":0,
			"top":0
		})
		this.div.appendTo($(this))
	},function(){
		this.div.remove()
	})
}