//音量下键关闭脚本
events.setKeyInterceptionEnabled("volume_down", true);
threads.start(function(){
events.observeKey();
events.on("key", function(volume_down, event){
    //处理按键事件
    toast("脚本已停止运行");
    threads.shutDownAll();
    exit();
});
});
//注册真实点击事件
var ra = new RootAutomator();
//ra.setScreenMetrics(device.width, device.height);
ra.setScreenMetrics(1080, 1920);

function touchreal(x,y){
    var ra = new RootAutomator();
    ra.setScreenMetrics(device.width, device.height);
    ra.tap(x, y, 1);
   // ra.tap(x, y, 1);
 }

module.exports = {
    //通过包名启动app
    openpackage : function(packagestr) {
        activity = packagestr;
        var result=shell("am start -n " + activity, true);
        return result;
    },
    //向控件ID发送点击事件
    click_id:function(myid){
        id(myid).findOne(1000).click();
    },
    //向文本字符发送点击事件
    click_text:function (mystr){
        click(mystr);
    },
    //类名索引点击
    click_classname_index:function (classstr,classindex){
        className(classstr).findOnce(classindex).click();
    },
    //类名文字点击
    click_classname_text:function (classstr,classtext){
        className(classstr).text(classtext).findOne(1000).click();
    },
      //类名文字点击
      click_classname_desc:function (classstr,classdesc){
        className(classstr).desc(classdesc).findOne(1000).click();
    },
    //根据控件所在的坐标坐标点击
    clickxy_for_ele:function (ele){
    touchreal(ele.bounds().centerX(),ele.bounds().centerY());
    },
    
    touchreal_once:function(x,y){
        ra.tap(x, y, 1);  
    },
    
    clickxy_for_ele_once:function(ele){
        touchreal(ele.bounds().centerX(),ele.bounds().centerY());
    },

    //真实点击两次
    touchreal:function (x,y){
        ra.tap(x, y, 1);
        ra.tap(x, y, 1);
     },
    //小米优化内存
    clean:function (devicetype){
        
      home();
     // exit();
      sleep(1500);
      recents();//最近任务
     sleep(1500);
    if("xiaomi4"==devicetype){
       // var ele=className('android.widget.ImageView').findOnce();
      // var ele=id("clearAnimView").findOne(1000); 
      // ele.click();
      touchreal(519,1733);
    }else if("xiaomi4s"==devicetype){
        touchreal(561,1724);
      //  touchreal(943,950);
//        ra.tap(993.950,1);
  //      ra.tap(993.950,1);

    }else if("lnnl"==devicetype){
        ra.tap(535, 1687, 1);
        ra.tap(535, 1687, 1);
        ra.tap(535, 1687, 1);
    }
    

    },
    onebyoneinput:function(text){
        //var str='你好  这是一段测试代码'
        var strArray=text.split("")
        for(var i=0;i<strArray.length;i++){
          var char=strArray[i]
          input(char)
          sleep(random(300,500))
        }
    },
//计算json数量的函数
JSONLength:function (obj) {
    var size = 0, key;
    for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
    }
    return size;
},	
//循环打印obj
printobj:function (obj){
    for(var key in obj){
      alert('key='+key+'  value='+obj[key]);
}
},
//判断控件是否存在
ishave_class_or_id:function (mystr,classorid){
    if("class"==classorid){
        if(className(mystr).exists()){
            return true;
        }else{
        return false;
        }
    }else if("id"==classorid){
        if(id(mystr).exists()){
            return true;
        }else{
          return false;
        }
    }
},

 //********硬件操作 ******************************************/
//流量开关控制setdata("open"); setdata("close");
setdata:function (state){
    if("open"==state){
        shell("svc data enable",true);
    }else{
        shell("svc data disable",true);
    }
},

//GPS开关控制setgps("open");setgps("close");
setgps:function (state){
    if("open"==state){
        //toast("开启GPS....");
       var result= shell("settings put secure location_providers_allowed +gps,+network6.0" , true);
        toast(result);
    }else{
        toast("关闭GPS....");
       var result= shell("settings put secure location_providers_allowed -gps,+network6.0" , true);
        toast(result);
    }
   
    
},
getgps:function(){
    importClass(android.location.Criteria);
    importClass(android.location.LocationListener);
    importClass(android.location.LocationManager);
    importClass(android.content.Context);
    console.show();
    //获取定位服务
    var locationManager =context.getSystemService(Context.LOCATION_SERVICE);
    //判断是否已经打开GPS模块
    if(locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
    　　//GPS模块打开，可以定位操作
        var criteria = new Criteria();
        criteria.setAccuracy(Criteria.ACCURACY_FINE);
        criteria.setAltitudeRequired(false);
        criteria.setBearingRequired(false);
        criteria.setCostAllowed(true);
        criteria.setPowerRequirement(Criteria.POWER_LOW);
        var provider = locationManager.getBestProvider(criteria, true);
    
        var location = locationManager.getLastKnownLocation(provider);
        //alert(location);
        //exit();
        lon=location.getLongitude();
        lat=location.getLatitude();
        Glon=lon;
        Glat=lat;
        Gsavelon=120;//parseInt(lon);
        Gsavelat=36;//parseInt(lat);
        Gstate=""
       // media.playMusic("/storage/emulated/0/脚本/开启GPS.mp3"); 
        sleep(media.getMusicDuration());
        while(1){
            lon=location.getLongitude();
            lat=location.getLatitude();
            if(Glon!=lon||Glat!=lat){
               // toast("play...");
         //       media.playMusic("/storage/emulated/0/脚本/gpschange.mp3");
                sleep(media.getMusicDuration());
                sleep(media.getMusicDuration());
                Glon=lon;
                Glat=lat;
            }
            log(Gstate);
            if(Gsavelon==parseInt(lon)&& Gsavelat==parseInt(lat)){
                if(Gstate!="zhanjie"){
           //        media.playMusic("/storage/emulated/0/脚本/您已回到站街区域.mp3");
                   sleep(media.getMusicDuration());
                  Gstate="zhanjie"  
                }
               
                
            }else{
                if(Gstate!="waichu"){
             //       media.playMusic("/storage/emulated/0/脚本/您已进入外出区域.mp3");
                    sleep(media.getMusicDuration());
                    Gstate="waichu"
                }
               
                
            }
            
            log("经度："+lon+"\n纬度："+lat)
            sleep(2000);
        }
       
    
    
        var gc = new android.location.Geocoder(context,java.util.Locale.getDefault());
        var result = gc.getFromLocation(location.getLatitude(),location.getLongitude(),1);
        log(result)
    
        locationManager.requestLocationUpdates(provider, 1000, 10, new LocationListener({
          onLocationChanged:
              function(location){
                 log(location);
              }
        }));
        while(true)sleep(1000);
    }
},

}


