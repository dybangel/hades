//alert("运行模式"+Grunstate);
 
toast("开始配置");
//备份包里的文件数量
Gtaicount=55;
var ra = new RootAutomator();
device.keepScreenOn(100000000);
if(ui.all.checked){//设置配置检测助手白名单
    toast("0设置白名单");
    setup_bd_while_list();
   
    //拷贝 还原数据
   toast("1拷贝还原数据");
   copydata_tolocal();
   
   restore();
   
   home();
   toast("等待桌面加载");
   sleep(25000);
   
   
   toast("2设置屏幕常亮");
   setup_screen_always_light();
   
   toast("0设置白名单");
   setup_bd_while_list();
   
   toast("3关闭辅助自动优化，初始化虚拟键盘");
   assist_close();
   
   toast("4设置开机运行");
   setup_autorun();
    
   toast("5设置阅读app权限");
   setup_secret_all();
   
   toast("6激活海趣助手");
   reg_haiquzhushou();
   uninstallapp("io.dcloud.H58689B59");
   }
else if(ui.a0.checked){//设置配置检测助手白名单
    toast("0设置白名单");
    setup_bd_while_list();
   }
else if(ui.a1.checked){//设置配置检测助手白名单

   
    //拷贝 还原数据
   toast("1拷贝还原数据");
   copydata_tolocal();
   
   restore();
   
   home();
   toast("等待桌面加载");
   sleep(25000);
   

   }
else if(ui.a2.checked){//设置配置检测助手白名单   
   toast("2设置屏幕常亮");
   setup_screen_always_light();
   }
else if(ui.a3.checked){//设置配置检测助手白名单   
   toast("3关闭辅助自动优化，初始化虚拟键盘");
   assist_close();

   }
else if(ui.a4.checked){//设置配置检测助手白名单
   
   toast("4设置开机运行");
   setup_autorun();

   }
else if(ui.a5.checked){//设置配置检测助手白名单

    
   toast("5设置阅读app权限");
   setup_secret_all();
   

   }
else if(ui.a6.checked){//设置配置检测助手白名单
   
   
   toast("6激活海趣助手");
   reg_haiquzhushou();
   uninstallapp("io.dcloud.H58689B59");
   }

