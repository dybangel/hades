module.exports = {
    //用于检索非广告的新闻条目
    finditem:function(){


    /******************************自定义部分开始********************************************/    
                //1标识出主框架定界符
                var ele=className(v4feature);//.className("android.widget.ListView");//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量 0 0 0 0 3 0
                //var subcount=ele.findOnce(0).childCount();
                var subcount=ele.findOnce(0).child(0).child(0).child(0).child(0).child(3).child(0).childCount();//.child(3);//.child().childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0).child(0).child(0).child(0).child(0).child(3).child(0);
                //多了会遮盖
                for(var i=0;i<subcount;i++){
                    try{
                        
                        var bd=main.child(i).child(0).bounds();
                        var y1=bd.top;
                        var y2=bd.bottom;
                        if(y1>318 && y2<1770){
                            //取出标题，主要是为了验证正确性
                                    var ltitle=main.child(i).child(0).desc();//.child(0).desc();
                                    if(ltitle.indexOf("广告")>0){
                                        play("global","广告不点击")
                                        return false;
                                    }else{
                                      //  alert(ltitle);
                                        play("global","点击");
                                        return main.child(i);
                                    }
    
                        }
    
                            
                    }catch(e){
                        play("global","广告不点击")
                        return false;
                    }
                }

/******************************自定义部分结束********************************************/ 
    }
}