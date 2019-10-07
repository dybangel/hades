Gcodebaseurl = "http://raw.githubusercontent.com/dybangel/hades/master/";
Gserver_ver_url="http://115.29.141.214:8888/repo/haiqu_helper/version/version.json";
Gappsurl="http://115.29.141.214:9999/app/list";
Gapps="";


toast("开始自动打包");
//className("android.widget.TextView").text("打包中")
//className("android.widget.TextView").text("打包成功")

console.show(); 
console.setPosition(600, 800);

var script_download_path = "/sdcard/脚本/";
files.createWithDirs(script_download_path);
 //clean
files.removeDir(script_download_path+'海趣助手');
//sleep(1000);
files.createWithDirs(script_download_path+'海趣助手/');
files.createWithDirs(script_download_path+'海趣助手/res/');
files.createWithDirs(script_download_path+'海趣助手/applist/');
files.createWithDirs(script_download_path+'海趣助手/voice/appname/');
files.createWithDirs(script_download_path+'海趣助手/voice/global/');



buildjson="build.json";
jsoncreate=false;

var result=getScriptFromServer(buildjson,script_download_path);
if(result){
   var str=files.read(script_download_path+buildjson);
  try{
    json =eval('('+str+')');
    jsoncreate=true;
}catch(e){
    toast("云端build.jsonson文件格式错误");
  }

  //for
 // alert(JSONLength(json[0]["script"]));
 // exit();

 if(jsoncreate){
     //下载js文件
     log("下载js脚本----------");
    for(var i=1;i<=JSONLength(json[0]["script"]);i++){
    
        scriptname=json[0]["script"]["s"+i];
        log(scriptname);
         getScriptFromServer(scriptname,script_download_path+"海趣助手/")
    }

    //下载音频文件
    log("下载语音包----------");
    for(var i=0;i<json[0]["voice"].length;i++){
        voicename=json[0]["voice"][i]["name"];
        log(voicename);
        getScriptFromServer("voice/global/"+voicename,script_download_path+"海趣助手/")
    }
    //下载applist文件
    // log("下载applist----------");
    // for(var i=0;i<json[0]["applist"].length;i++){
    //     applistname=json[0]["applist"][i]["appname"];
    //     log(applistname+".js");
    //     log(applistname+".json");
    //     getScriptFromServer("applist/"+applistname+".js",script_download_path+"海趣助手/")
    //     getScriptFromServer("applist/"+applistname+".json",script_download_path+"海趣助手/")
    // }
    //下载applist文件
    log("下载applist----------");
    try{
      //http.__okhttp__.setTimeout(10000);
      var r=http.get(Gappsurl);
      
      var tmpstr=r.body.string();
      var ele=eval('('+tmpstr+')');
      Gapps=ele.result;
      //console.log(Gapps[0]["appname"].length);
    }catch(e){
    toast(e);
    }
   for(var i=0;i<Gapps.length;i++){
   applistname=Gapps[i]["appname"];
        log(applistname+".hqjs");
        log(applistname+".json");
        getScriptFromServer("applist/"+applistname+".hqjs",script_download_path+"海趣助手/")
        getScriptFromServer("applist/"+applistname+".json",script_download_path+"海趣助手/")
}
    //下载图片文件
    log("下载打包图标----------");    
    getScriptFromServer("res/logo.png",script_download_path+"海趣助手/")
    getScriptFromServer("res/1.png",script_download_path+"海趣助手/")
    getScriptFromServer("res/2.png",script_download_path+"海趣助手/")
    getScriptFromServer("res/3.png",script_download_path+"海趣助手/")
    //下载project.json文件
    log("下载项目配置----------");    
    getScriptFromServer("project.json",script_download_path+"海趣助手/")
    var str=files.read(script_download_path+"海趣助手/project.json");
    var project_json=eval('('+str+')')

    var nowver=getserver_ver();
 
    //alert("tmpjson is:"+project_json["versionName"]);
    project_json["versionName"]=nowver
    //alert("tmpjson is new:"+project_json["versionName"]);
    var str=JSON.stringify(project_json);
  //  alert(str);
    files.write(script_download_path+"海趣助手/project.json", str);
    Swipe(400,700,400,1400,600);
    sleep(3000);
    className("android.widget.TextView").text("海趣助手").findOnce().parent().parent().click();
    sleep(2000);
    id("org.autojs.autojs:id/build").click();
    sleep(2000);
    id("org.autojs.autojs:id/fab").click();
    //exit();

  }
 alert("打包完成");
 //download

  // alert(json);
   //alert(str);

}else{
    alert("下载build.json失败");
};

//json =eval('('+script_download_path+buildjson+')');
exit();
state1=false;
state2=false;
state3=false;

file_name="mycommon.js"


var result=getScriptFromServer(file_name,script_download_path);
//alert("result is:"+result)
if(result){
    state1=true;
  //eval(script_download_path+file_name);
  //engines.execScriptFile(script_download_path+file_name,{
 
  //});
}

file_name="myswipe.js"
var result=getScriptFromServer(file_name,script_download_path);
//alert("result is:"+result)
if(result){
    state2=true;
  //eval(script_download_path+file_name);
 // engines.execScriptFile(script_download_path+file_name,{
 
 // });
}


file_name="main_ui.js"
var result=getScriptFromServer(file_name,script_download_path);
//alert("result is:"+result)
if(result){
    state3=true;
  //eval(script_download_path+file_name);
 // engines.execScriptFile(script_download_path+file_name,{
 
 // });
}
if(state1==true && state2==true && state3==true){
    engines.execScriptFile(script_download_path+file_name,{

    });
}

//穿入文件名 和本地要保存的路径
function getScriptFromServer(FILE,PATH) { //从服务器获取脚本
    // var i, download_res, script_file_url = "https://script.iqqclub.com/Script/" + FILE;
    var i, download_res, script_file_url = Gcodebaseurl + FILE;
   //  console.show();
    for (i = 0; 10 > i; i++) try {
         if (download_res = http.get(script_file_url), 200 == download_res.statusCode) break;
         log("res:"+download_res.statusCode);
         if(i>8) return !1;
     } catch (e) {
       log("error res:"+download_res);
         if (sleep(500), 9 == i) return !1;
     }
     //alert("1")
     return files.writeBytes(PATH + FILE, download_res.body.bytes()),!0;
  }

  function JSONLength (obj) {
    var size = 0, key;
    for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

function getserver_ver(){
    var r=http.get(Gserver_ver_url);
server_version="";

if("200"==r.statusCode){
    var tmpstr=r.body.string();
    tmpjson=eval('(' + tmpstr + ')'); 
   
    var server_version=tmpjson["server_version"]
    server_version=server_version.replace(".","").replace(".","");
    server_version=Number(server_version)+Number(1);
    tmpstr="";

    var strArray=server_version.toString().split("");
        for(var i=0;i<strArray.length;i++){
          var char=strArray[i]
          if(""==tmpstr){
          tmpstr=char;
          }else{
            tmpstr=tmpstr+"."+char;
          }
        }
    server_version=tmpstr;
}else{
    var server_version="从服务器上取值失败了"
}
return server_version;
}

function printobj (obj){
    for(var key in obj){
      log('key='+key+'  value='+obj[key]);
}
}