//exit();
function restore(){
    clean();
    var activitys="com.keramidas.TitaniumBackup/com.keramidas.TitaniumBackup.MainActivity";
    openpackage(activitys);
    sleep(15000);
   
    toast("开始关闭弹窗!!!!!!!!!!!");
    try{thread_close_window_for_tai.interrupt()}catch(e){};
    thread_close_window_for_tai=threads.start(
        function(){
            setInterval(function(){
                elestr=className("android.widget.Button").text("确定");
                if(elestr.exists()){
                  elestr.findOnce().click();
                }
            },1000);
        }
    );
    sleep(25000);
   
   
    var elestr=className("android.widget.TextView").desc("批处理");
  
    clickxy_for_ele(elestr.findOnce(0));
    sleep(3000);
    Swipe(400,1000,400,400,500);
    sleep(5000)
    // var elestr=className("android.widget.Button").text("运行");
    // clickxy_for_ele(elestr.findOnce(9));

                elestr=className("android.widget.TextView").text(Gtaicount);
            if(elestr.exists()){
            elestr.findOnce().parent().child(0).click();
            //alert("true");
            }

    sleep(5000);
        //处理弹窗
        try{
        var elestr=className("android.widget.Button").textContains("让我自己");
                if(elestr.exists()){
                elestr.findOnce().click();
                }

        }catch(e){}
   
sleep(2000)
    //开始恢复
    try{
         elestr=className("android.widget.TextView").desc("运行");
        elestr.findOnce().click();
         // clickxy_for_ele(elestr.findOnce());
    }catch(e){}
   
    
         //处理弹窗
         try{
            var elestr=className("android.widget.Button").textContains("让我自己");
                    if(elestr.exists()){
                    elestr.findOnce().click();
                    }
    
            }catch(e){}

    Ghffind_count=50;
    sleep(5000)
    while(true){
        try{
                    wc_elestr=className("android.widget.Button").text("完成");
                if(wc_elestr.exists()){
                    wc_elestr.findOnce().click();
                }
                sleep(500); 
                nowhf_elestr=className("android.widget.TextView").text("正在恢复")
                if(nowhf_elestr.exists()){
                    Ghffind_count+=1;
                }

                Ghffind_count-=1;
                toast("Ghffind_count is:"+Ghffind_count);
                if(Ghffind_count<5){
                    break;
                }
        }catch(e){

        }
       
        sleep(2000);
    }
    
toast("还原app完成");
try{thread_close_window_for_tai.interrupt()}catch(e){};
}
//拷贝数据调用还原数据
function copydata_tolocal(){
     clean();
     activitys="com.letv.android.filemanager/com.letv.android.filemanager.activities.FileManagerActivity";
      openpackage(activitys);
     sleep(3000);
       elestr=className("android.widget.TextView").text("外接设备");
     if(elestr.exists()){
         click("外接设备");
         sleep(2000)
                    longClick("TitaniumBackup",0);
            sleep(1000);
            click("复制");
            sleep(2000);
            click("粘贴");

            sleep(3000);
            var tbutton_str=className("android.widget.Button").text("替换");;
            if(tbutton_str.exists()){
            tbutton_str.findOnce().click();
            }
            sleep(3000);
            while(true){
                try{
                    var elestr=className("android.widget.TextView").text("正在复制");
                                        if(elestr.exists()){

                                        }else{
                                            toast("检测到拷贝完成");
                                            break;
                                        }
                                        sleep(1000)

                }catch(e){}
                  
            }

            longClick("tool",0);
            sleep(1000);
            click("复制");
            sleep(2000);
            click("粘贴");
            sleep(3000);
            var tbutton_str=className("android.widget.Button").text("替换");;
            if(tbutton_str.exists()){
            tbutton_str.findOnce().click();
            }
         sleep(2000);
        // back();
        try{thread_close_window.interrupt()}catch(e){};
        thread_close_window=threads.start(function(){
            setInterval(function(){
                    click("允许");
            },1000)
        });
        toast("安装钛备份");
        installapp("/sdcard/tool/Titanium.apk");
        sleep(15000);
        toast("安装海趣");
        installapp("/sdcard/tool/haiqu.apk");

        sleep(15000);
        try{thread_close_window.interrupt()}catch(e){};
        toast("拷贝和安装钛备份、海趣助手完成")
      

    }else{
        alert("手机未检测到U盘");
    }

    
}

//激活海趣
function reg_haiquzhushou(){
    clean();
    //打开激活助手
     activitys="io.dcloud.H58689B59/io.dcloud.PandoraEntryActivity"
     openpackage(activitys);
     sleep("4500");

     var ele=className("android.view.View").exists();//.findOnce();
    fsn=className("android.view.View").findOnce().desc();
 
     if("{{data}}"==fsn){
         alert("服务器激活码用完，请联系相关人生成");
     }else{
     //打开海趣
     activitys="com.haiqu.autoread/com.stardust.auojs.inrt.SplashActivity";
     openpackage(activitys);

     sleep(4500);

     //处理首次运行弹窗
     for(var i=0 ;i<3;i++){
           elestr=className("android.widget.Button").text("允许")
            if(elestr.exists()){
                elestr.findOnce().click();
            }  
        sleep(2000);
     }
     sleep(9500);

     click("取消倒计时");
     }
     try{
        className("android.widget.EditText").findOnce().setText(fsn);
     sleep(1500);
     click("激活");  
   
     }catch(e){
        toast("激活失败")

     }
    
    //alert(ele);
 }
 //设置开机自启动
