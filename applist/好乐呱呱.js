//var thisswipecount=0;
//遍历刮奖新闻块
function finditem(){
    var parent=className("android.support.v7.widget.RecyclerView").findOnce(1);//.childCount();
    var main=parent;
    //alert(main.childCount());
    for(var i=0;i<main.childCount();i++){
      var thistitle="";
      try{
        thistitle=main.child(i).child(0).child(0).child(3).child(0).text();
        if(thistitle==""){
          thistitle="标题空"
        }
      }catch(e){
        thistitle="无标题";
      }
      try{
        vc=main.child(i).child(0).child(0).childCount();
      // ggk=main.child(i).child(0).child(vc-1).child(5).text();
        gc=main.child(i).child(0).child(0).child(vc-1).childCount();
        //得到刮刮卡text
        ggk=main.child(i).child(0).child(0).child(vc-1).child(gc-2).text();
      //得到单位
      try{ ggkpriv=main.child(i).child(0).child(0).child(vc-2).child(gc-1).text();}catch(e){
        ggkpriv="没有"
      }
    //得到价格
      try{ ggkprivpriv=main.child(i).child(0).child(0).child(vc-2).child(gc-2).text();}catch(e){
        ggkprivpriv="没有"
      }
      //首先要有刮刮卡字符，其次单位要是元才行
      if(ggk.indexOf("刮")>-1){
      //其次判断main.child(i)的中心点是否在可视区内
          main.child(i).click();  //控件支持clickenable true
          //alert("点击"+" "+ggkprivpriv+ggkpriv+"  "+ggk);
          break;  
      }else{
          if(Callback_finditem_swipecount>5){
              //告诉主线程，没有可以刮奖卡片了，可以提前切换下一个
              toast("通知主线程，提前结束");
              Grunbreak=true;
          }
          //如果没有匹配到可以刮卡的区域，上滑一次
          Swipe(400,1000,400,400,900);
          Callback_finditem_swipecount+=1;
      //    toast("Callback_finditem_swipecount"+Callback_finditem_swipecount);
      }
      }catch(e){}
    }
    thisforstart=false;
}
//遍历刮奖新闻块结束
function swipeguagua(){
    var result=id("com.haoleguagua.android:id/base_scratch_card").exists();
    if(result){
      var thisleft=id("com.haoleguagua.android:id/base_scratch_card").findOnce().bounds().left;
      var thistop=id("com.haoleguagua.android:id/base_scratch_card").findOnce().bounds().top;
      var thisright=id("com.haoleguagua.android:id/base_scratch_card").findOnce().bounds().right;
      var thisbottom=id("com.haoleguagua.android:id/base_scratch_card").findOnce().bounds().bottom;
      var sx2=(thisright-thisleft)/2+thisleft
      var sx1=(sx2-thisleft)/2+thisleft;
      var sx3=sx2+sx1;
    Swipe(sx1-300,thisbottom-80,sx3+200,thistop+90,900);
    sleep(800)
    Swipe(sx1-300,thisbottom+290,sx2+20,thisbottom+170,900);
    sleep(800)
    Swipe(sx2,thisbottom+300,sx3+200,thisbottom+180,900);
    sleep(800)
    Swipe(sx1-300,thisbottom+650,sx2+20,thisbottom+530,900);
    sleep(800)
    Swipe(sx2,thisbottom+640,sx3+200,thisbottom+530,900);
    sleep(800)     
     // alert(sx3);
    }
    sleep(5000);
   thisforstart=false;
  }  