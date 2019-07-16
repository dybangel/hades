"ui";
const thiscommon=require("./mycommon.js");
const thisswipe=require("./myswipe.js");
var color = "#009688";
var color = "#4C484C";
var frameColor = "#7E787F";
var textColor = "#009688";
var img_scriptIconColor = "#007E787F";
var img_refreshIconColor = "#FFFFFF";
var appversion=app.versionName;
importClass(android.view.View);
importClass(android.graphics.Color)
importClass(android.app.AlertDialog);
importClass(android.widget.EditText);
importClass(java.io.File);

var window = activity.getWindow();
var decorView = window.getDecorView();
var option = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
			 | View.SYSTEM_UI_FLAG_LAYOUT_STABLE;
decorView.setSystemUiVisibility(option);
//decorView.getChildAt(0).getChildAt(1).getLayoutParams().height=device.height
//fd.setLayoutParams(lp)
window.addFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
window.setStatusBarColor(Color.TRANSPARENT);

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="海趣助手 V{{appversion}}"/>
                <tabs id="tabs"/>
            </appbar>
            <viewpager id="viewpager">
            <scroll layout_gravity="center">
                <frame>
                <vertical h="*">
                        {/* text label */}
                        <button id="start" text="开始运行"/>
                        

                        {/* 空行 */}
                        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
                         {/* 勾选框 */}
                         <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="手机型号" textSize="12sp" textColor="{{textColor}}" />
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                        </linear>
                        <linear h="40" paddingTop="1" >
                                <radiogroup id='fbName' orientation="horizontal">
                                    {/* <radio id="allrun" text='全刷' color="{{textColor}}"></radio> */}
                                    <radio  id="xiaomi4" text='小米4' color="{{textColor}}" checked="true"></radio>
                                    <radio id="xiaomi4s" text='小米4s' color="{{textColor}}"></radio>
                                    <radio id="lnnl" text='LnnL' color="{{textColor}}"></radio>     
                                </radiogroup>
                            </linear>

                         <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="工作模式" textSize="12sp" textColor="{{textColor}}" />
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                        </linear>
                            <linear h="40" paddingTop="1" >
                                <radiogroup id='fbName' orientation="horizontal">
                                    {/* <radio id="allrun" text='全刷' color="{{textColor}}"></radio> */}
                                    <radio  id="autoread" text='自动阅读' color="{{textColor}}" checked="true"></radio>
                                    <radio id="bindwechat" text='微信绑定' color="{{textColor}}"></radio>
                                    <radio id="trainwechat" text='微信养号' color="{{textColor}}"></radio>     
                                </radiogroup>
                            </linear>

                    
                     

                        {/* 分割线填充 */}
                        <vertical w="*" h="1" bg="{{color}}" ></vertical>

                        {/* 其他功能区域相关配置 */}
                        <linear w="*" h="*" paddingLeft="8" gravity="left|center" >
                            <text text="软件列表" textSize="12sp" textColor="{{textColor}}" />
                        </linear>
                        <vertical margin="0 20 0 20" id="applist">
                            {/* <linear layout_weight="1" >
                                <checkbox id="str" text="脚本运行前开启录屏(功能未开发)" color="{{textColor}}" />
                            </linear> */}
                            {/* 支持的app列表开始 */}
                            {/* <linear layout_weight="1" >
                                <checkbox id="sendMsgOption" text="109.今日头条" color="{{textColor}}" />
                                <text text="次数:"
                                    marginLeft="10"
                                    marginRight="1"
                                    color="{{textColor}}"
                                    size="16sp"
                                     />
                                 <input id="test" layout_weight="1" textColor="black" textSize="16sp" marginLeft="16"></input>
                                
                               
                                <linear layout_weight="1" gravity="right" >
                                    <button id="open" text="打开" w="60" h="40" />
                                </linear>
                            </linear> */}

                            
                            {/* 支持的app列表结束 */}
                        </vertical>

                        {/* 分割线填充 */}
                        <vertical w="*" h="1" bg="{{color}}" ></vertical>

                        {/* 垃圾清理区域相关配置 */}
                        {/* <linear w="*" h="24" paddingLeft="8" gravity="left|center" >
                            <text text="清理相关" textSize="12sp" textColor="{{textColor}}" />
                        </linear>
                        <vertical>
                            <linear w="*" h="50" margin="0 20 0 20" gravity="center" >
                                <linear layout_weight="1" >
                                    <checkbox id="clear_log" text="日志" color="{{textColor}}" />
                                </linear>
                                <linear layout_weight="1" >
                                    <checkbox id="clear_namelist" text="已聊名单" color="{{textColor}}" />
                                </linear>
                                <linear layout_weight="1" >
                                    <checkbox id="clear_config" text="配置文件" color="{{textColor}}" />
                                </linear>
                                <linear layout_weight="1" gravity="right" >
                                    <button id="clear_Btn" text="删除" w="60" h="40" />
                                </linear>
                            </linear>

                        </vertical> */}

                        {/* 分割线填充 */}
                        <vertical w="*" h="1" bg="{{color}}" ></vertical>
                        







                        {/* 测试开始 */}
                        
                        {/* 测试结束 */}
                        {/* <linear gravity="center" margin="0 0 0 0">
                            <button id="reset" w="85" h="40" style="Widget.AppCompat.Button.Colored" bg="#E1E4E5" textSize="16sp" textStyle="bold" textColor="#000000" text="清除缓存" margin="12"></button>
                            <button id="start" w="85" h="40" style="Widget.AppCompat.Button.Colored" bg="#3CCA3C" textSize="16sp" textStyle="bold" textColor="#FFFFFF" text="开  始" margin="12"></button>
                        </linear> */}
                    </vertical>
               
                </frame>
                </scroll>
                {/* <frame>
                    <text text="第二页内容" textColor="red" textSize="16sp"/>
                </frame>
                <frame>
                    <text text="第三页内容" textColor="green" textSize="16sp"/>
                </frame> */}
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
                </horizontal>
            </list>
        </vertical>
    </drawer>
);
//检测无障碍服务
ui.autoService.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if(checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if(!checked && auto.service != null){
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});
//开始运行脚本
ui.start.on("click", function(){
    //程序开始运行之前判断无障碍服务
    if(auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    //Gdevicetype="xiaomi4"; //字典 xiaomi4 xiaomi4s lnnl
    if(ui.xiaomi4.checked==true){
       // alert("xiaomi4");
        Gdevicetype="xiaomi4"
    }else if(ui.xiaomi4s.checked==true){
      //  alert("xiaomi4s");
        Gdevicetype="xiaomi4s"
    }else if(ui.lnnl.checked==true){
      //  alert("lnnl");
        Gdevicetype="lnnl"
    }
   // sleep(3000);
   // exit();
    if(ui.autoread.checked==true){
        Grunstate="autoread";
       // alert("自动阅读");
    }else if(ui.bindwechat.checked==true){
        Grunstate="bindwechat";
       // alert("bingwechat");
    }else if(ui.trainwechat.checked==true){
        Grunstate="trainwechat";
      //  alert("train");
    }
});

activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["全局设置"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
//   {
//       title: "开始运行",
//       icon: "@drawable/ic_android_black_48dp"
//   },
//   {
//       title: "选项二",
//       icon: "@drawable/ic_settings_black_48dp"
//   },
//   {
//       title: "选项三",
//       icon: "@drawable/ic_favorite_black_48dp"
//   },
  {
      title: "退出",
      icon: "@drawable/ic_exit_to_app_black_48dp"
  }
]);

