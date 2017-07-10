$(function(){
	$(".kuai").find("a").click(function(){
		alert($(this).prev("p").text());
	});
	
	
	
	$.get("/activityinfo",function(data){
		data = JSON.parse(data);
		console.log(data);
		filldata(data);
		
	});
	
	function filldata(data){
		$("#nrBox li:not(.kuai)").remove();
		var fdata = data["data"];
		var $li = $(".kuai").clone(true);
		
		$li.removeAttr("id");
		for(var i=0; i< fdata.length; i++){
			
			var $oli = $li.clone(true);
			$oli.find(".yuefen").text(fdata[i]["time"].substring(5,10));
			$oli.find(".nian").text(fdata[i]["time"].substring(0,4));
			$oli.find(".zz").text(fdata[i]["title"]);
			$oli.find(".zy").text(fdata[i]["content"]);
			$oli.find(".shijian").text(fdata[i]["time"]);
			$oli.find(".uk-width-2-5").html("<img src="+fdata[i]['img']+">");
			$oli.appendTo(".ul1");
		}
	}
})
