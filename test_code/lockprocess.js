
// auto();
// home();
// sleep(1000);
// recents();
// requestScreenCapture();

// var 未点赞 = images.read("/mnt/sdcard/脚本/2.png")
// sleep(1000);
// var b =findImage(

// captureScreen(),未点赞,{

// region:[ 540,1460,360,888 ],

// threshold:0.8

// });
// sleep(1000);

// if(b){

// toastLog("找到了"+b);
// log(b);

// }else{

// toastLog("未找到");

// }

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
   

//打开守护
function reg_haiqushouhu(){

    activitys="com.example.linyuming.broadcasttest/com.example.linyuming.broadcasttest.MainActivity";
    openpackage(activitys);
    sleep(4500);


}

reg_haiquzhushou();
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

             var haiquapp = images.read("/mnt/sdcard/脚本/1.png");

             var haiqushouhu = images.read("/mnt/sdcard/脚本/2.png");

             var lock = images.read("/mnt/sdcard/脚本/3.png");

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
    toast("执行完成");
    home();
}else{
    toast("方法执行失败");
    home();
}