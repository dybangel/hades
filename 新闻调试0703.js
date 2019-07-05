toast("新闻调试");
// play("global",1);
// exit();
const thiscommon=require("./mycommon.js");
const thisswipe=require("./myswipe.js");
v4feature="android.support.v4.view.ViewPager";
v7feature="android.support.v7.widget.RecyclerView";
androidx="androidx.recyclerview.widget.RecyclerView"
//北京知天下获取新闻题目
// var ele=className("android.support.v7.widget.RecyclerView").className("LinearLayout").findOnce();
// ele=ele.child(0).child(0).text();


//北京知天下，循环得到标题start
// var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
// //先得到有多少个子节点
// var subcount=ele.findOnce(0).childCount();
// //在将主框架实例化
// var main=ele.findOnce();
// for(var i=0;i<subcount;i++){
// var ll=main.child(i).child(0).child(0).text();
// alert(ll);
// }
// exit();
//北京知天下，循环得到标题stop

//北京知天下
// var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
// //先得到有多少个子节点
// var subcount=ele.findOnce(0).childCount();
// //在将主框架实例化
// var main=ele.findOnce();
// for(var i=0;i<subcount;i++){
//        try{
//             var substr=main.child(i).child(0).child(2).child(0).text();
//             var ll=main.child(i).child(0).child(0).text();
//             alert(ll);
//             if(substr=="广告"){
//                 play("global",i);
//                 play("global","广告不点击");
//             }else{
//                 play("global",i);
//                 play("global","点击"); 
//             }
//        }catch(e){
//         //alert(e)
//         play("global",i);
//         play("global","广告不点击")
//        }
// }

//掌上消息-没有广告的情况
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


//有米头条
// var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
// //先得到有多少个子节点
// var subcount=ele.findOnce(0).childCount();
// //在将主框架实例化
// var main=ele.findOnce();
// for(var i=0;i<subcount;i++){
//        try{
//             var ltitle=main.child(i).child(0).text();
//             alert(ltitle);
//             if(ltitle!=""){
//                 play("global",i);
//                 play("global","点击"); 
//             }else{
//                 play("global",i);
//                 play("global","广告不点击")
//             } 
//        }catch(e){
//         //alert(e)
//         play("global",i);
//         play("global","广告不点击")
//        }
//     }

//有看头-热点新闻 广告识别还是有问题
// var ele=className("android.support.v4.view.ViewPager");//.className("LinearLayout").findOnce(5);
// //先得到有多少个子节点
// var subcount=ele.findOnce(0).child(0).child(0).child(0).child(0).childCount();
// //alert(subcount);
// //exit();
// //在将主框架实例化
// var main=ele.findOnce(0).child(0).child(0).child(0).child(0);
// for(var i=0;i<subcount;i++){
//        try{
//             var substr=main.child(i).child(3).child(0).text().replace(/^\s+|\s+$/g,"");//.child(3).child(0).text();
//            var ltitle=main.child(i).child(1).child(0).text();
//             alert(ltitle);
//             if(substr=="广告"){
//                 play("global",i);
//                 play("global","广告不点击");
//             }else{
//                 play("global",i);
//                 play("global","点击"); 
//                 var substr2=main.child(i).child(2).child(1).text().replace(/^\s+|\s+$/g,""); 
//                 if(substr2=="广告"){
//                     play("global",i);
//                     play("global","广告不点击");
//                 }else{
//                     play("global",i);
//                     play("global","点击");
//                 }
//             }
//        }catch(e){
//         //alert(e)
//         //正常的新闻会抛出异常  
//         play("global",i);
//         play("global","点击")
//        }
// }

//波波视频 注意没有二级页面
// var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
// //先得到有多少个子节点
// var subcount=ele.findOnce(0).childCount();
// //alert(subcount);exit();
// //在将主框架实例化
// var main=ele.findOnce();
// for(var i=0;i<subcount;i++){
//        try{
//            var ltitle=main.child(i).child(1).child(0).text();
//           // alert(ltitle);
//                 try{
//                     var substr=main.child(i).child(3).child(1).child(0).child(1).id();
//                    // alert(id+"::"+ltitle);
//                     //如果能顺利执行反而是广告
//                         play("global",i);
//                         play("global","广告不点击")
//                 }catch(e){
//                     //抛出异常的，反而是正常的
//                     play("global",i);
//                     play("global","点击"); 
//                 }
              
