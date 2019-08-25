//var thisswipecount=0;
//遍历刮奖新闻块
//finditem();
function finditem(){
  var parent=className("android.view.ViewGroup").findOnce(0)//.childCount();
  var main=parent.child(0).child(0).child(1);
  for(var i=0;i<main.childCount();i++){
                      //得到刮刮卡标题  
                      var thistitle="";
                      try{
                          thistitle=main.child(i).child(0).child(2).text();
                          if(thistitle==""){
                          thistitle="标题空"
                          }
                      }catch(e){
                          thistitle="标题空";
                      }
                      //得到刮刮卡标题结束
                      try{
                          //得到区块下一层子节点数量vc
                          vc=main.child(i).child(0).childCount();
                          //开始判断 是否是双列刮刮卡
                          if(main.child(i).child(0).child(0).className()=="android.view.ViewGroup"){
                               //说明指这是一组双列刮刮卡，目前发现的双列刮刮卡都可以点击
                              toast("点击双列刮刮卡");
                               main.child(i).child(0).child(0).click();  //控件支持clickenable true
                               Callback_finditem_swipecount=0;
                                break;
                          }
                          //在往下取一层子节点数量gc
                          gc=main.child(i).child(0).child(vc-1).childCount();
                          //就可以得到刮刮卡text
                          ggk=main.child(i).child(0).child(vc-1).child(gc-1).text();
                          //得到单位
                          try{ ggkpriv=main.child(i).child(0).child(vc-1).child(gc-2).text();}catch(e){
                              ggkpriv="没有"
                          }
                          //得到价格
                          try{ ggkprivpriv=main.child(i).child(0).child(vc-1).child(gc-3).text();}catch(e){
                              ggkprivpriv="没有"
                          }
                          //开始判断 首先要有刮刮卡字符，并且标题为空的符合刮卡条件
                          if("刮刮卡"==ggk  && thistitle=="标题空"){
                              toast("点击"+ thistitle+" "+ggkprivpriv+ggkpriv+"  "+ggk);
                              //其次判断main.child(i)的中心点是否在可视区内
                                main.child(i).click();  //控件支持clickenable true
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