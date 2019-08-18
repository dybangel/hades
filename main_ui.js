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
                        <button id="downloadapp" text="下载新版本" style="Widget.AppCompat.Button.Borderless.Colored"/>
                 <horizontal id="progressw" gravity="center" marginTop="0">
                    {/* <text id="progress_value" textColor="black" textSize="16sp" margin="0" text=""/> */}
                    <progressbar id="progress" w="*" h="3" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
                </horizontal>
                        <webview id="webview" w="*" h="*"/>
                        <button id="start" text="开始运行" style="Widget.AppCompat.Button.Colored" textColor="#ffffff"/>
                       

                        {/* 空行 */}
                        <Switch id="autoService" text="无障碍服务" textColor="{{textColor}}" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
                         {/* 勾选框 */}
                         <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="显示app版本" textSize="12sp" textColor="{{textColor}}" />
                            <checkbox id="showappver" text="app版本输出" color="{{textColor}}" checked="true"/>
                            <checkbox id="opendaemon" text="开启守护" color="{{textColor}}" checked="true"/>
                            <checkbox id="readflag" text="阅读进度" color="{{textColor}}" checked="true"/>
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                        </linear>

                        {/* <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="运行速度" textSize="12sp" textColor="{{textColor}}" />
                            <linear h="40" paddingTop="1" >
                                <radiogroup id='fbName' orientation="horizontal">
                                    <radio  id="slow" text='慢速' color="{{textColor}}" checked="true"></radio>
                                    <radio id="normal" text='普通' color="{{textColor}}"></radio>
                                    <radio id="fast" text='快速（不支持语音）' color="{{textColor}}"></radio>    
                                </radiogroup>
                            </linear>
                        </linear> */}

                        <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="每APP阅读时间" textSize="12sp" textColor="{{textColor}}" />
                            <radiogroup id='fbName' orientation="horizontal">
                                    {/* <radio id="allrun" text='全刷' color="{{textColor}}"></radio> */}
                                    <radio  id="shorttime" text='1分20秒' color="{{textColor}}" ></radio>
                                    <radio id="longtime" text='30分钟' color="{{textColor}}" checked="true"></radio>
                                        
                                </radiogroup>
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                        </linear>
                       
                         <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="手机型号" textSize="12sp" textColor="{{textColor}}" />
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                            <linear h="40" paddingTop="1" >
                                <radiogroup id='fbName' orientation="horizontal">
                                    {/* <radio id="allrun" text='全刷' color="{{textColor}}"></radio> */}
                                    <radio  id="xiaomi4" text='小米4' color="{{textColor}}" checked="true"></radio>
                                    <radio id="xiaomi4s" text='小米4s' color="{{textColor}}"></radio>
                                    <radio id="lnnl" text='LnnL' color="{{textColor}}"></radio>  
                                    <radio id="le" text='乐视' color="{{textColor}}"></radio>  

                                </radiogroup>
                            </linear>
                        </linear>
                      

                         <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="工作模式" textSize="12sp" textColor="{{textColor}}" />
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                            <linear h="40" paddingTop="1" >
                                <radiogroup id='fbName' orientation="horizontal">
                                    {/* <radio id="allrun" text='全刷' color="{{textColor}}"></radio> */}
                                    <radio  id="autoread" text='自动阅读' color="{{textColor}}" checked="true"></radio>
                                    <radio id="bindwechat" text='微信绑定' color="{{textColor}}"></radio>
                                    <radio id="trainwechat" text='微信养号' color="{{textColor}}"></radio>    
                                     {/* <radio id="analy" text='统计' color="{{textColor}}"></radio>  */}
                                </radiogroup>
                            </linear>
                        </linear>
                           

                        <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="场景" textSize="12sp" textColor="{{textColor}}" />
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                            <linear h="40" paddingTop="1" >
                                <radiogroup id='changjing' orientation="horizontal">
                                    {/* <radio id="allrun" text='全刷' color="{{textColor}}"></radio> */}
                                    <radio  id="indoor" text='室内' color="{{textColor}}" checked="true"></radio>
                                    <radio id="outdoor" text='户外' color="{{textColor}}"></radio>
                                    <text text="(ps:室内场景会自动关闭GPS定位)" textSize="12sp" textColor="{{textColor}}" />
                                </radiogroup>
                            </linear>
                        </linear>    
                        <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="软件语音" textSize="12sp" textColor="{{textColor}}" />
                            {/* <text autoLink="all" text="恢复默认" marginLeft="10sp" /> */}
                            <linear h="40" paddingTop="1" >
                                <radiogroup id='changjing' orientation="horizontal">
                                    {/* <radio id="allrun" text='全刷' color="{{textColor}}"></radio> */}
                                    <checkbox id="softvoice" text="软件语音" color="{{textColor}}" checked="true"/>
                                </radiogroup>
                            </linear>
                        </linear>  
                       
                        <linear w="*" h="40" paddingLeft="8" gravity="left|center" >
                            <text text="激活码" textSize="12sp" textColor="{{textColor}}" />
                            <input id="fsn" layout_weight="1" textColor="black" textSize="16sp" marginLeft="16"></input>   
                            <button id="licence_activate" w="80" text="激活" style="Widget.AppCompat.Button.Colored" textColor="#ffffff"/>
                        </linear>
                        <button id="cancel_interval" text="取消倒计时"/>

                        {/* 分割线填充 */}
                        <vertical w="*" h="1" bg="{{textColor}}" ></vertical>

                        {/* 其他功能区域相关配置 */}
                        <linear w="*" h="*" paddingLeft="8" gravity="left|center" >
                            <text text="软件列表" textSize="12sp" textColor="{{textColor}}" />
                            <button id="appinfo" text="展开详情"   style="Widget.AppCompat.Button.Borderless.Colored" />
                            <button id="checklocalapp" text="执行app检测 (请允许浏览器访问)"   style="Widget.AppCompat.Button.Borderless.Colored" />
                        </linear>
                       
                        <vertical margin="0 0 0 0" id="applist">
                     {/* <list id="menu0">
                        <horizontal bg="?selectableItemBackground" w="*">
                            <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                            <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
                        </horizontal>
                    </list> */}
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
                        <vertical w="*" h="1" bg="{{textColor}}" ></vertical>

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
                        {/* <vertical w="*" h="1" bg="{{color}}" ></vertical> */}
                       







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