//        }catch(e){
//         //alert(e)
//         play("global",i);
//         play("global","广告不点击")
//        }
// }

//盈贝头条 标题为空的就是广告
////1标识出主框架定界符
// var ele=className(androidx);//.className("LinearLayout").findOnce(5);
// //2定位到结构块层级父节点，并取出结构块数量
// var subcount=ele.findOnce(0).childCount();
// //检测一下子节点数量是否正确
// //alert(subcount);exit();
// //将主框架实例化
// var main=ele.findOnce(0);
// for(var i=0;i<subcount;i++){
//        try{
//            //取出标题，主要是为了验证正确性
//            var ltitle=main.child(i).child(0).text();
//            alert(ltitle);
//           if(ltitle==""){
//             play("global",i);
//            play("global","广告不点击")
//           }else{
//             play("global",i);
//             play("global","点击"); 
//           }
//                 // try{
//                 //     var substr=main.child(i).child(3).child(1).child(0).child(1).id();
//                 //    // alert(id+"::"+ltitle);
//                 //     //如果能顺利执行反而是广告
//                 //         play("global",i);
//                 //         play("global","广告不点击")
//                 // }catch(e){
//                 //     //抛出异常的，反而是正常的
//                 //     play("global",i);
//                 //     play("global","点击"); 
//                 // }
              
//        }catch(e){
//         //alert(e)
//         play("global",i);
//         play("global","广告不点击")
//        }
// }

//新闻赚 已经实现y1>318 y2<1770 fuck变态的布局，会有遮罩
// //1标识出主框架定界符
// var ele=className(v4feature);//.className("android.widget.ListView");//.className("LinearLayout").findOnce(5);
// //2定位到结构块层级父节点，并取出结构块数量 0 0 0 0 3 0
// //var subcount=ele.findOnce(0).childCount();
// var subcount=ele.findOnce(0).child(0).child(0).child(0).child(0).child(3).child(0).childCount();//.child(3);//.child().childCount();
// //检测一下子节点数量是否正确
// //alert(subcount);exit();
// //将主框架实例化
// var main=ele.findOnce(0).child(0).child(0).child(0).child(0).child(3).child(0);
// //多了会遮盖
// for(var i=0;i<subcount;i++){
//        try{
          
//            var bd=main.child(i).child(0).bounds();
//            var y1=bd.top;
//            var y2=bd.bottom;
//            if(y1>318 && y2<1770){
//             //取出标题，主要是为了验证正确性
//                     var ltitle=main.child(i).child(0).desc();//.child(0).desc();
//                     if(ltitle.indexOf("广告")>0){
//                         play("global","广告不点击")
//                     }else{
//                         alert(ltitle);
//                         play("global","点击");
//                     }

//            }

              
//        }catch(e){
//         play("global","广告不点击")
//        }
// }

//网易新闻极速版
// //1标识出主框架定界符
// var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
// //2定位到结构块层级父节点，并取出结构块数量
// var subcount=ele.findOnce(0).childCount();
// //检测一下子节点数量是否正确
// //alert(subcount);exit();
// //将主框架实例化
// var main=ele.findOnce(0);
// for(var i=0;i<subcount;i++){
//        try{
//            //取出标题，主要是为了验证正确性
//            var ltitle=main.child(i).child(0).child(0).text();
//            alert(ltitle);
//            if(main.child(i).className()=="android.widget.LinearLayout"){
//             play("global",i);
//             play("global","广告不点击");
//            }else{
//             play("global",i);
//             play("global","点击");
//            }  
//        }catch(e){
//         //alert(e)
//          // var ltitle2=main.child(i).child(0).child(1).child(0);//.text();
//           // alert(ltitle2);
//          play("global",i);
//         play("global","广告不点击")
//        }
// }