ui.menu.on("item_click", item => {
    switch(item.title){
        case "退出":
            ui.finish();
            break;
        // case "开始运行":
        //     //alert("start");
        //     Grunstate="autoread";

        break;
    }
})




//ui.allrun.setText("123");

//alert(ui.toolbar.getText());
// //创建选项菜单(右上角)
// ui.emitter.on("create_options_menu", menu=>{
//     menu.add("设置");
//     menu.add("关于");
// });
// //监听选项菜单点击
// ui.emitter.on("options_item_selected", (e, item)=>{
//     switch(item.getTitle()){
//         case "设置":
//             toast("还没有设置");
//             break;
//         case "关于":
//             alert("关于", "Auto.js界面模板 v1.0.0");
//             break;
//     }
//     e.consumed = true;
// });
/************************************* UI结束**********************************************************************/ 


//downloadapp();
// Gapps=[
//             //  {"appnum":"016","appname":"掌上热点","enable":"true"},
//             //  {"appnum":"028","appname":"微鲤看看","enable":"true"},
//             // {"appnum":"035","appname":"东方头条","enable":"true"},
//             // {"appnum":"043","appname":"红包视频","enable":"true"},
//             // {"appnum":"050","appname":"亿刻看点","enable":"true"},
//            // {"appnum":"051","appname":"韭菜资讯","enable":"true"},//已经实现
//              {"appnum":"054","appname":"氪资讯","enable":"true"},
//             // {"appnum":"055","appname":"快狗视频","enable":"true"},
//             // {"appnum":"056","appname":"快看点","enable":"true"},
//             // {"appnum":"061","appname":"蚂蚁看点","enable":"true"},
//             // {"appnum":"066","appname":"趣故事","enable":"true"},  
//             // {"appnum":"069","appname":"趣头条","enable":"true"},//已经实现
//             // {"appnum":"072","appname":"全民头条","enable":"true"},
//             // {"appnum":"081","appname":"淘头条","enable":"true"},
//             // {"appnum":"082","appname":"淘新闻","enable":"true"},//已经实现
          
          
          
          
//     //过往实现过的app如下19个
//     // {"appnum":"","appname":"刷宝短视频","enable":"true"},
//     // {"appnum":"","appname":"2345浏览器","enable":"true"},
//     // {"appnum":"","appname":"趣头条","enable":"true"},
//     // {"appnum":"","appname":"中青看点","enable":"true"},
//     // {"appnum":"","appname":"闪电盒子","enable":"true"},
//     // {"appnum":"","appname":"引力资讯","enable":"true"},
//     // {"appnum":"","appname":"趣看点","enable":"true"},//没实现查看全文
//     // {"appnum":"","appname":"淘新闻","enable":"true"},//
//     // {"appnum":"","appname":"百姓头条","enable":"true"},// 
//     // {"appnum":"","appname":"三言","enable":"true"},
//     // {"appnum":"","appname":"天天快报","enable":"true"},
//     // {"appnum":"","appname":"掌上消息","enable":"true"},
//     // {"appnum":"","appname":"菠萝小组","enable":"true"},
//     // {"appnum":"","appname":"聚看点","enable":"true"},
//     // {"appnum":"","appname":"波波视频","enable":"true"}, //统一领取
//     // {"appnum":"","appname":"盈贝头条","enable":"true"},//查看全文
//     // {"appnum":"","appname":"新闻赚","enable":"true"},  
//     // {"appnum":"","appname":"韭菜资讯","enable":"true"}, //多读一会儿
//     // {"appnum":"","appname":"有米头条","enable":"true"}, //多读一会儿

// ]; 
//ref_ui_list();



//当前工作模式，如果有UI界面，则该变量需要在UI的启动按钮中声明
//运行模式变量 自动阅读，绑定微信，微信养号 // 对应字典autoread bindwechat trainwechat popupdebug
Grunstate="";
//底层是否已经运行
Galready=false;
//是否加载过json文件
Galready_loadjson=false;
Gworkthread="";
Gfirstrun=true;
//是否开启调试打印  字典true false
Gdebug=false;
//所有要阅读那些app数据结构
//30分钟=1800秒=1800000毫秒
//1.3分钟=100000毫秒
//每一个app阅读多长时间的变量
Gappinterval="1800000";
//关闭弹窗线程的循环周期
Gabinterval="3000";
//设备类型
//Gdevicetype="xiaomi4"; //字典 xiaomi4 xiaomi4s lnnl

//json特征码加载方式 remote local 
//目前已经支持从云端获取特征码，Gjsonloadstate改为remote即可从指定的云端路径下载json文件，现在Gapplistpath_remote的路径
//使用的是开发人员及其，后期发版是需要改为点趣域名，并将特征码更新到云端路径
Gjsonloadstate="remote";
//app json特征码远程下载根路径
Gapplistpath_remote="http://download.dqu360.com:81/haiqu/applist/";
//Gapps,哪些app要刷的开关量json云端文件路径
Gappspath_remote="http://download.dqu360.com:81/haiqu/gapps.json";
//api 接口文件路径
Gapi_json_url="http://download.dqu360.com:81/haiqu/api.json";
Gdownloadpath="http://download.dqu360.com:81/haiqu/haiqu.apk"
//特征码路径 字典./applist/  表示到根目录脚本里找applist， /storage/emulated/0/applist/ 表示只到根目录下找applist
Gapplistpath="./applist/";
//语音包路径  /storage/emulated/0/voice/ 表示到根目录下找voice
Gvoicepath="./voice/";

//fitem 函数专用定界特征码
v4feature="android.support.v4.view.ViewPager";
v7feature="android.support.v7.widget.RecyclerView";
androidx="androidx.recyclerview.widget.RecyclerView";

//脚本通讯监听，接收其它脚本指令是autoread的
// events.on("autoread", function(appwords){
//    play("global","执行");
//    play("global","群控指令");
//    if(appwords==""){
//     run();
//    }else{
//     Gapps=a=eval('(' + '[{"appname":"'+appwords+'","enable":"true"}]' + ')');
//     run();
//    }
//   });

       // voice_runstate();
       // voice_devicetype();
       // run();


Gwechatnumber="duyuanbowy";
Gwechatpass="dyb";
wechatfriends=[
    {"username":"未来不是梦998"},
    {"username":"未来不是梦99"},
];


//alert("appversionname is:"+app.verionName+"\n appversioncode is:"+app.versionCode+"\n"+"");
UI_run_thread=threads.start(function(){
    setInterval(function(){
        if(Grunstate!="" && Galready==false){
            Galready=true;
            voice_runstate();
            voice_devicetype();
         //toast("开始启动testthread...");  
        run();
        };
        if(Galready_loadjson==false){
          //  alert("hahah");
         //   ref_ui_list();
      
            Galready_loadjson==true;
        }
        
    },1000)
});




