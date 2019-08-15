//id("com.tenent.mm:id/ddm").text("发现").findOnce().parent().click();

var thiscommon=require("mycommon.js");
var thisswipe=require("myswipe.js");
/**
 * 设计原则
 * 1线程守护机制
 * 2线程目标页识别机制
 * 3线程计数器超次数机制
 * 
 */
//**********************全局变量****************** */ 
Gclass_awt="android.widget.TextView";
Gclass_v7="android.support.v7.widget.LinearLayoutCompat";
Gclass_awb="android.widget.Button";
Gppinterval=600;
Gthread_list=[
  {  
    "thread_lookat_findnews_start":{
        "threadname":"thread_lookat_findnews",      
              },
   "thread_lookat_readnews_start":{
         "threadname":"thread_lookat_readnews",
            }
  } 
]

ra = new RootAutomator();
events.setKeyInterceptionEnabled("volume_down", true);
threads.start(function(){
events.observeKey();
events.on("key", function(volume_down, event){
exit();
    //处理按键事件
   toast("退出微信养号!!!");
   try{  
   }catch(e){
       alert("关闭脚本："+e);
   }
  

});
});
Gdevicetype="le";
Gvoicepath="./voice/";    //请勿修改
Gworkthread="";
Greload=false;

// thiscommon.clickxy_for_ele(className(Gclass_awt).text("看一看").findOnce());
// exit();
// try{thread_longtouch.interrupt()}catch(e){};
// thread_longtouch=threads.start(
//     function(){
//         setInterval(function(){
//             Swipe(400,1000,400,400,600);
//         },3000);
//     }
// );



// exit();






thiscommon.clean(Gdevicetype);
var result= openwechat();
if(result==false){
   // play('global','打开失败');
}else{
    play('global','打开成功');
    //聊天 
//    whchat();
    //朋友圈点赞
//    while_findmoments();
//看一看 关注公众号 分享朋友圈
//lookat_findnews();

//Gfuninterval();
while_control();
}   

//******************公共函数************************************ */ 

