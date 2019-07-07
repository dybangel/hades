
const thiscommon=require("./mycommon.js");
const thisswipe=require("./myswipe.js");

Grunstate="autoread"; //autoread bindwechat trainwechat
Gdevicetype="lnnl"; //字典 xiaomi4 xiaomi4s lnnl
Gapps=[
  //  {"appname":"北京知天下","enable":"true"},
    {"appname":"掌上消息","enable":"true"},
    {"appname":"有米头条","enable":"true"},
    {"appname":"有看头-热点头条","enable":"true"},
    {"appname":"波波视频","enable":"true"},
    {"appname":"盈贝头条","enable":"true"},
    {"appname":"新闻赚","enable":"true"},
    {"appname":"网易新闻极速版","enable":"true"},
    {"appname":"今日头条极速版","enable":"true"},
    {"appname":"百姓头条","enable":"true"},
    {"appname":"本地看点","enable":"true"},
   
   
   
    {"appname":"菠萝小组","enable":"true"},
    {"appname":"大众看点","enable":"true"},
    {"appname":"大众头条","enable":"true"},
    {"appname":"点点新闻","enable":"true"},
    {"appname":"翻翻头条","enable":"true"},
    {"appname":"淘看点","enable":"true"},
    {"appname":"精彩看点","enable":"true"},
    {"appname":"氪资讯","enable":"true"},
    {"appname":"快狗视频","enable":"true"},
    {"appname":"快看点","enable":"true"},
    {"appname":"唔哩头条","enable":"true"},
    {"appname":"蚂蚁看点","enable":"true"},
    {"appname":"蜜蜂看看","enable":"true"},
    {"appname":"牛牛资讯","enable":"true"},
    {"appname":"趣故事","enable":"true"},
    {"appname":"热点资讯","enable":"true"},
    {"appname":"刷宝短视频","enable":"true"},
    {"appname":"搜狐资讯","enable":"true"},
    {"appname":"淘集集","enable":"true"},
    {"appname":"淘头条","enable":"true"},
    {"appname":"天天快报","enable":"true"},
    {"appname":"天天趣闻","enable":"true"},
]; 

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
         abnormal_obj=applist[i]["abnormal"]
        toast('开始'+applist[i]['appname']);
        

 

    thiscommon.clean(Gdevicetype);
    //    while_closewindow("xiaomi4");
    
        try{    thread_abnormal.interrupt();}catch(e){};
        try{    thread_control.interrupt();}catch(e){};
        try{    thread_findnews.interrupt();}catch(e){};
        try{    thread_readnews.interrupt();}catch(e){};
        try{    thread_signin.interrupt();}catch(e){};
       
       

    //}
    //异常处理弹窗线程
    while_abnormal(abnormal_obj);
    //demon_abnormal(abnormal_obj);
    
    //控制线程--通用 该函数感知Grunstate的变化，调用对应的线程
    while_control(appname,packagename,activityname,open_obj,bindwechat_obj,signin_obj,autoread_obj);
    
    //阻塞运行打开app 
   // alert("打开")
    openAPP(appname,packagename,activityname,open_obj);
   //alert("开始倒计时");
    //每个app需要阅读的时间sleep
    //var thisinterval=3*100000;
    //30分钟=1800秒=1800000毫秒
    //var thisinterval=1800000;
    var thisinterval=100000;
    toast("阅读"+thisinterval+"毫秒......................");
    sleep(thisinterval);
    toast("准备开始下一个");

    //开启异常处理线程--通用
    Gfirstrun=false;
    }
    //for end
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
         var result=files.exists("/storage/emulated/0/applist/"+appname+".json");
        if(!result){
        alert("没有找到"+appname+".json");
        exit();
         }
         //alert(result+":"+appname);
         try{
            tempstr=files.read("/storage/emulated/0/applist/"+appname+".json");
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
                upcount+=1;
                var m=3;
                var n=2;
                //x 为向上滑动多少次后打开新闻
                var x=Math.round(Math.random()*(m-n))+n;
                //当upcount大于了x次数后，开始打开当前发现的新闻条目
                if(upcount>x){
                    //判断新闻条目是否存在
                    var ele=finditem(appname);
                    if(ele){
                        //如果存在，点击新闻
                       play("global","打开新闻");
                      thiscommon.clickxy_for_ele(ele);
                       //等待2秒，否则线程关闭，点击事件会无效
                        sleep(2000);
                        var result=false;
                        //最后判断二级页面特定控件是否存在，来确定是否打开成功
                        result=block_mode("while_findnews",thisfeaturemode,autoread_obj,'');
                   //     alert("result is"+result);
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
    play("global","打开");
    play("appname",appname);
    var featuremode=open_obj["featuremode"];
    if("undefined"==typeof(featuremode)){alert(appname+"open_obj[\"featuremode\"]数据结构错误");}
 
    thiscommon.openpackage(packagename+"/"+activityname);
        var result=false;
        // result=block_mode("openAPP",featuremode,open_obj,"")
        // if(result){
        //     play("global","打开成功");
        //    Gworkthread="openapp_stop";
        //    sleep(1000);
        //    thread_openApp.interrupt();
        // }else{
        //     play("global","打开失败");
        //    Gworkthread="openapp_fail"; 
        //    sleep(1000);
        //    thread_openApp.interrupt();
        // }

        // result=block_mode("openAPP",featuremode,open_obj,'')
        // if(result){
        //     play("global","打开成功");
        //     Gworkthread="openapp_stop";
        //     thread_openApp.interrupt(); 
        // }
       // sleep(30000);
       var thisnum=0;
       while(1){
          
          
                if(Number(thisnum) >30){
                  //  alert(thisnum);
                    play("global","打开失败");
                    //play("global","0");

                    Gworkthread="openapp_fail"; 
                    break;
                }
         if(featuremode=="classname"){
                    if( className(open_obj["classname"]).packageName(packagename).exists()){
                        play("global","打开成功");
                        Gworkthread="openapp_stop";
                        break;
                       // break;
                     //   thread_openApp.interrupt();   
                  }else{
                    // play("global","打开失败");
                    // Gworkthread="openapp_fail"; 
                    // break; 
                  }
           }else if(featuremode=="classname_text"){
          //  var result=block_check(featuremode,open_obj["classname"],open_obj["text"],'');
                        var classname=open_obj["classname"];
                        var text=open_obj["text"];
                    if( className(classname).text(text).exists() ){
                        play("global","打开成功");
                        Gworkthread="openapp_stop";
                        break;
                      //  break;
                    }else{
                        // play("global","打开失败");
                        // play("global","0");
                        // Gworkthread="openapp_fail";  
                        // break;

                        
                    }
      
           }

           sleep(1000);
           thisnum+=1;
       }


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
      //     toast("this abx is is:"+"ab"+i+" and feautremode is:"+featuremode+" thisid is:"+thisid);
         // toast("this is abnormal.."+thisid+ " allcount is:"+thiscommon.JSONLength(abnormal_obj)+"  abx is:"+"ab"+i);
                var ele=id(thisid).exists();
           //     toast("ele is:"+ele);
                var result=once_check("id",thisid,'','');
           //  toast("result is:"+result);
                 if(result){ 
                   // thiscommon.click_id(thisid);
                    thiscommon.clickxy_for_ele(id(thisid).findOne(1000));
                     play("global","关闭弹窗");
                    }
            
        }else if("classname_text"==featuremode){
            var thisclass=abnormal_obj["ab"+i]["classname"];
            var thistext=abnormal_obj["ab"+i]["text"];
            var result=block_check(featuremode,thisclass,thistext,'');
       //   alert(thisclass+":"+thistext);
            if(result){
                thiscommon.click_classname_text(thisclass,thistext);
                //play("global","关闭弹窗");
              
            }
        }

}
//for end
  },5000);
            });
}
// while_abnormal的守护线程，有时候click事件会阻塞，所以每隔5秒杀掉abnormal线程再启动
function demon_abnormal(abnormal_obj){
    toast("this is demon_abnormal...");
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
                        toast("开始签到...");
                        try{thread_signin.interrupt();}catch(e){};
                        while_signin(signin_obj);
                        
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
   // toast("this is once_check.."+checktype);
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
           var ele=id(f1).exists();
          // toast("ele is:"+ele);
           if(ele){
            id(f1).findOne(1000).click();
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
    alert(obja);
    var thisclassname=obj[obja]["classname"];
    var thisdesc=obj[obja]["desc"];
    alert("thisclassname is:"+thisclassname+" this desc is:"+thisdesc);
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
    result=block_check(featuremode,thisid,'','');
    return result;
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
                var ele=id(f1).exists();
                if(ele){
                    
                    return true;
                }
            }    
    
    }


}
//播放声音
function play(subpath,appname){
   // return true;
//    media.playMusic("/storage/emulated/0/脚本/voice/"+subpath+"/"+appname+".mp3");
   var voicefile="/storage/emulated/0/voice/"+subpath+"/"+appname+".mp3";

    var result=files.exists(voicefile);
    if(!result){
        toast("没有找到语音包"+voicefile+".mp3");
    }else{
        media.playMusic("/storage/emulated/0/voice/"+subpath+"/"+appname+".mp3");
        //media.playMusic("./voice/"+subpath+"/"+appname+".mp3");
      
        sleep(media.getMusicDuration());
        ///storage/emulated/0/
    }

}
//用于检索非广告的新闻条目
function finditem(appname){
//Gworkthread="finditem_start"
v4feature="android.support.v4.view.ViewPager";
v7feature="android.support.v7.widget.RecyclerView";
androidx="androidx.recyclerview.widget.RecyclerView"
    //悦头条
//toast("this is findnewitem");

switch (appname){
    case "掌上热点":
                    //掌上热点
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).text();
                       //lert(ltitle);
                       if("广告"==main.child(i).child(0).child(2).child(1).text()||main.child(i).child(0).child(0).child(1).child(1).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                    
                    }catch(e){
                    play("global",i);
                   play("global","点击")
                  return main.child(i);

                }
            }
    break;
    case "惠头条":
                    //惠头条
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).child(0).text();
                       //alert(ltitle);
                       if("广告"==main.child(i).child(0).child(0).child(2).child(0).child(1).text()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                    
                    }catch(e){
                    play("global",i);
                play("global","点击")
                return main.child(i);

                }
            }
    break;
    case "快看点":
                    //快看点
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if("广告"==main.child(i).child(0).child(0).child(1).child(0).text()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击");
                            return main.child(i); 
                       }
                    
                    }catch(e){
                    play("global",i);
                play("global","点击")
                return main.child(i); 

                }
            }
    break;
    case "引力资讯":
                    // //引力资讯
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).child(0).child(0).text();
                       //alert(ltitle);
                       if("广告"==main.child(i).child(0).child(2).child(0).className()){
                    
                                play("global",i);
                                play("global","点击");
                                return main.child(i);
                       }else{
                            play("global",i);
                            play("global","广告不点击"); 
                            return false;
                       }
                        
                   }catch(e){
            
                     play("global",i);
                   play("global","点击")
                   return main.child(i);

                   }
            }
    break;
    case "头条多多":
             //头条多多
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(1).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(1);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).text();
                       //alert(ltitle);
                       if("广告"==main.child(i).child(0).child(0).child(2).child(0).child(0).child(0).className()){
                    
                                play("global",i);
                                play("global","点击");
                                return main.child(i);
                       }else{
                            play("global",i);
                            play("global","广告不点击"); 
                            return false;
                       }
                    
                    }catch(e){
                         play("global",i);
                       play("global","点击")
                       return false;

                }
            }
        break;
         case "天天快报":
                            //天天快报
                //1标识出主框架定界符
                var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<=subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(1).child(0).child(0).child(2).child(1).text();
                           //alert(ltitle);
                           if("android.widget.LinearLayout"==main.child(i).className()){
                        
                                    play("global",i);
                                    play("global","点击");
                                    return main.child(i);
                           }else{
                                play("global",i);
                                play("global","点击"); 
                                return main.child(i);

                           }
                            
                      }catch(e){
                
                        play("global",i);
                      play("global","点击")
                      return main.child(i);

                      }
                 }
        break;
         case "唔哩头条":
                            //唔哩头条
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).text();
                           //alert(ltitle);
                           if("android.widget.LinearLayout"==main.child(i).className()){
                        
                                    play("global",i);
                                    play("global","点击");
                                    return main.child(i);
                           }else{
                                play("global",i);
                                play("global","点击"); 
                                return main.child(i);

                           }
                            
                       }catch(e){
                
                         play("global",i);
                       play("global","点击")
                       return main.child(i);

                       }
                }
        break;
         case "刷宝短视频":
             //刷宝短视频s
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //先得到有多少个子节点
            var subcount=ele.findOnce(0).childCount();
            //alert(subcount);exit();
            //在将主框架实例化
            var main=ele.findOnce();
            for(var i=0;i<subcount;i++){
                   try{
                       var ltitle=main.child(i).child(1).child(0).text();
                      // alert(ltitle);
                            try{
                                var substr=main.child(i).child(3).child(1).child(0).child(1).id();
                               // alert(id+"::"+ltitle);
                                //如果能顺利执行反而是广告
                                    play("global",i);
                                    play("global","广告不点击")
                                    return false;
                            }catch(e){
                                //抛出异常的，反而是正常的
                                play("global",i);
                                play("global","点击"); 
                                return main.child(i);
                            }
                        
                   }catch(e){
                    //alert(e)
                    play("global",i);
                    play("global","广告不点击")
                    return false;

                   }
            }
        break;
         case "全民头条":
                        //全民头条
            //1标识出主框架定界符
            var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).child(0).child(0).child(2).child(0).child(0).text();
                       //alert(ltitle);
                       if("android.widget.FrameLayout"==main.child(i).className()){
                                play("global",i);
                                play("global","点击");
                                return main.child(i);
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);

                       }
                        
                   }catch(e){
            
                     play("global",i);
                   play("global","点击")
                   return main.child(i);

                   }
             }
        break;
        case "乐趣头条":
                        //乐趣头条
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).text();
                      //alert(ltitle);
                       if("android.widget.LinearLayout"==main.child(i).className()){
                    
                                play("global",i);
                                play("global","点击");
                                return main.child(i);
                       }else{
                            play("global",i);
                            play("global","广告不点击"); 
                            return false;
                        }
                        
                   }catch(e){
            
                     play("global",i);
                   play("global","点击")
                   return main.child(i);

                   }
            }
        break;
        case "韭菜资讯":
            // //韭菜资讯
            // //1标识出主框架定界符
            var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).child(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0).child(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if("android.widget.RelativeLayout"==main.child(i).className()||"android.widget.FrameLayout"==main.child(i).className()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "趣头条":
                        //趣头条
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if("android.widget.ImageView"==main.child(i).child(0).className()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;
                  }
            }
        break;
        case "薪头条":
            
            //薪头条
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(2).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "聚看点":
            //聚看点
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(1).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "精彩看点":
            //精彩看点
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(1).text()=="广告"||"android.widget.FrameLayout"==main.child(i).child(0).className()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "牛牛资讯":
                        //牛牛资讯
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(1).text()=="广告"||main.child(i).child(2).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "热点资讯":
            //热点资讯
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(0).child(2).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "淘最热点":
            //淘最热点
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(2).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
       case "淘头条":
                    //淘头条
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if("android.widget.RelativeLayout"==main.child(i).className()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
       break;
       case "氪资讯":
            //氪资讯
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if("android.widget.FrameLayout"==main.child(i).className()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
       break;
       case "搜狐资讯":
                    //搜狐资讯
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(1).child(0).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;
                  }
            }
       break;
      case "惠视频":
                    //惠视频
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(1).text();
                       //alert(ltitle);
                       if(main.child(i).child(1).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
      break;
       case "快马小报":
                    //快马小报
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if(main.child(i).child(2).text()=="广告"){
                        
                                    play("global",i);
                                    play("global","广告不点击");
                                    return false;
                           }else{
                                play("global",i);
                                play("global","点击"); 
                                return main.child(i);
                           }
                            
                     }catch(e){
                
                         play("global",i);
                       play("global","广告不点击")
                       return false;

                      }
                }
       break;
       case "快狗视频":
                        //快狗视频 注意没有二级页面
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //先得到有多少个子节点
                var subcount=ele.findOnce(0).childCount();
                alert(subcount);exit();
                //在将主框架实例化
                var main=ele.findOnce();
                for(var i=0;i<subcount;i++){
                       try{
                           var ltitle=main.child(i).child(1).child(0).text();
                          // alert(ltitle);
                                try{
                                    var substr=main.child(i).child(3).child(1).child(0).child(1).id();
                                   // alert(id+"::"+ltitle);
                                    //如果能顺利执行反而是广告
                                        play("global",i);
                                        play("global","广告不点击")
                                        return false;
                                }catch(e){
                                    //抛出异常的，反而是正常的
                                    play("global",i);
                                    play("global","点击"); 
                                    return main.child(i);
                                }
                            
                       }catch(e){
                        //alert(e)
                        play("global",i);
                        play("global","广告不点击")
                        return false;
                       }
                }
        break;
        case "微头条":
                        //微头条
            //1标识出主框架定界符   false
            var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).child(0).child(0).child(1).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0).child(0).child(0).child(1);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).dec();
                       //alert(ltitle);
                       if(main.child(i).child(1).dec()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;
                  }
            }
        break;
        case "天天趣闻":
                        //天天趣闻
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       if(main.child(i).child(1).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "全民头条":
                        //全民头条6
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                      // alert(ltitle);
                       if(main.child(i).child(1).text()=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "光影新闻":
                        //光影新闻
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(1).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(1);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                      // alert(ltitle);
                       if(main.child(i).child(1).text()=="百度广告"||main.child(i).child(1).text()=="广点通广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }
        break;
        case "今日热闻":
                    //今日热闻  需要完善
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       //var substr=main.child(i).child(0).child(0).child(0).child(0).child(0).child(2).text();
                       //if("android.widget.LinearLayout"==main.child(i).className()){
                        if("android.widget.RelativeLayout"==main.child(i).className()||main.child(i).child(1).text()=="广告"){
                       // if(substr=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                           play("global",i);
                           play("global","点击"); 
                           return main.child(i);
                       }
                        
                   }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                   }
            }
        break;
        case "二头条":
                    //二头条
        //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            // //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                try{
                    //取出标题，主要是为了验证正确性
                    var ltitle=main.child(i).child(0).text();
                    //alert(ltitle);
                    //var substr=main.child(i).child(0).child(0).child(0).child(0).child(0).child(2).text();
                    //if("android.widget.LinearLayout"==main.child(i).className()){
                        if("android.widget.FrameLayout"==main.child(i).child(0).className()){
                    // if(substr=="广告"){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                    }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                    }
                        
                }catch(e){
            
                    play("global",i);
                play("global","广告不点击")
                return false;
                }
            }
        break;
        case "中青看点":
        //中青看点        
        //1标识出主框架定界符
        var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
        //2定位到结构块层级父节点，并取出结构块数量
        var subcount=ele.findOnce(0).child(0).child(0).childCount();
        //检测一下子节点数量是否正确
        //alert(subcount);exit();
        //将主框架实例化
        var main=ele.findOnce(0).child(0).child(0);
        for(var i=0;i<subcount;i++){
            try{
                //取出标题，主要是为了验证正确性
                var ltitle=main.child(i).child(0).text();
                //alert(ltitle);
                if(main.child(i).child(2).id()=="tv_jingxuan"){
                
                            play("global",i);
                            play("global","广告不点击");
                            return false;
                }else{
                        play("global",i);
                        play("global","点击"); 
                        return main.child(i);
                }
                    
            }catch(e){
        
                play("global",i);
            play("global","广告不点击")
            return false;

            }
        }
        break;
    case "2345浏览器":
    //1标识出主框架定界符
        var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
        //2定位到结构块层级父节点，并取出结构块数量
        var subcount=ele.findOnce(0).childCount();
        //检测一下子节点数量是否正确
        //alert(subcount);exit();
        //将主框架实例化
        var main=ele.findOnce(0);
        for(var i=0;i<subcount;i++){
            try{
                //取出标题，主要是为了验证正确性
                var ltitle=main.child(i).child(0).text();
                //alert(ltitle);
                if(main.child(i).child(1).text()=="广告"){
                
                            play("global",i);
                            play("global","广告不点击");
                              return false;
                }else{
                        play("global",i);
                        play("global","点击"); 
                        return main.child(i);
                }
                    
            }catch(e){
        
            play("global",i);
            play("global","广告不点击")
            return false;
            }
        }
    break;
    case "北京知天下":
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //先得到有多少个子节点
            var subcount=ele.findOnce(0).childCount();
            //在将主框架实例化
            var main=ele.findOnce();
            for(var i=0;i<subcount;i++){
                   try{
                        var substr=main.child(i).child(0).child(2).child(0).text();
                        var ll=main.child(i).child(0).child(0).text();
                      //  alert(ll);
                        if(substr=="广告"){
                            play("global",i);
                            play("global","广告不点击");
                            return false
                        }else{
                            return main.child(i);
                            play("global",i);
                            play("global","点击"); 
                        }
                   }catch(e){
                    //alert(e)
                    return false;
                    play("global",i);
                    play("global","广告不点击")
                   }
            }
    break;
        case "掌上消息":
         var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
        //先得到有多少个子节点
        var subcount=ele.findOnce(0).childCount();
        //在将主框架实例化
        var main=ele.findOnce();
        for(var i=0;i<subcount;i++){
            try{
                //  var substr=main.child(i).child(0).child(2).child(0).text();
                    var ll=main.child(i).child(0).text();
                   // alert(ll);
                    //if(substr=="广告"){
                    //   play("global",i);
                    //  play("global","广告不点击");
                    //}else{
                        
                        play("global",i);
                        play("global","点击");
                        return main.child(i); 
                // }
            }catch(e){
                //alert(e)
                play("global",i);
                play("global","广告不点击")
                return false;
            }

        }
        break;
        case "有米头条":
            var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
            //先得到有多少个子节点
            var subcount=ele.findOnce(0).childCount();
            //在将主框架实例化
            var main=ele.findOnce();
            for(var i=0;i<subcount;i++){
                try{
                        var ltitle=main.child(i).child(0).text();
                      //  alert(ltitle);
                        if(ltitle!=""){
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                        }else{
                            play("global",i);
                            play("global","广告不点击")
                            return false;
                        } 
                }catch(e){
                    //alert(e)
                    play("global",i);
                    play("global","广告不点击")
                    return false;
                }
                }
        break;
        case "有看头-热点头条":
        break;
        case "波波视频":
            //波波视频 注意没有二级页面
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //先得到有多少个子节点
                var subcount=ele.findOnce(0).childCount();
                //alert(subcount);exit();
                //在将主框架实例化
                var main=ele.findOnce();
                for(var i=0;i<subcount;i++){
                    try{
                        var ltitle=main.child(i).child(1).child(0).text();
                        // alert(ltitle);
                                try{
                                    var substr=main.child(i).child(3).child(1).child(0).child(1).id();
                                // alert(id+"::"+ltitle);
                                    //如果能顺利执行反而是广告
                                        play("global",i);
                                        play("global","广告不点击")
                                        return false;
                                }catch(e){
                                    //抛出异常的，反而是正常的
                                    play("global",i);
                                    play("global","点击"); 
                                    return main.child(i);
                                }
                            
                    }catch(e){
                        //alert(e)
                        play("global",i);
                        play("global","广告不点击")
                        return false;
                    }
                }
        break;
        case "盈贝头条":
                            //1标识出主框架定界符
                var ele=className(androidx);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                    try{
                        //取出标题，主要是为了验证正确性
                        var ltitle=main.child(i).child(0).text();
                     //   alert(ltitle);
                        if(ltitle==""){
                            play("global",i);
                        play("global","广告不点击")
                        return false;
                        }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                        }
                      
                            
                    }catch(e){
                        //alert(e)
                        play("global",i);
                        play("global","广告不点击")
                        return false;
                    }
                }
        break;
        case "新闻赚":
                        //1标识出主框架定界符
            var ele=className(v4feature);//.className("android.widget.ListView");//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量 0 0 0 0 3 0
            //var subcount=ele.findOnce(0).childCount();
            var subcount=ele.findOnce(0).child(0).child(0).child(0).child(0).child(3).child(0).childCount();//.child(3);//.child().childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0).child(0).child(0).child(0).child(0).child(3).child(0);
            //多了会遮盖
            for(var i=0;i<subcount;i++){
                try{
                    
                    var bd=main.child(i).child(0).bounds();
                    var y1=bd.top;
                    var y2=bd.bottom;
                    if(y1>318 && y2<1770){
                        //取出标题，主要是为了验证正确性
                                var ltitle=main.child(i).child(0).desc();//.child(0).desc();
                                if(ltitle.indexOf("广告")>0){
                                    play("global","广告不点击")
                                    return false;
                                }else{
                                  //  alert(ltitle);
                                    play("global","点击");
                                    return main.child(i);
                                }

                    }

                        
                }catch(e){
                    play("global","广告不点击")
                    return false;
                }
            }
        break;
        case "网易新闻极速版":
          //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).text();
                      // alert(ltitle);
                       if(main.child(i).className()=="android.widget.LinearLayout"){
                        play("global",i);
                        play("global","广告不点击");
                        return false;
                       }else{
                        play("global",i);
                        play("global","点击");
                        return main.child(i);
                       }  
                   }catch(e){
                    //alert(e)
                     // var ltitle2=main.child(i).child(0).child(1).child(0);//.text();
                      // alert(ltitle2);
                     play("global",i);
                    play("global","广告不点击")
                    return false;
                   }
            }
        break;
        case "今日头条极速版":
            alert("未实现finditem");
        break;
        case "百姓头条":
                        //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                try{
                    //取出标题，主要是为了验证正确性
                    var ltitle=main.child(i).child(0).text();
                   // alert(ltitle);
                    try{
                        //  alert(main.child(i).child(4).text());
                            if(main.child(i).child(4).text()==""){
                            play("global",i);
                            //play("global","打开")
                            play("global","广告不点击");
                            return false;
                        }else{
                            play("global",i);
                            play("global","点击");
                            return main.child(i);
                        }
                    }catch(e){
                        
                            play("global",i);
                            play("global","点击");
                            return main.child(i);
                            
                    }
                    
                }catch(e){
            
                    play("global",i);
                    play("global","广告不点击")
                    return false;
                }
            }
        break;
        case "本地看点":
                        //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).text();
                    //   alert(ltitle);
                       if(ltitle!=""){
                        play("global",i);
                        play("global","点击");
                        return main.child(i);
                       }else{
                           play("global",i);
                          play("global","广告不点击")
                          return false;
                       }               
                   }catch(e){
            
                    // play("global",i);
                    //play("global","广告不点击")
                   }
            }
        break;
        case "菠萝小组":
                        //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                   try{
                       //取出标题，主要是为了验证正确性
                       var ltitle=main.child(i).child(0).child(0).child(0).text();
                     //  alert(ltitle);
                         play("global",i);
                         play("global","点击");
                         return main.child(i);
                   }catch(e){          
                     play("global",i);
                    play("global","广告不点击")
                    return false;
                   }
            }
        break;
        case "大众看点":
                        //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                try{
                    //取出标题，主要是为了验证正确性
                    var ltitle=main.child(i).child(0).text();
                    
                        if(ltitle==""){
                            var ltitle2=main.child(i).child(0).child(1).child(0).text();
                        //    alert(ltitle2);
                            var substr=main.child(i).child(0).child(1).child(1).child(1).text();
                            if(substr=="广告"){
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                            }else{
                                play("global",i);
                            play("global","点击");
                            return main.child(i);
                            }
                        
                        }else{
                           // alert(ltitle);
                            play("global",i);
                            play("global","点击");
                            return main.child(i);
                        }
                        
                }catch(e){
            
                    //play("global",i);
                // play("global","广告不点击")
                }
            }
        break;
        case "三言":
              var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                try{
                    //取出标题，主要是为了验证正确性
                    var ltitle=main.child(i).child(0).child(0).child(0).text();
                    //alert(ltitle);
                    if("android.widget.LinearLayout"==main.child(i).className()){
                    
                                play("global",i);
                                play("global","广告不点击");
                                return false;

                    }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                    }
                        
                }catch(e){
            
                    //play("global",i);
                // play("global","广告不点击")
                }
            }
        break;
    default:
        alert(appname+" 尚未实现新闻调试");

}


