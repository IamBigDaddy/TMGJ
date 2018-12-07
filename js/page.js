{
let timer1 = null,
	index1 = 0,
	$ulist = $(".wrapper>ul li"),
	$olist = $(".wrapper>ol li");
	
	 function butoplay(){
	 	index1++; 
	 	if(index1 == $ulist.length){
	 		index1 = 0
	 	}
	 	$olist.eq(index1).addClass('clored').siblings().removeClass('clored')
	 	$ulist.eq(index1).fadeIn(1500).siblings().fadeOut(1500)
	 }
	 timer1 =setInterval ( butoplay , 2000 );

	 // 搜索框
	 $(".loc").hover(function(){
	 	$(".loc i").html("&#xe669");
	 	$(".tree").stop().slideDown(1000)
	 },function(){
	 	$(".loc i").html("&#xe668");
	 	$(".tree").stop().slideUp(1000)
	 })
	 $(".pagenav1").hover(function(){
	 	$(".pagenav1").css("height","40")
	 	$(".pagenav2").stop().slideDown()
	 },function(){
	 	$(".pagenav1").css("height","36")
	 	$(".pagenav2").stop().slideUp()
	 })


	 //点击增加
	  function fnShow(){
	  	this.index = 1;
	  	this.init = function(){
	  		$(".showtop").click(function(event) {
		 		index++;
			$(".showi").html(index);
			
	 		}.bind(this));
	  		$(".showbot").click(function(event) {
				index--;
			if(index <= 1){
				index = 1;
			}
			$(".showi").html(index)
		 }.bind(this));
  		}
    }
    new fnShow().init()


    // 导航栏    。。。。
    $(".pagenavh3").hover(function(){
    	$(".pagenavimg").stop().slideDown(500)
    },function(){
    	$(".pagenavimg").stop().slideUp(500)
    })


    // 吸顶
    $(window).scroll(function(){
    	let Stop = $(document).scrollTop()
    	if( Stop > 260 ){
    		$("#pagenavB").css("position","fixed")
    		$("#pagenavB").css("top",0)
    		$("#pagenavB").css({"zIndex":"2000","background":"#fff"})
    	}else{
    		$("#pagenavB").css("position","")
    	}
    })
}