function while_control(){
    //线程计数器
    var while_control_thread_count=0;
    var toastcount=0;
    var lastflag=0;
    thread_while_control=threads.start(function(){
      //  alert(Gworkthread+"asdfasf");
        if(""==Gworkthread){
            sleep(2000);
         //   play_little_program();
            toast("看一看");
                //路由
                    try{
                      lookat_router();
                                            //elestr='className("'+Gclass_awt+'").text("发现")';//.parent().parent().click();
                                    // parentclick(elestr,2);
                                        //elestr='className("'+Gclass_awt+'").text("看一看")';
                                        //parentclick(elestr,7);
                                        //elestr='className("'+Gclass_awt+'").text("精选")';
                                    // parentclick(elestr,3);
                    }catch(e){}
                //路由结束
            lookat_findnews();   
        }
        setInterval(function(){
            //周期内rf切换
            if("thread_lookat_findnews_stop"==Gworkthread){
                //结束线程
                try{thread_lookat_findnews.interrupt()}catch(e){}
                sleep(1000);
                //启动阅读线程
                lookat_readnews();
               
            }else if("thread_lookat_readnews_stop"==Gworkthread){
                    //结束线程
                    try{thread_lookat_readnews.interrupt()}catch(e){}
                    sleep(1000);
                    //启动阅读线程
                    lookat_findnews();
            }

            //超时后的任务分发
            if(while_control_thread_count>600000){
                //结束线程
                shutdown_allthread();
                //标志位+1
                lastflag+=1;
                //初始化线程计数器 ，已经到600000了
                while_control_thread_count=0;
                //再次打开微信
                thiscommon.clean(Gdevicetype);
                var result= openwechat();

               if(result){
                //根据lastflag 分发任务
                if(1==lastflag){
                //开始玩游戏
                    play_little_program();
                    }else if(2==lastflag){
                        toast("养号任务结束");
                    }
                }//if end

            }
            //任务分发结束

            //显示计数器
            if(toastcount>10){
                            //线程守护
            try{
                //                 Gworkthread="thread_lookat_findnews_start"
                // result=eval(Gthread_list[0][Gworkthread]["threadname"]+".isAlive()");//.isAlive();
                // alert(result);
                // exit();
                                if(""!=Gworkthread){
                                    result= eval(Gthread_list[0][Gworkthread]["threadname"]).isAlive();
                                    if(result){
                                     toast(Gthread_list[0][Gworkthread]["threadname"]+"存活");
                                    } else{
                                     toast(Gthread_list[0][Gworkthread]["threadname"]+" not alive!!");
                                     reload();
                                    }
                                 }
                            }catch(e){
                                toast("线程守护:"+e)
                            }
                            //线程守护结束

                toast("计数器："+while_control_thread_count);
                toastcount=0;

            }
            //显示计数器结束

            //跟新计数器
            toastcount+=1;
            while_control_thread_count+=1;
            //跟新计数器结束

 

          
            //alert(Gthread_list[0]["thread_lookat_findnews_start"]["threadname"]);exit();

            //关闭弹窗
            try{
                var thiswindow=className("android.widget.Button").text("知道了").exists();
                if(thiswindow){
                    thiscommon.clickxy_for_ele(className("android.widget.Button").text("知道了").findOnce());
                }
                var thiswindow=className("android.widget.Button").desc("知道了").exists();
                if(thiswindow){
                    thiscommon.clickxy_for_ele(className("android.widget.Button").desc("知道了").findOnce());
                }
                var thiswindow=className("android.widget.Button").text("我知道了").exists();
                if(thiswindow){
                    thiscommon.clickxy_for_ele(className("android.widget.Button").text("知道了").findOnce());
                }
                var thiswindow=className("android.widget.Button").desc("我知道了").exists();
                if(thiswindow){
                    thiscommon.clickxy_for_ele(className("android.widget.Button").desc("知道了").findOnce());
                }
            }catch(e){}
           //关闭弹窗结束
        },3000);

    });
}
function lookat_router(){
    click("发现")
    sleep(2000);
    click("看一看")
    sleep(1000);
    click("精选")
}
//看一看找新闻
function lookat_findnews(){
    var thisthread_count=0;

try{thread_lookat_findnews.interrupt()}catch(e){};

thread_lookat_findnews=threads.start(function(){
    try{
        Gworkthread="thread_lookat_findnews_start";
        toast("findnews线程启动");
      //  console.show();
        Glasttitle="";
       var Gcheckstate=false;
                setInterval(function(){
                    try{
                        //目标页判断
                        var flag= block_pagecheck();
                        if("1"==flag){
                
                        }else if("2"==flag){
                         //   toast("findnews start 判断这是二级页面，要返回")
                            back();
                        }else{
                            toast("finnews start 无法判断当前页面");
                            reload();
                        }
                
                    }catch(e){}

                    //滑动
                    try{  
                    
                        
                        //var result=className(Gclass_awt).text("精选").exists();
                        if( Gcheckstate==false && Gworkthread=="thread_lookat_findnews_start"){
                            thisswipe.swiperealup_custom_lnnl(Gppinterval);
                            sleep(2000);
                            var main=className("android.widget.ListView").findOnce(1);
                            if(null!=main){
                                        //找新闻点击
                                    for(var i=0;i<main.childCount();i++){
                                        //得到item的高度
                                    // log("这是for循环");
                                        itemtop=main.child(i).bounds().top;
                                        //如果高度在可视区域内才出发点击动作
                                        if(itemtop>257 && itemtop<device.height){
                                        
                                                    itemstate="null"
                                                    //判断新闻类型开始
                                                    try{
                                                        var isvideo=false;
                                                        //c3desc=main.child(i).child(3).desc();//.exists();
                                                        c2c=main.child(i).child(1).bounds().bottom-main.child(i).child(1).bounds().top;
                                                        if(c2c>60 && c2c<63){
                                                        itemstate="video"
                                                        }else{itemstate="news"}
                    
                                                    }catch(e){
                                                        itemstate="news"
                                                    }
                                                //判断新闻类型结束

                                                    if("news"==itemstate){
                                                        //找到新闻了，就初始化线程计数器
                                                        thisthread_count=0;
                                                        eletitle=main.child(i).child(0);
                                                    //     log("点击新闻："+eletitle.desc());
                                                        //判断是否打开成功，如果成功 启动阅读线程 如果失败 继续滑动
                                                        thiscommon.clickxy_for_ele(main.child(i));    
                                                        Gcheckstate=true;
                                                        //进入判断循环
                                                        sleep(2000);
                                                        var flag=block_pagecheck();
                                                        if("2"==flag){
                                                            //说明打开二级页面成功
                                                            Gworkthread ="thread_lookat_findnews_stop";  
                                                        }else if("1"==flag){
                                                            //说明还在一级页面
                                                            toast(" findnews click 判断当前还是1级页面")
                                                            //解锁滑动状态标志位
                                                            Gcheckstate=false;
                                                        }else if(""==flag){
                                                            toast("findnews click 判断不了当前页面")
                                                            Gcheckstate=false;
                                                            //顾且返回
                                                            back();
                                                        }

                                                    }//if end;
            
                                        } 
                                        //如果高度在可视区域内才出发点击动作 判断结束
                                    
                                    
                                        }//for end;
                            }
                          
                        }
                         thisthread_count+=1; 
                         if(thisthread_count>30){
                            thisthread_count=0;
                            toast("滑动"+thisthread_count+"次没有找到新闻")
                            //一级页面线程超次数触发重新启动微信
                            reload();
                         }
                        }catch(e){
                      //      toast("e2:"+e)
                         //  Greload=true;
                    };
                
                    
                },3000);

    }catch(e){
        toast("未知异常")
        Gcheckstate=false;
    }


});

}
//看一看读新闻
function lookat_readnews(){
    try{
        //目标页判断
        var flag= block_pagecheck();
        if("1"==flag){
            //如果发现是一级页面，那么杀死线程，更新标志位，让control 决定
            shutdown_allthread();
            Gworkthread="thread_lookat_readnews_stop";
        }else if("2"==flag){
         //   toast("findnews start 判断这是二级页面，要返回")
          //  back();
        }else{
            toast("readnews start 无法判断当前页面"); 
            shutdown_allthread();
            Gworkthread="thread_lookat_readnews_stop";
            
        }

    }catch(e){}
//线程计数器

var thisthread_count=0;
 Gisshare=Math.round(Math.random()*(10-1))+1;
 Gisfollow=Math.round(Math.random()*(10-1))+1;
 
  if(Gisfollow<3){
      toast("公众号文章不错，关注吧");
    follow_Official_account();
  }
thread_lookat_readnews=threads.start(function(){
    Gworkthread="thread_lookat_readnews_start";
    toast("readnews线程启动");

    var toastinterval=0;
    var Gcheckstate=false;
    
    setInterval(function(){
        try{
        var flag= block_pagecheck();
        if("1"==flag){
            //如果发现是一级页面，那么杀死线程，更新标志位，让control 决定
            shutdown_allthread();
            Gworkthread="thread_lookat_readnews_stop";
        }else if("2"==flag){
         //   toast("findnews start 判断这是二级页面，要返回")
          //  back();
        }else{
            toast("readnews start 无法判断当前页面"); 
            shutdown_allthread();
            Gworkthread="thread_lookat_readnews_stop";
            
        }

    }catch(e){}
        //超出线程计数器返回
        if(thisthread_count>30){
            //二级页面线程计数器超次数触发返回
            funback_for_readnews();
           }else{
                //根据随机种子判断是否要关注公众号
               //if(Gisfollow<20){toast("关注公众号");sleep(5000)}
                //根据条件进行滑动
                var x=Math.round(Math.random()*(1500-200))+200;
                if(Gcheckstate==false){ thisswipe.swiperealup_custom_lnnl(Gppinterval);sleep(x)}
                var toastcount=thisthread_count+1;
                if(toastinterval>3){
                    toast("模拟真人，没看清-拉回再看")
                    Swipe(400,400,400,1000,600);
                    toastinterval=0;
                }
                //返回验证机制开始
                var result=className("android.view.View").text("阅读").exists();
                if(result){
                    //如果阅读量处于可视区域，则阅读完成，进入下一步判断
                    var thistop_readstr=className("android.view.View").text("阅读").findOnce().parent().parent().parent().bounds().top;//.bounds().top            
                    if(thistop_readstr<2000){
                        funback_for_readnews();
                        Gworkthread="thread_lookat_readnews_stop";
                    }
                }
                //发现在看
                var result=className("android.view.View").textContains("在看").exists();
                //alert(result);exit();
                if(result){
                    thislook_top=className("android.view.View").textContains("在看").findOnce().parent().bounds().top;
                  if(thislook_top<2000){
                    funback_for_readnews();
                    Gworkthread="thread_lookat_readnews_stop";

                  }
                }
                    //发现用户热评
                var result=className("android.view.View").text("用户热评").exists();
                if(result){
                    var thistop_userrpstr=className("android.view.View").text("用户热评").findOnce().bounds().top;
                    if(thistop_userrpstr<2500){
                        funback_for_readnews();
                        Gworkthread="thread_lookat_readnews_stop";

                    }
                }
                //返回验证机制结束
           }

       
    
     thisthread_count+=1;
     toastinterval+=1;

    },3000);
});
}
//看一看关注公众号
function follow_Official_account(){
    
    try{var result=className("android.webkit.WebView").exists()}catch(e){result=false};
    if(result){
       try{ 
            ele=className("android.webkit.WebView").findOnce();
       
            var title=ele.child(0).child(1).child(0).child(0).text();
            ele_follow_area=ele.child(0).child(1).child(0).child(1);
            //alert(ele_follow_area.childCount());
            if(ele_follow_area.childCount()<5){
                //得到公众号名字
                Official_account_text= ele_follow_area.child(ele_follow_area.childCount()-2).child(0).text();
               // alert("公众号名称："+Official_account_text)
                //点击关注公众号
                ele_follow_area.child(ele_follow_area.childCount()-2).click();
                sleep(2000);
                //点击后判断有没有关注公众号
                if(className(Gclass_awt).text("关注公众号").exists()){
                //如果没有关注则关注
                    className(Gclass_awt).text("关注公众号").findOnce().parent().click();
                    sleep(4000);
                    //判断如果关注成功则返回2次
                    var result=className(Gclass_awt).text(Official_account_text).exists();
                   // alert(result+" "+Official_account_text);
                    if(result){
                        toast("关注公众号："+Official_account_text+" 成功");
                        back();
                        sleep(800);
                        back();
                    }else{
                        back();
                    }
                }else{
                //如果已经关注则返回
                 back();
                }
               
            }
        }catch(e){
            toast("未匹配公众号名称")
        }
    }
   

 }
 //看一看分享朋友圈