// var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
// //先得到有多少个子节点
// var subcount=ele.findOnce(0).childCount();
// //在将主框架实例化
// var main=ele.findOnce();
// for(var i=0;i<subcount;i++){
//        try{
//           //  var substr=main.child(i).child(0).child(2).child(0).text();
//             var ll=main.child(i).child(0).text();
//             alert(ll);
//             //if(substr=="广告"){
//              //   play("global",i);
//               //  play("global","广告不点击");
//             //}else{
//                 play("global",i);
//                 play("global","点击"); 
//            // }
//        }catch(e){
//         //alert(e)
//         play("global",i);
//         play("global","广告不点击")
//        }

// }
    //  if("悦头条"==appname){
    //     var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");
    //     if(ele.exists()){
    //         var childnum=ele.findOnce(1).childCount();
    //         if(childnum==4 ||childnum==1){
    //             return ele.findOnce(1);
    //         }else{
    //             play("global","广告不点击");
    //         }
        
    //     }

    //  }else if("北京知天下"==appname){
    //     var ele=className("android.support.v7.widget.RecyclerView").className("LinearLayout");//.className("LinearLayout").findOnce(2);

    //     if(ele.exists()){
    //          var cstr=ele.findOnce(0).child(0).child(2).child(0).text().replace(/^\s+|\s+$/g,"");
    //          if(cstr=="广告"){
    //           play("global","广告不点击");
    //          }else{
    //            return ele.findOnce(0);
    //          }
    //        }
    //  }else if("掌上消息"==appname){
    //     var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);

    //     if(ele.exists()){
    //         play("global","打开")
    //            return ele.findOnce(0);
            
    //        }
    //  }else if("有米头条"==appname){
    //     var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);

    //     if(ele.exists()){
    //          var cstr=ele.findOnce(0).child(0).text().replace(/^\s+|\s+$/g,"");
    //             alert(cstr);
    //            return ele.findOnce(0);
             
    //        }
    //  }else if("有看头-热点新闻"==appname){
    //         var ele=className("android.support.v4.view.ViewPager").className("ListView").className('RelativeLayout');//.className("LinearLayout").findOnce(2);
    
    //         if(ele.exists()){
                
    //             // var cstr=ele.findOnce(0).child(0).child(2).child(2).child(1).text().replace(/^\s+|\s+$/g,"");
    //             // var cstr=ele.findOnce(1).className('FrameLayout').child(1).text().replace(/^\s+|\s+$/g,"");//.child(1).child(2).child(2).child(1).text().replace(/^\s+|\s+$/g,"");
    //            // alert(cstr);
    //             //  if(cstr=="广告"){
    //             //   play("global","广告不点击");
    //             //  }else{
    //               //  play("global","打开");
    //                return ele.findOne(1000);
    //           //   }
    //            }
    //  }else if("波波视频"==appname){
    //         var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);
    
    //         if(ele.exists()){
    //            // alert(ele.findOnce(1));
    //            // play("global","打开");
    //            // thiscommon.clickxy_for_ele(ele.findOnce(1));
    //             return ele.findOnce(1);
    //            }
    //         }else if("盈贝头条"==appname){
    //             var ele=className("androidx.recyclerview.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);
        
    //             if(ele.exists()){
    //                // alert(ele.findOnce(1));
    //              //   play("global","打开");
    //               //  thiscommon.clickxy_for_ele(ele.findOnce(1));
    //                 return ele.findOnce(1);
    //                }
    //             }






      //          }, 2000); 

      //  }
  //  );
  

