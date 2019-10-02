
    toast("开始配置");
     //获取root权限
     var ra = new RootAutomator();
     //设置屏幕常亮100000秒，防止中途熄屏脚本停止运行
     device.keepScreenOn(100000000);
     //设置进程锁
    function jinchengsuo(){
    home();
    reg_haiqushouhu();
    auto();
    if(home()){
    sleep(1000);
    toast("开始查找符合条件的应用");
    if(!requestScreenCapture()){
        toast("请求截图失败");
        exit();
    }else{
        recents();

        sleep(1000);

        var z = 0;

        for(var i = 0; i <100; i++){

             var haiquapp = images.read("./res/1.png");

             var haiqushouhu = images.read("./res/2.png");

             var lock = images.read("./res/3.png");

            //  var wendang = images.read("/mnt/sdcard/脚本/4.png");
            
                var img1 = findImage(captureScreen(),haiquapp,{region:[ 540,1460,360,900 ],threshold:0.8});

                log("寻找海趣");


             var img2 = findImage(captureScreen(),haiqushouhu,{region:[ 540,1460,360,900 ],threshold:0.8});

                log("寻找守护");


             var img3 = findImage(captureScreen(),lock,{region:[ 540,1460,360,900 ],threshold:0.8});

                log("寻找锁图标");

            // var img4 = findImage(captureScreen(),wendang,{region:[ 540,1460,360,900 ],threshold:0.8});

            //     sleep(1000);
            //     log("寻找海趣");
                log(img1);
                log(img2);
                log(img3);
                // log(img4);
            if(z>1){
                break;
            }

            if((img1||img2)&&img3){
                z++;
            }
            
            if((img1||img2)&&!img3){

                log("发现应用");
                Swipe(720,1800,720,2300,1000);
                sleep(1000);
                log("下拉");
                Swipe(720,1800,300,1800,1000);
                log("左拉");
                sleep(1000);
                z++;

            }else{

                toast("该应用不符合条件1");
                log("图标不符合1");
                Swipe(720,1800,300,1800,1000);
                sleep(1000);
            }

            sleep(2000);
            

        }
    }
    toast("设置进程锁执行完成");
    home();
    }else{
    toast("设置进程锁方法执行失败");
    home();
    }
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
    Swipe(400,1000,400,200,500);
    sleep(3000);
    json_str=[{"item":"多任务键"},
    {"item":"主屏幕键"},
    {"item":"返回键"},
 ]
 for(var i=0;i<json_str.length;i++){
        click(json_str[i]["item"]);
        sleep(1000);
        click("无");
        back();
        sleep(1000);
 
 }
   // click("多任务键");
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
    //允许后台安装apk
    function setup_access_backupinstall(){
    clean();
    var activity="com.android.settings/com.letv.leui.settings.LeUIMainSettings"
     result=openpackage(activity);
     sleep(2500);
     //1139 160
     touchreal(1139,160);
     sleep(2000);
     setText("密码与安全");
     sleep(2000);
     elestr=className("android.widget.TextView").text("密码与安全");
     elestr.findOnce().click();
     sleep(2000);
     Swipe(400,1200,400,200,500);
     sleep(3000)
     elestr=className("android.widget.TextView").text("其他安全选项");
      clickxy_for_ele(elestr.findOnce(1));
     sleep(2000);
     elestr=className("android.widget.TextView").text("后台安装应用");
     clickxy_for_ele(elestr.findOnce().parent());
     sleep(2000);
     elestr=className("android.widget.TextView").text("允许");
     clickxy_for_ele(elestr.findOnce());
   sleep(2000);
     //  exit();

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
    
    function openpackage(packagestr) {
        activity = packagestr;
        var result=shell("am start -n " + activity, true);
        return result;
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
    //打开海趣
    function reg_haiquzhushou(){
   
    activitys="com.haiqu.autoread/com.stardust.auojs.inrt.SplashActivity";
    openpackage(activitys); 
    sleep(4500);
    click("取消倒计时");
    }
    //打开海趣守护
    function reg_haiqushouhu(){

    activitys="com.example.linyuming.broadcasttest/com.example.linyuming.broadcasttest.MainActivity";
    openpackage(activitys);
    sleep(4500);


    }
    toast("0设置进程锁");
    jinchengsuo();
    toast("1设置白名单");
    setup_bd_while_list();
    toast("通用设置");
    setup_access_backupinstall();
    //拷贝 还原数据
//    toast("1拷贝还原数据");
//    copydata_tolocal();
   
   home();
   toast("2设置屏幕常亮");
   setup_screen_always_light();
   
   toast("1设置白名单");
   setup_bd_while_list();
   
   toast("3关闭辅助自动优化，初始化虚拟键盘");
   assist_close();
   
//    toast("4设置开机运行");
//    setup_autorun();
    
   toast("4设置阅读app权限");
   setup_secret_all();
   home();
   alert("初始化配置完成");
