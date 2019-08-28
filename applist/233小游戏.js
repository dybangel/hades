//var thisswipecount=0;
//遍历刮奖新闻块
function finditem(){
  var img = captureScreen();
//取出导航栏灰色按钮图标坐标值所属颜色值
var color = images.pixel(img, 717,2432);
color= colors.toString(color);
if("#ff404040"==color){
//这是没有弹窗的颜色
}else if("#ff1e1e1e"==color){
//这是出现蒙版弹窗的颜色，会暗淡一些
thiscommon.touchreal(1220,745);

thiscommon.touchreal(1220,560);
}
    var parent=className("android.support.v7.widget.RecyclerView").findOnce(0);//.childCount();
    var main=parent;
    //alert(main.childCount());
    for(var i=0;i<main.childCount();i++){
      var thistitle="";
      try{
        thistitle=main.child(i).child(1).child(0).child(1).text();
        if(thistitle==""){
          thistitle="标题空"
        }
      }catch(e){
        thistitle="无标题";
      }
      try{
        vc=main.child(i).child(1).childCount();
      // ggk=main.child(i).child(0).child(vc-1).child(5).text();
        gc=main.child(i).child(1).child(vc-1).childCount();
        //得到刮刮卡text
        ggk=main.child(i).child(1).child(vc-1).child(gc-2).text();
      //得到单位
      try{ ggkpriv=main.child(i).child(vc-1).child(gc-3).id();}catch(e){
        ggkpriv="没有"
      }
    //得到价格
      try{ ggkprivpriv=main.child(i).child(1).child(vc-1).child(gc-3).text();}catch(e){
        ggkprivpriv="没有"
      }
      //首先要有刮刮卡字符，其次单位要是元才行
      if(ggk.indexOf("刮中")>-1){
      //其次判断main.child(i)的中心点是否在可视区内
          main.child(i).click();  //控件支持clickenable true
          //alert("点击"+"  "+ggk);
          Callback_finditem_swipecount=0;
          break;     
     }else{
        //如果没有匹配到可以刮卡的区域，上滑一次
        Swipe(400,1000,400,400,900);
        //计数器增加1
        Callback_finditem_swipecount+=1;
        // toast("Callback_finditem_swipecount"+Callback_finditem_swipecount);
          }
}catch(e){
    //如果出现终极异常，保持上滑一次 计数器+1
    Swipe(400,1000,400,400,900);
    Callback_finditem_swipecount+=1;
 //   toast("final e:"+e)
}
if(Callback_finditem_swipecount>10){
    //告诉主线程，没有可以刮奖卡片了，可以提前切换下一个
    toast("通知主线程，提前结束");
    Grunbreak=true;
}
}//for end;
thisforstart=false;
}
//遍历刮奖新闻块结束
function swipeguagua(){
    var result=id("com.meta.xyx:id/vw_scratch_game_cells").exists();
    if(result){
      var thisleft=id("com.meta.xyx:id/vw_scratch_game_cells").findOnce().bounds().left;
      var thistop=id("com.meta.xyx:id/vw_scratch_game_cells").findOnce().bounds().top;
      var thisright=id("com.meta.xyx:id/vw_scratch_game_cells").findOnce().bounds().right;
      var thisbottom=id("com.meta.xyx:id/vw_scratch_game_cells").findOnce().bounds().bottom;
      var sx2=(thisright-thisleft)/2+thisleft
      var sx1=(sx2-thisleft)/2+thisleft;
      var sx3=sx2+sx1;
     Swipe(sx1,thisbottom-150,sx1,thistop,900);
     sleep(800)
     Swipe(sx2,thisbottom-150,sx2,thistop,900);
     sleep(800)   
     Swipe(sx3,thisbottom-150,sx3,thistop,900);
     sleep(800);
     Swipe(sx1-50,thisbottom-150,sx3,thistop,900);
    //  sleep(800)
    //  Swipe(sx3-50,thisbottom-150,sx1,thistop,900);
    //  sleep(800)
    //  Swipe(sx1-150,thisbottom-150,sx1-120,thistop,900);
     // alert(sx3);
     sleep(800)
     Swipe(thisleft+80,thisbottom+326,thisright-60,thisbottom+336,800);
    }
    sleep(5000);
   thisforstart=false;
  }  