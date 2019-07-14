module.exports = {
    //用于检索非广告的新闻条目
    finditem:function(){


    /******************************自定义部分开始********************************************/    
  //var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
  var ele=className(androidx);
  //先得到有多少个子节点
  var subcount=ele.findOnce(0).childCount();
  //在将主框架实例化
  var main=ele.findOnce();
  for(var i=0;i<subcount;i++){
      try{
              var ltitle=main.child(i).child(0).text();
              //var ltitle=main.child(i).child(0).child(0).child(1).child(0).text();
            //  alert(ltitle);
              if(ltitle!=""){
                  play("global",i);
                  play("global","点击"); 
                  return main.child(i);
              }else{
                  play("global",i);
                  play("global","广告不点击")
                  return false;
              } 
      }catch(e){
          //alert(e)
          play("global",i);
          play("global","广告不点击")
          return false;
      }
      }

/******************************自定义部分结束********************************************/ 
    }
}