update_thread=threads.start(
    function(){
        loadGapps();
        //alert("ok");
       // sleep(3000);
       
        sysupdate_check();
    }
);

/*************************以下是主线程循环 *******************************************************************/ 
function run(){

    //音量下键关闭脚本
events.setKeyInterceptionEnabled("volume_down", true);
threads.start(function(){
events.observeKey();
events.on("key", function(volume_down, event){
    //处理按键事件
    toast("脚本已停止运行");
    threads.shutDownAll();
    ui.finish();
    exit();

});
});
//注册真实点击事件
 ra = new RootAutomator();
// //ra.setScreenMetrics(device.width, device.height);
 ra.setScreenMetrics(1080, 1920);
 //读取配置文件


 loadappjson();
  
//如果是微信养号需要的操作
if(Grunstate=="trainwechat"){
    //lanuchApp("微信");
    openwechat();
    //whthumbup();
    whchat();

}else{
    while(true){
        for(var i=0;i<applist.length;i++){
    
            var enable=applist[i]['enable'];
             appname=applist[i]['appname'] 
            var packagename=applist[i]['packagename']
            var activityname=applist[i]['activityname'];
            var open_obj=applist[i]["open"];
            var bindwechat_obj=applist[i]['bindwechat']; 
            signin_obj=applist[i]['signin'];
          //  alert("aaaa"+thiscommon.JSONLength(signin_obj));
            if("undefined"==typeof(signin_obj)){
                toast(appname+".json signin数据项缺失");
            }
            var autoread_obj=applist[i]["autoread"];
             abnormal_obj=applist[i]["abnormal"];
             activitys_obj=applist[i]["activitys"];
             if("undefined"==typeof(activitys_obj)){
                toast(appname+".json activitys数据项缺失");
            }
            toast('开始'+applist[i]['appname']);
            
            //加载finditem 代码
            loadappjs();

            try{    thread_abnormal.interrupt();}catch(e){};
            try{    thread_control.interrupt();}catch(e){};
            try{    thread_findnews.interrupt();}catch(e){};
            try{    thread_readnews.interrupt();}catch(e){};
            try{    thread_signin.interrupt();}catch(e){};
            try{    thread_abnormal_overtime.interrupt();}catch(e){};
     
            sleep(2000);
            thiscommon.clean(Gdevicetype);
        //    while_closewindow("xiaomi4");
        //}
        //异常处理弹窗线程
        while_abnormal(abnormal_obj);
        //demon_abnormal(abnormal_obj);
            
        //控制线程--通用 该函数感知Grunstate的变化，调用对应的线程
        while_control(appname,packagename,activityname,open_obj,bindwechat_obj,signin_obj,autoread_obj);
        
        //阻塞运行打开app 
       // alert("打开")
        var openstate=openAPP(appname,packagename,activityname,open_obj);
      
        
       //alert("开始倒计时");
        //每个app需要阅读的时间sleep
        //var thisinterval=3*100000;
        //30分钟=1800秒=1800000毫秒
        //var thisinterval=1800000;
       // alert(openstate);
         //如果打开失败跳转到下一个app，节约时间
      //  var thisinterval=100000;
        if(openstate){
            toast("阅读"+Gappinterval+"毫秒......................");
            if("popupdebug"==Grunstate){
                while_abnormal_overtime(activitys_obj); 
             }
            sleep(Gappinterval);
        }
            toast("准备开始下一个");
        
      
        
    
        //开启异常处理线程--通用
        Gfirstrun=false;
        sleep(1000)
        }
          //for end
    }
    //while end
  
}
//if end
}
//function fun end
/*************************以下是函数实现部分 *******************************************************************/ 
function loadGapps(){
    if(Gjsonloadstate=="remote"){
        var r=http.get(Gappspath_remote);
        if("200"==r.statusCode){
          //  alert(r.body.string());
            var tmpstr=r.body.string();
            Gapps=eval('('+tmpstr+')');
           // alert(Gapps);
         //   ref_ui_list();
            

        }else{
            toast("加载云端gapps列表出错");
        }

    }else if(Gjsonloadstate=="local"){

    }
 

}
//加载特征码
function loadappjson(){
var start='[]'
 applist=eval('(' + start + ')'); 
var tempstr="";
var appname="";
var voiceplaynum=0;

for(var i=0;i<Gapps.length;i++){

    appname=Gapps[i]["appname"];
   
    if("true"==Gapps[i]['enable']){
        //如果是云端特征码机制
        if(Gjsonloadstate=="remote"){
            if(voiceplaynum==0){
              play("global","加载");
              play("global","云端");
              play("global","特征码");
              voiceplaynum+=1;
            }
          

            var r=http.get(Gapplistpath_remote+"/"+appname+".json")
          //  toast('code=',r.statusCode)
            if(r.statusCode=="200"){  
                var jsonstr=r.body.string();
             //   log(jsonstr);
                try{
                    tempjson=eval('(' + jsonstr + ')');
                            //将json添加到applist中
                     applist.push(tempjson); 
                }catch(e){
                    alert(appname+" 远程数据结构错误");
                }
              
            }else{
                alert("没有找到远程"+appname+".json");
            }
           

        //如果是本地特征码机制
        }else if(Gjsonloadstate=="local"){
            if(voiceplaynum==0){
                play("global","加载");
                play("global","本地");
                play("global","特征码");
                voiceplaynum+=1;
            }
           
                //判断文件是否存在
                    var result=files.exists(Gapplistpath+"/"+appname+".json");
                    //如果手机上没有这个json文件
                    if(!result){
                        alert("没有找到本地"+appname+".json");
                        exit();
                    }
                try{
                    //读取手机上的json
                    tempstr=files.read(Gapplistpath+appname+".json");
                    //将字符串转换成json
                    tempjson=eval('(' + tempstr + ')');
                    //将json添加到applist中
                    applist.push(tempjson); 
                }catch(e){
                    alert(appname+" 本地数据结构错误");
                }
        }
   

         

    }else{

    }

}
}
//加载finditem js脚本
function loadappjs(){
   thisfinditem=require(Gapplistpath+"/"+appname+".js");
  //thisfinditem=require("http://192.168.3.89/jsonurl/2345%E6%B5%8F%E8%A7%88%E5%99%A8.js");
//   http://192.168.3.89/jsonurl/2345%E6%B5%8F%E8%A7%88%E5%99%A8.js
// alert("loadappjs appname is:"+appname);
//  var r=http.get(Gapplistpath_remote+"/"+appname+".js")
//  alert(r.body.string());
//  alert('code=',r.statusCode)
//   //alert(r.body.string());
//   var r=http.get(Gapplistpath_remote+"/"+appname+".js")
//  var jsbyte=r.body.bytes();
 
// // files.createWithDirs(Gapplistpath+"/tmp");
//  files.writeBytes(Gapplistpath+"/tmp/finditem.js",jsbyte);


// sleep(3000);
//  thisfinditem=require(Gapplistpath+"/tmp/finditem.js");
// files.remove(Gapplistpath+"/tmp/finditem.js");
// //files.close();
}
//将app名称加载的UI界面上
function ref_ui_list(){
    alert(Gapps.length);
    for(var i=0;i<Gapps.length;i++){
     var thisappname=Gapps[i]["appname"];
      appliststr='<linear layout_weight="1" >';
      appliststr+='<checkbox id="sendMsgOption" text="'+thisappname+'" color="{{textColor}}" />'
      appliststr+='<text text="次数:"';
      appliststr+='   marginLeft="10"';
      appliststr+='   marginRight="1"';
      appliststr+='   color="{{textColor}}"';
      appliststr+='   size="16sp"';
      appliststr+='   />';
      appliststr+=' <input id="test" layout_weight="1" textColor="black" textSize="16sp" marginLeft="16"></input>';
      appliststr+='<linear layout_weight="1" gravity="right" >';
      appliststr+='    <button id="open" text="打开" w="60" h="40" />';
      appliststr+='</linear>';
      appliststr+='</linear>';
      ui.inflate( appliststr,ui.applist,true); 
      }
     
}



