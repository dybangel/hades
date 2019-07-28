var thiscommon=require("mycommon.js");
var thiswipe=require("myswipe.js");
ra = new RootAutomator();


toast("start...");

setup_screen_always_light();
setup_bd_while_list();
assist_close();
setup_secret_all();
alert("全部执行完成");
//关闭辅助优化
function assist_close(){
    clean();
    var activity="com.android.settings/com.letv.leui.settings.LeUIMainSettings"
     result=thiscommon.openpackage(activity);
     sleep(1500);
     Swipe(400,1700,400,200,500);
     sleep(1500);
     Swipe(400,1700,400,200,500);
     sleep(1500)
    
    
     click("辅助功能");
     sleep(1500);
     var switch_state=id("android:id/switchWidget").findOnce().checked();
     if(switch_state){
    thiscommon.clickxy_for_ele(id("android:id/switchWidget").findOnce());
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
     result=thiscommon.openpackage(activity);
     sleep(1500);
     click("应用权限管理");
     sleep(1500); 
    
    if(1==k){
    click("位置信息")  
    }else if(2==k){
    click("电话")
    }else if(3==k){
    click("短信")
    }else if(4==k){
     click("通讯录")
    }else if(5==k){
     click("存储空间")
    }else if(6==k){
     click("相机")
    }
    sleep(5000);
    
    setup_secret();
    
    }//for end;  
}
function setup_secret(){
    var result=className("com.letv.shared.widget.slide.LeSlidePager").exists();
    //上滑11次
    var swipeupcount=13
    for(var j=1;j<=swipeupcount;j++){
      
        //sleep(1500);
        try{
            var main=className("com.letv.shared.widget.slide.LeSlidePager").findOnce().child(0).child(0).child(0).child(0);
            for(var i=0;i<main.childCount();i++){
                sleep(500);
            //   var switchtext=main.child(i).child(2).child(0).text();
               var checked=main.child(i).child(2).child(0).checked();
            
                if(checked==false){
                    sleep(400);
                   // main.child(i).checked=true;
                  //toast("exit.....");
                    //exit();
                    thiscommon.clickxy_for_ele(main.child(i));
                    sleep(500)
                    try{
                        click("拒绝");
                    }catch(e){
    
                    }
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
     result=thiscommon.openpackage(activity);
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
              thiscommon.clickxy_for_ele(thisparent);
              }
toast("已经打开屏幕常亮");  
}
function setup_bd_while_list(){
    clean();
    var activity="me.piebridge.prevent/me.piebridge.prevent.ui.PreventActivity"
    result=thiscommon.openpackage(activity);

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
                id("me.piebridge.prevent:id/filter_query").setText("海趣守护1.1");
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
    thiscommon.clickxy_for_ele(id("com.android.systemui:id/leui_recent_clear_all_txtview").findOnce());
    sleep(500);
    home();
}



