$(function(){
	$("#clone").find("a").click(function(){
		alert($(this).prev("p").text());
	});
	
	$(".btn a").click(function(){
		$.get("/newsinfo",{"pagenum":this.innerText},function(data){
			data=JSON.parse(data);
			
			filldata(data);
		});
	});
	//发送请求
//	$.get("/newsinfo",{"pagenum":"1"},function(data){
//		data=JSON.parse(data);
//		console.log(data);
//	});
//	
//	function filldata(data){
//		var fdata=data["data"];
//		var $li=$("#clone").clone(true);
//		
//		$li.removeAttr("id");
//		for(var i=0;i<fdata.length;i++){
//			var $oli=$li.clone(true);
//			$oli.find("h1").text(fdata[i]["time"].substring(5));
//			$oli.find("span").text(fdata[i]["time"].substring(0,4));
//			$oli.find("h3").text(fdata[i]["title"]);
//			$oli.find("p").text(fdata[i]["content"]);
//			
//			$oli.appendTo("#appen");
//		}
//	}
	$.get("/newsinfo",{"pagenum":"1"},function(data){
		data = JSON.parse(data);
		filldata(data);
	});
	
	function filldata(data){
		$("#appen li:not(#clone)").remove();
		var fdata = data["data"];
		var $li = $("#clone").clone(true);
		$li.removeAttr("id");
		for(var i=0; i< fdata.length; i++){
			
			var $oli = $li.clone(true);
			$oli.find("h1").text(fdata[i]["time"].substring(5));
			$oli.find("span").text(fdata[i]["time"].substring(0,4));
			$oli.find("h3").text(fdata[i]["title"]);
			$oli.find("p").text(fdata[i]["content"]);
			
			$oli.appendTo("#appen");
		}
	}

});