function setup_autorun(){
    clean();
   var activity="com.jozein.xedgepro/com.jozein.xedgepro.ui.ActivityMain"
   result=openpackage(activity);   
  if(result){
      //alert("打开成功");
      Swipe(400,1700,400,200,500);
      sleep(3500);
      ele=className("android.widget.TextView").text("更多触发器").findOnce();//.exists();//;.findOnce().click();
      clickxy_for_ele(ele); 
      sleep(3500);
      ele=className("android.widget.TextView").text("启动完成").findOnce();
      clickxy_for_ele(ele);

 }
 sleep(1500)
           // for(var i=0;i<6;i++){
           //     Swipe(400,1700,400,200,200);
           //     sleep(500);
           // }
        //    var ele=className("android.widget.SearchView").findOnce();
        //   clickxy_for_ele(ele);
          touchreal(1300,186);
        
          sleep(500);
          setText("多重动作");
          sleep(1000);

        
           var ele=className("android.widget.TextView").text("多重动作").findOnce();
           clickxy_for_ele(ele);
           sleep(2000);
          ele=className("android.widget.TextView").textContains("添加").findOnce();//.findOnce();
          clickxy_for_ele(ele);
           sleep(1000);

        //   var ele=className("android.widget.SearchView").findOnce();
        //   clickxy_for_ele(ele); 
        touchreal(1300,186);
          sleep(500);
          setText("保持");
          sleep(1000);
          // for(var i=0;i<2;i++){
           //     Swipe(400,2000,400,100,800);
           //     sleep(1000);
           // }
           // sleep(3000);
           ////设置屏幕常亮

            var ele= className("android.widget.TextView").text("保持亮屏").findOnce();
           clickxy_for_ele(ele);
            sleep(1000);
           var ele=className("android.widget.TextView").text("开关").findOnce();
           clickxy_for_ele(ele);

           sleep(1000);
            //延迟
           ele=className("android.widget.TextView").textContains("添加").findOnce();//.findOnce();
            clickxy_for_ele(ele);
         sleep(1000);
           // for(var i=0;i<4;i++){
           //                 Swipe(400,1800,400,100,200);
           //                 sleep(1000);
           //             }
           
        //   var ele=className("android.widget.SearchView").findOnce();
        //   clickxy_for_ele(ele); 
        touchreal(1300,186);
          sleep(500);
          setText("延时");
          sleep(1000);
          sleep(1000);
           var ele=className("android.widget.TextView").text("延时").findOnce();
            clickxy_for_ele(ele);
            sleep(1000);

            setText("15000");
            sleep(1000);
            click("确定");
           sleep(3000);
          // 设置自动解锁
           ele=className("android.widget.TextView").textContains("添加").findOnce();//.findOnce();
          clickxy_for_ele(ele);
          sleep(1000);
          ele=className("android.widget.TextView").textContains("解锁").findOnce();//.findOnce();
          clickxy_for_ele(ele);
           
          sleep(3000)
             //添加海趣自动启动
           ele=className("android.widget.TextView").textContains("添加").findOnce();//.findOnce();
          clickxy_for_ele(ele);
          sleep(1000);
       for(var i=0;i<6;i++){
                           Swipe(400,1200,400,100,200);
                           sleep(1500);
         }
      
           Swipe(400,400,400,1200,500);
       // var ele=className("android.widget.SearchView").findOnce();
       // clickxy_for_ele(ele); 
       // sleep(500);
       // setText("应用");
           sleep(3000);
           ele=className("android.widget.TextView").text("应用").findOnce();//.findOnce();
           clickxy_for_ele(ele);
           sleep(5000);
        //   var ele= className("android.widget.SearchView").findOnce();
        //   clickxy_for_ele(ele);
        touchreal(1300,186);
          //alert(result);
           sleep(1000);
           setText("海趣助手");
           sleep(1000);
           ele=className("android.widget.TextView").text("海趣助手").findOnce();
           clickxy_for_ele(ele);
           sleep(1000);

           ele=className("android.widget.ImageView").depth(5).findOnce();
           clickxy_for_ele(ele);

       }
      
