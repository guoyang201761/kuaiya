$(function() {
	var json = "123"
	var allData;
	$.ajax({
		type: "get",
		url: "js/help.json",
		async: true,
		dataType: "json",
		success: function(data) {
			allData = data;
			json = data["zhinan"];
			console.log(allData);
			filldata();
		}
	});

	function filldata() {
		for(var i in json) {
			$dl = $("<dl></dl>");
			$dl.append("<dt>" + json[i]["question"] + "<dt>")
			$dl.append("<dd>" + json[i]["answer"] + "<dd>");
			$("dt").css({"color":"blue",
			"font-size":"16px","line-height":"16px","margin-left":"20px","font-weight":" 900"
    ,"margin-bottom": "15px","margin-bottum":"5px"});
            $("dd").css({
            	"margin-left":"0",
            	"font-size":"15px"
            })
			$("#xx").append($dl);
		}
	}
	var gong=function filldata() {
		for(var i in json1) {
			$dl = $("<dl></dl>");
			$dl.append("<dt>" + json1[i]["question"] + "<dt>")
			$dl.append("<dd>" + json1[i]["answer"] + "<dd>");
			$("dt").css({"color":"blue",
			"font-size":"16px","line-height":"16px","margin-left":"20px","margin-bottum":"5px"})
			$("#xx").append($dl);
		}
	}
	
	
	$("#lei a").click(function(){
		$("#xx").html("");
		$("#lei a").css("background-color","#fafafa")
		$(this).css("background-color","white");
		
		var title = $(this).attr("title");
		json = allData[title];
		filldata();
		return false;
	});
	
});