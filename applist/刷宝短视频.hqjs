module.exports = {
    //用于检索非广告的新闻条目
    finditem:function(){


    /******************************自定义部分开始********************************************/    
  //刷宝短视频s
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //先得到有多少个子节点
                var subcount=ele.findOnce(0).childCount();
                //alert(subcount);exit();
                //在将主框架实例化
                var main=ele.findOnce();
                for(var i=0;i<subcount;i++){
                       try{
                           var ltitle=main.child(i).child(1).child(0).text();
                          // alert(ltitle);
                                try{
                                    var substr=main.child(i).child(3).child(1).child(0).child(1).id();
                                   // alert(id+"::"+ltitle);
                                    //如果能顺利执行反而是广告
                                        play("global",i);
                                        play("global","广告不点击")
                                        return false;
                                }catch(e){
                                    //抛出异常的，反而是正常的
                                    play("global",i);
                                    play("global","点击"); 
                                    return main.child(i);
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