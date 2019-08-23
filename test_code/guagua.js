toast("单步执行")
//好运app
try{abnormal()}catch(e){};

//页面判断机制
thispageone=false;
thispagetwo=false;
//一级页面判断
var thispageone=className("android.widget.TextView").textContains("公示榜").exists();
if(thispageone){
  try{finditem()}catch(e){};
}
//二级页面判断
var thispagetwo=id("com.haoyunapp.hy:id/sv_cover_pic").exists();
if(thispagetwo){
 //finditem();
 try{swipeguagua()}catch(e){};
}

//关闭弹窗
function abnormal(){
  var result=className("android.widget.TextView").text("开始刮卡").exists()
  if(result){
    className("android.widget.TextView").text("开始刮卡").findOnce().click();//thiscommon.clickxy_for_ele()
  }
  //继续挂卡弹窗
  var result=className("android.widget.TextView").text("继续刮卡").exists();
  if(result){
    className("android.widget.TextView").text("继续刮卡").findOnce().click();
  }
  //看视频才可以玩的弹窗
  var result=className("android.widget.TextView").textContains("才可以玩").exists();
  if(result){
    className("android.widget.TextView").text("确定").click();
  }
  
  var havecoin=className("android.widget.TextView").text("恭喜你获得").exists();
  if(havecoin){
    className("android.widget.TextView").text("确定").click();;
  }
}

//遍历刮奖新闻块
function finditem(){
          var parent=className("android.view.ViewGroup").findOnce(0)//.childCount();
          var main=parent.child(0).child(0).child(1);
          //alert(main.childCount());
          for(var i=0;i<main.childCount();i++){
            var thistitle="";
            try{
              thistitle=main.child(i).child(0).child(2).text();
              if(thistitle==""){
                thistitle="标题空"
              }
            }catch(e){
              thistitle="无标题";
            }
            try{

              vc=main.child(i).child(0).childCount();

            // ggk=main.child(i).child(0).child(vc-1).child(5).text();

              gc=main.child(i).child(0).child(vc-1).childCount();
              //得到刮刮卡text
              ggk=main.child(i).child(0).child(vc-1).child(gc-1).text();
            
            //得到单位
            try{ ggkpriv=main.child(i).child(0).child(vc-1).child(gc-2).text();}catch(e){
              ggkpriv="没有"
            }
          //得到价格
            try{ ggkprivpriv=main.child(i).child(0).child(vc-1).child(gc-3).text();}catch(e){
              ggkprivpriv="没有"
            }
          // alert(main.child(i).child(0)); 
            //alert(thistitle+"  "+ggkprivpriv+ggkpriv+"  "+ggk);
            //首先要有刮刮卡字符，其次单位要是元才行
            if("刮刮卡"==ggk && ggkpriv.indexOf("元")>-1){
            //其次判断main.child(i)的中心点是否在可视区内
                main.child(i).click();  //控件支持clickenable true
                alert("点击"+ggkprivpriv+ggkpriv+"  "+ggk);
                break;
                exit();
            }
            }catch(e){}

          }
}
//遍历刮奖新闻块结束


//判断二级页面打开成功与否并开始滑动
function swipeguagua(){
  var result=id("com.haoyunapp.hy:id/sv_cover_pic").exists();
  if(result){
    var thisleft=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().left;
    var thistop=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().top;
    var thisright=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().right;
    var thisbottom=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().bottom;
    var sx2=(thisright-thisleft)/2+thisleft
    var sx1=(sx2-thisleft)/2+thisleft;
    var sx3=sx2+sx1;
   Swipe(sx1,thisbottom-150,sx1,thistop,600);
   sleep(800)
   Swipe(sx2,thisbottom-150,sx2,thistop,800);
   sleep(800)   
   Swipe(sx3,thisbottom-150,sx3,thistop,700);
   sleep(800);
   Swipe(sx1-50,thisbottom-150,sx3,thistop,800);
   sleep(800)
   Swipe(sx3-50,thisbottom-150,sx1,thistop,800);
   sleep(800)
   Swipe(sx1-150,thisbottom-150,sx1,thistop,800);

   // alert(sx3);
  }else{
   // alert(result);
    var havecoin=className("android.widget.TextView").text("恭喜你获得").exists();
    if(havecoin){
      className("android.widget.TextView").text("确定").click();;
    }
  }
  //alert(main.childCount());
  exit();
}



