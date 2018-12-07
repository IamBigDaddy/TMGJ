{
	$(window).scroll(function(){
	let sTop = $(document).scrollTop()
	if(sTop >700){
		$("#ceil").slideDown(300)
		$("#ceil").css("position","fixed")
		$("#ceil").css("top",0)
		$("#ceil").css("zIndex",2000)
		$("#Loutinav").show(300)
		$("#Loutinav").css("position","fixed")
		$("#Loutinav").css({"bottom":10,"left":100})
	}else{
		$("#ceil").slideUp(300)
		$("#Loutinav").hide(300)
	}
})

}

// brimg

	$("#bodyright span").hover(function(){
		$(this).css("background-color","#ff0c3b")
	},function(){
		$(this).css("background-color","#000")
	})


	$(".brcat").hover(function(){
		$(".brcat2").show().animate({"left":75 }, 1000)
		$(".brcat2").css("z-index",30000)
	},function(){
		$(".brcat2").stop().css({"display":"none","left":0})
	})
	$(".brmoney").hover(function(){
		$(".brmoney2").show().animate({"left":75 }, 1000)
		$(".brmoney2").css("zIndex",3000)
	},function(){
		$(".brmoney2").stop().css({"display":"none","left":0})
	})
	$(".brxx").hover(function(){
		$(".brxx2").show().animate({"left":75 }, 1000)
		$(".brxx2").css("zIndex",3000)
	},function(){
		$(".brxx2").stop().css({"display":"none","left":0})
	})
	$(".brtime").hover(function(){
		$(".brtime2").show().animate({"left":75 }, 1000)
		$(".brtime2").css("zIndex",3000)
	},function(){
		$(".brtime2").stop().css({"display":"none","left":0})
	})
	$(".brcz").hover(function(){
		$(".brcz2").show().animate({"left":75 }, 1000)
		$(".brcz2").css("zIndex",3000)
	},function(){
		$(".brcz2").stop().css({"display":"none","left":0})
	})
	$(".brpen").hover(function(){
		$(".brpen2").show().animate({"left":75 }, 1000)
		$(".brpen2").css("zIndex",3000)
	},function(){
		$(".brpen2").stop().css({"display":"none","left":0})
	})
	$(".brtop").hover(function(){
		$(".brtop2").show().animate({"left":75 }, 1000)
		$(".brtop2").css("zIndex",3000)
	},function(){
		$(".brtop2").stop().css({"display":"none","left":0})
	})
	$(".br2").hover(function(){
		$(".br22").show()
		$(".br22").css("zIndex",3000)
	},function(){
		$(".br22").hide()
	})






	//楼梯


	let $loutinav = $("#Loutinav li:not(.last,.first)"),
		$first = $("#Loutinav .first"),
		$last = $("#Loutinav .last"),
		$floor = $(".listimgB");
	$loutinav.hover(function() {
		let color = getColor()
		$(this).css("background",color)
	}, function() {
		$(this).css("background","#626262")
	});
	$loutinav.click(function(){
		console.log($loutinav)
		let index = $(this).index();
		console.log(index)
			t = $floor.eq(index-1).offset().top;
			$("body,html").animate({"scrollTop":t}, 1000)
	});
	$last.click(function(){
		console.log($last)
		$("body,html").animate({"scrollTop":0}, 1000)
	});
	// $(window).scroll(function(){
	// 	let too = $(document).scrollTop();
	// 	let $f = $floor.filter(function(){
	// 		return Math.abs(too - $(this).offset().top) < $(this).outerHeight()/2;
	// 	})
	// 	let index = $f.index()-10
	// 	console.log(index);
	// 	let color = getColor()
	// 	if(index!=-1){
	// 		$loutinav.eq(index).css("background","red")
	// 	}
	// 	if( too<100){
	// 		$loutinav.eq(index).css("background","#626262")
	// 	}
	// })

	