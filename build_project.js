var thiscommon=require("mycommon.js");
Gapi_json_url="http://download.dqu360.com:81/haiqu/api.json";
//var ele=
//1点击fab
id("org.autojs.autojs:id/fab").click();
sleep(1500);

//2点击项目按钮
id("org.autojs.autojs:id/floating_action_button").findOnce(3).click();
sleep(1500);
var r=http.get(Gapi_json_url);


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
className("android.widget.EditText").findOnce(0).setText("海趣助手");
className("android.widget.EditText").findOnce(1).setText("com.haiqu.autoread");
className("android.widget.EditText").findOnce(2).setText(server_version);
className("android.widget.EditText").findOnce(5).setText("main_ui.js");
