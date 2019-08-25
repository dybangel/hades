//遍历刮奖新闻块
function finditem(){
  var parent=className("android.view.ViewGroup").findOnce(0)//.childCount();
  var main=parent.child(0).child(0).child(1);
   //alert(main.childCount());
   for(var i=0;i<main.childCount();i++){
     try{
    ggk = main.child(i).child(0).child(2).child(4).text();
     if("元"==ggk ){
     //其次判断main.child(i)的中心点是否在可视区内
         main.child(i).click();  //控件支持clickenable true
        // alert("点击"+ggk);
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
//判断二级页面打开成功与否并开始滑动
function swipeguagua(){
var result=id("com.guabaoapp.gb:id/cv_grand_prize").exists();
if(result){
var thisleft=id("com.guabaoapp.gb:id/cv_grand_prize").findOnce().bounds().left;
var thistop=id("com.guabaoapp.gb:id/cv_grand_prize").findOnce().bounds().top;
var thisright=id("com.guabaoapp.gb:id/cv_grand_prize").findOnce().bounds().right;
var thisbottom=id("com.guabaoapp.gb:id/cv_grand_prize").findOnce().bounds().bottom;
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
// alert(sx3);
}
sleep(5000);
thisforstart=false;
} 

   