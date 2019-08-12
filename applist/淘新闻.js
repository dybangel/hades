function finditem(){ 
            //1标识出主框架定界符
            var ele=className(v7feature);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=1;i<subcount;i++){
                  try{
                      var gg1=main.child(i);              
                            if(gg1.child(2).id()=="com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right"){
                                play("global",i);
                                play("global","广告不点击");
                                return false;
                       }    
                 }catch(e){                               
                  }
                  try{
                   var gg2=main.child(i);              
                         if(gg2.child(1).child(1).id()=="com.coohua.xinwenzhuan:id/tab_feed_item_img_large_ad_right"){
                             play("global",i);
                             play("global","广告不点击");
                             return false;
                    } 
              }catch(e){                               
               }
               try{
                  var gg3=main.child(i);              
                        if(gg3.child(3).id()=="com.coohua.xinwenzhuan:id/tab_feed_item_video_ad_right"){
                            play("global",i);
                            play("global","广告不点击");
                            return false;
                   } 
             }catch(e){ 
              }  
              try{
                  var gg4=main.child(i);              
                        if(gg4.child(2).child(1).id()=="com.coohua.xinwenzhuan:id/tab_feed_item_img_large_ad_right"){
                            play("global",i);
                            play("global","广告不点击");
                            return false;
                   } 
             }catch(e){                               
              }   
              try{
                  var gg5=main.child(i);              
                        if(gg5.child(3).id()=="com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right"){
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