function share_friends(){
 
 toast("文章不错分享朋友圈");
 className(Gclass_v7).findOnce().child(0).child(0).child(0).click();
 sleep(2000)

 className(Gclass_awt).text("分享到朋友圈").findOnce().parent().click();

 sleep(2000)
 
 className(Gclass_awb).text("发表").findOnce().click();
 sleep(2000)
}
//看一看通用返回机制 调用分享朋友圈
function funback_for_readnews(){
    if(Gisshare<3){
        toast("分享到朋友圈");
        Gcheckstate=false;
            try{
                share_friends();
            }catch(e){}
    
    
    }else{
        toast("返回看一看-精选");
    
    }
    
    
    
        Gcheckstate=true;
        back();
        Gworkthread="thread_lookat_readnews_stop"
        sleep(2000);
        lookat_findnews();
        sleep(1000);
        try{thread_lookat_readnews.interrupt()}catch(e){}
}

//微信小程序
function play_little_program(){
       //路由
       try{
        thread_play_little_program=threads.start(function(){
                                    elestr='className("'+Gclass_awt+'").text("发现")';//.parent().parent().click();
                                    parentclick(elestr,2);
                                    
                                    sleep(1000);
                                    
                                //elestr='className("'+Gclass_awt+'").text("小程序")';
                                    click("小程序")
                                //  parentclick(elestr,7);
                                    sleep(4000);
                                    
                                
                                    var result=className(Gclass_v7).exists();
                                    if(result){
                                        thiscommon.clickxy_for_ele( className(Gclass_v7).findOnce());
                                        sleep(2000);
                                        thiscommon.onebyoneinput("跳一跳");
                                        setText("跳一跳");
                                        sleep(2000);
                                        
                                        //发送确认键盘
                                        thiscommon.touchreal_once(1305,2438);
                                        sleep(5000);
                                    
                                        //点击微信跳一跳 等待
                                        var result=className("android.view.View").text("跳一跳").exists();
                                        if(result){
                                            thiscommon.clickxy_for_ele(className("android.view.View").text("跳一跳").findOnce());
                                            var waitcount=0;
                                            toast("等待游戏加载....");
                                            sleep(15000);

                                         //   while(true){
                                            //    var result=id("com.tencent.mm:id/pd").exists()
                                             //   if(result){
                                                    thiscommon.touchreal_once(730,1760)
                                                    toast("打开成功");
                                                    
                                                    for(var i=0;i<=50;i++){
                                                        //
                                                        Swipe(400,1000,400,400,600);
                                                        sleep(2000)
                                                        thiscommon.touchreal_once(772,1949)
                                                        thiscommon.touchreal_once(772,1949)
                                                        toast("不求高分，只为养号");
                                                    }
                                                    toast("不玩了，太累了");
                                              //  break;
                                             //   }
                                        //    if(waitcount>40){toast("打开游戏超时");break}
                                        //    waitcount+=1;
                                       //     sleep(1000);
                                         //   }
                                        }
                                        //点击开始游戏
                                    }
        });
     
    }catch(e){} 
}

