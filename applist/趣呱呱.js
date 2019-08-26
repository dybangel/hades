//遍历刮奖新闻块
function finditem(){
  var main=className("android.support.v7.widget.RecyclerView").findOnce(1)//.childCount();
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
      ggk=main.child(i).child(0).child(1).child(0).text();
    try{ ggkprivpriv=main.child(i).child(0).child(1).child(2).text();}catch(e){
      ggkprivpriv="没有"
    }
    if("赢取"==ggk){
    //其次判断main.child(i)的中心点是否在可视区内
        main.child(i).click();  //控件支持clickenable true
        Callback_finditem_swipecount=0;
        //alert("点击"+ggkprivpriv+"  "+ggk);
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
//判断二级页面打开成功与否并开始滑动
function swipeguagua(){
var result=id("com.b12lab.myluck:id/swipeRefreshLayout").exists();
if(result){
var thisleft=id("com.b12lab.myluck:id/swipeRefreshLayout").findOnce().bounds().left;
var thistop=id("com.b12lab.myluck:id/swipeRefreshLayout").findOnce().bounds().top;
var thisright=id("com.b12lab.myluck:id/swipeRefreshLayout").findOnce().bounds().right;
var thisbottom=id("com.b12lab.myluck:id/swipeRefreshLayout").findOnce().bounds().bottom;
var sx2=(thisright-thisleft)/2+thisleft;
var sx1=(sx2-thisleft)/2+thisleft;
var sx3=sx2+sx1;
var sx4=(thistop-thisbottom)/2+thistop;

//  var sx6=sx5+sx4;
Swipe(sx1,thisbottom-100,sx1,thistop,600);
sleep(800) 
Swipe(sx2,thisbottom-100,sx2,thistop,800);
sleep(800)   
Swipe(sx3,thisbottom-100,sx3,thistop,700);
sleep(800);
Swipe(sx1-50,thisbottom-100,sx3,thistop,800);
sleep(800)
Swipe(sx3-50,thisbottom-100,sx1,thistop,800);
sleep(800)
Swipe(sx1-150,thisbottom-100,sx1-300,thistop,800);
sleep(800)
Swipe(sx4-150,thisbottom-150,thisright,thistop+400,1000);
sleep(800)
Swipe(thisleft+150,thisbottom-100,thisleft+150,thistop,800);
sleep(800)
Swipe(thisright-100,thisbottom-100,thisright-50,thistop,800);
// alert(sx3);
}
    sleep(5000);
   thisforstart=false;
  }  