//语音广播手机型号
function voice_devicetype(){
    
    if("xiaomi2s"==Gdevicetype){
        play("global","小米");
        play("global","2");
        play("global","s");
    }else if("xiaomi4s"==Gdevicetype){
        play("global","小米");
        play("global","4");
        play("global","s");
    }else if("xiaomi4"==Gdevicetype){
        play("global","小米");
        play("global","4");
    }else if("lnnl"==Gdevicetype){
        play("global","lnnl");
    }
    
 
}
//自定义打印函数
function mytoast(mystr){
    if(Gdebug){
        toast(mystr);
    }
}
//语音广播初始化模式
function voice_runstate(){
    var runstate_voicename='';
    if("autoread"==Grunstate){
        runstate_voicename="自动阅读";
    }else if("bindwechat"==Grunstate){
        runstate_voicename="微信绑定";
    }else if("trainwechat"==Grunstate){
        runstate_voicename="微信养号";
    }else if("finditem"==Grunstate){
        runstate_voicename="广告不点击"; 
    }else if("popupdebug"==Grunstate){
        runstate_voicename="弹窗跟踪调试";
    }
    play("global","当前工作模式");
    play("global",runstate_voicename);
}
//签到
function while_signin(signin_obj){
  //  alert("signin_obj is:"+signin_obj)
Gworkthread="signin_start";
play("global","执行");
play("global","每日签到");
sleep(1000);
//针对数据结构错误的处理
if("undefined"==typeof(signin_obj)){
    play("global","执行完成");
   // play("global","9")
    Gworkthread="signin_stop";
   try{ thread_signin.interrupt();}catch(e){}
   
    toast(appname+".json signin数据项缺失");
}else{
    thread_signin=threads.start(
        function(){
            for(var i=1;i<=thiscommon.JSONLength(signin_obj);i++){
        
                try{
                    var action=signin_obj["sg"+i]["action"];
                    if("undefined"==typeof(action)){toast(appname+"signin_obj[\"sg\""+i+"][\"action\"]数据结构错误");}
              
                    var featuremode=signin_obj["sg"+i]["featuremode"];
                    if("undefined"==typeof(featuremode)){toast(appname+"signin_obj[\"sg\""+i+"][\"featuremode\"]数据结构错误");}
              
                    play("global","执行步骤");
                    play("global",i);
                    if("click_text"==action){
                         thiscommon.click_text(signin_obj["sg"+i]["click_text"]);      
                    } else if("click_id"==action){
                            var thisid=signin_obj["sg"+i]["click_id"];
                             thiscommon.clickxy_for_ele(id(thisid).findOnce());
                    } else if("check_signin"==action){
                        //判断是否签过到
                        result=block_mode("while_signin",featuremode,signin_obj,i)
                        if(result){
                            play("global","已签到过");
                            Gworkthread="signin_stop";
                            break;
                        }
            
                    }
                   
                    var result=false;
            
                    result=block_mode("while_signin",featuremode,signin_obj,i)
                       //最后判断result
                            if(result){
                                if(i==thiscommon.JSONLength(signin_obj)){
                                    //最后一步的执行成功
                                    play("global","签到成功");
                                }else{
                                    play("global","执行完成");
                                }
                            
                            }else{
                                play("global","执行失败");
                            }
                       
                    
                }catch(e){
                  alert(e);
                }
            
            }//for end;
          //  play("global","执行完成");
            Gworkthread="signin_stop";
            thread_signin.interrupt();
        });
}




}

//一级页面循环上滑找新闻线程
function while_findnews(autoread_obj){
    Gworkthread="findnews_start";
    toast("找新闻线程启动..."); play("global","正在检索");
   //取出新闻条目特征码 改用函数实现了，后续抽象特征码数据结构
  // var thisborderline=autoread_obj["ar1"]["borderline"];
  // var thisitemsclassname=autoread_obj["ar1"]["itemsclassname"];
 //数据结构异常的处理 临时
//try{
try{
    var action =autoread_obj["ar1"]["action"];
}catch(e){

}    


   // alert("findnews action is"+action);
    if("undefined"==typeof(action)){
          toast(appname+":"+"autoread_obj[\"ar1\"][\"action\"]数据结构错误");
    }else{
            //定位首页模块
            if("click_text"==action){
                var text=autoread_obj["ar1"]["click_text"];
                if("undefined"==typeof(text)){  alert(appname+":"+"autoread_obj[\"ar1\"][\"click_text\"]数据结构错误");}
                //alert("click_text is:"+text);
                click(text);
                sleep(1000);
            }
    }
 
// }catch(e){
// toast("检索"+e);
// }
 
try{
    var thisfeaturemode=autoread_obj["ar1"]["featuremode"];
}catch(e){

}
 
   if("undefined"==typeof(thisfeaturemode)){
       toast(appname+"autoread_obj[\"ar1\"][\"featuremode\"]数据结构错误");
    }
  
    var upcount=0;
    thread_findnews=threads.start(
        function(){
       // alert("this is finenew xinsheng");

            setInterval(
                function(){
               // thisswipe.swiperealup_custom();
                thisswipe.swiperealup_custom_lnnl();
                sleep(1500);
                upcount+=1;
                var m=3;
                var n=2;
                //x 为向上滑动多少次后打开新闻
                var x=Math.round(Math.random()*(m-n))+n;
                //当upcount大于了x次数后，开始打开当前发现的新闻条目
                if(upcount>x){
                    //判断新闻条目是否存在
                    var ele=thisfinditem.finditem(appname);
                    if(ele){
                        //如果存在，点击新闻
                       play("global","打开新闻");
                      // alert(appname);
                     

                      thiscommon.clickxy_for_ele(ele);
                     // alert(ele);
                     //波波视频的处理方式，需要调试
                    //  callback_boboshipin("",ele);
                       //等待2秒，否则线程关闭，点击事件会无效
                        sleep(2000);
                        var result=false;
                        //最后判断二级页面特定控件是否存在，来确定是否打开成功
                        result=block_mode("while_findnews",thisfeaturemode,autoread_obj,'');
                        mytoast("判断二级页面打开结果为:"+result);         
                        if(result){
                            play("global","打开成功");
                            Gworkthread="findnews_stop";
                            thread_findnews.interrupt();
                        }else{
                            play("global","打开失败");
                            back();
                        }
                     
                    }
                }
                },2000);
        }
    );
}

