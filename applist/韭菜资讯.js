//用于检索非广告的新闻条目
function finditem(){  
    // //韭菜资讯
                 // //1标识出主框架定界符
                 var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
                 //2定位到结构块层级父节点，并取出结构块数量
                 var subcount=ele.findOnce(0).child(0).childCount();
                 //检测一下子节点数量是否正确
                 //alert(subcount);exit();
                 //将主框架实例化
                 var main=ele.findOnce(0).child(0);
                 for(var i=0;i<subcount;i++){
                       try{
                            //取出标题，主要是为了验证正确性
                           //var ltitle=main.child(i).child(0).text();
                            //alert(ltitle);
                            var gg1=main.child(i);
                            if("android.widget.RelativeLayout"==gg1.className()){
                                     play("global",i);
                                     play("global","广告不点击");
                                     return false;
                            }   
                      }catch(e){
                       }
                       try{
                            var gg2=main.child(i);
                            if("android.widget.FrameLayout"==gg2.className()){
                                     play("global",i);
                                     play("global","广告不点击");
                                     return false;
                            } 
                      }catch(e){
                       }
                       try{
                           play('global',i);
                           play('global','点击');
                           return main.child(i);
                           }catch(e){
                           }
                 }
     }