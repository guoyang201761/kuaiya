var express=require("express");
var request=require("request");
var bodyparser=require("body-parser");

var app=express();
//post请求中request添加body属性
app.use(bodyparser.urlencoded({extended:false}));

//服务器加载时读取用户信息保存在变量中
var fs=require("fs");
var usersData=null;
fs.readFile("./users.json",function(err,data){
	if(!err){
		usersData=JSON.parse(data.toString());
		
	}
	console.log(usersData);
});


//public文件夹托管
app.use(express.static("public"));

//添加端口监听
app.listen(8888,function(){
	console.log("服务器启动，8888");
});

//对不同的请求配置路径
app.get("/",function(req,res){
	res.sendFile(__dirname+"/public/index.html");
});

app.get("/checkuname",function(req,res){
	var name=req.query.name;
	if(usersData[name]==undefined){
		res.end("ok");
	}else{
		res.end("error");
	}
});

//密码验证
app.post("/login",function(req,res){
	var name =req.body.yhm;
	var pwd=req.body.yhmm;
	if(usersData[name]!=undefined){
		if(usersData[name]["userpwd"]==pwd){
			res.end("ok");
		}else{
			res.end("err1") //密码错误
		}
	}else{
		res.end("err2") //直接就是用户是错的
	}
	console.log(usersData[name]["userpwd"]);
});

app.post("/regist",function(req,res){
	var uname=req.body.uyhm;
	var upwd=req.body.uyhmm;
	var uemail=req.body.uyouxiang;
	var urealname=req.body.uzsname;
	var uid=req.body.usfzh;
	
	var user={
		"username":uname,
		"userpwd":upwd,
		"useremail":uemail,
		"userid":uid,
		"realname":urealname
	}
	usersData[uname] = user;
	console.log(usersData);
	fs.writeFile("./users.json",JSON.stringify(usersData),function(err){
		if(err){
			console.log("写入失败");
		}else{
			console.log("写入成功");
			res.end("ok");
		}
	});
	
	
});

app.get("/news", function(req, res) {
	res.sendFile(__dirname + "/public/news.html");
});

app.get("/newsinfo",function(req,res){
	var pnum=req.query.pagenum? req.query.pagenum : 1;
	request("http://duif.applinzi.com/leyuan/news.php?pageNum="+pnum,function(err,request,data){
		if(!err&&request.statusCode==200){
//			data=JSON.parse(data);
			res.end(data);
		}
	})
});

app.get("/activity", function(req, res) {
	res.sendFile(__dirname + "/public/activity.html");
});

app.get("/activityinfo", function(req, res) {
	
	
	request("http://duif.applinzi.com/leyuan/activitys.php", function(err, request, data) {
		if(!err && request.statusCode==200){			
			res.end(data);
		}else{
			console.log(err);
		}
	});

});



app.get("/help", function(req, res) {
	res.sendFile(__dirname + "/public/help.html");
});