//二级页面阅读线程??可以优化
function while_readnews(autoread_obj){
 //toast("readnews启动。。。。");
    Gworkthread="readnews_start";
    play("global","开始阅读");
    var upcount=0;
    var o=10;//最大上滑次数
    var p=5;//最小上滑次数

    var thisdeploymode=autoread_obj["ar2"]["deploymode"];
    if("undefined"==typeof(thisdeploymode)){alert(appname+"autoread_obj[\"ar2\"][\"deploymode\"]数据结构错误");}
  
 //上滑次数
    var maxupcount=Math.round(Math.random()*(o-p))+p;
    toast("随机上滑："+maxupcount+"次");
    thread_readnews=threads.start(
        function(){
           // while(1){
                var m=4000;
                var n=1000;
               //两次上滑之间的间隔
                var x=Math.round(Math.random()*(m-n))+n;
                setInterval(function(){
                    //thisswipe.swiperealup_custom();
                    thisswipe.swiperealup_custom_lnnl();
                    sleep(1500);
                    //展开更多处理方式
                    if("classname_desc"==thisdeploymode){
                        var thisdeployclassname=autoread_obj["ar2"]["deployclassname"];
                         if("undefined"==typeof(thisdeployclassname)){alert(appname+"autoread_obj[\"ar2\"][\"deployclassname\"]数据结构错误");}
                        var thisdeploydesc=autoread_obj["ar2"]["deploydesc"];
                         if("undefined"==typeof(thisdeploydesc)){alert(appname+"autoread_obj[\"ar2\"][\"deploydesc\"]数据结构错误");}
                       var ele=className(thisdeployclassname).desc(thisdeploydesc);
                        if(ele.exists()){
                            if(ele.findOnce().bounds().top<1770){
                        //alert( "top is:"+ele.findOnce().bounds().top+"::"+"bottom is"+ele.findOnce().bounds().bottom);
                           play("global","展开更多");
                           sleep(1000);
                            thiscommon.clickxy_for_ele(ele.findOne(1000)); 
                            }
                         
                            //ele.findOne(1000).click();
                        }
                    }else if("classname_text"==thisdeploymode){
                        var thisdeployclassname=autoread_obj["ar2"]["deployclassname"];
                        if("undefined"==typeof(thisdeployclassname)){alert(appname+"autoread_obj[\"ar2\"][\"deployclassname\"]数据结构错误");}
                        var thistext=autoread_obj["ar2"]["deploytext"];
                         if("undefined"==typeof(thistext)){alert(appname+"autoread_obj[\"ar2\"][\"deploytext\"]数据结构错误");}
                        var ele=className(thisdeployclassname).text(thistext);
                        if(ele.exists()){
                            if(ele.findOnce().bounds().top<1770){
                                play("global","展开更多");
                                sleep(1000);
                                 thiscommon.clickxy_for_ele(className(thisdeployclassname).text(thistext).findOne());
                            }
                            
                        }
                    }
                    //处理方式结束
                                upcount+=1;
                                if(upcount>maxupcount){
                                    toast("返回首页...");
                                    back();
                                    Gworkthread="readnews_stop";
                                    sleep(1000);
                                    thread_readnews.interrupt();
                                }
                                toast("间隔："+x+"毫秒");
                },x);
        }
    );
}
//绑定微信线程
function while_bindwechat(bindwechat_obj){
    Gworkthread="bindwechat_start";
    toast("开始绑定微信");
   for(var i=1;i<=thiscommon.JSONLength(bindwechat_obj);i++){
       //取动作
    var action=bindwechat_obj["bw"+i]["action"];
    if("undefined"==typeof(action)){alert(appname+"bindwechat_obj[\"bw\""+i+"][\"action\"]数据结构错误");}
        //取验证模式
    var featuremode=bindwechat_obj["bw"+i]["featuremode"];
    if("undefined"==typeof(featuremode)){alert(appname+"bindwechat_obj[\"bw\""+i+"][\"featuremode\"]数据结构错误");}
    play("global","执行步骤");
    play("global",i);
    //如果是点击文本
    var result=false;
    if("click_text"==action){
        //点击文本
        thiscommon.click_text(bindwechat_obj["bw"+i]["click_text"]);
       //执行阻塞验证
       result=block_mode("while_bindwechat",featuremode,bindwechat_obj,i);       
    }
    //if end
     //如果是点击ID
    else if("click_id"==action){
        var thisid=bindwechat_obj["bw"+i]["click_id"];
        if("undefined"==typeof(thisid)){alert(appname+"bindwechat_obj[\"bw\""+i+"][\"click_id\"]数据结构错误");}
        thiscommon.click_id(thisid);
      //  id(thisid).findOne(1000).click();
      var result=false;
      //执行阻塞验证
      result=block_mode("while_bindwechat",featuremode,bindwechat_obj,i);
    }
    //最后判断result
    if(result){
        if(i==thiscommon.JSONLength(bindwechat_obj)){
            //最后一步的执行成功
            play("global","绑定成功");
        }else{
            play("global","执行完成");
        }
       
    }else{
        play("global","执行失败");
    }

   } 
}

