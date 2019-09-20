//读取配置文件
	if(typeof(Gconfigjson)!="undefined"){
	configjson=Gconfigjson;
	}else{
	configjson="config/config.json";	
	}
	$.ajax({
        url : configjson,
        type : 'get',
        dataType : 'json',
		async:false,
		success : function(res){
    	//alert(res.server);  
        Gserver=res.server;
       // alert("gserver="+Gserver);
        }
	});

//计算data数量的函数
function JSONLength(obj) {
			var size = 0, key;
			for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
			}
			return size;
};	

function closeme(){
 	var ws=plus.webview.currentWebview();
 	plus.webview.close(ws);
 }


function getjson(action,par){
	var actions=action;
	var action=actions.split("|")[0];
	var action_2=actions.split("|")[1];
    var action_3=actions.split("|")[2];
    //alert('action ready');
	 $.ajax({
      		type:"get",
      		url:Gserver+"/api.aspx?"+par,
			async:true,
      		data:{"action":action},
      		dataType:"json", // 因为PHP返回数据是JSON格式，所以这里类似要用JSON
      		success:function(data){

      			if(data!="null"){	
      				try{		

      					
      						if (typeof(action_2)=="undefined") {
      						//alert('test='+data);
      					//	eval(action+'(data)');
							//						alert('不用模板机制');
							}else{
								var tpid=$('#'+action+'_template')[0];
								if(typeof(tpid)=="undefined"){
									alert("模板："+action+"_template 不存在，请设置");
									return;
								}
								var conid=$('#'+action+'_container')[0];
								if(typeof(conid)=="undefined"){
									alert("容器："+action+"_container 不存在，请设置");
									return;
								}
								
								var template = $('#'+action+'_template')[0];
								var  dot = doT.template(template.innerHTML);
								if(action_3=="append"){
									$('#'+action+'_container')[0].innerHTML+=dot(data);
								}else{
									$('#'+action+'_container')[0].innerHTML=dot(data);
								}
								//alert('需要找模板绑定');
							}
						//再执行同action私有实现函数以满足一些特殊要求
						//alert("eval run.."+action);
      					eval(action+'(data)');  		
      					}catch(e){
      					//TODO handle the exception
      					//alert(e);
      					}								
      							}else{
      								alert(action+'返回空值，增加一个procedure返回值');
      								eval(action+'(data)');  
      								//$('.mui-spinner').removeClass('mui-spinner');
									//$('.mui-pull-caption-refresh')[0].innerHTML='没有更多的数据了';
      							}
								 },
			error: function(xhr, type, errorThrown) {
					console.log(errorThrown);
							 						}
			})
}

//打开新窗体优化
function openwin_plus(winpath,par){
	mui.openWindow({
    url:winpath,
    id:winpath,
    styles:{
      top:'0px',//新页面顶部位置
      bottom:'0px',//新页面底部位置
      //width:newpage-width,//新页面宽度，默认为100%
      //height:newpage-height,//新页面高度，默认为100%
     // ......
    },
    extras:{
    	pars:par
     // .....//自定义扩展参数，可以用来处理页面间传值
    },
    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
    show:{
      autoShow:true,//页面loaded事件发生后自动显示，默认为true
      aniShow:"slide-in-right",//页面显示动画，默认为”slide-in-right“；
      duration:50 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
    },
    waiting:{
      autoShow:true,//自动显示等待框，默认为true
      title:'正在拼命加载...',//等待对话框上显示的提示内容
      options:{
        width:'120px',//等待框背景区域宽度，默认根据内容自动计算合适宽度
        height:'100px',//等待框背景区域高度，默认根据内容自动计算合适高度
      //  ......
      }
    }
})
	
}

//接受数值 可打印调试Gparent_value
function getvalue_plus(){
	var pars=plus.webview.currentWebview().pars;
	var cmds='';
	for(var key in pars){
   		var cmd=''+key+'="'+pars[key]+'";'
   		cmds +=cmd;
		eval(cmd);
		}
	Gvalue_plus=cmds;
	alert("This is fun.js info:"+Gvalue_plus);
}

//全文替换
function replaceall(str,src,dst){
	var reg1=new RegExp(src,"g"); //创建正则RegExp对象   
    str=str.replace(reg1,dst);
    return str;
}
//根据屏幕修改html front-size
//	(function (doc, win) {
//		try{
//			if(Gnoresize==true){
//			return;
//		}
//		}catch(e){
//			//TODO handle the exception
//		}
//      var docEl = doc.documentElement,
//          resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
//          recalc = function () {
//              var clientWidth = docEl.clientWidth;
//              if (!clientWidth) return;
//             //   alert(clientWidth);
//              //iphone5
//              if(320<=clientWidth && clientWidth<375){
//                  docEl.style.fontSize = "16px";
//              }else if(375<=clientWidth && clientWidth<414){
//              //	alert("i6");
//                  docEl.style.fontSize = "21px";
//              }else if(415<=clientWidth && clientWidth<768){
//                  docEl.style.fontSize = "28px";
//              }
//              
//          };
//      if (!doc.addEventListener) return;
//      win.addEventListener(resizeEvt, recalc, false);
//      doc.addEventListener("DOMContentLoaded", recalc, false);
//  })(document, window);
    //日期格式化函数
	Date.prototype.Format = function(fmt)   
							{ //author: meizz   
							  var o = {   
							    "M+" : this.getMonth()+1,                 //月份   
							    "d+" : this.getDate(),                    //日   
							    "h+" : this.getHours(),                   //小时   
							    "m+" : this.getMinutes(),                 //分   
							    "s+" : this.getSeconds(),                 //秒   
							    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
							    "S"  : this.getMilliseconds()             //毫秒   
							  };   
							  if(/(y+)/.test(fmt))   
							    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
							  for(var k in o)   
							    if(new RegExp("("+ k +")").test(fmt))   
							  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
							  return fmt;   
							}
							