//百姓头条
// //1标识出主框架定界符
// var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
// //2定位到结构块层级父节点，并取出结构块数量
// var subcount=ele.findOnce(0).childCount();
// //检测一下子节点数量是否正确
// //alert(subcount);exit();
// //将主框架实例化
// var main=ele.findOnce(0);
// for(var i=0;i<subcount;i++){
//        try{
//            //取出标题，主要是为了验证正确性
//            var ltitle=main.child(i).child(0).text();
//            alert(ltitle);
//            try{
//              //  alert(main.child(i).child(4).text());
//                  if(main.child(i).child(4).text()==""){
//                  play("global",i);
//                  //play("global","打开")
//                  play("global","广告不点击");
//                }else{
//                 play("global",i);
//                 play("global","点击");
//                }
//            }catch(e){
            
//                 play("global",i);
//                 play("global","点击");
                
//            }
           
//        }catch(e){
 
//          play("global",i);
//         play("global","广告不点击")
//        }
// }

//本地看点
// //1标识出主框架定界符
// var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
// //2定位到结构块层级父节点，并取出结构块数量
// var subcount=ele.findOnce(0).childCount();
// //检测一下子节点数量是否正确
// //alert(subcount);exit();
// //将主框架实例化
// var main=ele.findOnce(0);
// for(var i=0;i<subcount;i++){
//        try{
//            //取出标题，主要是为了验证正确性
//            var ltitle=main.child(i).child(0).child(0).text();
//            alert(ltitle);
//            if(ltitle!=""){
//             play("global",i);
//             play("global","点击");
//            }else{
//                play("global",i);
//         play("global","广告不点击")
//            }

           
//        }catch(e){
 
//         // play("global",i);
//         //play("global","广告不点击")
//        }
// }
//菠萝小组
// //1标识出主框架定界符
// var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
// //2定位到结构块层级父节点，并取出结构块数量
// var subcount=ele.findOnce(0).childCount();
// //检测一下子节点数量是否正确
// //alert(subcount);exit();
// //将主框架实例化
// var main=ele.findOnce(0);
// for(var i=0;i<subcount;i++){
//        try{
//            //取出标题，主要是为了验证正确性
//            var ltitle=main.child(i).child(0).child(0).child(0).text();
//            alert(ltitle);
//              play("global",i);
//              play("global","点击");
    
           
//        }catch(e){
 
//          play("global",i);
//         play("global","广告不点击")
//        }
// }

//大众看点
// //1标识出主框架定界符
// var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
// //2定位到结构块层级父节点，并取出结构块数量
// var subcount=ele.findOnce(0).childCount();
// //检测一下子节点数量是否正确
// //alert(subcount);exit();
// //将主框架实例化
// var main=ele.findOnce(0);
// for(var i=0;i<subcount;i++){
//        try{
//            //取出标题，主要是为了验证正确性
//            var ltitle=main.child(i).child(0).text();
           
//              if(ltitle==""){
//                  var ltitle2=main.child(i).child(0).child(1).child(0).text();
//                  alert(ltitle2);
//                 var substr=main.child(i).child(0).child(1).child(1).child(1).text();
//                 if(substr=="广告"){
//                     play("global",i);
//                     play("global","广告不点击");
//                 }else{
//                        play("global",i);
//                 play("global","点击");
//                 }
             
//              }else{
//                 alert(ltitle);
//                 play("global",i);
//                 play("global","点击");
//              }
            
//        }catch(e){
 
//          //play("global",i);
//        // play("global","广告不点击")
//        }
// }
exit();

//只能找第一个节点，在往下用findonce 找不到
// var ll=className("android.support.v7.widget.RecyclerView").className("LinearLayout").findOnce(0);
// alert(ll);exit();


var text=ll.child(0).child(0).text();
alert(text);

exit();
//
alert(subcount);exit();
if(ele.exists()){
var str= ele.ClassName('LinearLayout');
alert(str);
//childcount方式检测
    // var childnum=ele.findOnce(1).childCount();
    // if("3"==childnum){
    //     play("global",childnum);
    //     play("global","广告不点击");
    // }else{
    //     play("global",childnum);
    //     play("global","打开");
    //     thiscommon.clickxy_for_ele(ele.findOnce(1));
    // }
}

function play(subpath,appname){
     media.playMusic("/storage/emulated/0/voice/"+subpath+"/"+appname+".mp3");
     sleep(media.getMusicDuration());
 }