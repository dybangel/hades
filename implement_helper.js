//var thiscommon=require("mycommon.js");
ra = new RootAutomator();


toast("开始自动配置");

//  toast("1设置屏幕常亮");
//  setup_screen_always_light();
//  toast("2设置白名单");
//  setup_bd_while_list();
//  toast("3关闭服务自动优化");
//  assist_close();
//  toast("4设置阅读app权限");
//  setup_secret_all();
 toast("5设置开机运行");
setup_autorun();
 alert("全部执行完成");

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
  sleep(500)
            // for(var i=0;i<6;i++){
            //     Swipe(400,1700,400,200,200);
            //     sleep(500);
            // }
            var ele=className("android.widget.SearchView").findOnce();
           clickxy_for_ele(ele); 
           sleep(500);
           setText("多重动作");
           sleep(1000);

         
            var ele=className("android.widget.TextView").text("多重动作").findOnce();
            clickxy_for_ele(ele);
            sleep(2000);
           ele=className("android.widget.TextView").textContains("添加").findOnce();//.findOnce();
           clickxy_for_ele(ele);
            sleep(1000);

           var ele=className("android.widget.SearchView").findOnce();
           clickxy_for_ele(ele); 
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
            
           var ele=className("android.widget.SearchView").findOnce();
           clickxy_for_ele(ele); 
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
        for(var i=0;i<4;i++){
                            Swipe(400,2200,400,100,200);
                            sleep(1000);
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
           var ele= className("android.widget.SearchView").findOnce();
           clickxy_for_ele(ele);
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
}
//com.android.setings/com.letv.leui.settings.LeUIMainSettings;

 
//权限设置
function setup_secret_all(){
  for(var k=1;k<=6;k++){
    clean(); 
    //打开设置
    var activity="com.letv.android.letvsafe/com.letv.android.letvsafe.HomeActivity"
     result=openpackage(activity);
     sleep(1500);
     click("应用权限管理");
     sleep(1500); 
    
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
                    sleep(800);
                   // main.child(i).checked=true;
                  //toast("exit.....");
                    //exit();
                    clickxy_for_ele(main.child(i));
                    // sleep(500)
                    // try{
                    //     click("拒绝");
                    // }catch(e){
    
                    // }
                }
            }
    
            toast("上滑第"+j+"次");
            Swipe(400,1700,400,200,500);
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
function setup_bd_while_list(){
    clean();
    var activity="me.piebridge.prevent/me.piebridge.prevent.ui.PreventActivity"
    result=openpackage(activity);

    sleep(5000);
            //无障碍-Daemon
            try{
                id("me.piebridge.prevent:id/filter_query").setText("无障碍-Daemon");
                sleep(500);
                className("android.widget.ListView").findOnce().child(0).click();
                result=click("不再阻止");
                if(result!=true){
                    back();
                }
                }catch(e){
                 }
                 sleep(1000);
                //海趣助手
                try{
                id("me.piebridge.prevent:id/filter_query").setText("海趣助手");
                sleep(500); 
                className("android.widget.ListView").findOnce().child(0).click();
                result=click("不再阻止");
                if(result!=true){
                    back();
                }
                }catch(e){
                }
                sleep(1000);
                //海趣守护
                try{
                id("me.piebridge.prevent:id/filter_query").setText("海趣守护");
                sleep(500);
                className("android.widget.ListView").findOnce().child(0).click();
                result=click("不再阻止");
                if(result!=true){
                    back();
                }
                }catch(e){
                }
                sleep(1000);
                //Auto.js
                try{
                id("me.piebridge.prevent:id/filter_query").setText("Auto.js");
                sleep(500);
                className("android.widget.ListView").findOnce().child(0).click();
                result=click("不再阻止");
                if(result!=true){
                    back();
                }
                }catch(e){
                }
                sleep(1000);
                //钛备份
                try{
                id("me.piebridge.prevent:id/filter_query").setText("钛备份");
                sleep(500);
                className("android.widget.ListView").findOnce().child(0).click();
                result=click("不再阻止");
                if(result!=true){
                    back();
                }
                }catch(e){
                }


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