function Gfuninterval(){
    var Gintervalcount=0;
    while(true){
        Gintervalcount+=1;
        sleep(1000);
        if(Gintervalcount>60){
            try{thread_lookat_findnews.interrupt()}catch(e){}
            alert("结束调试");
            break;
        }
    }
}
//打开微信并判断状态
function openwechat(){
    play("global","打开微信");
    thiscommon.openpackage("com.tencent.mm/com.tencent.mm.ui.LauncherUI");
    var num=0;
  //  console.show();
    while(1){
      //  var  thispackagename=currentPackage();
      //  var  thisactivity=currentActivity();
    //    log("thisactivity is:"+thisactivity);
    //    log("thispackagename is:"+thispackagename);

        try{ var result= id("com.tencent.mm:id/ddm").text("微信").exists();}catch(e){result=false}
       if(result){
           return true;
       } 
       // if("com.tencent.mm"==thispackagename){
        //     //说明微信包名已经拉起，要判断是否是已经登录的微信
        //     //如果是已经登录的微信返回成功
        //     //如果不是则提示用户登录
        //     if("com.tencent.mm.plugin.account.ui.LoginPasswordUI"==thisactivity){
        //         alert("请输入微信密码登录");
        //         return false;
        //     }else if(""==thisactivity){
        //         alert("请登录微信");
        //         return false;
        //     }else if("com.tencent.mm.ui.LauncherUI"==thisactivity){
        //         return true;
        //     }
        // }
        //判断是否启动完成
        // var result=block_check("classname_text",'android.widget.TextView','通讯录','');
        // if(result){
        //     play("global","打开成功");
        //     break;
        // }
        num+=1;
        if(num>20){
            play("global","打开失败");
            return false;
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
 function while_findmoments(){
    try{thread_findmoments.interrupt();}catch(e){}
    click("发现");
    play("global","点击");
    play("global","发现");
 
 
 
    ele=className("android.widget.TextView").text("朋友圈");
    thiscommon.clickxy_for_ele_once(ele.findOne(1000));
    play("global","点击");
    play("global","朋友圈");
    sleep(2000);
    play("global","正在检索");
    upcount=0
    thread_findmoments=threads.start(
        function(){
            setInterval(function(){
                if("lnnl"==Gdevicetype||"xiaomi4"==Gdevicetype||"le"==Gdevicetype){
                    thisswipe.swiperealup_custom_lnnl(Gppinterval);
                 }else{
                     thisswipe.swiperealup_custom();
                 }
                sleep(2000);
                upcount+=1;
                toast("upcount is:"+upcount);
                var m=2;
                var n=1;
                //x 为向上滑动多少次后打开新闻
                var x=Math.round(Math.random()*(m-n))+n;
                if(upcount>x){
                    upcount=0;
                   // toast("准备点赞");
                        //开始找moment
                                // try{
                                    mainfeature="android.widget.ListView";
                                    var result=className(mainfeature).exists();
                                    if(result){
                                        //列表下有几个新闻块
                                       // var subcount=className(mainfeature).findOnce().childCount();
                                        //定义主框架
                                       // var main=className(mainfeature).findOnce();
                                        //看三个点是否存在
                                        var result=id("com.tencent.mm:id/eho").exists();
                                        //alert(result);
                                        if(result){
                                                ehoid=id("com.tencent.mm:id/eho").findOnce(1);
                                            //点击三个点
                                                thiscommon.clickxy_for_ele(ehoid);
                                                //在判断小红心是否出现了
                                                sleep(2000)
                                                var result=id("com.tencent.mm:id/eha").exists();
                                                if(result){
                                                    ehaid=id("com.tencent.mm:id/eha").findOnce();
                                                    play("global","点击");
                                                    play("global","赞");
                                                    thiscommon.clickxy_for_ele(ehaid);
                                                }
                                        }
    
                                    }//if end
 
                              //   }catch(e){
 
                                // }                       //先判断列表存不存在
                           
 
                } //if upcount>x end
            },2000)
        }//func end;
    );
 }

//微信聊天
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
        var searchbutton=id("com.tencent.mm:id/jb").findOnce();
 
        //var ele=className("android.support.v7.widget.LinearLayoutCompat").className("RelativeLayout").findOnce(0);
        thiscommon.clickxy_for_ele_once(searchbutton);
        sleep(1000);
 
       //输入用户名
       play("global","随机搜索好友");
        thiscommon.onebyoneinput(username);
        setText(username);
        sleep(1000);      
        
        //点击搜索结果
        play("global","点击");
        var result=className('android.widget.ListView').exists();
        if(result){
            ele=className('android.widget.ListView').findOnce();
            ele.child(1).click();
            thiscommon.clickxy_for_ele(ele.child(1));
        }
        //  ele=className("android.widget.ListView").className("RelativeLayout").findOnce(2);
        // thiscommon.clickxy_for_ele(ele.child(0));
        
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
 //exit();
      
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
 //用户微信发送语音长按键
 function langtouch(x,y,interval){
 //   var ra = new RootAutomator();
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
    sleep(33);
    ra.sendEvent(3, 58, 85);
    ra.sendSync();
    sleep(35);
    ra.sendEvent(3, 58, 91);
    ra.sendEvent(3, 48, 9);
    // ra.sendSync();
    // sleep(1177);
   
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
 function reload(){
           //判断是否需要重载线程
           
      
            try{
                     toast("重新开始任务"); 
                    shutdown_allthread();
                    sleep(2000)              
                    thiscommon.clean(Gdevicetype);
                    var thisresult= openwechat();
                    if(thisresult){
                        play("global","打开成功")
                        Gworkthread="";
                        lookat_router();
                        sleep(2000);
                        lookat_findnews();
                    }else{
                        play("global","打开失败")
                    } 
            }catch(e){}
         
    
      
        //判断是否需要重载线程结束
 }
 function block_pagecheck(){
     var whilecount=0;
     var flag="";
        while(true){
            if(whilecount>5){
                //时间太长了
                return "";
            }
            //判断二级页面右上角三点  
            var elestr=className(Gclass_v7);
            var result=elestr.exists();

            if(result && elestr.findOnce().depth()==8){
                 flag="2";// return "2";
                }else {
                    //判断是不是一级页面
                    var result=className("android.widget.TextView").text("精选").exists();
                    if(result){
                       flag="1";// return "1";
                    }else{
                        //搞不清楚是一级页面还是二级页面了
                        flag="";//return "?";
                    }
        
                } //else end;
            if(""!=flag){
                return flag;
            }
            sleep(1000)
            whilecount+=1;
        }


 }
/*********** 通用函数****************************************/ 
function shutdown_allthread(){
    try{thread_lookat_findnews.interrupt()}catch(e){}
    try{thread_lookat_readnews.interrupt()}catch(e){}
    try{thread_play_little_program.interrupt()}catch(e){}
    try{}catch(e){}

}
//父节点点击
 function parentclick(elestr,uplevel){
    str="";
        for(var i=1;i<=uplevel;i++){
            str=str+".parent()";
        }
    evalstr=elestr+".findOnce()"+str+".click()";
    eval(evalstr);
    //alert(ele.toString());
    }

 //播放声音
function play(subpath,appname){
  //  if(Gsoftvoice==true && "fast"!=Grunspeed && "normal"!=Grunspeed &&"normal+"!=Grunspeed){
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
                   
  //          }   
  //  }else{
        // toast(appname);
  //  }
 }
}