//打开制定app线程
function openAPP(appname,packagename,activityname,open_obj){
    Gworkthread="openapp_start";
    openstate=false;
    play("global","打开");
    play("appname",appname);
    var featuremode=open_obj["featuremode"];
    if("undefined"==typeof(featuremode)){alert(appname+"open_obj[\"featuremode\"]数据结构错误");}
 
    thiscommon.openpackage(packagename+"/"+activityname);
        var result=false;
       var thisnum=0;
       while(1){
                if(Number(thisnum) >6){ 
                    play("global","打开失败");
                    Gworkthread="openapp_fail"; 
                    break;
                }
         if(featuremode=="classname"){
                    if( className(open_obj["classname"]).packageName(packagename).exists()){
                        play("global","打开成功");
                        Gworkthread="openapp_stop";
                        openstate=true;
                      //  openstate=false;
                        break;  
                  }
           }else if(featuremode=="classname_text"){
                        var classname=open_obj["classname"];
                        var text=open_obj["text"];
                    try{
                        if( className(classname).text(text).exists() ){
                                                play("global","打开成功");
                                                Gworkthread="openapp_stop";
                                                openstate=true;
                                            //    openstate=false;
                                                break;
                                            }
                    }catch(e){
                            openstate=false;
                    };

           }

           sleep(5000);//10000
           thisnum+=1;
       }
        return openstate;

}
//异常处理线程
function  while_abnormal(abnormal_obj){
   // Gworkthread="abnormal_start"; 不要这个，会干扰逻辑
   
   thread_abnormal=threads.start(function(){
              setInterval(function(){
         //       toast("this is while_abnormal... allcount is:"+thiscommon.JSONLength(abnormal_obj));             
    for(var i=1;i<=thiscommon.JSONLength(abnormal_obj);i++){
    
        var featuremode=abnormal_obj["ab"+i]["featuremode"];
     
        if("id"==featuremode){
            
           var thisid=abnormal_obj["ab"+i]["id"];
           mytoast("while_abnormal，featuremode is id， for x is :"+i+" thisid is:"+thisid);
           try{
                   // var result=once_check("id",thisid,'','');
                                            mytoast("while_abnormal result is:"+result);
                                              //  if(result){ 
                                                   // var result=id(thisid).click();
                                                   // alert("result is:"+result);
                                                    //if(result){
                                                        try{
                                                            thiscommon.clickxy_for_ele(id(thisid).findOnce());
                                                            play("global","关闭弹窗");   
                                                        }catch(e){

                                                        }
                                                       
                                                    //}
                                                   
                                                  
                                                //    }
           }catch(e){
                    back();
              
           }
            
            
        }else if("classname_text"==featuremode){

            try{
                        var thisclass=abnormal_obj["ab"+i]["classname"];
                    var thistext=abnormal_obj["ab"+i]["text"];
                    var result=block_check(featuremode,thisclass,thistext,'');
            //   alert(thisclass+":"+thistext);
                    if(result){
                        thiscommon.click_classname_text(thisclass,thistext);
                        //play("global","关闭弹窗");
                    
                    } 
            }catch(e){

            }
         
        }else if("classname_desc"==featuremode){
                        try{
                            var thisclass=abnormal_obj["ab"+i]["classname"];
                        var thisdesc=abnormal_obj["ab"+i]["desc"];
                        var result=block_check(featuremode,thisclass,thisdesc,'');
                //   alert(thisclass+":"+thistext);
                        if(result){
                            thiscommon.click_classname_desc(thisclass,thisdesc);
                            //play("global","关闭弹窗");
                        
                        } 
                }catch(e){

                }
        }

}
//for end
  },Gabinterval);
            });
}
//弹窗与跳出app监测
function while_abnormal_overtime(activitys_obj){
    thread_abnormal_overtime=threads.start(
        function(){
            setInterval(function(){
                try{
                    var  thispackagename=currentPackage();
                    var  thisactivity=currentActivity();
                    var itemcount=thiscommon.JSONLength(activitys_obj);
                   // alert("itemcount is :"+itemcount);
                      Gwindowstate=false;
                      for(var i=1;i<=itemcount;i++){
                     // alert(activitys_obj["at"+i]);
                          if(thisactivity==activitys_obj["at"+i]){
                              play("global","状态正常")
                              play("global",i);
                              Gwindowstate=true;
                          }
                      }
                      if(Gwindowstate==false){
                      //    alert(thisactivity);
                          play("global","发现未关闭弹窗");
                      }
                }catch(e){
                    toast(e);
                }
         
            },1000);
        }
    );
}
// while_abnormal的守护线程，有时候click事件会阻塞，所以每隔5秒杀掉abnormal线程再启动
function demon_abnormal(abnormal_obj){
    mytoast("this is demon_abnormal...");
 thread_demon_abnormal=threads.start(
     function(){
         setInterval(function(){
            while_abnormal(abnormal_obj);  
            sleep(5000);
            thread_abnormal.interrupt();
         },1000);
     }
 );
   
}
//全局调度线程
function while_control(appname,packagename,activityname,open_obj,bindwechat_obj,signin_obj,autoread_obj){
    //appname,packagename,activityname,open_obj,bindwechat_obj,autoread_obj

    thread_control=threads.start( //bindwechat注释
        function(){//bindwechat注释
            setInterval(function(){//bindwechat注释
            //1如果打开app完成后要做的工作  
          //  toast("Gworkthread is"+Gworkthread);
            if("openapp_stop"==Gworkthread){
                      //如果工作模式是绑定微信runstate
                      if("bindwechat"==Grunstate){
                        //toast("开始绑定微信");
                        while_bindwechat(bindwechat_obj);
                    }else if("autoread"==Grunstate){
                       // toast("开始签到...");
                        try{thread_signin.interrupt();}catch(e){};
                        while_signin(signin_obj);
                        
                    }else if("popupdebug"==Grunstate){
                        toast("弹窗跟踪调试");
                     
                        //这个线程不需要
                       // sleep(5000);
                    }
              }
              //2如果是签到完成后要执行的工作   //3如果阅读完成后要做的工作
              else if("signin_stop"==Gworkthread||"readnews_stop"==Gworkthread){
                //  alert("findnews start");
                try{thread_findnews.interrupt();}catch(e){};
                 while_findnews(autoread_obj);
              }            
              //4如果找到新闻后要做的工作    
              else if("findnews_stop"==Gworkthread){
                try{thread_readnews.interrupt();}catch(e){};
                while_readnews(autoread_obj);
              }
           //   toast("while_control："+Gworkthread);
            },3000);//bindwechat注释
        }//bindwechat注释
    );//bindwechat注释
}
//关闭操作系统弹窗
function while_closewindow(devicetype){
    if("xiaomi4"==devicetype){
        thread_closewindow=threads.start(
            function(){
                setInterval(function(){
                var ele=className('android.widget.Button').text("允许").packageName("com.lbe.security.miui");
               // alert(ele);
                if(ele.exists()){
                    ele.findOne(1000).click();
                }
                },1000);
            }
        );
    }
}
function once_check(checktype,f1,f2,f3){
    mytoast("once_check checktype is"+checktype+" f1 is"+f1);
    if("classname_text"==checktype){
        var ele=className(f1).text(f2).exists();
        if(ele){
            return true;
        }

       }else if("classname_desc"==checktype){
        var ele=className(f1).desc(f2).exists();
        if(ele){
            return true;
        }
       }else if("id"==checktype){
           mytoast("once_check checktype is id执行");
           var ele=id(f1).exists();
           mytoast("once_check ele is:"+ele);
           if(ele){
               return true;
           }
       }else{
           return false;
       }  
}
//阻塞模式判断函数
function block_mode(threadfun,featuremode,obj,fori){
if("openAPP"==threadfun){
    if("classname_desc"==featuremode){
      
        var thisclassname=obj["classname"];
        var thisdesc=obj["desc"];
      //  alert("thisclassname is:"+thisclassname+" this desc is:"+thisdesc);
        result=block_check(featuremode,thisclassname,thisdesc,'');
        return result;
    }else if("classname_text"==featuremode){
    //    alert(obja);
        var thisclassname=obj["classname"];
        var thistext=obj["text"];
      //  alert("thisclassname is:"+thisclassname+" thistext is:"+thistext);
        result=block_check(featuremode,thisclassname,thistext,'');
        return result;
    }else if("classname"==featuremode){
        var thisclassname=obj["classname"];
        result=block_check(featuremode,thisclassname,'','');
        return result;
    }else if("id"==featuremode){
        var thisid=obj["id"];
        result=block_check(featuremode,thisid,'','');
        return result;
    }
}else if("while_findnews"==threadfun){
    var obja="ar1";
}else if("while_readnews"==threadfun){

}else if("while_bindwechat"==threadfun){
  var obja="bw"+fori;
}else if("while_signin"==threadfun){
  var obja="sg"+fori;
}

if("classname_desc"==featuremode){
   // alert(obja);
    var thisclassname=obj[obja]["classname"];
    var thisdesc=obj[obja]["desc"];
  //  alert("thisclassname is:"+thisclassname+" this desc is:"+thisdesc);
    result=block_check(featuremode,thisclassname,thisdesc,'');
    return result;
}else if("classname_text"==featuremode){
    var thisclassname=obj[obja]["classname"];
    var thistext=obj[obja]["text"];
  //  alert("thisclassname is:"+thisclassname+" thistext is:"+thistext);
    result=block_check(featuremode,thisclassname,thistext,'');
    return result;
}else if("classname"==featuremode){
    var thisclassname=obj[obja]["classname"];
    result=block_check(featuremode,thisclassname,'','');
    return result;
}else if("id"==featuremode){
    var thisid=obj[obja]["id"];
    mytoast("block_mode and id mode 执行");
    result=block_check(featuremode,thisid,'','');
    return result;
}else if("ids"==featuremode){
    var thisid=obj[obja]["ids"];
    //var ids="iv_back||iv_playback";
    ids_arr=thisid.split("||");
    var num=0;
    while(true){
        if(num>15){
            return false;
        }
        for(var i=0;i<ids_arr.length;i++){
            if(id(ids_arr[i]).exists()){
               return true;
            } 
       }
       num+=1;
       sleep(1000);
    }
 

}

}
//阻塞验证函数
function block_check(checktype,f1,f2,f3){
 var num=0;
    while(1){
        num+=1;
        if(num>15){
            return false;
        }
        sleep(2000);
            if("classname_text"==checktype){
             var ele=className(f1).text(f2).exists();
             if(ele){
                 return true;
             }

            }else if("classname_desc"==checktype){
             var ele=className(f1).desc(f2).exists();
             if(ele){
                 return true;
             }
            }else if("classname"==checktype){
               
                var ele=className(f1).exists();
             //   alert("this is blockcheck ele is:"+ele);
                if(ele){
                    return true;
                }
            }else if("id"==checktype){
                mytoast("block_check checktype 执行 id is:"+f1);
                var ele=id(f1).exists();
                mytoast("block_check id checktype 执行 ele is："+ele);
                if(ele){
                    
                    return true;
                }
            }    
    
    }


}
//播放声音
function play(subpath,appname){
   var voicefile=Gvoicepath+"/"+subpath+"/"+appname+".mp3";
    var result=files.exists(voicefile);
    if(!result){
        toast("没有找到语音包"+voicefile+".mp3");
    }else{
        media.playMusic(Gvoicepath+"/"+subpath+"/"+appname+".mp3");  
        sleep(media.getMusicDuration());     
    }

}

