play("global","打开");exit();
ip="192.168.31.101";
 var e = engines.execScriptFile("./main.js");
//等待脚本启动
sleep(2000);
//向该脚本发送事件
switch(ip){
    case "192.168.31.101": e.getEngine().emit("autoread","北京知天下");break;     
    case "192.168.31.102": e.getEngine().emit("autoread", "掌上消息");break;       
    case "192.168.31.103": e.getEngine().emit("autoread", "有米头条");break;       
    case "192.168.31.104": e.getEngine().emit("autoread", "有看头-热点头条");break;
    case "192.168.31.105": e.getEngine().emit("autoread", "波波视频");break;       
    case "192.168.31.106": e.getEngine().emit("autoread", "盈贝头条");break;       
    case "192.168.31.107": e.getEngine().emit("autoread", "新闻赚");break;         
    case "192.168.31.108": e.getEngine().emit("autoread", "网易新闻极速版");break; 
    case "192.168.31.109": e.getEngine().emit("autoread", "今日头条极速版");break; 
    case "192.168.31.110": e.getEngine().emit("autoread", "百姓头条");break;       
    case "192.168.31.111": e.getEngine().emit("autoread", "本地看点");break;       
    case "192.168.31.112": e.getEngine().emit("autoread", "菠萝小组");break;       
    case "192.168.31.113": e.getEngine().emit("autoread", "大众看点");break;       
    case "192.168.31.114": e.getEngine().emit("autoread", "大众头条");break;       
    case "192.168.31.115": e.getEngine().emit("autoread", "点点新闻");break;       
    case "192.168.31.116": e.getEngine().emit("autoread", "翻翻头条");break;       
    case "192.168.31.117": e.getEngine().emit("autoread", "淘看点");break;         
    case "192.168.31.118": e.getEngine().emit("autoread", "精彩看点");break;       
    case "192.168.31.119": e.getEngine().emit("autoread", "氪资讯");break;         
    case "192.168.31.120": e.getEngine().emit("autoread", "快狗视频");break;       
    case "192.168.31.121": e.getEngine().emit("autoread", "快看点");break;         
    case "192.168.31.122": e.getEngine().emit("autoread", "唔哩头条");break;       
    case "192.168.31.123": e.getEngine().emit("autoread", "蚂蚁看点");break;       
    case "192.168.31.124": e.getEngine().emit("autoread", "蜜蜂看看");break;       
    case "192.168.31.125": e.getEngine().emit("autoread", "牛牛资讯");break;       
    case "192.168.31.126": e.getEngine().emit("autoread", "趣故事");break;         
    case "192.168.31.127": e.getEngine().emit("autoread", "热点资讯");break;       
    case "192.168.31.128": e.getEngine().emit("autoread", "刷宝短视频");break;     
    case "192.168.31.129": e.getEngine().emit("autoread", "搜狐资讯");break;       
    case "192.168.31.130": e.getEngine().emit("autoread", "淘集集");break;         
    case "192.168.31.131": e.getEngine().emit("autoread", "淘头条");break;         
    case "192.168.31.132": e.getEngine().emit("autoread", "天天快报");break;       
    case "192.168.31.132": e.getEngine().emit("autoread", "天天趣闻");break;                                                          
    defaullt:
     e.getEngine().emit("autoread", "all"); 
    break;

}
exit();

var result=shell("", true);
alert(result);

var result=shell("ifconfig wlan0", true);
 // var result=shell("ifconfig eth0", true);
//result)
//result="asdfidfd";

toast(result);
//toast(result.toString().indexOf("inet addr:"));
var start=result.toString().indexOf("inet addr:");
//toast(result.toString().indexOf(" Bcast"));
var stop=result.toString().indexOf(" Bcast")
var ip=result.toString().substring(start,stop).replace("inet addr:","").replace(/^\s+|\s+$/g,"");
//play("global","手机IP");
toast(ip);exit();
for (key in ip){
   // toast(ip[key]);
    if(ip[key]=="."){
    //    play("global","点");
    }else{
        play("global",ip[key]);
    }
}
if(ip=="192.168.3.94"){
    play("global","打开");
    play("appname","北京知天下");

}

function play(subpath,appname){
    // return true;
 //    media.playMusic("/storage/emulated/0/脚本/voice/"+subpath+"/"+appname+".mp3");
    var voicefile="/storage/emulated/0/voice/"+subpath+"/"+appname+".mp3";
 
     var result=files.exists(voicefile);
     if(!result){
         toast("没有找到语音包"+voicefile+".mp3");
     }else{
         media.playMusic("/storage/emulated/0/voice/"+subpath+"/"+appname+".mp3");
         //media.playMusic("./voice/"+subpath+"/"+appname+".mp3");
       
         sleep(media.getMusicDuration());
         ///storage/emulated/0/
     }
 
 }
  //alert(result);