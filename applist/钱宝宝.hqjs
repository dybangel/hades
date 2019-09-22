//var thisswipecount=0;
//遍历刮奖新闻块
function finditem(){
    var parent=className("android.support.v7.widget.RecyclerView").findOnce(0);//.childCount();
    var main=parent;
    //alert(main.childCount());
    for(var i=0;i<main.childCount();i++){
      var thistitle="";
      try{
        thistitle=main.child(i).child(0).child(1).text();
        if(thistitle==""){
          thistitle="标题空"
        }
      }catch(e){
        thistitle="无标题";
      }
      try{
        vc=main.child(i).childCount();
      // ggk=main.child(i).child(0).child(vc-1).child(5).text();
        gc=main.child(i).child(vc-1).childCount();
        //得到刮刮卡text
        ggk=main.child(i).child(vc-1).child(gc-1).text();
      //得到单位
      try{ ggkpriv=main.child(i).child(vc-1).child(gc-3).id();}catch(e){
        ggkpriv="没有"
      }
    //得到价格
      try{ ggkprivpriv=main.child(i).child(vc-1).child(gc-2).text();}catch(e){
        ggkprivpriv="没有"
      }
      //首先要有刮刮卡字符，其次单位要是元才行
      if("刮刮卡"==ggk && ggkpriv=="com.wangniu.sharearn:id/ggk_bonus_rmb"){
      //其次判断main.child(i)的中心点是否在可视区内
          main.child(i).click();  //控件支持clickenable true
         // alert("点击"+ggkprivpriv+"元"+"  "+ggk);
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
    var result=id("com.wangniu.sharearn:id/scratch_card_grid").exists();
    if(result){
      var thisleft=id("com.wangniu.sharearn:id/scratch_card_grid").findOnce().bounds().left;
      var thistop=id("com.wangniu.sharearn:id/scratch_card_grid").findOnce().bounds().top;
      var thisright=id("com.wangniu.sharearn:id/scratch_card_grid").findOnce().bounds().right;
      var thisbottom=id("com.wangniu.sharearn:id/scratch_card_grid").findOnce().bounds().bottom;
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
     sleep(800)
     Swipe(sx3-50,thisbottom-150,sx1,thistop,900);
     sleep(800)
     Swipe(sx1-200,thisbottom-150,sx1-120,thistop,800);
     sleep(800)
     Swipe(thisleft+80,thisbottom+346,thisright-60,thisbottom+356,800);
     sleep(800)
     Swipe(thisleft+80,thisbottom+466,thisright-60,thisbottom+446,800);
     // alert(sx3);
    }
    sleep(5000);
   thisforstart=false;
  }  