//关闭辅助优化
function assist_close(){
   clean();
   var activity="com.android.settings/com.letv.leui.settings.LeUIMainSettings"
    result=openpackage(activity);
    sleep(1500);
    Swipe(400,1700,400,200,500);
    sleep(1500);
    Swipe(400,1700,400,200,500);
    sleep(1500)
   
   
    click("辅助功能");
    sleep(1500);
    var switch_state=id("android:id/switchWidget").findOnce().checked();
    if(switch_state){
   clickxy_for_ele(id("android:id/switchWidget").findOnce());
    }
    toast("已经关闭辅助功能");
   Swipe(400,1200,400,200,500);
   sleep(2000);
   json_str=[{"item":"多任务键"},
   {"item":"主屏幕键"},
   {"item":"返回键"},
]
for(var i=0;i<json_str.length;i++){
       click(json_str[i]["item"]);
       sleep(800);
       click("无");
       back();
       sleep(500);

}
  // click("多任务键");
}
//com.android.setings/com.letv.leui.settings.LeUIMainSettings;


//权限设置
function setup_secret_all(){
 for(var k=1;k<=6;k++){
   clean(); 
   //打开设置
   var activity="com.letv.android.letvsafe/com.letv.android.letvsafe.HomeActivity"
    result=openpackage(activity);
    sleep(2500);
    click("应用权限管理");
    sleep(2500); 
   
   if(1==k){
   toast(k+"位置信息设置");
   click("位置信息")  
   }else if(2==k){
   toast(k+"电话设置");
   click("电话")
   }else if(3==k){
   toast(k+"短信设置");
   click("短信")
   }else if(4==k){
   toast(k+"通讯录设置");
    click("通讯录")
   }else if(5==k){
   toast(k+"存储空间设置");
    click("存储空间")
   }else if(6==k){
   toast(k+"相机设置");
    click("相机")
   }
   sleep(5000);
   
   setup_secret();
   
   }//for end;  
}
//设置隐私权限
function setup_secret(){
   var result=className("com.letv.shared.widget.slide.LeSlidePager").exists();
   //上滑11次
   var swipeupcount=13
   for(var j=1;j<=swipeupcount;j++){
     toast("正在识别...");
       //sleep(1500);
       try{
           var main=className("com.letv.shared.widget.slide.LeSlidePager").findOnce().child(0).child(0).child(0).child(0);
           for(var i=0;i<main.childCount();i++){
               sleep(1000);
           //   var switchtext=main.child(i).child(2).child(0).text();
              var checked=main.child(i).child(2).child(0).checked();
           
               if(checked==false){
                 //  sleep(800);
                  // main.child(i).checked=true;
                 //toast("exit.....");
                   //exit();
                   clickxy_for_ele(main.child(i));

                   // sleep(500)
                    try{
                    var elestr=className("android.widget.Button").text("拒绝");
                      if(elestr.exists()){
                          elestr.findOnce().click();
                       }
                    }catch(e){
   
                    }
               }
           }
   
           toast("上滑第"+j+"次");
           Swipe(400,1500,400,200,500);
           sleep(1500)
       }catch(e){
   
       }
   }//for end;
}