//exit();
//知天下
// var ele=className("android.support.v7.widget.RecyclerView").className("LinearLayout").findOnce(1);
// ele=ele.child(0).child(2).child(0).text();
// alert(ele);
// exit();
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
function hidenapplist(){
//  applist=[
//     {
//          "enable":"false",
//          "interval":"",
//          "appname":"悦头条", 
//          "packagename":"com.expflow.reading",
//          "activityname":"com.expflow.reading.activity.SplashActivity",
//          "open":{
//            "featuremode":"classname_text",
//            "classname":"android.widget.TextView",
//            "text":"任务"
//            },
//           "abnormal":{
//             "ab1":{
//                 "featuremode":"id",
//                 "id":"ll_quit",
//             },
//           },  
//          "bindwechat":{
//            "bw1":{
//                "action":"click_text",
//                "click_text":"我的",
//                "featuremode":"classname_text",
//                "classname":"android.widget.TextView",
//                "text":"朋友圈",
//            },
//            "bw2":{
//                "action":"click_text",
//                "click_text":"登录看资讯，随手赚零花",
//                "featuremode":"classname_text",
//                "classname":"android.widget.TextView",
//                "text":"微信登录",
//            },
//            "bw3":{
//             "action":"click_text",
//             "click_text":"微信登录",
//             "featuremode":"id",
//             "id":"txt_account",
//         },
          
//          },
//          "autoread":{
//              "ar1":{
//               "borderline":"android.support.v7.widget.RecyclerView",//android.support.v4.view.ViewPager
//               "itemsclassname":"android.widget.LinearLayout",//android.widget.TextView
//               "featuremode":"classname_desc",
//               "classname":"android.widget.ImageButton",
//               "desc":"转到上一层级",
//              },
//              "ar2":{
//                  "swipedirection":"vertical",//horizontal
//                  "deploymode":"classname_desc",
//                  "deployclassname":"android.view.View",
//                  "deploydesc":"展开全文",
//              },
//          }, 
//          "durl":""
//        },
//     {
//         "enable":"true",
//         "interval":"10",
//         "appname":"北京知天下", 
//         "packagename":"com.knowworld.news",
//         "activityname":"cent.news.com.newscent.splash.SplashActivity",
//         "open":{
//           "featuremode":"classname_text",
//           "classname":"android.widget.TextView",
//           "text":"视频"
//           },
//           "abnormal":{
//            "ab1":{
//                "featuremode":"id",
//                "id":"iv_close",
//            },
//            "ab2":{
//             "featuremode":"classname_text",
//             "classname":"android.widget.TextView",
//             "text":"先去逛逛",
//           },
//           "ab3":{
//             "featuremode":"classname_text",
//             "classname":"android.widget.TextView",
//             "text":"暂不更新",
//           },
//          },  
//         "bindwechat":{
//             "bw1":{
//                 "action":"click_text",
//                 "click_text":"我的",
//                 "featuremode":"classname_text",
//                 "classname":"android.widget.TextView",
//                 "text":"看新闻就可以赚钱的APP",
//             },
//             "bw2":{
//                 "action":"click_id",
//                 "click_id":"weixinLoginLayout",
//                 "featuremode":"classname_text",
//                 "classname":"android.widget.TextView",
//                 "text":"我的",
//             },
//             "bw3":{
//              "action":"click_text",
//              "click_text":"我的",
//              "featuremode":"classname_text",
//              "classname":"android.widget.TextView",
//              "text":"累计金币"
//          },
//         },
//         "autoread":{
//             "ar1":{
//                 "borderline":"android.support.v7.widget.RecyclerView",//android.support.v4.view.ViewPager
//                 "itemsclassname":"android.widget.LinearLayout",//android.widget.TextView
//                 "featuremode":"id",
//                 "id":"OnBack",
//                },
//             "ar2":{
//                    "swipedirection":"vertical",//horizontal
//                    "deploymode":"classname_desc",
//                    "deployclassname":"android.view.View",
//                    "deploydesc":"展开全文",
//                    "favmode":"id",
//                    "favid":"bottomCollect",
//                    "discussmode":"",
//                    "discussclassname":"",
//                    "discusstext":"",
    
//                },
//         }, 
//         "durl":""
//       },
//       {
//         "enable":"true",
//         "interval":"10",
//         "appname":"快马小报", 
//         "packagename":"com.kuaima.browser",
//         "activityname":"com.kuaima.browser.module.SplashActivity",
//         "open":{
//           "featuremode":"classname_text",
//           "classname":"android.widget.TextView",
//           "text":"视频"
//           },
//           "abnormal":{
//            "ab1":{
//                "featuremode":"id",
//                "id":"iv_cancle",
//            },
//            "ab2":{
//             "featuremode":"classname_text",
//             "classname":"android.widget.TextView",
//             "text":"先去逛逛",
//           },
//           "ab3":{
//             "featuremode":"classname_text",
//             "classname":"android.widget.TextView",
//             "text":"暂不更新",
//           },
//          },  
//         "bindwechat":{
//             "bw1":{
//                 "action":"click_text",
//                 "click_text":"我的",
//                 "featuremode":"classname_text",
//                 "classname":"android.widget.TextView",
//                 "text":"看新闻就可以赚钱的APP",
//             },
//             "bw2":{
//                 "action":"click_id",
//                 "click_id":"weixinLoginLayout",
//                 "featuremode":"classname_text",
//                 "classname":"android.widget.TextView",
//                 "text":"我的",
//             },
//             "bw3":{
//              "action":"click_text",
//              "click_text":"我的",
//              "featuremode":"classname_text",
//              "classname":"android.widget.TextView",
//              "text":"累计金币"
//          },
//         },
//         "autoread":{
//             "ar1":{
//                 "borderline":"android.support.v7.widget.RecyclerView",//定界符android.support.v4.view.ViewPager
//                 "itemsclassname":"android.widget.TextView",// 特征码类名 android.widget.TextView
//                 "featuremode":"id",//判断成功的方式 id
//                 "id":"view_back", // id字符
//                },
//             "ar2":{
//                    "swipedirection":"vertical",// 阅读方式 horizontal
//                    "deploymode":"classname_text",//展开详情方式 字典 ''|classname_desc|classname_text
//                    //当deploymode为空时deployclassname和deploytext不出现
//                    //当deploymode为空时classname_desc时 下面紧跟deployclassname和deploydesc字段
//                   //当deploymode为空时classname_text时 下面紧跟deployclassname和deploytext字段
//                    "deployclassname":"android.view.View",
//                    "deploytext":"展开全文",
    
//                    "favmode":"id",//站内收藏方式
//                    "favid":"bottomCollect",//站内收藏方式为ID时出现
//                    "discussmode":"",
//                    "discussclassname":"",
//                    "discusstext":"",
    
//                },
//         }, 
//         "durl":""
//       },
//     ];
    
    }
    function hiden(){
        //点击item时执行脚本.
         // ui.files.on("item_click", function(item, pos, aaa, bbb){
         //     events.setKeyInterceptionEnabled("volume_up", true);
         //     events.observeKey();
         //     events.onKeyDown("volume_up", function(event){ //此处有逻辑问题.没有修改
         //         if (scriptx_Thread.isAlive()) {
         //             scriptx_Thread.interrupt(); //停止执行脚本的线程
         //             toast('按下了音量上键,脚本停止!');
         //         } else {
         //             toast('当前没有脚本在执行!');
         //         }
         //     });
     
         //     if (typeof scriptx_Thread == "object") {
         //         scriptx_Thread.interrupt();
         //     }
             
         //     var scriptx_Thread = threads.start(function() {
         //         //这里写脚本内公用的方法
         //         function sleeply() { //随机延迟
         //             var ran = random(90,130);
         //             var speedNum = 101 - speed;
         //             sleep(ran*speedNum);
         //         }
         //         function getAlreadyTalkArry(a) {
         //             var c, d, e, b = "/sdcard/com.UITest.script/tmp/NameList/" + a + "AlreadyTalk.tmp";
         //             return files.exists(b) || (files.createWithDirs(b), c = files.read(b), "" == c && files.write(b, "0"), 
         //             sleep(200)), d = open(b, mode = "r"), e = d.readlines().slice(), d.close(), e;
         //         }
         //         if (!newworkTesting()) {
         //             toast('网络连接失败...');
         //             return;
         //         }
     
         //         //设置微信号变量和执行次数
         //         var Config_file = "/sdcard/com.UITest.script/tmp/Config/config.ini";
         //         files.createWithDirs(Config_file)
         //         let configStr = files.read(Config_file);
         //         if (configStr != "") {
         //             let configArry = configStr.split("|");
         //             var wechaNumber = configArry[0];
         //             if (wechaNumber == "") { writeLog("微信号使用默认值: 空");}
         //             var loopTimes = configArry[1];
         //             if (loopTimes == "") {
         //                 loopTimes = 1;
         //                 writeLog("执行次数使用默认值: " + loopTimes);
         //             }
         //             var speed = parseInt(configArry[2]);
         //             if (speed == "") {
         //                 speed = parseInt(79);
         //                 writeLog('脚本速度使用默认值: ' + (speed + 1));
         //             }
         //             var sendMsg = configArry[3];
         //             if (sendMsg == "") {
         //                 sendMsg = "false";
         //                 writeLog('出错后不发送消息给开发者.');
         //             }
         //         } else {
         //             var wechaNumber = "";
         //             var loopTimes = 1;
         //             var speed = parseInt(79);
         //             var sendMsg = "false";
         //             writeLog("没有设置相关参数,使用默认值.");
         //         }
         //         //开始执行脚本
         //         var script_x = files.read(item.path, encoding = 'utf-8');
         //         try {
         //             eval(script_x);
         //             writeLog("脚本执行完毕.");
         //         } catch (e) {
         //             writeLog(e + '\n' + e.stack);
         //             if (sendMsg == "true") {
         //                 sendMsgToDeveloper();
         //             } else {
         //                 var ErrMsg = confirm("程序出错是否发送日志给开发者?","点击确定发送,点击取消不发送.");
         //                 if (ErrMsg) {
         //                     sendMsgToDeveloper();
         //                 }
         //             }
         //             return;
         //         }
         //     });
         // });
     
         // //点击右上角的刷新按钮,刷新list列表
         // ui.refresh.click(()=>{
         //     //刷新数据时刷新按钮旋转线程
         //     var imgRotate_Thread = threads.start(function() {
         //         var i = 0;
         //         while(true) {
         //             i+=4;
         //             ui.run(()=>{
         //                 ui.refresh.setRotation(i);
         //             });
         //         }
         //     });
     
         //     //数据刷新线程
         //     var refreshItem_Thread = threads.start(function () {
         //         //初始化数据源数组
         //         scriptInfo = [];
     
         //         var url = 'https://script.iqqclub.com/Script/script_info.json';
         //         try {
         //             var script_list_html = http.get(url);
         //         } catch (e) {
         //             return;
         //         }
         //         var script_info = script_list_html.body.json();
         //         //在线更新脚本
         //         var file_desc_Arry = []; file_name_Arry = []; file_root_path_Arry = [];
         //         for (let FILE in script_info) {
         //             //判断本地脚本列表中是否存在脚本
         //             var file_version = script_info[FILE].split('|')[3];
         //             var file_desc = script_info[FILE].split('|')[0];
         //             file_desc_Arry.push(file_desc + '_V'+file_version);
         //             var file_name = script_info[FILE].split('|')[2];
         //             file_name_Arry.push(file_name);
         
         //             var file_root_path = script_info[FILE].split('|')[1];
         //             file_root_path_Arry.push(file_root_path);
         
         //             //创建脚本存储目录
         //             var script_download_path = '/sdcard/com.UITest.script/ScriptDownLoad/' + file_root_path + '/';
         //             files.ensureDir(script_download_path);
         //             var scriptPath = script_download_path+file_name;
         //             //从网络下载
         //             if (!getScriptFromServer(file_name,script_download_path)) {
         //                 return;
         //             }
                     
         //             //将脚本信息填充到数据源数组中
         //             scriptInfo.push({
         //                 desc: file_desc,
         //                 serverVersion: file_version,
         //                 path: scriptPath,
         //             });
         //         }
         //     });
     
         //     //等待listView刷新完成后,要执行的逻辑
         //     var waitItem_Thread = threads.start(function() {
         //         refreshItem_Thread.join(10000);
         //         if (scriptInfo == "") {
         //             var rotationAngle = ui.refresh.getRotation();
         //             var Rem = rotationAngle%360
         //             var supplement = 360 - Rem;
         //             var supplementTimes = supplement/4;
         //             for (var i = 0; i < supplementTimes; i++) {
         //                 Rem += 4;
         //                 ui.run(()=>{
         //                     ui.refresh.setRotation(Rem);
         //                 });
         //             }
     
         //             //结束刷新按钮旋转的进程
         //             imgRotate_Thread.interrupt();
         //             toast('网络连接失败...');
         //             return;
         //         }
     
         //         var rotationAngle = ui.refresh.getRotation();
         //         var Rem = rotationAngle%360
         //         var supplement = 360 - Rem;
         //         var supplementTimes = supplement/4;
         //         for (var i = 0; i < supplementTimes; i++) {
         //             Rem += 4;
         //             ui.run(()=>{
         //                 ui.refresh.setRotation(Rem);
         //             });
         //         }
     
         //         //设置list控件的数据源
         //         ui.run(()=>{
         //             ui.waitForDownload.setVisibility(View.GONE);
         //             ui.noData.setVisibility(View.GONE);
         //             ui.files.setVisibility(View.VISIBLE);
         //             ui.files.setDataSource(scriptInfo);
         //             //结束刷新按钮旋转的进程
         //             imgRotate_Thread.interrupt();
         //             toast('刷新完毕');
         //         });
         //     }); 
         // });
     
         // //获取脚本信息生成列表数据
         // var loadItem_Thread = threads.start(function () {
         //     var url = 'https://script.iqqclub.com/Script/script_info.json';
         //     try {
         //         var script_list_html = http.get(url);
         //     } catch (e) {
         //         return;
         //     }
             
         //     var script_info = script_list_html.body.json();
         //     //在线更新脚本
         //     var file_desc_Arry = []; file_name_Arry = []; file_root_path_Arry = [];
         //     for (let FILE in script_info) {
         //         //判断本地脚本列表中是否存在脚本
         //         var file_version = script_info[FILE].split('|')[3];
         //         var file_desc = script_info[FILE].split('|')[0];
         //         file_desc_Arry.push(file_desc + '_V'+file_version);
         //         var file_name = script_info[FILE].split('|')[2];
         //         file_name_Arry.push(file_name);
     
         //         var file_root_path = script_info[FILE].split('|')[1];
         //         file_root_path_Arry.push(file_root_path);
     
         //         //创建脚本存储目录
         //         var script_download_path = '/sdcard/com.UITest.script/ScriptDownLoad/' + file_root_path + '/';
         //         files.ensureDir(script_download_path);
         //         var scriptPath = script_download_path+file_name;
         //         if (!files.exists(script_download_path+file_name)) {
         //             //从网络下载回来
         //             if (!getScriptFromServer(file_name,script_download_path)) {
         //                 return;
         //             }
         //         } else {
         //             //读取本地脚本文件的版本号
         //             var fr = open(script_download_path+file_name, mode = 'r');
         //             var script_version_line = fr.readline();
         //             fr.close();
         //             var script_version_clint = script_version_line.split(':')[1].replace('.', '');
         //             //获取服务器脚本文件的版本号
         //             var script_version_server = file_version.replace('.', '');
         //             if (script_version_server > script_version_clint) {
         //                 if (!getScriptFromServer(file_name,script_download_path)) {
         //                     return;
         //                 }
         //             }
         //         }
         //         //将脚本信息填充到数据源数组中
         //         scriptInfo.push({
         //             desc: file_desc,
         //             serverVersion: file_version,
         //             path: scriptPath
         //         });
         //     }
         // });
     
         // //获取数据时的等待效果
         // var waitForDownload_Thread = threads.start(function() {
         //     refreshBtnDisable();
         //     for (;;) {
         //         for (r = 0, t = 0; ;) if (r += .23, t += r, ui.run(()=>{ui.img_waitForDownload.setRotation(t)}), 
         //         ui.img_waitForDownload.getRotation() >= 180) break;
         //         for (;;) if (r -= .23, t += r, ui.run(()=>{ui.img_waitForDownload.setRotation(t)}), ui.img_waitForDownload.getRotation() >= 360) break;
         //     }
         // });
         // //等待listView加载完成后,要执行的逻辑
         // var waitItem_Thread = threads.start(function() {
         //     loadItem_Thread.join(10000);
         //     if (scriptInfo == "") {
         //         toast('网络连接失败,请刷新');
         //         loadItem_Thread.interrupt();
         //         waitForDownload_Thread.interrupt();
         //         ui.run(()=>{
         //             refreshBtnEnable();
         //             ui.str_waitForDownload.setText("网络连接失败...");
         //             ui.img_waitForDownload.setRotation(0);
         //         });
         //         return;
         //     }
         //     //拉取成功,停止拉取动画
         //     waitForDownload_Thread.interrupt();
         //     //设置list控件的数据源
         //     ui.run(()=>{
         //         refreshBtnEnable();
         //         ui.waitForDownload.setVisibility(View.GONE); 
         //         ui.files.setDataSource(scriptInfo);
         //     });
         //     // alert(ui.files.getAdapter().getItemCount());
         // });
     
     /**
      * 第二屏相关代码逻辑
      */
     
     // ui.speedtext.setText((ui.speed.getProgress()+1).toString());
     // ui.speed.setOnSeekBarChangeListener({
     //     //进度条监听设置
     //     onProgressChanged: function(seekbar, p, fromUser){
     //         var text, send;
     //         fromUser && (text = (p + 1).toString(), ui.speedtext.setText(text), wechatNum = ui.wechaNum.text(), 
     //         loopTime = ui.Loops.text(), "" == loopTime && (loopTime = 1), send = ui.sendMsgOption.isChecked() ? !0 :!1, 
     //         configStr = wechatNum + "|" + loopTime + "|" + p + "|" + send, writeConfig(configStr));
     //     }
     // });
     // ui.wechaNum.addTextChangedListener({
     //     //监听微信号输入框
     //     // onTextChanged(s, start, before, count)
     //     // beforeTextChanged(s, start, before, count)
     //     afterTextChanged: function(s) {
     //         var send;
     //         loopTime = ui.Loops.text(), "" == loopTime && (loopTime = 1), speed = ui.speed.getProgress(), 
     //         send = ui.sendMsgOption.isChecked() ? !0 :!1, configStr = s + "|" + loopTime + "|" + speed + "|" + send, 
     //         writeConfig(configStr);
     //     } 
     // }); 
     // ui.Loops.addTextChangedListener({
     //     afterTextChanged: function(s) {
     //         var send;
     //         wechatNum = ui.wechaNum.text(), speed = ui.speed.getProgress(), send = ui.sendMsgOption.isChecked() ? !0 :!1, 
     //         configStr = wechatNum + "|" + s + "|" + speed + "|" + send, writeConfig(configStr);
     //     }
     // });
     // //从配置文件读取微信号和执行次数以及速度
     // var loadConfig_Thread = threads.start(function() {
     //     let ConfigPath = "/sdcard/com.UITest.script/tmp/Config/config.ini";
     //     if (!files.exists(ConfigPath)) {
     //         files.createWithDirs(ConfigPath);
     //     }
     //     let configStr = files.read(ConfigPath);
     //     if (configStr != "") {
     //         let configArry = configStr.split("|");
     //         let wecharNum = configArry[0];
     //         let loopTime = configArry[1];
     //         let speed = configArry[2];
     //         ui.run(()=>{
     //             ui.wechaNum.setText(wecharNum);
     //             ui.Loops.setText(loopTime);
     //             ui.speed.setProgress(speed);
     //             ui.speedtext.setText((ui.speed.getProgress()+1).toString());
     //         });
     //     }
     // });
     // //清理相关区域删除按钮状态的设置
     // ui.clear_Btn.setClickable(false);
     // ui.clear_Btn.setEnabled(false);
     // ui.clear_Btn.setFocusable(false);
     
     // ui.clear_log.on("check", (checked)=>{
     //     checked ? clearBtnEnable() :(clear_namelist_hecked = ui.clear_namelist.isChecked(), 
     //     clear_config_hecked = ui.clear_config.isChecked(), clear_namelist_hecked || clear_config_hecked || clearBtnDisable());
     // });
     // ui.clear_namelist.on("check", (checked)=>{
     //     checked ? clearBtnEnable() :(clear_log_hecked = ui.clear_log.isChecked(), clear_config_hecked = ui.clear_config.isChecked(), 
     //     clear_log_hecked || clear_config_hecked || clearBtnDisable());
     // });
     // ui.clear_config.on("check", (checked)=>{
     //     checked ? clearBtnEnable() :(clear_log_hecked = ui.clear_log.isChecked(), clear_namelist_hecked = ui.clear_namelist.isChecked(), 
     //     clear_log_hecked || clear_namelist_hecked || clearBtnDisable());
     // });
     // ui.clear_Btn.click(()=>{
     //     // toast('clicked');
     //     let clear_log_hecked = ui.clear_log.isChecked();
     //     let clear_namelist_hecked = ui.clear_namelist.isChecked();
     //     let clear_config_hecked = ui.clear_config.isChecked();
     //     if (clear_log_hecked) {
     //         clearLog();
     //     }
     //     if (clear_namelist_hecked) {
     //         clearNamelist();
     //     }
     //     if (clear_config_hecked) {
     //         clearConfig();
     //     }
     //     toast('清理完毕');
     //     setAllChecked();
     
     //     ui.files.setVisibility(View.GONE);
     //     ui.noData.setVisibility(View.VISIBLE);
     // });
     
     // //附加功能区域的逻辑
     
     // ui.sendMsgOption.on("check", (checked)=>{
     //     if (checked) {
     //         if (!findApp("QQ")) return toast("未安装QQ,该功能不可用!"), ui.sendMsgOption.setChecked(!1), 
     //         void 0;
     //         wechatNum = ui.wechaNum.text(), loopTime = ui.Loops.text(), "" == loopTime && (loopTime = 1), 
     //         speed = ui.speed.getProgress(), sendMsg = "true", configStr = wechatNum + "|" + loopTime + "|" + speed + "|" + sendMsg, 
     //         writeConfig(configStr);
     //     } else wechatNum = ui.wechaNum.text(), loopTime = ui.Loops.text(), "" == loopTime && (loopTime = 1), 
     //     speed = ui.speed.getProgress(), sendMsg = "false", configStr = wechatNum + "|" + loopTime + "|" + speed + "|" + sendMsg, 
     //     writeConfig(configStr);
     // });
     
     // /**测试页面事件绑定 */
     // function setSize(view,width,height){
     //     //LayoutParams(width,height) 宽度，高度为整数 单位:px
     //     var params = new android.widget.LinearLayout.LayoutParams(width, height);
     //     view.setLayoutParams(params);
     //     }
     // Gworkthread="";
     // //一级页面循环上滑找新闻线程
     // function while_findnews(){
     //     Gworkthread="findnews_start";
     //     toast("找新闻线程启动...");
     //     var upcount=0;
     //     thread_findnews=threads.start(
     //         function(){
     //             setInterval(
     //                 function(){
     //                 thisswipe.swiperealup_custom();
     //                 upcount+=1;
     //                 var m=3;
     //                 var n=2;
     //                 var x=Math.round(Math.random()*(m-n))+n;
     //                 if(upcount>x){
     //                     //判断新闻条目是否存在
     //                     var ele=className("android.support.v4.view.ViewPager").className("android.widget.TextView");
     //                     if(ele.exists()){
     //                         //如果存在，点击第二条新闻
     //                        // (ele.bounds().centerX(),ele.bounds().centerY())
     //                        toast("找到新闻..");
     //                      //  toast("x:"+ele.findOnce(2).bounds().centerX()+" y:"+ele.findOnce(2).bounds().centerY());
     //                        var thisx=ele.findOnce(2).bounds().centerX();
     //                        var thisy=ele.findOnce(2).bounds().centerY();
     
     //                         thiscommon.touchreal(thisx,thisy);
     //                         //等待1秒，否则线程关闭，点击事件会无效
     //                         sleep(1000);
     //                         Gworkthread="findnews_stop";
     //                         thread_findnews.interrupt();
     //                     }
     //                 }
     //                 },2000);
     //         }
     //     );
     // }
     // //二级页面阅读线程
     // function while_readnews(){
     //     Gworkthread="readnews_start";
     //     var upcount=0;
     //     var o=30;
     //     var p=10;
     //     //上滑次数
        
     //     var maxupcount=Math.round(Math.random()*(o-p))+p;
     //     toast("随机上滑："+maxupcount+"次");
     //     thread_readnews=threads.start(
     //         function(){
     //             while(1){
     //                 var m=4000;
     //                 var n=1000;
     //                //两次上滑之间的间隔
     //                 var x=Math.round(Math.random()*(m-n))+n;
     //                 thisswipe.swiperealup_custom();
     //                 upcount+=1;
     //                 if(upcount>maxupcount){
     //                     toast("返回首页...");
     //                     back();
     //                     Gworkthread="readnews_stop";
     //                     sleep(1000);
     //                     thread_readnews.interrupt();
     //                 }
     //                 toast("间隔："+x+"毫秒");
     //                 sleep(x);
     //             }
     //             //setInterval(function(){},1000);
     //         }
     //     );
     // }
     // //打开制定app线程
     // function openAPP(){
     //     Gworkthread="openapp_start";
     //     thiscommon.openpackage("com.ss.android.article.lite/com.ss.android.article.lite.activity.MainActivity");
     // thread_openApp=threads.start(
     //     function(){
     //         setInterval(function(){
     //            if( className("android.widget.TextView").text('小视频').packageName("com.ss.android.article.lite").exists()){
     //             toast("启动完成.....");
     //             Gworkthread="openapp_stop";
     //             thread_openApp.interrupt();   
     //            }
     //         },1000);
     //     }
     // );
     // }
     // //异常处理线程
     // function  abnormal(){
     //     Gworkthread="abnormal_start";
     
     // }
     // //全局调度线程
     // function while_control(){
     // thread_control=threads.start(
     //     function(){
     //         setInterval(function(){
     //           if("openapp_stop"==Gworkthread||"readnews_stop"==Gworkthread){
     //             while_findnews();
     //           }else if("findnews_stop"==Gworkthread){
     //             while_readnews();
     //           }
     //         },1000);
     //     }
     // );
     
     // }
     
     
     //     ui.autoread_jinri.click(()=>{
     //    // alert("autoread");
     
     //     while_control();
     //     openAPP();
     // });
     
     // ui.uiinflate.click(()=>{
     //     //let checkbox_view = ui.inflate(<checkbox />);
     //    //  ui.inflate("");
     //   //  ui.inflate(<button text='路飞'></button>,ui.applist.ui.applist,true);
     // });
     // ui.whileopen.click(()=>{
     //   //  alert("test....");
     //     //alert(myappjson.getappjson().length);
     //   // roundappjson();
     //   var layo = new android.widget.LinearLayout(context)
     //   layo.setOrientation(android.widget.LinearLayout.HORIZONTAL);
     //   layo.setId(android.view.View.generateViewId())
     // //   var child1 = new TextView(context);
     // var child1=new CheckBox(context);
     // // id="sendMsgOption" text="109.今日头条" color="{{textColor}}"
     // child1.setText("微鲤看看");
     // //child1.c(colors.parseColor(textColor));
     // child1.setTextSize(14);
     // child1.width="2";
     // child1.setTextColor(colors.parseColor(textColor));
     // child1.setGravity(0); 
     //  child1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));
      
     //  var child2 =new TextView(context);
     //    child2.setTextSize(14);
     //    child2.setTextColor(colors.parseColor(textColor))
     //    child2.setText("次数:");
     //    child2.setGravity(0); //左护法
     //    child2.setLayoutParams(new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));
     
     // var child3=new EditText(context);
     // child3.setGravity(0); //左护法
     // child3.setLayoutParams(new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));
     
     // var child4=new Button(context);
     // child4.setId(android.view.View.generateViewId());
     // child4.setText("打开"); 
     // child4.setGravity(0);
     
     // //改背景
     // child4.setBackgroundColor(colors.parseColor("#6495ED"));
     // child4.setLayoutParams(new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));
     // //修改大小
     // setSize(child4,120,100);
     
     // layo.addView(child1);
     // layo.addView(child2);
     // layo.addView(child3);
     // layo.addView(child4);
     
     //  ui.applist.addView(layo);
     //   //parent.addView(layo)
     // }); 
     
     // //遍历app数据结构的函数
     // function roundappjson(){
     //     var myapp=myappjson.getappjson();
     //   //  alert(myapp.length);exit();
     //     for(var i=0;i<myapp.length;i++){
     //         //优化内存
     //       //  thiscommon.clean("xiaomi4");// clean();
     //         var clickname=myapp[i]['clickname'];
     //         var enable=myapp[i]['enable'];
     //         var packagename=myapp[i]['packagename'];
     //         var voice=myapp[i]['voice'];
     //         var bindwechat=myapp[i]['bindwechat']; 
     //         var autoread=myapp[i]['autoread'];
     //         var clickname=myapp[i]['clickname'];
     //         var durl=myapp[i]['durl'];
     
     //        // if("false"==enable){ toast("下一个");continue; }
     //         toast('打开'+myapp[i]['appname']);
     //         exit();
     
     //         //通过中文名取出包名
             
     //        //start微信开始
     //         // for(var key in bindwechat){
     //         //     //alert('key='+key+'  value='+bindwechat[key]);
     //         //     var action=bindwechat[key]['action'];
     //         //     if("open"==action){
     //         //        openpackage(bindwechat[key]['packagename']);
     //         //     }else if("thread_openyes"==action){
                     
     //         //      //   toast("启动线程........."+bindwechat[key]['text']);
                     
     //         //         thisName=bindwechat[key]['className'];
     //         //         thistext=bindwechat[key]['text'];
     
     //         //         thread_openyes =threads.start(function(){
     //         //             setInterval(function(){
     //         //                // alert("className:"+thisName+" text:"+thistext);
     //         //                   if("className_text"==bindwechat[key]['featuremode']){
                             
     //         //                       if(
     //         //                           className(thisName).text(thistext).exists()){
     //         //                       // alert('发现open弹窗'); 
     //         //                       clicktext("允许");
     //         //                       // clickclass_for_text(thisName,thistext);    
     //         //                        thread_opencheck.interrupt();
     //         //                     } 
     //         //                   }
                                
                             
     //         //             },4000);
     //         //         });
     //         //     }else if("checking"==action){
     //         //             if("className_text"==bindwechat[key]['featuremode']){
     //         //                 //findOne 会阻塞
     //         //              var ele=className(bindwechat[key]['className']).text(bindwechat[key]['text']).findOne() 
     //         //              // alert(ele);
     //         //             }
     //         //     }else if("click"==action){
     //         //        // 点击的处理方式
     //         //        //如果是类名+文本点击
     //         //        if("className_text"==bindwechat[key]['featuremode']){       
     //         //         clickclass_for_text(bindwechat[key]['className'],bindwechat[key]['text'] );//bindwechat[key]['className']
     //         //         //如果是类名+索引点击   
     //         //     }else if("className_index"==bindwechat[key]['featuremode']){
     //         //         clickclass_for_index(bindwechat[key]['className'],bindwechat[key]['index'] );
     //         //         //如果是纯文字点击   
     //         //     }else if("text"==bindwechat[key]['featuremode']){
     //         //         toast('text click');
     //         //         clicktext(bindwechat[key]['text']);
     //         //         //如果是根据ID点击
     //         //     }else if("id"==bindwechat[key]['featuremode']){
     //         //         clickid(bindwechat[key]['id']);
     //         //        }
     //         //     }
     //         //  }
     //         //end 绑定微信
     // }
     // //end for
     // }
     // //end func
     // /**
     //  * 脚本所有公用函数
     //  */
     // function newworkTesting() {
     //     try {
     //         var a = "https://www.baidu.com";
     //         http.get(a);
     //     } catch (b) {
     //         return !1;
     //     }
     //     return !0;
     // }
     // function clearBtnEnable() {
     //     ui.clear_Btn.setClickable(!0), ui.clear_Btn.setEnabled(!0), ui.clear_Btn.setFocusable(!0);
     // }
     // function clearBtnDisable() {
     //     ui.clear_Btn.setClickable(!1), ui.clear_Btn.setEnabled(!1), ui.clear_Btn.setFocusable(!1);
     // }
     // function setAllChecked() {
     //     ui.clear_log.setChecked(!1), ui.clear_namelist.setChecked(!1), ui.clear_config.setChecked(!1);
     // }
     // function refreshBtnEnable() {
     //     ui.refresh.setClickable(!0), ui.refresh.setEnabled(!0), ui.refresh.setFocusable(!0);
     // }
     // function refreshBtnDisable() {
     //     ui.refresh.setClickable(!1), ui.refresh.setEnabled(!1), ui.refresh.setFocusable(!1);
     // }
     // function clearLog() {
     //     var a = "/sdcard/com.UITest.script/log/";
     //     files.exists(a) && (files.isEmptyDir(a) || files.removeDir(a)), files.createWithDirs(a);
     // }
     // function clearNamelist() {
     //     var a = "/sdcard/com.UITest.script/tmp/NameList/";
     //     files.exists(a) && (files.isEmptyDir(a) || files.removeDir(a)), files.createWithDirs(a);
     // }
     // function clearConfig() {
     //     ui.run(()=>{
     //         ui.wechaNum.setText("");
     //         ui.Loops.setText("");
     //         ui.speed.setProgress(79);
     //         ui.speedtext.setText((ui.speed.getProgress()+1).toString());
     //     });
     //     var a = "/sdcard/com.UITest.script/ScriptDownLoad/", b = "/sdcard/com.UITest.script/tmp/Config/";
     //     files.exists(a) && (files.isEmptyDir(a) || files.removeDir(a)), files.exists(b) && (files.isEmptyDir(b) || files.removeDir(b)), 
     //     files.createWithDirs(a), files.createWithDirs(b);
     // }
     
     // function clickId(a) {
     //     for (obj_ID = id(a).boundsInside(5, 5, device.width-5, device.height-5); obj_ID.find().empty(); ) sleep(1e3);
     //     X = obj_ID.find().get(0).bounds().centerX(), Y = obj_ID.find().get(0).bounds().centerY(), 
     //     Deviation = random(-10, 10), X1 = X - Deviation, Y1 = Y - Deviation, device.sdkInt<24?ra.tap(X1,Y1):click(X1,Y1);
     // }
     // function clickText(a) {
     //     for (obj_Text = text(a).boundsInside(5, 5, device.width-5, device.height-5); obj_Text.find().empty(); ) sleep(1e3);
     //     X = obj_Text.find().get(0).bounds().centerX(), Y = obj_Text.find().get(0).bounds().centerY(), 
     //     Deviation = random(-10, 10), X1 = X - Deviation, Y1 = Y - Deviation, device.sdkInt<24?ra.tap(X1,Y1):click(X1,Y1);
     // }
     // function clickDesc(a) {
     //     for (obj_Desc = desc(a).boundsInside(5, 5, device.width-5, device.height-5); obj_Desc.find().empty(); ) sleep(1e3);
     //     X = obj_Desc.find().get(0).bounds().centerX(), Y = obj_Desc.find().get(0).bounds().centerY(), 
     //     Deviation = random(-10, 10), X1 = X - Deviation, Y1 = Y - Deviation, device.sdkInt<24?ra.tap(X1,Y1):click(X1,Y1);
     // }
     // function getSystemDate(a) {
     //     var b = new SimpleDateFormat("HH:mm:ss"), c = new SimpleDateFormat("yyyy-MM-dd");
     //     return "tf" == a ? b.format(new java.util.Date()) :"df" == a ? c.format(new java.util.Date()) :void 0;
     // }
     // function writeLog(a) {
     //     var c, b = "/sdcard/com.UITest.script/log/Info_" + getSystemDate("df") + ".log";
     //     files.ensureDir("/sdcard/com.UITest.script/log/"), files.exists(b) || files.create(b);
     //     try {
     //         c = new PrintWriter(new FileWriter(b, !0)), c.println("[" + getSystemDate("tf") + "] " + a), 
     //         c.flush(), c.close();
     //     } catch (d) {
     //         log(d);
     //     }
     // }
     // function writeConfig(str) { //将内容写入配置文件
     //     var ConfigPath = "/sdcard/com.UITest.script/tmp/Config/config.ini";
     //     files.exists(ConfigPath) || files.createWithDirs(ConfigPath), files.write(ConfigPath, str);
     // }
     // function getScriptFromServer(FILE,PATH) { //从服务器获取脚本
     //     var i, download_res, script_file_url = "https://script.iqqclub.com/Script/" + FILE;
     //     for (i = 0; 10 > i; i++) try {
     //         if (download_res = http.get(script_file_url), 200 == download_res.statusCode) break;
     //     } catch (e) {
     //         if (sleep(500), 9 == i) return !1;
     //     }
     //     return files.writeBytes(PATH + FILE, download_res.body.bytes()), 
     //     !0;
     // }
     // function sendMsgToDeveloper() {
     //     var LogfilePath = "/sdcard/com.UITest.script/log/Info_" + getSystemDate("df") + ".log";
     //     var fr = open(LogfilePath, mode = "r");
     //     var logArry = fr.readlines();
     //     fr.close(); 
     //     if (logArry.length >= 10) {
     //         var sendMsgArry = logArry.slice(-10);
     //     } else {
     //         var sendMsgArry = logArry;
     //     }
     //     var sendMsg = "";
     //     for (let i = 0; i < sendMsgArry.length; i++) {
     //         var w = sendMsgArry[i];
     //         sendMsg = sendMsg + w + "\n";
     //     }
     //     // alert(sendMsg);
     //     app.startActivity({
     //         data: "mqqapi://im/chat?chat_type=wpa&uin=1741903670",
     //     });
     //     waitForActivity('com.tencent.mobileqq.activity.SplashActivity');
     //     sleep(1000);
     //     id("input").setText(sendMsg);
     //     sleep(200);
     //     // id('fun_btn').findOne().click();
     //     clickText("发送");
     //     return;
     // }
     // function findApp(n) {
     //     if (getPackageName(n) != null) {
     //         return true;
     //     } else {
     //         return false;
     //     }
     // }
     
     }