function openwechat(){
    play("global","打开微信");
    thiscommon.openpackage("com.tencent.mm/com.tencent.mm.ui.LauncherUI");
    var num=0;
    while(1){
        //判断是否启动完成
        var result=block_check("classname_text",'android.widget.TextView','通讯录','');
        if(result){
            play("global","打开成功");
            break;
        }
        num+=1;
        if(num>20){
            play("global","打开失败");
            break;
        }
        sleep(1000);
    }
    // sleep(1000);
    // var result=className("android.widget.EditText").text('').exists();
    // if(result){
    //     className("android.widget.EditText").text('').click();
    //     sleep(1000);
    //     //输入密码
    //     setText(Gwechatpass);
    //     sleep(1000);
    //     //登录
    //     var ele=className("android.widget.Button").text("登录");
    
    //     thiscommon.clickxy_for_ele(ele.findOnce());
    // }
}
//朋友圈点赞
function whthumbup(){

click("发现");
play("global","点击");
play("global","发现");



ele=className("android.widget.TextView").text("朋友圈");
thiscommon.clickxy_for_ele_once(ele.findOne(1000));
play("global","点击");
play("global","朋友圈");
sleep(2000);
//上滑
//thiscommon.swiperealup_custom();
//sleep(1000);
//点击评论三个小点
play("global","点击");
play("global","赞");
ele=className("android.widget.ImageView").desc("评论");
thiscommon.clickxy_for_ele_once(ele.findOne(1000));
sleep(1000);

// //点赞代码
// ele=className("android.widget.ImageView").desc("评论");
// clickxy_for_ele_once(ele.findOne(1000));
// sleep(1000);
// ele=className("android.widget.TextView").text("赞");
// clickxy_for_ele_once(ele.findOne());
// 评论代码

// 点击评论弹窗
// ele=className("android.widget.TextView").text("评论");
// clickxy_for_ele_once(ele.findOne());
// 录入文字
// setText("找到好的告诉我，我也在找哦");
// sleep(1000);
// ele=className("android.widget.Button").text("发送");
// clickxy_for_ele_once(ele.findOne(1000));

// alert(ele.findOne(1000));
// sleep(1000);
// ele=className("android.widget.TextView").text("取消");
// clickxy_for_ele_once(ele.findOne());

}
function whchat(){
    //聊天模式
    amgmode=""; //char voice
    // thiscommon.clean();
  //  toast("123123");
    play("global","自动聊天");
   // alert(wechatfriends.length);
    for(var i=0;i<wechatfriends.length;i++){
        //alert(wechatfriends[i]["username"]);
        //点击通讯录
        var username=wechatfriends[i]["username"];
        play("global","点击");
        play("global","通讯录");
        click("通讯录");
        sleep(1000);

        //点击放大镜搜索按钮
        play("global","点击");
        play("global","搜索按钮");
        var ele=className("android.support.v7.widget.LinearLayoutCompat").className("RelativeLayout").findOnce(0);
        thiscommon.clickxy_for_ele_once(ele.child(0));
        sleep(1000);

       //输入用户名
       play("global","随机搜索好友");
        thiscommon.onebyoneinput(username);
        setText(username);
        sleep(1000);      
        
        //点击搜索结果
        play("global","点击");
         ele=className("android.widget.ListView").className("RelativeLayout").findOnce(2);
        thiscommon.clickxy_for_ele(ele.child(0));
        
        //文字模式
        play("global","随机文字聊天");
       var result=whgetamgmode();
        if(!result){
            id("amg").findOne().click();
        }
        thiscommon.onebyoneinput("怎么不说话？");
        sleep(2000);
        ele=className("android.widget.Button").text("发送").findOne(1000);
        thiscommon.clickxy_for_ele(ele);
        //   alert(amg.desc());
        sleep(10000);

        //语音模式
        play("global","随机发送语音");
        result=whgetamgmode();
        if(result){
            id("amg").findOne().click(); 
        }
        sleep(5000);
        ele=className("android.widget.Button").desc("按住说话").findOne(1000);
        langtouch(ele.bounds().centerX(),ele.bounds().centerY(),3);

//exit();
exit();
      
    }
    //循环遍历好友
    //从循环遍历的语料库里选取内容发送

}
//微信判断当前聊天模式是语音还是文本
function whgetamgmode(){
    var amgstr=id("amg").findOne().desc();
    if(amgstr=="切换到按住说话"){
        return true;//true当前文字模式
    }else{
        return false;//false 当前语音模式
    }
    return;
}
function langtouch(x,y,interval){
    var ra = new RootAutomator();
    ra.setScreenMetrics(device.width, device.height);
    ra.touchX(x);//595
    ra.touchY(y);//1828
   
    var num=0;
    while(1){
        ra.sendEvent(3, 58, 38);
        ra.sendEvent(3, 48, 4);
        ra.sendEvent(1, 330, 1);
        ra.sendSync();
        sleep(7);
        ra.sendEvent(3, 58, 49);
        ra.sendSync();
    sleep(88);
    ra.sendEvent(3, 58, 76);
    ra.sendEvent(3, 48, 10);
    ra.sendSync();
    sleep(193);
    ra.sendEvent(3, 58, 85);
    ra.sendSync();
    sleep(1565);
    ra.sendEvent(3, 58, 91);
    ra.sendEvent(3, 48, 9);
    ra.sendSync();
    sleep(1177);
   
    // sleep(110);
    // ra.sendEvent(3, 57, -1);
    // ra.sendEvent(1, 330, 0);
    // ra.sendSync();
    
        num+=1;
        if(num>interval){
            break;
        }
   
    }
    ra.sendEvent(3, 58, 85);
    ra.sendSync();
    sleep(93);
    ra.sendEvent(3, 57, -1);
    ra.sendEvent(1, 330, 0);
    ra.sendSync();
    sleep(1110);
    ra.sendEvent(3, 57, 900);
    //  ra.touchX(x);//48
    //  ra.touchY(y);//357
    // ra.sendEvent(3, 58, 36);
    // ra.sendEvent(3, 48, 4);
    // ra.sendEvent(1, 330, 1);
    ra.sendSync();
    ra.exit();
}