//ui.downloadapp.setVisibility(6);
//ui.progress.setVisibility(6);
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
    //如果licence是激活状态才更新开关量
    if(Glicence==true){
        Guser_start=true;
            //程序开始运行之前判断无障碍服务
    if(auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    //Gdevicetype="xiaomi4"; //字典 xiaomi4 xiaomi4s lnnl le
    if(ui.xiaomi4.checked==true){
       // alert("xiaomi4");
        Gdevicetype="xiaomi4"
    }else if(ui.xiaomi4s.checked==true){
      //  alert("xiaomi4s");
        Gdevicetype="xiaomi4s"
    }else if(ui.lnnl.checked==true){
      //  alert("lnnl");
        Gdevicetype="lnnl"
    }else if(ui.le.checked==true){
        Gdevicetype="le"
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
    }else if(ui.analy.checked==true){
        //统计收益
        Grunstate="analy"
    }
    }else{
        toast("请先激活");
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
//获取哪些要刷的app列表
ui.appinfo.click(()=>{

  //  alert(Gapps);
    try{
       
        // setTimeout(() => {
             if(ref_ui_list()){
                ui.appinfo.setVisibility(8);
             };  
        // }, 5000);
        
    }catch(e){
        alert(e);
        toast("列表加载中..请等3秒钟再试");
    }
  
 
});
ui.checklocalapp.click(()=>{
    try{
        try{thread_checklocalapp.interrupt()}catch(e){}
        thread_checklocalapp=threads.start(
            function(){
                checklocalapp();
            }
        );
    }catch(e){

    }
});


ui.indoor.on('check',(checked)=>{
    if(checked){
     toast("正在关闭gps");
     Genv="indoor";
     setTimeout(function(){
          //  play("global","关闭");
         //   play("global","gps");
            thiscommon.setgps('close');
         },1000); 
   
    }
})
ui.outdoor.on('check',(checked)=>{
    if(checked){
     toast("正在打开gps");
     Genv="outdoor";
     setTimeout(function(){
       // play("global","打开");
      //  play("global","gps");
        thiscommon.setgps('open');
     },1000);       
    }
})
ui.softvoice.on('check',(checked)=>{
    if(checked){
    Gsoftvoice=true;
    }else{
    Gsoftvoice=false;
    }
});
ui.shorttime.on('check',(checked)=>{
if(checked){
//alert("short");
//所有要阅读那些app数据结构
//30分钟=1800秒=1800000毫秒
//1.3分钟=100000毫秒
//每一个app阅读多长时间的变量
Gappinterval="100000";
}
});
ui.longtime.on('check',(checked)=>{
    if(checked){
        Gappinterval="1800000";
    }
});
ui.cancel_interval.click(()=>{

    Guser_cancel=true;
ui.cancel_interval.setVisibility(8);    
});
// 下载新版本按钮事件
ui.downloadapp.click(()=>{
// //     var url = "http://download.dqu360.com/download/#/home";
// // //var url = "file:///storage/emulated/0/网页/试.html";
// // ui.webview.loadUrl(url);
try{thread_checkver.interrupt()}catch(e){}
 thread_checkver=threads.start(
     function(){
        var result=sysupdate_check();
        if(result){
            toastAt("已经是最新版本了");
        } else{
           
             download_installapp();
            
//  urlStr = "http://download.dqu360.com/download/haiqu/#/home";//要访问的 URL
//  var result=shell("am start -a android.intent.action.VIEW -d " + urlStr, true);
        }

     }
 );
// if(result){
   
// }else{
//     thread_checkver=threads.start(
//         function(){
//             toast("下载中....请稍等")
//                 download_installapp();
//                 clearInterval(interval);
//         }
//     );
// }


});
ui.licence_activate.click(()=>{
    //alert("123");
    var fsn=ui.fsn.text();
    if(fsn==""){
    toast("请输入激活码");
    }else{
        var session=device.getAndroidId();
        thread_licence_activate=threads.start(function(){
            var r=http.get(Gchecklicence_api+"&fsn="+fsn+"&fsession="+session);
            if(r.statusCode=="200"){  
                var result=r.body.string();
                var resultobj=eval('('+result+')');
                if("ok"==resultobj[0]["status"]){
                    initlicence(fsn);
                    toast("已经激活");
                    
                   Guser_cancel=true;
                   Glicence=true;
                        
                }else if("error1"==resultobj[0]["status"]){
                   toast("激活码不正确");
                }else if("error2"==resultobj[0]["status"]){
                   toast("您的设备信息与云端不一致，24小时后自动解锁");
                }
             }
        });
       

    }
  

});
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
Glicence=false;
Gcode_state="ui";//noui ui;
//线程错误数量计数器
workthread_errorcount=0;

//脚本运行速度
Grunspeed="slow";//fast normal slow;
//当前工作模式，如果有UI界面，则该变量需要在UI的启动按钮中声明
//运行模式变量 自动阅读，绑定微信，微信养号 // 对应字典autoread bindwechat trainwechat popupdebug
if(Gcode_state=="ui"){
    Grunstate="";
}else if(Gcode_state=="noui"){
    Grunstate="autoread";

}
//手机场景  包括室内 和户外 分别用indoor outdoor字典表示
Genv="indoor";
//是否根据本地于都标记，从下一个app开始阅读
Greadflag=true;
//是否开启守护
Gopendaemon=true;
//软件语音开关量 true false
Gsoftvoice=true;
//底层是否已经运行
Galready=false;
//是否加载过json文件
Galready_loadjson=false;
//用户是否点击了开始运行
Guser_start=false;
//用户是否手动取消了倒计时
Guser_cancel=false;
Gworkthread="";
Gfirstrun=true;
 //签到之后定位首页模块是否操作过
 Gisaction=false;
//是否开启调试打印  字典true false
Gdebug=false;
//多少次找不到新闻执行一次重启app
Gnofindnews_countback=5;
//所有要阅读那些app数据结构
//30分钟=1800秒=1800000毫秒
//1.3分钟=100000毫秒
//每一个app阅读多长时间的变量
Gappinterval="1800000";
//关闭弹窗线程的循环周期
Gabinterval="3000";
//block_mode阻塞验证超时秒数
Gblock_mode_interval=5;
//用户试图退出外挂计数器
Guser_close_myself_count=0;
//Gincome_flag 统计收益时服务器下发的统计标记
Gincome_flag="";

//设备类型
//自动判断
devicestr=device.model
if("Redmi Note 2"==devicestr){
   Gdevicetype="xiaominote2";
}if("MI 4S"==devicestr){
   Gdevicetype="xiaomi4s"; 
   try{if(Gcode_state=="ui"){ui.xiaomi4s.checked=true}}catch(e){};
}if("MI 4LTE"==devicestr){
   Gdevicetype="xiaomi4"; 
   try{if(Gcode_state=="ui"){ui.xiaomi4.checked=true}}catch(e){};
}if("R11 Plus"==devicestr){
   Gdevicetype="lnnl"; //字典 xiaomi4 xiaomi4s lnnl xiaominote2
   try{if(Gcode_state=="ui"){ui.lnnl.checked=true}}catch(e){};
}if(devicestr=="Le X625" ||devicestr=="Le X620"||devicestr=="Le X820"){
    Gdevicetype="le"; //字典 xiaomi4 xiaomi4s lnnl xiaominote2
    try{if(Gcode_state=="ui"){ui.le.checked=true}}catch(e){};
}
//显示序列号
try{thread_upfsn.interrupt();
}catch(e){}
//调用initlicence，看本地数据库有无激活码并到云端验证
thread_upfsn=threads.start(
    function(){
        Guser_cancel=true;
        Glicence=false;
        var fsn=initlicence('');
        if(fsn==null||fsn==''){
            toast("请输入激活码");
            //取消倒计时
          
        }else{
           // alert("有激活码："+fsn);
             //到云端验证，更新Glicence状态
         //  Glicence=true;

         try{thread_setvisi.interrupt();}catch(e){}
                        //跟新界面
                        thread_setvisi=threads.start(function(){
                            ui.fsn.setText(fsn);
                            ui.licence_activate.setVisibility(7);
                        });

         var session=device.getAndroidId();
      //   alert("fsn is:"+fsn+" aid is:"+session);
         var r=http.get(Gchecklicence_api+"&fsn="+fsn+"&fsession="+session);
             
         if(r.statusCode=="200"){  
             var result=r.body.string();
             var resultobj=eval('('+result+')');
             if("ok"==resultobj[0]["status"]){
                 toast("已经激活");
                 
                Guser_cancel=false;
                Glicence=true;
                     
             }else if("error1"==resultobj[0]["status"]){
                toast("激活码不正确");
             }else if("error2"==resultobj[0]["status"]){
                toast("您的设备信息与云端不一致，24小时后自动解锁");
             }
          }
        
       
         
        }
    }
);
//Gdevicetype="xiaomi4"; //字典 xiaomi4 xiaomi4s lnnl xiaominote2

//json特征码加载方式 remote local 
//目前已经支持从云端获取特征码，Gjsonloadstate改为remote即可从指定的云端路径下载json文件，现在Gapplistpath_remote的路径
//使用的是开发人员及其，后期发版是需要改为点趣域名，并将特征码更新到云端路径
Gjsonloadstate="remote";

/**************************研发常用开关量 ******************************************************/
//1 app json特征码远程下载根路径
Gapplistpath_remote="http://download.dqu360.com:81/haiqu/applist/";//公有云
//Gapplistpath_remote="http://192.168.3.180/hades/applist/";       //私有云

//2 Gapps,哪些app要刷的开关量json云端文件路径
Gappspath_remote="http://download.dqu360.com:81/haiqu/api.aspx?&appid=FWEFASDFSFA&action=getgapps"; //公有云
//Gappspath_remote="http://192.168.3.180/hades/gapps.json";                                         //私有云

//3 api 接口文件路径
Gapi_json_url="http://download.dqu360.com:81/haiqu/api.json"; //公有云
//Gapi_json_url="http://192.168.3.180/hades/api.json";        //私有云

Gchecklicence_api="http://download.dqu360.com:81/haiqu/api.aspx?&action=checklicence"  //请勿修改

/**************************研发常用开关量结束 ******************************************************/

Gdownloadpath="http://download.dqu360.com:81/haiqu/haiqu.apk"  //请勿修改
//特征码路径 字典./applist/  表示到根目录脚本里找applist， /storage/emulated/0/applist/ 表示只到根目录下找applist
Gapplistpath="./applist/";  //请勿修改
//语音包路径  /storage/emulated/0/voice/ 表示到根目录下找voice
Gvoicepath="./voice/";    //请勿修改

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


if(Gcode_state=="ui"){
    var thisnum=10;
        UI_run_thread=threads.start(function(){
            setInterval(function(){
               
                if(Grunstate!="" && Galready==false){
                   
                    Galready=true;
                    loadGapps();
                    init();
                    run();
                
                //  try{UI_run_thread.interrupt()}catch(e){};
                };
                if(Galready_loadjson==false){
                    //这里在app弹出界面后自动执行
                    Galready_loadjson=true; 
                    var result=sysupdate_check();
                 
                   
                    if(result){  

                    }else{
                      //  alert("123")
                     //   ui.downloadapp.setVisibility(3);
                      //  ui.progress.setVisibility(3);
                     play("global","发现新版本");
                    }
                
                    loadGapps();
                 // alert("hahah");

                }
                if(thisnum>0 && Guser_cancel==false){
                   thisnum=thisnum-1;
                   toast("还有"+thisnum+"秒开始自动执行"); 
                }else{
                    //如果用户没有点击开始运行，脚本本身也没有运行，而且用户也没有取消才进入倒计时
                    if(Guser_start==false  && Galready==false && Guser_cancel==false){
                        Galready=true;
                        Grunstate="autoread"
                        loadGapps();
                        init();
                       
                        run(); 
                    }
                  
                }
                
                //  ui.start.setText("开始执行("+thisnum+")");
            },1000)
        });
}



function addTextView(parent) {
   // var child = view
   var child = new TextView(context);
   child.setTextSize(20);
   child.setTextColor(colors.parseColor("#ff00f0"))
   child.setText("左护法");
   child.setGravity(0); //左护法
   parent.addView(child);
   log(child)
   var child = new TextView(context);
   child.setTextSize(20);
   child.setTextColor(colors.parseColor("#ff00f0"))
   child.setText("大长老"); //中间的是大长老
   child.setGravity(1);
   parent.addView(child);
   log(child)
   var child = new TextView(context);
   child.setTextSize(20);
   child.setTextColor(colors.parseColor("#ff00f0"))
   child.setText("右护法");
   child.setGravity(5); //右护法
   parent.addView(child);
   log(child)
 }
//appinfo
// update_thread=threads.start(
//     function(){
//         loadGapps();       
//         sysupdate_check();
//     //    try{update_thread.interrupt()}catch(e){}
       
//     }
// );
if(Gcode_state=="noui"){
loadGapps();
run();
}
function init(){
    if("ui"==Gcode_state){
            try{
                    if(ui.shorttime.checked){
                        Gappinterval=100000;
                    }
                    
                    if(ui.opendaemon.checked){
                        Gopendaemon=true;
                      //  alert("开启守护")
                    }else{
                        Gopendaemon=false;
                    }

                    if(ui.readflag.checked){
                       // alert("阅读进度");
                        Greadflag=true;
                    }else{
                        Greadflag=false;
                    }

                    // //运行速度判断
                    // if(ui.slow.checked){
                    //     Grunspeed="slow";
                    // }else if(ui.normal.checked){
                    //     Grunspeed="normal"
                    // }else if(ui.fast.checked){
                    //     Grunspeed="fast";
                    // }
                    // toast("当前速度："+Grunspeed);
                }catch(e){}
                // "opendaemon" text="开启守护" color="{{textColor}}" checked="true"/>
                // <checkbox id="readflag"
        
    }
   
}
/*************************以下是主线程循环 *******************************************************************/ 
function run(){

    if (!requestScreenCapture()) {
        toast("权限失败");
        exit();
      };
   ra = new RootAutomator();
// //ra.setScreenMetrics(device.width, device.height);
ra.setScreenMetrics(1080, 1920);
events.setKeyInterceptionEnabled("volume_down", true);
threads.start(function(){
events.observeKey();
events.on("key", function(volume_down, event){
    Guser_close_myself_count+=1;
    //处理按键事件
   toast("连续按5次音量下退出海趣助手!!!");
   try{
    //shell("am force-stop org.autojs.autojs", true);
   // alert("123");
    //try{thread_appinfo.interrupt()}catch(e){ };
    //alert("关闭提示条"+e);    
   
   // alert("关闭脚本");
   //threads.shutDownAll();
   //ui.finish();
  // exit();   
   }catch(e){
       alert("关闭脚本："+e);
   }
  

});
});
//取出安卓ID作为session
 Gsession=device.getAndroidId();



   voice_runstate();
   voice_devicetype();
   //voice_env();

//读取配置文件

loadappjson();
if(Greadflag){//如果开关量打开，才根据本地app标志位确定下一个app
    resort_applist();
}
//根据场景设置gps
setgps_status();
//如果是微信养号需要的操作
if(Grunstate=="trainwechat"){

    engines.execScriptFile('mytrainwechat.js');
   //lanuchApp("微信");

           // whchat();

}else{
   while(true){
       for(var i=0;i<applist.length;i++){
         //签到之后定位首页模块是否操作过
         Gisaction=false;
        //拉起一次守护，保证相互守护
        // activity="com.example.linyuming.broadcasttest/com.example.linyuming.broadcasttest.MainActivity"
        // shell("am start -n " + activity, true);
       if(Gopendaemon){//如果开关量开启，才拉起守护
                //使用带参数的拉起守护进程
                app.startActivity(
                    {
                    packageName:"com.example.linyuming.broadcasttest",
                    className:"com.example.linyuming.broadcasttest.MainActivity",
                    data: "start_thread",
                    root: true
                    }
                );
       }else{
          // alert("未打开守护");
       }


           var enable=applist[i]['enable'];
            appname=applist[i]['appname'] 
            packagename=applist[i]['packagename']
            activityname=applist[i]['activityname'];
            open_obj=applist[i]["open"];
            bindwechat_obj=applist[i]['bindwechat']; 
           signin_obj=applist[i]['signin'];
           incomeanaly_obj=applist[i]["incomeanaly"];
           try{
                  Grunspeed=applist[i]["speed"];
                if("undefined"==typeof(Grunspeed)){
                    Grunspeed="normal";
                }
           }catch(e){
                    Grunspeed="normal";
           }
          
           Gappinterval=applist[i]["interval"]
           Gappinterval=Number(Gappinterval)*60*1000;


                //根据设置的速断设置滑动量速度
                    //判断当前运行速度是快速，普通还是慢
                    if("fast"==Grunspeed){
                        //两次滑动之间最大等待多少毫秒
                        Gmax=300;
                        //两次滑动之间最小等待多少毫秒
                        Gmin=200;
                        //单次滑动时两点间用的时间
                        Gppinterval=200;
                    }else if("normal"==Grunspeed){
                        Gmax=800;
                        Gmin=501;
                        Gppinterval=250;
                    }else if("normal+"==Grunspeed){
                        Gmax=800;
                        Gmin=501;
                        Gppinterval=300;
                    }
                    else if("slow"==Grunspeed){
                        Gmax=4000;
                        Gmin=1000;
                        Gppinterval=500;
                    }else{
                    Gmin=4000;
                    Gmin=1000;  
                    }
                    toast("当前速度"+Grunspeed);
                            //从云端获取特征码js
                try{
                http.__okhttp__.setTimeout(10000);
                var r=http.get(Gapplistpath_remote+"/"+appname+".js")
                
                Gfinditemstr=r.body.string();
                eval(Gfinditemstr);
                }catch(e){
                toast("this is findnews httpget and eval:"+e);
                }


           try{
            mulityback=applist[i]["mulityback"];
            if("undefined"==typeof(mulityback)){
                //如果没有声明mulityback 按照true来做 
                mulityback="back";
            }
           }catch(e){
                mulityback="back";
           }
           if("undefined"==typeof(signin_obj)){
               toast(appname+".json signin数据项缺失");
           }
            autoread_obj=applist[i]["autoread"];
            abnormal_obj=applist[i]["abnormal"];
            try{
               activitys_obj=applist[i]["activitys"];
               if("undefined"==typeof(activitys_obj)){
                  toast(appname+".json activitys数据项缺失");
              }
            }catch(e){

            }
        
           //当开启app版本号输出时
           try{
                           if(ui.showappver.checked==true){
                           // 乐视不兼容console。hide
                            //     console.show();
                           var appversion=thiscommon.getPackageVersion(packagename);
                           var appversion_server="未设置"; 
                           try{appversion_server=applist[i]["appver"];}catch(e){
                           }
                           if("undefined"==typeof(appversion_server)){
                               var appversion_server="未设置";  
                           }
                           toast(appname+" ver: "+appversion+"\n服务器ver: "+appversion_server);
                           sleep(5000); 
                        //   console.hide();
                   }

           }catch(e){

           }

          
           toast('开始'+applist[i]['appname']);
           
           //每轮运行前杀死之前的线程，防止缓存
           try{    thread_abnormal.interrupt();}catch(e){};
           try{    thread_control.interrupt();}catch(e){};
           try{    thread_findnews.interrupt();}catch(e){};
           try{    thread_readnews.interrupt();}catch(e){};
           try{    thread_signin.interrupt();}catch(e){};
           try{    thread_abnormal_overtime.interrupt();}catch(e){};
           try{    thread_closewindow.interrupt();}catch(e){};
           //while_pagecheck();

    
           sleep(2000);
           //根据设备类型优化内存
           thiscommon.clean(Gdevicetype);
     
           //while_pagecheck();
       //开启异常处理弹窗线程
       while_abnormal(abnormal_obj);
       //demon_abnormal(abnormal_obj);
       while_closewindow(Gdevicetype);
           
       //开启控制线程--通用 该函数感知Grunstate的变化，调用对应的线程
       while_control(appname,packagename,activityname,open_obj,bindwechat_obj,signin_obj,autoread_obj);
       
       //阻塞运行打开app 
       var openstate=openAPP(appname,packagename,activityname,open_obj);
     
       

       //每个app需要阅读的时间sleep

       //var thisinterval=3*100000;
       //30分钟=1800秒=1800000毫秒
       //1分20秒=100000毫秒

       //var thisinterval=1800000;
      // alert(openstate);
        //如果打开失败跳转到下一个app，如果成功则进行延迟等待，这样节约时间
       if(openstate){
    
        try{setlastapp("1",appname); }catch(e){}
      
        //测试代码开始
                    // w="";
                    // if(w){
                    //     w.setSize(100,100)
                    //     }else{
                    //         try{thread_appinfo.interrupt()}catch(e){};
                    //     thread_appinfo= threads.start(
                    //         function(){
                    //         w = floaty.rawWindow(
                    //             <frame id="myfab" bg="#009688" radius="100" gravity="center" alpha="0.5">
                    //                 <text id="appname"></text>
                    //             </frame>
                    //         );
                    //         w.setPosition(device.width/2-400,device.height/2);
                    //         w.setTouchable(false);
                    //         w.appname.setText("当前运行："+appname);
                    
                        
                    //         }
                    //     )
                    // }
                    //测试代码结束
                        toast("阅读"+Gappinterval+"毫秒......................");
                        // setlastapp("",appname);
                        if("popupdebug"==Grunstate){
                            while_abnormal_overtime(activitys_obj); 
                            }
                        //当前app驻留时间
                        if(Grunstate=="analy"){
                           //income_getflag  获取标志位
                           var tmpurl="http://download.dqu360.com:81/haiqu/api.aspx?&action=income_getflag";
                           var r=http.get(tmpurl);
                                 if("200"==r.statusCode){
                                    //[{"fincome_flag":17756134}]
                                    var tmpstr=r.body.string();
                                    var jsonstr=eval('('+tmpstr+')');
                                    Gincome_flag=jsonstr[0]['fincome_flag'];
                                        //如果是统计收益，走blockanalay阻塞函数
                                        block_analay(incomeanaly_obj);
                                 }
                           
                        }else{
                            sleep(Gappinterval);
                        }
       }
           toast("准备开始下一个");

       //开启异常处理线程--通用
       Gfirstrun=false;
       sleep(1000)
       }
         //for end
         //如果是统计收益，就不要用到外层的while了，只统计一轮就好
         if(Grunstate=="analy"){
            alert("统计完成，请到服务器上查看统计标记为:"+Gincome_flag+"，手机标识为:"+Gsession+"的相关记录"); 
            break;

         }
   }
   //while end
 
}
//if end

} //while end

//function fun end
/*************************以下是函数实现部分 *******************************************************************/ 
//序列号验证
//加载开关量
function checklicence(fsn){
  
        http.__okhttp__.setTimeout(10000);
        var r=http.get(Gappspath_remote);
        if("200"==r.statusCode){
           // alert(r.body.string());
            var tmpstr=r.body.string();
            Gapps=eval('('+tmpstr+')');
          
            
 
        }else{
            toast("加载云端gapps列表出错");
        }
 
    
 
 
 }
//加载开关量
function loadGapps(){
    //判断本地有无特殊开关量，如果有则视为开发测试状态，以本地开关量为准
        var result=files.exists("/sdcard/脚本/localgapps.json")
        if(result){
        toast("当前以本地开关量为准");
        var str=files.read("/sdcard/脚本/localgapps.json");
     //   alert(str);
        Gapps=eval(str)
        }else{
            //正常用户状态
                    if(Gjsonloadstate=="remote"){
                        // alert("1");
                        try{
                        http.__okhttp__.setTimeout(10000);
                        var r=http.get(Gappspath_remote);
                        }catch(e){
                
                        }
                    
                        if("200"==r.statusCode){
                            // alert(r.body.string());
                            try{
                            var tmpstr=r.body.string();
                            Gapps=eval('('+tmpstr+')'); 
                            }catch(e){
                                toast("加载云端开关量延迟");
                            }
                            
                            // alert(Gapps);
                        //   ref_ui_list();
                            
                
                        }else{
                            toast("加载云端gapps列表出错");
                        }
                
                    }else if(Gjsonloadstate=="local"){
                
                    }

        }



}
//根据开关量加载特征码
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
         try{

            http.__okhttp__.setTimeout(10000);
           var r=http.get(Gapplistpath_remote+"/"+appname+".json")
         }catch(e){};
           
         //  toast('code=',r.statusCode)
           if(r.statusCode=="200"){  
              
            //   log(jsonstr);
               try{ 
                   var jsonstr=r.body.string();
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
 // thisfinditem=require(Gapplistpath+"/"+appname+".js");
 //thisfinditem=require("http://192.168.3.89/jsonurl/2345%E6%B5%8F%E8%A7%88%E5%99%A8.js");
//   http://192.168.3.89/jsonurl/2345%E6%B5%8F%E8%A7%88%E5%99%A8.js
// alert("loadappjs appname is:"+appname);
 var r=http.get(Gapplistpath_remote+"/"+appname+".js")
 tmpstr=r.body.string();
// alert(tmpstr);
 //thisfinditem=
 try{
   eval(r);

 }catch(e){
alert("eval error:"+e)
 }
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
  // alert(Gapps.length);
  try{
        for(var i=0;i<Gapps.length;i++){
            var thisappname=Gapps[i]["appname"];
            appliststr='<linear id="aa" layout_weight="1" >';
            appliststr+='<checkbox id="'+thisappname+'" text="'+thisappname+'" color="{{textColor}}" checked="true"/>'
        //   appliststr+='<text text="次数:"';
        //   appliststr+='   marginLeft="10"';
        //   appliststr+='   marginRight="1"';
        //   appliststr+='   color="{{textColor}}"';
        //   appliststr+='   size="16sp"';
        //   appliststr+='   />';
        //   appliststr+=' <input id="test" layout_weight="1" textColor="black" textSize="16sp" marginLeft="16"></input>';
            appliststr+='<linear layout_weight="1" gravity="right" >';
        //  appliststr+='    <button id="android:id/open" text="" w="60" h="40" />';
            appliststr+='</linear>';
            appliststr+='</linear>';
            ui.inflate( appliststr,ui.applist,true); 
            }
    return true;

  }catch(e){
    return false;
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
   }else if("xiaominote2"==Gdevicetype){
       play("global","小米");
       play("global","note");
       play("global","2");

   }else if("le"==Gdevicetype){
    play("global","乐视");
}
   

}
//语音广播场景
function voice_env(){
   play('global',"场景")
   if(ui.indoor.checked==true){
       play('global',"室内")
   }else if(ui.outdoor.checked==true){
       play('global',"户外")

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
   }else if("analy"==Grunstate){
       runstate_voicename="统计收益"
   }
   play("global","当前工作模式");
   play("global",runstate_voicename);
}
function setgps_status(){
if(Genv=="indoor"){
  // alert("关闭gps");
   thiscommon.setgps("close");
}else if(Genv=="outdoor"){
  // alert("打开gps");

   thiscommon.setgps("open");

}
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
                       try{
                           var thisid=signin_obj["sg"+i]["click_id"];
                           thiscommon.clickxy_for_ele(id(thisid).findOnce());
                       }catch(e){

                       }
                         
                   } else if("check_signin"==action){
                       //判断是否签过到
                       result=block_mode("while_signin",featuremode,signin_obj,i)
                       if(result){
                           play("global","已签到过");
                           Gworkthread="signin_stop";
                           break;
                       }
           
                   }else if("click_boundary_path"==action){
                       try{
                           var boundary=signin_obj["sg"+i]["boundary"];;
                           var path=signin_obj["sg"+i]["path"];;;
                        //   alert("boundary is:"+boundary+"  path is:"+path);
                           thiscommon.click_boundary_path(boundary,path);
                       }catch(e){

                       }
                          
                       }else if("click_xypercent"==action){
                           try{

                               var xypercent=signin_obj["sg"+i]["click_xypercent"];
                               var tmparr=xypercent.split("||");
                               var xpercent=tmparr[0];
                               var ypercent=tmparr[1];
                               thiscommon.touchreal(device.width * xpercent,device.height *ypercent);
                           }catch(e){

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
                               play("global","检查");
                           }
                      
                   
               }catch(e){
                 toast("signin error:"+e);
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

  //线程执行前初始化一下没有找到新闻的次数为0；
   //线程计数器
  var nofindnews_count=0;

  //正在找新闻状态
   findnews_state=false;
   toast("找新闻线程启动..."); play("global","正在检索");
   
//取出action的值
    try{var action =autoread_obj["ar1"]["action"];
//根据action的值进行操作
   if("undefined"==typeof(action)){toast(appname+":"+"autoread_obj[\"ar1\"][\"action\"]数据结构错误");
   }else{
       if(Gisaction==false){
           //如果没有定位过首页模块，则开始定位，并且把标志位改为true，这样以后二级页面读完后返回一级页面时无需再次出发，避免首页刷新到top10，导致一直读重复新闻
           Gisaction=true;
           //定位首页模块
                    if("click_text"==action){
                        var text=autoread_obj["ar1"]["click_text"];
                        if("undefined"==typeof(text)){  toast(appname+":"+"autoread_obj[\"ar1\"][\"click_text\"]数据结构错误");}
                        //alert("click_text is:"+text);
                    try{
                        click(text);
                    }catch(e){}
                        
                        sleep(1000);
                    
                    }else if("click_id"==action){
                    
                    try{
                        var click_id=autoread_obj["ar1"]["click_id"];
                        thiscommon.clickxy_for_ele(id(click_id).findOnce());
                    }catch(e){}
                    }else if("click_boundary_path"==action){
                        try{
                            var boundary=autoread_obj["ar1"]["boundary"];
                            var path=autoread_obj["ar1"]["path"];
                            thiscommon.click_boundary_path(boundary,path);
                        }catch(e){

                        }
                    
                    }
                    //定位首页模块结束
       }
   }
}catch(e){}    
//根据action的值进行操作 结束

  //取出打开二级页面后的判断成功特征码
try{var thisfeaturemode=autoread_obj["ar1"]["featuremode"];
if("undefined"==typeof(thisfeaturemode)){toast(appname+"autoread_obj[\"ar1\"][\"featuremode\"]数据结构错误");}
}catch(e){}
 
   //滑动多少次后开始找新闻的计数器
   var upcount=0;
 //  try{console.hide()}catch(e){}
   thread_findnews=threads.start(function(){
        //把finditem字符串变成函数
        try{eval(Gfinditemstr)}catch(e){toast("finditem eval error")};  
         //两次上滑之间的间隔
         var x=Math.round(Math.random()*(Gmax-Gmin))+Gmin;
           setInterval(function(){ 
         //   pagecheck();
                toast("findnews 滑动间隔"+x+"毫秒");
                       try{
                                        //滑动
                                        main_swipe();
                                      
                                        sleep(1500);
                                        upcount+=1;
                                        var maxswipecount=2;
                                        var minswipecount=1;
                                        //swipecount 为向上滑动多少次后打开新闻
                                        var swipecount=Math.round(Math.random()*(maxswipecount-minswipecount))+minswipecount;
                                        //当upcount大于了x次数后，开始打开当前发现的新闻条目
                                        if(upcount>=swipecount && findnews_state==false){        
                                            try{
                                                //调用finditem方式获取element进行点击
                                                var ele=finditem();
                                            }catch(e){
                                                ele=false;
                                                toast("finditem e \n:"+e+"findnews_state:"+findnews_state);
                                            }
                                        
                                            if(ele){
                                                        //如果存在，点击新闻
                                                        play("global","打开新闻");
                                                    try{thiscommon.clickxy_for_ele(ele);
                                                        findnews_state=true//标识现在正在打开一个新闻，成功与否尚未确定，所该告诉finditem 不要着急滑动
                                                    }catch(e){toast("findnews e4 "+e)} 
                                                            sleep(2000);
                                                            var result=false;
                                                            //最后判断二级页面特定控件是否存在，来确定是否打开成功
                                                            try{result=block_mode("while_findnews",thisfeaturemode,autoread_obj,'');}catch(e){result=false;toast("findnews e5:"+e)};
                                                            mytoast("判断二级页面打开结果为:"+result);         
                                                            if(result){
                                                                play("global","打开成功");
                                                                Gworkthread="findnews_stop";
                                                                findnews_state=true;
                                                               // sleep(1000);
                                                                try{thread_findnews.interrupt();}catch(e){}
                                                            }else{
                                                                play("global","打开失败");
                                                                funmulityback();
                                                                findnews_state=false;//告诉findimte 可以动了
                                                            }
                                            
                                            }else{
                                                //没有找到新闻
                                                //视频类的不需要线程计数器
                                                if("快狗视频"==appname||"红包视频"==appname){
                        
                                                }else{
                                                     //线程计数器加1
                                                    nofindnews_count+=1;
                                                }
                                                //如果线程计数器到达设定值，通知while_control
                                                    if(nofindnews_count>Gnofindnews_countback){
                                                            nofindnews_count=0;
                                                            toast("初始化线程计数器findnews");
                                                            workthread_errorcount=999;
                                                        
                                                    }
                                            }
                                        }
                       }catch(e){
                           toast("findnews error "+e)
                           findnews_state=false;
                       }
                      
           
               },x);
       }
   );//thread_findnews end
}

//二级页面阅读线程??可以优化

function while_readnews(autoread_obj){
//toast("readnews启动。。。。");
   Gworkthread="readnews_start";
   //线程执行前初始化一下没有找到新闻的次数为0； 
   play("global","开始阅读");
   var upcount=0;
   //初始化第一次截屏为是
   var firstcapture=true;
   //线程计数器
   var thisthread_count=0;
   //目标页面检测
   //pagecheck();
  // var readnews_count=0;
   var backtrigger_maincount=0;
   var backtrigger_subcount=0;
   //是否发现了展开更多
   var deployfind=false;
   //是否错过了展开更多
   var deploypass=false;
//初始化本页面随机上滑次数，如果配置文件中有有upcount则按其初始化，否则随机初始化5到10次
 try{
   var thisupcount=autoread_obj["ar2"]["upcount"];  
    //如果没有指定upcount的情况
   if(typeof(thisupcount)=="undefined"){
       var o=10;//最大上滑次数
       var p=5;//最小上滑次数
       var maxupcount=Math.round(Math.random()*(o-p))+p;
   }else{
       //如果指定了upcount的情况，当然如果指定了色差方法会按照色差法返回
      var maxupcount=thisupcount; 
   }
        //从配置文件中取出展开更多的特征码
        var thisdeploymode=autoread_obj["ar2"]["deploymode"];
        if("undefined"==typeof(thisdeploymode)){alert(appname+"autoread_obj[\"ar2\"][\"deploymode\"]数据结构错误");}

 }catch(e){
   var o=10;//最大上滑次数
   var p=5;//最小上滑次数
   var maxupcount=Math.round(Math.random()*(o-p))+p;
 }  
    

   thread_readnews=threads.start(function(){
              //两次上滑之间的间隔
               var x=Math.round(Math.random()*(Gmax-Gmin))+Gmin;
              try{toastAt("readnews 滑动间隔"+x+"毫秒 两点间隔"+Gppinterval+"毫秒");}catch(e){}

            //判断返回机制
            var thisbacktrigger="normal"
            try{
                var thisbacktrigger=autoread_obj["ar2"]["backtrigger"];
                        if(typeof(thisbacktrigger)=="undefined"){
                            thisbacktrigger="normal"
                        }else{
                        // 如果有特殊返回机制的情况的各种情况处理
                            if("xy_color_bool"==thisbacktrigger){
                                //取出私有字段
                            var thisxy=autoread_obj["ar2"]["xy"];
                            var thisxyarr=thisxy.split("||");
                            var thisx=thisxyarr[0];
                            var thisy=thisxyarr[1];
                            }else if("id_xyoffset_color_bool"==thisbacktrigger){
                                //alert("else if");
                                //取出私有字段                                  
                            var thisid=autoread_obj["ar2"]["id"];
                            var thisxyoffset=autoread_obj["ar2"]["xyoffset"];
                            var thisxyoffsetarr=thisxyoffset.split("||");
                        
                                        try{
                                            var elex=id(thisid).findOnce().bounds().left;
                                            var eley=id(thisid).findOnce().bounds().top;  
                                        }catch(e){
                                            
                                                funmulityback();
                                        
                                            Gworkthread="readnews_stop";
                                            sleep(1000);
                                            thread_readnews.interrupt();
                                        }                  
                            var thisx=Number(elex)+Number(thisxyoffsetarr[0]);
                            var thisy=Number(eley)+Number(thisxyoffsetarr[1]);
                            //  alert("else if end");
                            }
                                //取出共有字段
                            var thiscolor=autoread_obj["ar2"]["color"];
                            var thisbool=autoread_obj["ar2"]["bool"];
                            var thisreswipe=autoread_obj["ar2"]["reswipe"];
                        }//else end
            }catch(e){
                thisbacktrigger="normal";
            } 
            ///判断返回机制结束

               setInterval(function(){
     //           pagecheck();
                    //线程计数器机制开始
                    thisthread_count+=1; //线程计数器增加一
                    if(thisthread_count>90){
                        try{                      
                            workthread_errorcount=999;//修改变量，通知while_control重启app
                            toast("初始化线程计数器readnews");
                            thisthread_count=0;
                        }catch(e){toast("初始化线程计数器readnews 1001")}
                    }
                    //线程计数器机制 结束

                    try{
                        //展开更多处理方式
                        if("classname_desc"==thisdeploymode){
                            var thisdeployclassname=autoread_obj["ar2"]["deployclassname"];
                            if("undefined"==typeof(thisdeployclassname)){alert(appname+"autoread_obj[\"ar2\"][\"deployclassname\"]数据结构错误");}
                            var thisdeploydesc=autoread_obj["ar2"]["deploydesc"];
                            if("undefined"==typeof(thisdeploydesc)){alert(appname+"autoread_obj[\"ar2\"][\"deploydesc\"]数据结构错误");}
                        var ele=className(thisdeployclassname).desc(thisdeploydesc);
                        
                        
                            if(ele.exists() && ele.findOnce().bounds().top <device.height ){
                            // if( ele.findOnce().bounds().top <device.height){
                                    var deploy_top=ele.findOnce().bounds().top;
                                    //如果展开更多的top值小于0，那么就是滑动过了
                                    if( deploy_top<0){
                                            deployfind=true;
                                                deploypass=true;
                                                Swipe(300,500,200,1200,500);
                                                toastAt("错过了展开更多\n,反向滑动一次")
                                            }
                                    //如果在屏幕可视区
                                    else if(  Number(deploy_top)<Number(device.height) && Number(deploy_top)>280){
                                        //  toastAt("gg deploy_top："+deploy_top);
                                                //设置找到展开更多标记为true
                                                deployfind=true; 
                                                    toastAt("发现展开更多desc方式")
                                                    play("global","展开更多");
                                    
                                                    
                                                try{
                                                    //再次验证
                                                    if(ele.findOnce().bounds().centerY()<0){
                                                        deploypass=true;
                                                        Swipe(300,500,200,1200,500);
                                                    }else{
                                                                toastAt("点击展开更多x:"+ele.findOnce().bounds().centerX()+" y:"+ele.findOnce().bounds().centerY())
                                                                thiscommon.clickxy_for_ele(ele.findOnce()); 
                                                                deployfind=false;
                                                                deploypass=false;
                                                    }
                                                    
                                                    }catch(e){
                                                            deployfind=false;
                                                            deploypass=false;
                                                    }
                                    }
                            //  }//if end
                        
                            

                            }
                        }else if("classname_text"==thisdeploymode){
                            var thisdeployclassname=autoread_obj["ar2"]["deployclassname"];
                            if("undefined"==typeof(thisdeployclassname)){alert(appname+"autoread_obj[\"ar2\"][\"deployclassname\"]数据结构错误");}
                            var thistext=autoread_obj["ar2"]["deploytext"];
                            if("undefined"==typeof(thistext)){alert(appname+"autoread_obj[\"ar2\"][\"deploytext\"]数据结构错误");}
                            var ele=className(thisdeployclassname).text(thistext);
                        
                            if(ele.exists() && ele.findOnce().bounds().top <device.height ){
                        
                            var deploy_top=ele.findOnce().bounds().top;
                            //如果展开更多的top值小于0，那么就是滑动过了
                            if( deploy_top<0){
                                        deployfind=true;
                                        deploypass=true;
                                        Swipe(300,500,200,1200,500);
                                        toastAt("错过了展开更多\n,反向滑动一次")
                                    }
                            //如果在屏幕可视区
                            else if(  Number(deploy_top)<Number(device.height) && Number(deploy_top)>280){
                                //  toastAt("gg deploy_top："+deploy_top);
                                        //设置找到展开更多标记为true
                                        deployfind=true; 
                                            toastAt("发现展开更多text方式")
                                            play("global","展开更多");
                            
                                            
                                        try{
                                            //再次验证
                                            if(ele.findOnce().bounds().centerY()<0){
                                                deploypass=true;
                                                Swipe(300,500,200,1200,500);
                                            }else{
                                                        toastAt("点击展开更多x:"+ele.findOnce().bounds().centerX()+" y:"+ele.findOnce().bounds().centerY())
                                                        thiscommon.clickxy_for_ele(ele.findOnce()); 
                                                        deployfind=false;
                                                        deploypass=false;
                                            }
                                            
                                            }catch(e){
                                                    deployfind=false;
                                                    deploypass=false;
                                            }
                                }
                            

                            }
                        }else if("click_boundary_path"==thisdeploymode){
                            
                            try{
                                var deployboundary=autoread_obj["ar2"]["deployboundary"];
                                var deploypath=autoread_obj["ar2"]["deploypath"];
                                thiscommon.click_boundary_path(deployboundary,deploypath);
                            }catch(e){

                            }
                        }
                        //展开更多处理方式结束

                        //滑动开始
                        if(deployfind==false && deploypass==false){
                            //如果没有发现展开更多，才允许滑动，否则不滑动，等待展开更多发送过来的信号量false
                            main_swipe(); 
                        }
                        //滑动结束

                        //延迟一下         
                         sleep(x);
     
                        //执行返回机制验证
                        if("normal"==thisbacktrigger){
                                    //采用计数器方式判断是否返回一级页面
                                    upcount+=1;
                                    toast("上滑："+upcount+"/"+maxupcount+"次");
                                    if(upcount>maxupcount){
                                        toast("返回首页...");
                                        
                                            funmulityback();
                                            var openstate=openAPP(appname,packagename,activityname,open_obj);
                                            if(openstate){
                                                //while_findnews(autoread_obj);  
                                                Gworkthread="readnews_stop";
                                                sleep(1000);
                                                thread_readnews.interrupt();
                                            }else{
                                                funmulityback();
                                            }
                                       
                                    }
                                    //采用坐标取色法判断是否得到收益并赶回一级页面
                                    // toast("间隔："+x+"毫秒");
                                    
                        }else{
                            if("xy_color_bool"==thisbacktrigger||"id_xyoffset_color_bool"==thisbacktrigger){
                                    //截屏
                                
                                    try{
                                    
                                            var  img = captureScreen();
                                                            //取出坐标值所属颜色值
                                                            var color = images.pixel(img, thisx,thisy);
                                                            color= colors.toString(color);
                                                //  alert("thisx is:"+thisx+" thisy is:"+thisy+" mcolor is:"+color+" jsoncolor is:"+thiscolor);
                                    }catch(e){ 
                                            toast("截取图像失败...");
                                    }
                                
                                
                                    //判断是否是第一次取值
                                    if(firstcapture==true && thisbool==false){
                                    // alert("3");
                                    //如果是第一次取值并且bool为false，那么当前坐标的值必须等于thiscolor,同时更新取值次数为2
                                        
                                    //如果是第一次取值并且bool为false,但是当前坐标值不等于thiscolor，不可能这么快就有收益，这是非收益页面
                                    if(color!="#"+thiscolor){
                                        firstcapture=false;
                                    //  toast("没有匹配到收益圈坐标:"+thisxy+" 的颜色值:"+thiscolor);
                                        toast("非收益页面，返回首页...");
                                    
                                        funmulityback();
                                        var openstate=openAPP(appname,packagename,activityname,open_obj);
                                        if(openstate){
                                            //while_findnews(autoread_obj);  
                                            Gworkthread="readnews_stop";
                                            sleep(1000);
                                            thread_readnews.interrupt();
                                        }else{
                                            funmulityback();
                                        }
                                       
                                    // alert("4");
                                    }
                                    }else{
                                        //如果通过了上面判断，就判断当前坐标的值是不是不等于thiscolor了，如果不等于了，那么就是有收益了，返回一级页面
                                        if(color!="#"+thiscolor){
                                        //  toast("有收益了，坐标:"+thisxy+" 符合条件：颜色值不等于"+thiscolor);
                                        //  toast("返回首页...");
                                        
                                                funmulityback();
                                        
                                                var openstate=openAPP(appname,packagename,activityname,open_obj);
                                                if(openstate){
                                                    //while_findnews(autoread_obj);  
                                                    Gworkthread="readnews_stop";
                                                    sleep(1000);
                                                    thread_readnews.interrupt();
                                                }else{
                                                    funmulityback();
                                                }
                                        }
                                        //更新backtrigger子计数器+1，如果3次计数后，圆圈还没有闭合，有可能没有阅读完，也有可能是二级页面已经到底，需要触发一次下滑
                                        backtrigger_subcount+=1;
                                        if(backtrigger_subcount>3){
                                            if(thisreswipe=="true"){
                                                    Swipe(300,500,200,1200,500);
                                                //     toast("反向滑动一次")
                                            }
                                            backtrigger_subcount=0;
                                        }
                                        //当然也要更新backtrigger总计数器，总集数器超过50次则返回一级页面
                                        backtrigger_maincount+=1;
                                        if(backtrigger_maincount>50){
                                            toast("滑动次数太多了，一直未获取到收益，返回一级页面")
                                        
                                                funmulityback();
                                        
                                                var openstate=openAPP(appname,packagename,activityname,open_obj);
                                                if(openstate){
                                                    //while_findnews(autoread_obj);  
                                                    Gworkthread="readnews_stop";
                                                    sleep(1000);
                                                    thread_readnews.interrupt();
                                                }else{
                                                    funmulityback();
                                                }
                                        }
                                    }

                                
                                
                                    
                            }//xy_color_bool end
                            
                        }
                        //执行返回机制验证结束

                       }catch(e){
                                toast("readnews 检测到 "+appname+" 出现异常\n 如果异常持续超过1分钟将重新启动APP")
                     }
              

                        
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

   var result= thiscommon.openpackage(packagename+"/"+activityname);
       if(result['error'].indexOf('does not exist')>-1){
           toast("手机还没有安装："+appname);
       }
      var thisnum=0;
      while(1){
          try{
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

          }catch(e){

          }

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
           
           
       }else if("id_depth"==featuremode){
           try{
                var thisid=abnormal_obj["ab"+i]["id"];
                var thisdepth=abnormal_obj["ab"+i]["depth"];
                
                var elestr=id(thisid);
                var result=elestr.exists();
            if(result){
                    var eledepth=elestr.findOnce().depth();
                    if(eledepth==thisdepth){
                        thiscommon.clickxy_for_ele(id(thisid).findOnce());
                        }
                    }
           }catch(e){
          //  toast("id_depth:"+e);
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
       }else if("click_boundary_path"==featuremode){
           try{
               var boundary=abnormal_obj["ab"+i]["boundary"];
               var path=abnormal_obj["ab"+i]["path"];
               thiscommon.click_boundary_path(boundary,path);
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
//重启app继续阅读
function restartapp(){
    try{    thread_findnews.interrupt();}catch(e){};
    try{    thread_readnews.interrupt();}catch(e){};
    try{    thread_signin.interrupt();}catch(e){};
    try{
            thiscommon.clean(Gdevicetype);
                //这里延迟一秒防止clean延迟导致刚打开的app被clean
                sleep(1000);
                var openstate=openAPP(appname,packagename,activityname,open_obj);
                if(openstate){
                    while_findnews(autoread_obj);  
                }
    }catch(e){
        
    }
   
}
//全局调度线程
function while_control(appname,packagename,activityname,open_obj,bindwechat_obj,signin_obj,autoread_obj){
   //appname,packagename,activityname,open_obj,bindwechat_obj,autoread_obj
   var nowcurrentPackage="";
   var nowcurrentActivity="";
   //站外计数器
   var outsidecount=0;
   //站内非白名单计数器
   var erroraocount=0;

   //var tmpflag=0;
    //显示当前app toast计数器，目的是不要太频繁的显示，计数器到5就显示一次后重载，再到5后再显示重载
   var showpacount=0;
   thread_control=threads.start(
       function(){
           setInterval(function(){
           //1如果打开app完成后要做的工作  
           if("openapp_stop"==Gworkthread){
                     //如果工作模式是绑定微信runstate
                     if("bindwechat"==Grunstate){
                       //toast("开始绑定微信");
                       while_bindwechat(bindwechat_obj);
                   }else if("autoread"==Grunstate){
                       toast("开始签到...");
                       try{thread_signin.interrupt();}catch(e){};
                       while_signin(signin_obj);
                       
                   }else if("popupdebug"==Grunstate){
                       toast("弹窗跟踪调试");
                   }else if("analy"==Grunstate){
                    toast("while_contorl...统计收益");

                   }
             }
             //2如果是签到完成后要执行的工作   //3如果阅读完成后要做的工作
             else if("signin_stop"==Gworkthread){
               //  alert("findnews start");
                    restartapp();
                    // try{    thread_findnews.interrupt();}catch(e){};
                    // try{    thread_readnews.interrupt();}catch(e){};
                    // try{    thread_signin.interrupt();}catch(e){};
                    // thiscommon.clean(Gdevicetype);
                    // sleep(1000);
                    // var openstate=openAPP(appname,packagename,activityname,open_obj);
                    // if(openstate){
                    //     while_findnews(autoread_obj);  
                    // }

             }else if("readnews_stop"==Gworkthread){
                    try{thread_findnews.interrupt();}catch(e){};
                   try{thread_readnews.interrupt();}catch(e){};
                    while_findnews(autoread_obj);
             }           
             //4如果找到新闻后要做的工作    
             else if("findnews_stop"==Gworkthread){
                try{thread_findnews.interrupt();}catch(e){};
               try{thread_readnews.interrupt();}catch(e){};
               while_readnews(autoread_obj);
             }
           try{
            nowcurrentPackage=currentPackage();
            nowcurrentActivity=currentActivity();
            showpacount+=1;
            if(showpacount>5){
//            toastAt("当前app:"+appname+"\n包名："+nowcurrentPackage+"\n"+"当前窗体名："+nowcurrentActivity);
                    try{
                        toastAt("当前app:"+appname+"\nf线程:"+thread_findnews.isAlive()+" r线程:"+thread_readnews.isAlive()+"\n"+"当前窗体名："+nowcurrentActivity);
                    }catch(e){} 
            
            showpacount=0;
            }
           }catch(e){}
          
            
            //站外检测
             if(nowcurrentPackage!=""){
                    //这是跳转到站外的情况了
                   if( nowcurrentPackage!=packagename){
                               outsidecount+=1;
                           if(outsidecount>10){
                           //   alert("警告，跳出站外");
                           // packagename,activityname
                        //   play("global","拉回站内");

                           toast("拉回站内......");
                          // thiscommon.openpackage(packagename+"/"+activityname);
                               restartapp();
                               outsidecount=0;
                           } 
                   }else{
                       //这是站内的情况，再做白名单检测
                       try{
                           var aocount=thiscommon.JSONLength(activitys_obj);
                           erroraocount+=1;
                           //如果一直没有匹配到白名单
                                     if(erroraocount>10){
                                        log("erroraocount is:"+erroraocount);                                        
                                         toast("拉回主线......");
                                         try{    thread_findnews.interrupt();}catch(e){};
                                         try{    thread_readnews.interrupt();}catch(e){};
                                         try{    thread_signin.interrupt();}catch(e){};
                                   
                                          funmulityback();
                                          thiscommon.openpackage(packagename+"/"+activityname);
                                          while_findnews(autoread_obj);      
                                      
                                         erroraocount=0;
                                  
                                     }
                           //
                           for(var i=1;i<=aocount;i++){
                              // alert(activitys_obj["at"+i]);
                               //判断当前活动页面是否在白名单里
                               if(nowcurrentActivity!=""){
                                   if(nowcurrentActivity==activitys_obj["at"+i]){
                                       //alert("正常 nocur is:"+nowcurrentActivity);
                                       erroraocount=0;
                                       break;
                                   }else{
                                    
                                   }
                               }
                           }//for end
                        }catch(e){
                            toast("noaocount:"+e);
                        }

                   }


             }//站外检测结束
             //其它线程检测
             if("findnews_start"==Gworkthread){
                try{
                    var result=thread_findnews.isAlive();
                    if(result==false){
                        workthread_errorcount+=1;
                    }
                }catch(e){};
             }else if("readnews_start"==Gworkthread){
                try{
                    var result=thread_readnews.isAlive();
                    if(result==false){
                        workthread_errorcount+=1;
                    }
                }catch(e){};
             }else if("signin_start"==Gworkthread){
                try{
                    var result=thread_signin.isAlive();
                    if(result==false){
                        workthread_errorcount+=1;
                    }
                }catch(e){};
             }
             if(workthread_errorcount>10){
                workthread_errorcount=0;
                toast("重新激活线程......");
                restartapp();   
                
             }
             //其它线程检测结束

                //发送心跳广播
                   var action="com.example.broadcasttest.MY_BROADCAST"
                      //  while(1){
                        app.sendBroadcast(
                        {
                            action:action,  
                        }
                        );
                 
            //判断退出
            if(Guser_close_myself_count>6){
                shell("am force-stop org.autojs.autojs", true);
                shell("am force-stop com.haiqu.autoread", true);
            }else{
                Guser_close_myself_count=0;
            }
            
           },3000);//bindwechat注释
       }//bindwechat注释
   );//bindwechat注释
}
//关闭操作系统弹窗
function while_closewindow(devicetype){
   if("le"==devicetype){
       thread_closewindow=threads.start(
           function(){
               setInterval(function(){
                //判断关闭 app申请授权的弹窗
                try{
                    var elestr=id('com.android.packageinstaller:id/permission_deny_button');
                    if(elestr.exists()){
                      elestr.click();
                    }
                }catch(e){}
            

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
  // alert("thisclassname is:"+thisclassname+" thistext is:"+thistext);
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
       if(num>Gblock_mode_interval){
           return false;
       }
       try{
           for(var i=0;i<ids_arr.length;i++){
           if(id(ids_arr[i]).exists()){
              return true;
           } 
       }  
       }catch(e){
           
           toast("this is block_mode ids for:"+e);
           return false;
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
       if(num>Gblock_mode_interval){
           return false;
       }
       sleep(1000);
           if("classname_text"==checktype){
               try{
                   var ele=className(f1).text(f2).exists();
                           //  alert("f1 is"+f1+" f2 is:"+f2+"  "+ ele);
                               if(ele){
                                   return true;
                               }
               }catch(e){
                   return false;

               }
           

           }else if("classname_desc"==checktype){
               try{
                                   var ele=className(f1).desc(f2).exists();
                           if(ele){
                               return true;
                           }
               }catch(e){
                   return false;

               }
          
           }else if("classname"==checktype){
               try{
                               var ele=className(f1).exists();
                       //   alert("this is blockcheck ele is:"+ele);
                           if(ele){
                               return true;
                           } 
               }catch(e){
                   return false;

               }
            
           }else if("id"==checktype){
               try{
                           mytoast("block_check checktype 执行 id is:"+f1);
                       var ele=id(f1).exists();
                       mytoast("block_check id checktype 执行 ele is："+ele);
               if(ele){
                   
                   return true;
               }
               }catch(e){
                   return false;
               }
              

           }    
   
   }


}
//阻塞统计收益
function block_analay(incomeanaly_obj){
    console.show();
    var Ganalymoney="";
    var Ganaycoin="";
    //是否从app中取出过money
    //是否从app中取出过coin
    var findmoney=false;
    var findcoin=false;

      for(var i=1;i<=thiscommon.JSONLength(incomeanaly_obj);i++){
        log("this is in"+i);
        var thisaction=incomeanaly_obj['in'+i]["action"];
        log("acton is:"+thisaction);
        if("click_xy"==thisaction){
          var thisclick_xy=incomeanaly_obj['in'+i]["click_xy"];
          var thisclick_xyarr=thisclick_xy.split("||");
          var thisclick_x=thisclick_xyarr[0];
          var thisclick_y=thisclick_xyarr[1];
          log("x is:"+thisclick_x+" y is:"+thisclick_y);
          thiscommon.touchreal(thisclick_x,thisclick_y);
          sleep(1500);
        }else if("getdesc_id_index"==thisaction){
          var thisid=incomeanaly_obj['in'+i]["id"];
          var thisindex=incomeanaly_obj['in'+i]["index"];
          var thistype=incomeanaly_obj['in'+i]["type"];
          var appdesc=id(thisid).findOnce(thisindex).desc();
          if(thistype=="money"){
            Ganalymoney=appdesc;
          }else if(thistype=="coin"){
            Ganaycoin=appdesc;
          }else{
            //alert();
          };
            
    
        }else if("gettext_id_index"==thisaction){
          var thisid=incomeanaly_obj['in'+i]["id"];
          var thisindex=incomeanaly_obj['in'+i]["index"];
          var thistype=incomeanaly_obj['in'+i]["type"];
          var apptext=id(thisid).findOnce(thisindex).text();
          if(thistype=="money"){
            Ganalymoney=apptext;
          }else if(thistype=="coin"){
            Ganaycoin=apptext;
          }else{
            //alert();
          };
        }
    
        //log("action is:"+thisaction);
        
       
    }// for end;
 
     //上报数据
     var tmpurl="http://download.dqu360.com:81/haiqu/api.aspx?&action=income_upload&income_flag="+Gincome_flag+"&session="+Gsession+"&appname="+appname+"&money="+Ganalymoney+"&coin="+Ganaycoin
     var r=http.get(tmpurl);
           if("200"==r.statusCode){
               alert("统计完成");
               // var tmpstr=r.body.string();
               // tmpjson=eval('(' + tmpstr + ')'); 
           }
  //http://download.dqu360.com:81/haiqu/api.aspx?&action=income_upload&income_flag=15074909&session=123123123&appname=今日头条&money=1.11&coin=40056 

    log("money is:"+Ganalymoney+" coin is"+Ganaycoin);
}
//播放声音
function play(subpath,appname){
   if(Gsoftvoice==true && "fast"!=Grunspeed && "normal"!=Grunspeed &&"normal+"!=Grunspeed){
           var voicefile=Gvoicepath+"/"+subpath+"/"+appname+".mp3";
           var result=files.exists(voicefile);
           if(!result){
               toast("没有找到语音包"+voicefile);
           }else{
               try{
                media.playMusic(Gvoicepath+"/"+subpath+"/"+appname+".mp3");  
                sleep(media.getMusicDuration()); 
               }catch(e){

               }
                  
           }   
   }else{
       // toast(appname);
   }
}

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
//主模块自主判断滑动机制
function main_swipe(){
    if("lnnl"==Gdevicetype||"xiaomi4"==Gdevicetype||"le"==Gdevicetype){
        try{   thisswipe.swiperealup_custom_lnnl(Gppinterval);}catch(e){toast("e2:"+e)};
    }else{
        thisswipe.swiperealup_custom();
    }
}
//下载并安装最新海趣助手
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
       try{
        var script_download_path = "/sdcard/脚本/";
        files.createWithDirs(script_download_path);
        files.remove(script_download_path+"haiqu.apk");

       }catch(e){}
   
var myPath = "/storage/emulated/0/脚本/haiqu.apk";
//console.show();
//log('im alive')
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
//log('要下载的文件大小=')
//log(connLength)
threads.start(
 function () {
   while (1) {
     var 当前写入的文件大小 = byteSum
     var 百分比 = 当前写入的文件大小 / connLength * 100
     log(百分比);
     var arr=百分比.toString().split(".");
     
     ui.progress.setProgress(arr[0]);
    // ui.progress_value.setText(p.toString());

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
toast("下载完成，正在安装")
result=installapp('/sdcard/脚本/haiqu.apk');
if(result){
    toast("安装成功");
}
   }
);

}
//安装海趣助手app
// function installapp(path){
// path = '/storage/emulated/0/脚本/applist/update.apk'
// app.startActivity({
//  data: "file://" + path,
//  type: "application/vnd.android.package-archive",
//  action: "VIEW",
//  flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
// });
// try{
//    update_thread.interrupt();
// }catch(e){

// }
// }
//软件升级检测
function sysupdate_check()
{
// var Gapi_json_url="http://download.dqu360.com:81/haiqu/api.json";
//http.__okhttp__.setTimeout(10000);
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
       return false;
        //显示下载最新版按钮
        
     //   ui.downloadapp.setVisibility(3);
            //    //如果版本不一致，则弹出升级弹窗
            //            var view=ui.inflate(
            //                <vertical padding="16 0">
            //                    {/* <text>用户名</text>
            //                    <input id="username" />
            //                    <text>密码</text>
            //                    <input id="password"/> */}
            //                </vertical>
            //            );
            //            dialogs.build({
            //                customView: view,
            //                title: "检测到新版本"+server_version+"，是否升级",
            //                positive: "确定升级",
            //                negative: "下次再说",
            //                wrapInScrollView: false,
            //                autoDismiss: false
            //            }).on("positive", (dialog) => {
                   
            //                dialog.dismiss();
            //                //用户确认升级，开始下载
            //               // alert(downloadurl);
            //                download_installapp(downloadurl);
            //               // downloadapp(downloadurl);
            //            }).on("negative", (dialog) => {
            //                dialog.dismiss();
            //            }).show();
    }else{
        return true;
    }

}

else{
   toast("服务器信息获取异常");///
}




}



//波波视频的一个特殊阅读处理
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
//写入标志位函数
function setlastapp(appnum,appname){

//context.deleteDatabase("haiqu.db");  
//打开或创建haiqu.db数据库        
db  =  context.openOrCreateDatabase("haiqu.db",  Context.MODE_PRIVATE,  null);   
//创建t_tag表
db.execSQL("create table if not exists " +  "t_tag" + "(_id integer primary key,appnum,appname)");  
//取出数据库内容
//  查询  c 是 Cursor类
//alert("abc");
var c = db.query("t_tag", null, "", null, null, null, null, null);        
// lastappname="";

// if(appname==null){
//    alert("没有记录上次阅读的app");
// }else{
//     alert("上次阅读到了："+lastappname);
// }
//ok. 删除表内容
db.execSQL("DELETE FROM  t_tag");
//alert("set 数据库 appnum="  +  appnum  +  " appname="  +  appname );
var t_tag = new Object;        
t_tag.appnum  =  appnum;          
t_tag.appname  =  appname;
//ContentValues以键值对的形式存放数据       
var  cv  =  new  ContentValues();          
cv.put("appnum", t_tag.appnum);          
//cv.put("appname",  java.lang.Integer(35));
cv.put("appname", t_tag.appname);

 //插入ContentValues中的数据        
db.insert("t_tag",  null,  cv);
//db.insert("t_tag",  null,  cv);  
//删除表数据  ok
//db.delete("person", null,null);  
//ok. 删除表内容
// db.execSQL("DELETE FROM  person  WHERE age>32");
//关闭当前数据库      
db.close(); 
}
//读取本地标志位
function readlastapp(){
importClass('android.database.sqlite.SQLiteDatabase');
//importClass("android.content.ContentValues");
importClass("android.content.Context");
importClass("android.database.Cursor"); 
            //context.deleteDatabase("haiqu.db");  
            //打开或创建haiqu.db数据库        
            db  =  context.openOrCreateDatabase("haiqu.db",  Context.MODE_PRIVATE,  null);   
            //创建t_tag表
            db.execSQL("create table if not exists " +  "t_tag" + "(_id integer primary key,appnum,appname)");  
            var c = db.query("t_tag", null, "", null, null, null, null, null);        
            lastappname="";
            while  (c.moveToNext())  {                         
                var  appname  = c.getString(c.getColumnIndex("appname"));    
            return appname;
   
            } 
}

//基于标志位的重新排序
function resort_applist(){
     
localflag=readlastapp(); 
newjson=[];
Gindexof_flag="";


//console.show();
//查找本地标志位所述云端序列的位置
for(var i=0;i<applist.length;i++){
      log(applist[i]["appname"]);
      if(localflag==applist[i]["appname"]){
      Gindexof_flag=i;
    //  break;
    }else{
    //如果标志位与云端不匹配
    }
}
//如果本地标志位在云端不存在或者还没有标志位
if(Gindexof_flag==""){
  for(var i=0;i<applist.length;i++){
    newjson.push(applist[i]);
    }
}else{
      //从标志位后追加到新json
      for(var i=Gindexof_flag+1;i<applist.length;i++){
      newjson.push(applist[i]);
      }
      //把之前的也追加上
      for(var i=0;i<=Gindexof_flag;i++){
        newjson.push(applist[i]);
      }
      
   
}
//log("------newjson-----");
//log(newjson[0]["appname"]);
//log("Gindexof_flag is:"+Gindexof_flag)
   //打印新json顺序
   for(var i=0;i<newjson.length;i++){
    log(newjson[i]["appname"]);
    }
applist=newjson;
}
//多次返回
function funmulityback(){
    try{
        if("false"==mulityback){
            back();
        }else if(mulityback.indexOf("true")>-1){
            back();
            var marr=mulityback.split("||");
            sleep(marr[1]);
            back();
        }else{
            try{
                if(appname=="韭菜资讯"|| appname=="亿刻看点"){
                    }else{
                        back();
                    }
            }catch(e){

            }
            //纯坐标返回方法
            marr=mulityback.split("||");
                    breakid="";
                    for(var i=0;i<marr.length;i++){
                        if(breakid==""){
                            thiscommon.touchreal(marr[i],marr[i+1]);
                              breakid=i+1;
                        }else{
                            if(i!=breakid){
                                thiscommon.touchreal(marr[i],marr[i+1]);
                                breakid=i+1;    
                            }
                        }
    
                    }//for end
          
           
        }//else end
    
    }catch(e){

    }
  

}
//检测本地手机app是否符合要求
//加载特征码
function checklocalapp(){

    var start='[]'
    var tempstr="";
    var appname="";
    var voiceplaynum=0;
    var thisjsonstr="";
    var diffcount=0;
    var alertstr="";
    for(var i=0;i<Gapps.length;i++){
    
        appname=Gapps[i]["appname"];
        appnum=Gapps[i]["appnum"];
        if("true"==Gapps[i]['enable']){
            //如果是云端特征码机制
            if(Gjsonloadstate=="remote"){
                if(voiceplaynum==0){
                  play("global","加载");
              //    play("global","云端");
                  play("global","特征码");
                  voiceplaynum+=1;
                }
              
                http.__okhttp__.setTimeout(10000);
                var r=http.get(Gapplistpath_remote+"/"+appname+".json")
             
                if(r.statusCode=="200"){  
                    var jsonstr=r.body.string();
               
                    try{
                        tempjson=eval('(' + jsonstr + ')');
                        var pname=tempjson['packagename'];
                        var appname=tempjson['appname'];
                        var appver=tempjson['appver'];
                        var result=app.getAppName(pname);
                     //   alert(result)
                        if(result==null){
                            diffcount+=1;
                            thisjsonstr+='{"appnum":"'+appnum+'","appname":"'+appname+'","state":"您未安装该APP，请安装"},';
                            alertstr+=appname+"-未安装\n";
                        }else{

                            var localappver=thiscommon.getPackageVersion(pname);
                         
                            if(localappver!=appver){
                                diffcount+=1;
                          thisjsonstr+='{"appnum":"'+appnum+'","appname":"'+appname+'","state":"您的版本'+localappver+' 与云端版本'+appver+'不匹配"},';
                          alertstr+=appname+"-版本不匹配\n";                
                            }
    
    
                        
                        }
             
                    }catch(e){
                        alert(appname+" 远程数据结构错误");
                    }
                  
                }else{
                    alert("没有找到远程"+appname+".json");
                }
               
    
            //如果是本地特征码机制
            }
       
    
             
    
        }else{
    
        }
    
    }

    if(""!=thisjsonstr){
    //     thisjsonstr='['+thisjsonstr+']';
    //    // log(thisjsonstr);
    //    if(diffcount>10){
    //     urlStr = 'http://download.dqu360.com:81/haiqu/api.aspx?&action=showapplist';

    //    }else{
    //     urlStr = 'http://download.dqu360.com:81/haiqu/api.aspx?&action=showdiffapplist&jsonstr='+thisjsonstr;
    //    }
      
    //      var result=shell("am start -a android.intent.action.VIEW -d '" + urlStr+"'", true);
    alert(alertstr+"\n请允许打开浏览器，根据本提示下载对应app");
         urlStr = 'http://download.dqu360.com:81/haiqu/api.aspx?&action=showapplist';
          var result=shell("am start -a android.intent.action.VIEW -d '" + urlStr+"'", true);

    }else{
        alert("您手机上的APP与云端一致，请定期检测");
    }
     
    }
//初始化licence 当传入空值时执行本地查询并返回本地fsn，传入fsn激活码时，只写入本地
function initlicence(fsn){
importClass('android.database.sqlite.SQLiteDatabase');
importClass("android.content.ContentValues");
importClass("android.content.Context");
importClass("android.database.Cursor"); 
            //context.deleteDatabase("haiqu.db");  
            //打开或创建haiqu.db数据库        
            db  =  context.openOrCreateDatabase("haiqu.db",  Context.MODE_PRIVATE,  null);   
            //创建t_tag表
            db.execSQL("create table if not exists " +  "t_licence" + "(fsn,fsession,fvar1,fvar2,fvar3)");  
       //      db.execSQL("DELETE FROM  t_licence");
                        if(fsn!=""){
                            var t_tag = new Object;        
                            t_tag.fsn = fsn;          
                                //ContentValues以键值对的形式存放数据       
                            var  cv  =  new  ContentValues();          
                            cv.put("fsn", t_tag.fsn);          
                             //插入ContentValues中的数据        
                        db.insert("t_licence",  null,  cv);  
                        }
             
               
                var c = db.query("t_licence", null, "", null, null, null, null, null);   
            while  (c.moveToNext())  {                         
                var  fsn = c.getString(c.getColumnIndex("fsn"));    
              
            return fsn;
   
            }
            db.close();  
}

function toastAt0(msg, x, y) {
    importClass(android.widget.Toast);
    importClass(android.view.Gravity);
    var toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
    toast.setGravity(Gravity.TOP | Gravity.LEFT, x, y);
    toast.show();
  }
  
  function toastAt(msg) {
      var x=500;
      var y=300;
    ui.run(() => toastAt0(msg, x, y));
  }

  function installapp(path){  
      var result=shell(" pm install -r -d " + path, true);
      return result;

  }
  //穿入文件名 和本地要保存的路径
function getScriptFromServer() { //从服务器获取脚本
    // var i, download_res, script_file_url = "https://script.iqqclub.com/Script/" + FILE;
    var i, download_res
   //  console.show();
    for (i = 0; 10 > i; i++) try {
         if (download_res = http.get(Gdownloadpath), 200 == download_res.statusCode) break;
         log("res:"+download_res.statusCode);
         if(i>8) return !1;
     } catch (e) {
       log("error res:"+download_res);
         if (sleep(500), 9 == i) return !1;
     }
     //alert("1")
     return files.writeBytes("/sdcard/脚本/haiqu.apk", download_res.body.bytes()),!0;
  }

//目标页面检测
function while_pagecheck(){
    return true;
try{thread_pachagecheck.interrupt();}catch(e){}
    var nowpage="";
    var while_count=0;
    //while(true){
//alert("目标页面识别准备启动")
    thread_pachagecheck=threads.start(function(){

        setInterval(function(){
                    //目标页面判断
    try{

                            var thisfeaturemode=open_obj["featuremode"];
                            if("classname_text"==thisfeaturemode){
                            ///  alert("1")
                                var thisclassname=open_obj["classname"];
                                var thistext=open_obj["text"];
                                var thisdepth=open_obj["depth"];
                                var thisindexinparent=open_obj["indexinparent"];
                            //  alert("classname is:"+thisclassname);
                            //   alert("thistext is:"+thistext);
                            //  alert("thisdepth is:"+thisdepth);
                            //   alert("thisinparent is:"+thisindexinparent);
                                var result=className(thisclassname).text(thistext).depth(thisdepth).indexInParent(thisindexinparent).exists();
                        //     alert("result is:"+result)
                                if(result){  //说明当前是在一级页     
                                        nowpage="1";
                                    }
                                }
                                if("classname_desc"==thisfeaturemode){
                                    var thisclassname=open_obj["classname"];
                                    var thisdesc=open_obj["text"];
                                    var thisdepth=open_obj["depth"];
                                    var thisindexinparent=open_obj["indexinparent"];
                                    var result=className(thisclassname).desc(thisdesc).depth(thisdepth).indexInParent(thisindexinparent).exists();
                                    if(result){  //说明当前是在一级页     
                                            nowpage="1";
                                        }
                                    }
                            if("classname"==thisfeaturemode){
                                return false;    
                                // var thisclassname=open_obj["classname"];
                                    // var thisdepth=open_obj["depth"];
                                    // var thisindexinparent=open_obj["indexinparent"];
                                    // var result=className(thisclassname).depth(thisdepth).indexInParent(thisindexinparent).exists();
                                    // if(result){  //说明当前是在一级页     
                                    //            nowpage="1";
                                    //     }
                                }
                            
                        
                            var  thisfeaturemode=autoread_obj["ar1"]["featuremode"];
                            var result=block_mode("while_findnews",thisfeaturemode,autoread_obj,"");
                                if(result){
                                    nowpage="2";
                                }   
                            }catch(e){"pagecheck e1:"+e}
                        //目标页面判断 结束
                        
                            //执行目标识别后的操作
                            try{
                                if("findnews_start"==Gworkthread){
                                    //如果是 findnews_start则验证是不是一级页面
                                    if("1"==nowpage){
                                        //如果是一级页面则无妨
                                       // break;
                                      // alert("一级页面正常")
                                      while_count=0;
                                    }else if("2"==nowpage && while_count>10){
                                        //如果是二级执行返回
                                        toast("findnews_start检测：切换到读新闻线程")     
                                        try{ thread_findnews.interrupt()}catch(e){}
                                        while_readnews(autoread_obj);
                                      while_count=0;

                                       // break;  
                                    }else if(""==nowpage  && while_count>10){
                                        toast("findnews_start检测：未识别页面特征码") 
                                        workthread_errorcount=999;
                                      while_count=0;
                                       
                                        // break;
                                    }
                                
                                
                                    }else if("readnews_start"==Gworkthread){
                                    //如果是readnews_start 则验证是不是二级页面
                                        if("1"==nowpage  && while_count>10){
                                            alert("readnews_start检测：切换到找新闻线程")  
                                        try{ thread_readnews.interrupt()}catch(e){}
                                        while_findnews(autoread_obj);
                                      while_count=0;
                                       
                                        // break;
                                        }else if("2"==nowpage){
                                        //如果十二级页面 不处理
                                       // alert("二级页面正常");
                                         while_count=0;
                                       
                                       // break;
                                        }else if(""==nowpage  && while_count>10){
                                            toast("readnews_start检测：未识别页面特征码")  
                                            try{ thread_readnews.interrupt()}catch(e){}
                                        while_findnews(autoread_obj);
                                        while_count=0;

                                        // break;
                                        }
                                    }
                        
    
                            }catch(e){toast("pagecheck e2"+e)}
                            //执行目标识别后的操作 结束
        },1000)
    });



   //     while_count+=1;
   //     sleep(1000);
  //  }end while
    

}