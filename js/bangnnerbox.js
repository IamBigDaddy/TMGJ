$.fn.extend({
	fnSmall : function(){
		this.mouseenter(function(){
			$(this).addClass("border_b").siblings().removeClass("border_b");
			this.index = $(this).index();
			console.log(this.index)
			$("#boxm img").attr("src","img/m"+ (this.index + 1)+".jpg");
			$("#boxb img").attr("src","img/b"+ (this.index + 1)+".jpg");
		})
		return this;
	},
	fnZoom : function(){
		$("#boxm").fnEnter().fnDrgat().fnLeave();
	},
	fnEnter : function(){
		this.mouseenter(function(event) {
			/* Act on the event */
			$(".mask").show();
			$("#boxb").show();
		}.bind(this));
		return this;
	},
	fnLeave : function(){
		this.mouseleave(function(event) {
			/* Act on the event */
			$(".mask").hide();
			$("#boxb").hide();
		});
		return this;
	},
	fnDrgat : function(){
		this.bind("mousemove", function(event){
			var e = event || window.event;
			this.fnMove(e);
		}.bind(this));
		return this;
	},
	fnMove : function(e){
		this.x = e.pageX - this.offset().left - $(".mask").width() / 2; 
		this.y = e.pageY - this.offset().top - $(".mask").height() / 2;
		this.maxL = this.width() - $(".mask").width();
		this.maxT = this.height() -$(".mask").height();
		this.x = Math.min (Math.max( 0, this.x ),this.maxL);
		this.y = Math.min (Math.max( 0, this.y ),this.maxT);
		$(".mask").css("left",this.x);
		$(".mask").css("top",this.y);
		//大图移动
		this.X = this.x * ($("#boxb img").width() - $("#boxb").width()) / this.maxL;
		this.Y = this.y * ($("#boxb img").height() - $("#boxb").height()) / this.maxT;
		$("#boxb img").css("left",-this.X);
		$("#boxb img").css("top",-this.Y);
	},
})
$("#boxs img").fnSmall().fnZoom()
