		// var $hit = $("#click #hit"),
		// 	$img1 = $("#click #img1"),
		// 	$img2 = $("#click #img2"),
		// 	$i1 = $("#click #i1"),
		// 	$i2 = $("click #i2"),
		// 	$code = $("#box #code"),
		// 	$pwd = $("#box #pwd");
			var flag = null;
			$("#click #hit").click(function() {	
				if(flag == true ){
					$("#box #code").show()
					$("#click #i1").show()
					$("#click #img1").show()
					$("#box #pwd").hide()
					$("#click #i2").hide()
					$("#click #img2").hide()
					flag = false
				}else{
					$("#box #pwd").show()
					$("#click #i2").show()
					$("#click #img2").show()
					$("#box #code").hide()
					$("#click #i1").hide()
					$("#click #img1").hide()
					flag =true
				}
			});

