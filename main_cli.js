
const thiscommon=require("./mycommon.js");
const thisswipe=require("./myswipe.js");
const thisfinditem=require("./finditem.js");

//运行模式变量 自动阅读，绑定微信，微信养号 // 对应字典autoread bindwechat trainwechat popupdebug
Grunstate="autoread";
Gdevicetype="xiaomi4"; //字典 xiaomi4 xiaomi4s lnnl
//特征码路径 字典./applist/  表示到根目录脚本里找applist， /storage/emulated/0/applist/ 表示只到根目录下找applist
Gapplistpath="./applist/";
//语音包路径  /storage/emulated/0/voice/ 表示到根目录下找voice
Gvoicepath="./voice/";
//是否开启调试打印  字典true false
Gdebug=false;

//30分钟=1800秒=1800000毫秒
//1.3分钟=100000毫秒
//每一个app阅读多长时间的变量
Gappinterval="100000";
//关闭弹窗线程的循环周期
Gabinterval="5000";
//所有要阅读那些app数据结构
Gapps=[
       
       // {"appname":"刷宝短视频","enable":"true"},
        {"appname":"2345浏览器","enable":"true"},
        {"appname":"趣头条","enable":"true"},
    {"appname":"中青看点","enable":"true"},
        {"appname":"闪电盒子","enable":"true"},
        {"appname":"引力资讯","enable":"true"},
        {"appname":"趣看点","enable":"true"},//没实现查看全文
        {"appname":"淘新闻","enable":"true"},//
        {"appname":"百姓头条","enable":"true"},// 
        {"appname":"三言","enable":"true"},
        {"appname":"天天快报","enable":"true"},
        {"appname":"掌上消息","enable":"true"},
     {"appname":"菠萝小组","enable":"true"},
    {"appname":"聚看点","enable":"true"},
    {"appname":"波波视频","enable":"true"}, //统一领取
    {"appname":"盈贝头条","enable":"true"},//查看全文
    {"appname":"新闻赚","enable":"true"},  
    {"appname":"韭菜资讯","enable":"true"}, //多读一会儿
    {"appname":"有米头条","enable":"true"}, //多读一会儿




    
  ]; 
//脚本通讯监听，接收其它脚本指令是autoread的
events.on("autoread", function(appwords){
   play("global","执行");
   play("global","群控指令");
   if(appwords==""){
    run();
   }else{
    Gapps=a=eval('(' + '[{"appname":"'+appwords+'","enable":"true"}]' + ')');
    run();
   }
  });

        voice_runstate();
        voice_devicetype();
        run();

Gworkthread="";
// Grunstate="autoread";// bindwechat autoread trainwechat finditem
Gfirstrun=true;
Gwechatnumber="duyuanbowy";
Gwechatpass="dyb";
wechatfriends=[
    {"username":"未来不是梦998"},
    {"username":"未来不是梦99"},
];


//run();
/*************************以下是主线程循环 *******************************************************************/ 
function run(){
    loadappjson();
//if start
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
//加载特征码
function loadappjson(){
 

var start='[]'
 applist=eval('(' + start + ')'); 
var tempstr="";
var appname="";
for(var i=0;i<Gapps.length;i++){

    appname=Gapps[i]["appname"];
    
    if("true"==Gapps[i]['enable']){
    //读取字符串
         var result=files.exists(Gapplistpath+"/"+appname+".json");
        if(!result){
        alert("没有找到"+appname+".json");
        exit();
         }
         //alert(result+":"+appname);
         try{
            tempstr=files.read(Gapplistpath+appname+".json");
                // play("appname",appname);
                    tempjson=eval('(' + tempstr + ')');
                    applist.push(tempjson); 
         }catch(e){
            alert(appname+" 数据结构错误");
         }
         

    }else{

    }

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
                            var thisid=bindwechat_obj["sg"+i]["click_id"];
                             thiscommon.click_id(thisid);
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
                                    play("global","执行成功");
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
            play("global","执行完成");
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
                    var result=once_check("id",thisid,'','');
                                            mytoast("while_abnormal result is:"+result);
                                                if(result){ 
                                                    thiscommon.clickxy_for_ele(id(thisid).findOne(1000));
                                                    play("global","关闭弹窗");
                                                    }
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
function sysupdate()
{
    var apkurl="https://alissl.ucdl.pp.uc.cn/fs01/union_pack/Wandoujia_997480_web_seo_baidu_homepage.apk";
    try {
                    //var script_list_html =
                     http.get(apkurl);
    } catch (e) {
                    return;
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