function download_installapp(){
    importClass("java.io.FileOutputStream")
    importClass("java.io.IOException")
    importClass("java.io.InputStream")
    importClass("java.net.MalformedURLException")
    importClass("java.net.URL")
    importClass("java.net.URLConnection")
    importClass("java.util.ArrayList")
downloadthread=threads.start(
    function(){
        var myPath = "/storage/emulated/0/脚本/applist/update.apk";
console.show();
log('im alive')
var myUrl = "http://download.dqu360.com:81/haiqu/haiqu.apk";
var url = new URL(myUrl);
var conn = url.openConnection(); //URLConnection
var inStream = conn.getInputStream(); //InputStream
var fs = new FileOutputStream(myPath); //FileOutputStream
var connLength = conn.getContentLength(); //int
var startTime = java.lang.System.currentTimeMillis();
var buffer = util.java.array('byte', 1024); //byte[]
// buffer = new byte[1204]; //byte[]
var prevTime = java.lang.System.currentTimeMillis();
var bytePrev = 0; //前一次记录的文件大小
var byteSum = 0; //总共读取的文件大小
var byteRead; //每次读取的byte数
log('要下载的文件大小=')
log(connLength)
threads.start(
  function () {
    while (1) {
      var 当前写入的文件大小 = byteSum
      var 百分比 = 当前写入的文件大小 / connLength * 100
      var 要显示的内容 = util.format('下载了%s%', 百分比)
      log(要显示的内容)
      if (当前写入的文件大小 >= connLength) {
        break;
      }
      sleep(1000)
    }
  }
)
while ((byteRead = inStream.read(buffer)) != -1) {
  byteSum += byteRead;
  //当前时间
  var currentTime = java.lang.System.currentTimeMillis();
  fs.write(buffer, 0, byteRead); //读取
}
//开始安装
installapp();
    }
);

}
function installapp(path){
path = '/storage/emulated/0/脚本/applist/update.apk'
app.startActivity({
  data: "file://" + path,
  type: "application/vnd.android.package-archive",
  action: "VIEW",
  flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
});
try{
    update_thread.interrupt();
}catch(e){

}
}

function sysupdate_check()
{
// var Gapi_json_url="http://download.dqu360.com:81/haiqu/api.json";
 var r=http.get(Gapi_json_url);


if("200"==r.statusCode){
     var tmpstr=r.body.string();
     tmpjson=eval('(' + tmpstr + ')'); 
    
     var server_version=tmpjson["server_version"]
     var now_version=app.versionName;
    var downloadurl=tmpjson["downloadurl"];
  //  alert(downloadurl);
    //如果下载json正常开始判断版本号和服务器版本号是否一致
     if(server_version!=now_version){
                //如果版本不一致，则弹出升级弹窗
                        var view=ui.inflate(
                            <vertical padding="16 0">
                                {/* <text>用户名</text>
                                <input id="username" />
                                <text>密码</text>
                                <input id="password"/> */}
                            </vertical>
                        );
                        dialogs.build({
                            customView: view,
                            title: "检测到新版本"+server_version+"，是否升级",
                            positive: "确定升级",
                            negative: "下次再说",
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).on("positive", (dialog) => {
                    
                            dialog.dismiss();
                            //用户确认升级，开始下载
                           // alert(downloadurl);
                            download_installapp(downloadurl);
                           // downloadapp(downloadurl);
                        }).on("negative", (dialog) => {
                            dialog.dismiss();
                        }).show();
     }else{

     }

 }

else{
    toast("服务器信息获取异常");///
}



 
}



function callback_boboshipin(fucname,ele){
var thisnum=0;
//alert(ele.child(1).child(0).text());
var thistop=ele.child(1).child(0).bounds().top+20;
var thisleft=ele.child(1).child(0).bounds().left+130;

//     while(1){
//         if(thisnum>30){
//             break;
//         }
//         //toast("top is"+thistop+" left is"+thisleft);
//         thiscommon.touchreal(thistop,thisleft);     
//        // toast("fuck ............."+thisnum);
//         thisnum+=1;
//     sleep(3000);
// }
var thisnum=0;
while(1){
   // thiscommon.touchreal(300,1273);
   //toast("top is"+thistop+" left is"+thisleft);
    //点击有收益的地方
    sleep(1000);
    thiscommon.touchreal(thisleft,thistop);
    sleep(800);

    //如果是点击领取
    var elelq=className("android.view.View").desc("点击领取");//.findOnce(0);
            if(elelq.exists()){
                //点击
                elelq.findOnce(0).click();
                sleep(1000);
              //  elelq.findOnce(0).click();  
            
              //关闭
                sleep(1000);
                var eleclose=id("e8").exists();
                    if(eleclose){
                        id("e8").click();
                    } 

            }
    //如果是分享给朋友
        var elefx=className("android.view.View").desc("分享给朋友");
        if(elefx.exists()){
            sleep(1000);
            //关闭
            var eleclose=id("e8").exists();
                if(eleclose){
                    id("e8").click();
                }    
        }


    if(thisnum>20){
        break;
    }
    thisnum+=1;
    sleep(5000)
}
exit();

}





