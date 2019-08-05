
var ra = new RootAutomator();
toast("123");
 device.keepScreenOn(100000000);

//clean();
copydata_tolocal();
toast("安装钛备份");
installapp("/sdcard/tool/Titanium.apk");
sleep(15000);
toast("安装海趣");
installapp("/sdcard/tool/haiqu.apk");
sleep(15000);
alert("拷贝和安装完成");
exit();

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
            var elestr=className("android.widget.TextView").text("正在复制");
            if(elestr.exists()){

            }else{
                toast("检测到拷贝完成");
                break;
            }
            sleep(1000)
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

    //   click("手机存储");
    // sleep(1500);
    // elestr=className("android.widget.TextView").desc("搜索");
    // elestr.findOnce().click();
    // sleep(1000);
    // setText("tool");
    // sleep(1000);
    // elestr=className("android.widget.TextView").text("tool");
    //  clickxy_for_ele( elestr.findOnce());  
    //  sleep(2000);
    // elestr=className("android.widget.TextView").textContains("Titan");
    // alert(elestr.exists());exit();
    // clickxy_for_ele(elestr.findOnce());
    //alert("复制成功，请拔下U盘，连接充电器，执行其他自动操作脚本");


    }else{
        alert("手机未检测到U盘");
    }

    
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