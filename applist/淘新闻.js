module.exports = {
    //用于检索非广告的新闻条目
    finditem:function(){


    /******************************自定义部分开始********************************************/    
  //淘新闻
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=1;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       
                      
                            if(main.child(i).childCount()==3||main.child(i).childCount()==4){
                       
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }else{
                            play("global",i);
                            play("global","点击"); 
                            return main.child(i);
                       }
                        
                 }catch(e){
            
                     play("global",i);
                   play("global","广告不点击")
                   return false;

                  }
            }

/******************************自定义部分结束********************************************/ 
    }
}