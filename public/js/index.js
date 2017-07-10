$(function(){
	//浮动二维码
	$("#menu01").mouseenter(function(){
		$(this).animate({backgroundPositionX:"0px"},300)
	})
	$("#menu01").mouseout(function(){
		$(this).animate({backgroundPositionX:"-54px"},300)
	})
	
	$("#menu02").mouseenter(function(){
		$(this).animate({backgroundPositionX:"0px"},300),
		
	$("#imgCode02").css("display","block")
	})
	$("#menu02").mouseout(function(){
		$(this).animate({backgroundPositionX:"-54px"},300),
		$("#imgCode02").css("display","none")
	})
	
	$("#menu03").mouseenter(function(){
		$(this).animate({backgroundPositionX:"0px"},300),
		
	$("#imgCode03").css("display","block")
	})
	$("#menu03").mouseout(function(){
		$(this).animate({backgroundPositionX:"-54px"},300),
		$("#imgCode03").css("display","none")
	})
	
	$("#menu04").mouseenter(function(){
		$(this).animate({backgroundPositionX:"0px"},300),
		
	$("#imgCode04").css("display","block")
	})
	$("#menu04").mouseout(function(){
		$(this).animate({backgroundPositionX:"-54px"},300),
		$("#imgCode04").css("display","none")
	})

	
	//声音
	$("#sur01").mouseenter(function(){
		$(".mus1").attr("src","img/1.mp3");
		$(this).animate({top:"2286px"},100)
	})
	$("#sur02").mouseenter(function(){
		$(".mus2").attr("src","img/2.mp3")
		$(this).animate({top:"2286px"},100)
	})
	$("#sur03").mouseenter(function(){
		$(".mus3").attr("src","img/3.mp3")
		$(this).animate({top:"2286px"},100)
	})
	$("#sur04").mouseenter(function(){
		$(".mus4").attr("src","img/4.mp3")
		$(this).animate({top:"2286px"},100)
	})
	$("#sur05").mouseenter(function(){
		$(".mus5").attr("src","img/5.mp3")
		$(this).animate({top:"2286px"},100)
	})
	$("#sur01").mouseout(function(){
		$(this).animate({top:"2340px"},100)
	})
	$("#sur02").mouseout(function(){
		$(this).animate({top:"2340px"},100)
	})
	$("#sur03").mouseout(function(){
		$(this).animate({top:"2340px"},100)
	})
	$("#sur04").mouseout(function(){
		$(this).animate({top:"2340px"},100)
	})
	$("#sur05").mouseout(function(){
		$(this).animate({top:"2340px"},100)
	})
	
	$("#football").mouseenter(function(){
		$(this).animate({top:"1290px"},200)
		$(this).animate({top:"1313px"},200)
		$(this).animate({top:"1300px"},200)
		$(this).animate({top:"1313px"},200)
	});
	
	
	$("#btnlogin").click(function() {
		var $input = $("#login input");
		$.post("/login", {
			"yhm": $input.eq(0).val(),
			"yhmm": $input.eq(1).val()
		}, function(data) {
			if(data=="ok"){
				alert("登陆成功");
				$("#sydl").text($input.eq(0).val());
				$("#login").hide();
			}else if(data=="err1"){
				alert("用户名或密码错误");
			}else{
				alert("用户名尚未注册");
			}
		});
	});
	
	$("#btnregist").click(function(){
		var $input=$("#regForm input");
		$.post("/regist",{
			"uyhm":$input.eq(0).val(),
			"uyhmm":$input.eq(1).val(),
			"uyouxiang":$input.eq(3).val(),
			"uzsname":$input.eq(4).val(),
			"usfzh":$input.eq(5).val()
		},function(data){
			if(data=="ok"){
				alert("注册成功");
				$("#zclogin").hide();
			}else{
				alert("注册失败");
			}
		});
		
	});
	
	//	登录页面设置
	$("#sydl").click(function() {
		$("#login").css("display", "block");
		return false;
	})
	$(".close").hover(function() {
		$(this).css("cursor", "pointer")
	})
	$("#dlclose").click(function() {
		$("#login").css("display", "none");

	})
	$("#dlzcs").hover(function() {
		$(this).css("cursor", "pointer")
	})
	$("#dlzcs").click(function() {
		$("#zclogin").css("display", "block")
	})

	$("#zcclose").click(function() {
		$("#zclogin").css("display", "none");
		$("#login").css("display", "none");
	})

	$("#zcdlzcs").hover(function() {
		$(this).css("cursor", "pointer")
	})
	$("#zcdlzcs").click(function() {
		$("#zclogin").css("display", "none");
		$("#login").css("display", "block");
	})

	//	注册页面验证
	var checkname = false,
		checkEmail = false;
	$("#zcyhm").blur(function() {
		var reg = /^[a-zA-Z]\w{5,9}$/;
		var input = $(this).val();
		if(reg.test(input)) {

			$.get("/checkuname?name=" + input, function(data) {
				console.log("后台返回：" + data);
				if(data == "ok") {
					$("#yhmts").text("用户名正确").css("color", "green");
					checkname = true;
				} else {
					$("#yhmts").text("用户名已被占用").css("color", "red");
					checkname = false;
				}
			});

		} else {
			$("#yhmts").text("用户名不正确，请重新输入").css("color", "red");
			checkname = false;
		}
	});

	$("#zcyhm").focus(function() {
		$("#yhmts").text("使用字母开头,由字母、数字、下划线，6~10位").css("color", "");
	});

	$("#email").blur(function() {
		var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
		var input = $(this).val();
		if(reg.test(input)) {
			$("#yxts").text("email正确").css("color", "green");
			checkEmail = true;
		} else {
			$("#yxts").text("email不合法").css("color", "red");
			checkEmail = false;
		}
	});
	$("#email").focus(function() {
		$("#yxts").text("请输入邮箱，注意大小写").css("color", "");
	});

	//这是表单的提交事件
	$("#regForm").submit(function() {
		var check = checkEmail && checkname;
		if(!check) {
			alert('请填写正确信息后，再注册');
		}
		return check;
	});
	
	$("#sanjiaotu").mouseover(function(){
		$("#sanjiao01").css({"display":"block"});
		$("#sanjiao02").css({"display":"block"});
		$("#sanjiao03").css({"display":"block"});
	})
	$("#sanjiaotu").mouseleave(function(){
		$("#sanjiao01").css({"display":""});
		$("#sanjiao02").css({"display":""});
		$("#sanjiao03").css({"display":""});
	
	})
})