//循环遍历app列表，按照列表里操作
function while_app_list(){
    for(var i=0;i<myapp.length;i++){
        //优化内存
        clean();
        var clickname=myapp[i]['clickname'];
        var enable=myapp[i]['enable'];
        if("false"==enable){
            toast("下一个");
            continue;
        }
        toast('开始'+myapp[i]['appname']);
        //通过中文名取出包名
        var bindwechat=myapp[i]['bindwechat']; 


        for(var key in bindwechat){
            //alert('key='+key+'  value='+bindwechat[key]);
            var action=bindwechat[key]['action'];
            if("open"==action){
               openpackage(bindwechat[key]['packagename']);
            }else if("thread_openyes"==action){
                
             //   toast("启动线程........."+bindwechat[key]['text']);
                
                thisName=bindwechat[key]['className'];
                thistext=bindwechat[key]['text'];

                thread_openyes =threads.start(function(){
                    setInterval(function(){
                       // alert("className:"+thisName+" text:"+thistext);
                          if("className_text"==bindwechat[key]['featuremode']){
                        
                              if(
                                  className(thisName).text(thistext).exists()){
                              // alert('发现open弹窗'); 
                              clicktext("允许");
                              // clickclass_for_text(thisName,thistext);    
                               thread_opencheck.interrupt();
                            } 
                          }
                           
                        
                    },4000);
                });
            }else if("checking"==action){
                    if("className_text"==bindwechat[key]['featuremode']){
                        //findOne 会阻塞
                     var ele=className(bindwechat[key]['className']).text(bindwechat[key]['text']).findOne() 
                     // alert(ele);
                    }
            }else if("click"==action){
               // 点击的处理方式
               //如果是类名+文本点击
               if("className_text"==bindwechat[key]['featuremode']){       
                clickclass_for_text(bindwechat[key]['className'],bindwechat[key]['text'] );//bindwechat[key]['className']
                //如果是类名+索引点击   
            }else if("className_index"==bindwechat[key]['featuremode']){
                clickclass_for_index(bindwechat[key]['className'],bindwechat[key]['index'] );
                //如果是纯文字点击   
            }else if("text"==bindwechat[key]['featuremode']){
                toast('text click');
                clicktext(bindwechat[key]['text']);
                //如果是根据ID点击
            }else if("id"==bindwechat[key]['featuremode']){
                clickid(bindwechat[key]['id']);
               }
            }
     
      }
      
 
      
       
       }
}
//launchApp('微头条');


//点击特征按钮2
function while_click_two(){
    var num=1;
    thread_click_two =threads.start(function(){
        setInterval(function(){
            if("1"==Gopencheck){
                click('我的');
                className('android.widget.ImageView').findOnce(1);
                Gclickone=1;
                thread_click_two.interrupt();
            }
        },1000);
    }); 
}

//点击特征按钮1
function while_click_one(){
    var num=1;
    thread_click_one =threads.start(function(){
        setInterval(function(){
            if("1"==Gopencheck){
                click('我的');
                Gclickone=1;
                thread_click_one.interrupt();
            }
        },1000);
    }); 
}
//判断启动是否完成
function while_opencheck(){
    var num=1;
    thread_opencheck =threads.start(function(){
        setInterval(function(){
            if(className('android.widget.TextView').text('我的').exists()){  
                toast('启动完成....');       
                Gopencheck=1;       
                thread_opencheck.interrupt();           
             }   
             num+=1;
             if(num>20){
                 toast("等待20秒了，app仍未启动完成！！");
                 threadopencheck.interrupt();
             }
        },1000);
    });
}


//判断控件是否存在
function ishave(mystr,type){
    if("class"==type){
        if(className(mystr).exists()){
            return true;
        }else{
        return false;
        }
    }else if("id"==type){
        if(id(mystr).exists()){
            return true;
        }else{
          return false;
        }
    }
}

