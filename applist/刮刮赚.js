
function finditem(){
  var parent=className("android.support.v7.widget.RecyclerView").findOnce(0)//.childCount();
  var main=parent;
 // alert(main.childCount());
 // exit();
  //alert(main.childCount());
  for(var i=0;i<main.childCount();i++){

   //如果是android.widget.LinearLayout
    if("android.widget.LinearLayout"==main.child(i).className()){
      try{
        var thistitle=main.child(i).child(0).child(1).text();
        //刮奖块不能有标题，高度必须大于5个像素
        if(""==thistitle && main.child(i).bounds().bottom-main.child(i).bounds().top>5){
          toast("1点击"+"标题"+thistitle)
          alert(main.child(i));
        //  main.child(i).click();
          Callback_finditem_swipecount=0;
          break;
        }else{}
      }catch(e){
        toast("2点击 e："+e)
        main.child(i).click();
        Callback_finditem_swipecount=0;
        break;
      }
    }else{
      Swipe(400,1000,400,400,900);
      Callback_finditem_swipecount+=1;
    }
  //  toast("Callback_finditem_swipecount:"+Callback_finditem_swipecount)
    if(Callback_finditem_swipecount>10){
                //告诉主线程，没有可以刮奖卡片了，可以提前切换下一个
                toast("通知主线程，提前结束");
                Grunbreak=true;
    }


  }
  thisforstart=false;
}
//遍历刮奖新闻块结束
function swipeguagua(){
var thisfeature="com.guazhuan.android:id/scratch_behind";
  var result=id(thisfeature).exists();
  if(result){
    var thisleft=id(thisfeature).findOnce().bounds().left;
    var thistop=id(thisfeature).findOnce().bounds().top;
    var thisright=id(thisfeature).findOnce().bounds().right;
    var thisbottom=id(thisfeature).findOnce().bounds().bottom;
    var sx2=(thisright-thisleft)/2+thisleft
    var sx1=(sx2-thisleft)/2+thisleft;
    var sx3=sx2+sx1;
   Swipe(sx1,thisbottom-150,sx1,thistop,900);
   sleep(800)
   Swipe(sx2,thisbottom-150,sx2,thistop,900);
   sleep(800)   
   Swipe(sx3,thisbottom-150,sx3,thistop,900);
   sleep(800);
  //  Swipe(sx1-50,thisbottom-150,sx3,thistop,900);
  //  sleep(800)
  //  Swipe(sx3-50,thisbottom-150,sx1,thistop,900);
  //  sleep(800)
  //  Swipe(sx1-150,thisbottom-150,sx1,thistop,900);
   // alert(sx3);
   var thisfeature="com.guazhuan.android:id/scratch_bonus_layout";
var result=id(thisfeature).exists();
// alert(result);
if(result){
  var thisleft=id(thisfeature).findOnce().bounds().left;
  var thistop=id(thisfeature).findOnce().bounds().top;
  var thisright=id(thisfeature).findOnce().bounds().right;
  var thisbottom=id(thisfeature).findOnce().bounds().bottom;
 Swipe(thisleft,(thisbottom-thistop)/2+thistop,thisright,(thisbottom-thistop)/2+thistop,900);
}

  }
  sleep(5000);

 thisforstart=false;


}
function horscraping(){

}
