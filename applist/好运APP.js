//var thisswipecount=0;
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
      //首先要有刮刮卡字符，其次单位要是元才行
      if("刮刮卡"==ggk && ggkpriv.indexOf("元")>-1 && thistitle=="标题空" && thistitle=="无标题"){
      //其次判断main.child(i)的中心点是否在可视区内
          main.child(i).click();  //控件支持clickenable true
          alert("点击"+ thistitle+" "+ggkprivpriv+ggkpriv+"  "+ggk);
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
    var result=id("com.haoyunapp.hy:id/sv_cover_pic").exists();
    if(result){
      var thisleft=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().left;
      var thistop=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().top;
      var thisright=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().right;
      var thisbottom=id("com.haoyunapp.hy:id/sv_cover_pic").findOnce().bounds().bottom;
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
     Swipe(sx1-150,thisbottom-150,sx1,thistop,900);
     // alert(sx3);
    }
    sleep(5000);

   thisforstart=false;
  }  