//设置屏幕常亮
function setup_screen_always_light(){
   clean();
   var activity="com.android.settings/com.letv.leui.settings.LeUIMainSettings"
    result=openpackage(activity);
    sleep(1500);
    Swipe(400,1700,400,200,500);
    sleep(1500);
    Swipe(400,1700,400,200,500);
    sleep(1500)
    click("关于手机");
    sleep(1500);
    Swipe(400,1700,400,200,500);
    sleep(1500)
     for(var i=0;i<=7;i++){
       click("版本号");
        sleep(200);
     }
     back();
     sleep(1500);
     click("开发者选项");
     sleep(1500);
     
           var ele=className("android.widget.TextView").text("不锁定屏幕").findOnce();
             thisparent=ele.parent().parent().parent();
             switch_state=thisparent.child(1).child(0).checked();
             if(switch_state==false){
             clickxy_for_ele(thisparent);
             }
toast("已经打开屏幕常亮");  
}
//设置白名单
function setup_bd_while_list(){
   json_while_list=[
       {"appname":"无障碍-Daemon"},
       {"appname":"海趣助手"},
       {"appname":"海趣守护"},
       {"appname":"Auto.js"},
       {"appname":"配置检测工具"},
       {"appname":"一键root权限获取"},

   ];
   clean();
   var activity="me.piebridge.prevent/me.piebridge.prevent.ui.PreventActivity"
   result=openpackage(activity);

   sleep(5000);
  // alert(json_while_list.length);
 for(var i=0;i<json_while_list.length;i++){
           try{

               id("me.piebridge.prevent:id/filter_query").setText(json_while_list[i]["appname"]);
               sleep(500);
               className("android.widget.ListView").findOnce().child(0).click();
               sleep(500);
               result=click("不再阻止");
               if(result!=true){
                   back();
               }

           }catch(e){}
           
               sleep(1000);
 }
//exit();
         


}
// -l 锁定该应用程序

// -r替换已存在的应用程序，也就是说强制安装, 低版本还是会安装失败

// -t允许测试包

// -s把应用程序安装到sd卡上

// -d允许进行低版本的安装，也就是安装的比手机上带的版本低

// -g为应用程序授予所有运行时的权限
function installapp(path){
  //storage/emulated/0
   // path = '/storage/emulated/0/tool/Titanium.apk';//storage/emulated/0
  //  path = '/storage/emulated/0/tool/海趣助手_v2.2.1.apk';//storage/emulated/0

    var result=shell(" pm install -r -d " + path, true);
    return result;
    //var result=shell(" echo $EXTERNAL_STORAGE" , true);
  //  alert(result);

    //apk pm install 
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
}
function uninstallapp(packagename){
    var result=shell("  pm uninstall " + packagename, true);
    return result;    
}
function setup_bd_while_list(){
    json_while_list=[
        {"appname":"无障碍-Daemon"},
        {"appname":"海趣助手"},
        {"appname":"海趣守护"},
        {"appname":"Auto.js"},
        {"appname":"配置检测工具"},
        {"appname":"一键root权限获取"},

    ];
    clean();
    var activity="me.piebridge.prevent/me.piebridge.prevent.ui.PreventActivity"
    result=openpackage(activity);

    sleep(5000);
   // alert(json_while_list.length);
  for(var i=0;i<json_while_list.length;i++){
            try{

                id("me.piebridge.prevent:id/filter_query").setText(json_while_list[i]["appname"]);
                sleep(500);
                className("android.widget.ListView").findOnce().child(0).click();
                sleep(500);
                result=click("不再阻止");
                if(result!=true){
                    back();
                }

            }catch(e){}
            
                sleep(1000);
  }
//exit();
          


}

//前台进程优化
function clean(){
    home();
    sleep(1500);
    recents();//最近任务
    sleep(1500);
    clickxy_for_ele(id("com.android.systemui:id/leui_recent_clear_all_txtview").findOnce());
    sleep(500);
    home();
}
function touchreal(x,y){
    // var ra = new RootAutomator();
     ra.setScreenMetrics(device.width, device.height);
     ra.tap(x, y, 1);
    // ra.tap(x, y, 1);
  }
     //根据控件所在的坐标坐标点击
 function clickxy_for_ele(ele){
        touchreal(ele.bounds().centerX(),ele.bounds().centerY());
}
function openpackage(packagestr) {
    activity = packagestr;
    var result=shell("am start -n " + activity, true);
    return result;
}