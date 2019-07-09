module.exports = {
    //用于检索非广告的新闻条目
 finditem:function(appname){
    //Gworkthread="finditem_start"
    v4feature="android.support.v4.view.ViewPager";
    v7feature="android.support.v7.widget.RecyclerView";
    androidx="androidx.recyclerview.widget.RecyclerView"
 
    try{
        switch (appname){
        case "掌上热点":
                        //掌上热点
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).text();
                           //lert(ltitle);
                           if("广告"==main.child(i).child(0).child(2).child(1).text()||main.child(i).child(0).child(0).child(1).child(1).text()=="广告"){
                        
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
                       play("global","点击")
                      return main.child(i);
    
                    }
                }
        break;
        case "惠头条":
                        //惠头条
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).child(0).text();
                           //alert(ltitle);
                           if("广告"==main.child(i).child(0).child(0).child(2).child(0).child(1).text()){
                        
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
                    play("global","点击")
                    return main.child(i);
    
                    }
                }
        break;
        case "快看点":
                        //快看点
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if("广告"==main.child(i).child(0).child(0).child(1).child(0).text()){
                        
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
                    play("global","点击")
                    return main.child(i); 
    
                    }
                }
        break;
        // case "引力资讯":
        //                 // //引力资讯
        //         //1标识出主框架定界符
        //         var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
        //         //2定位到结构块层级父节点，并取出结构块数量
        //         var subcount=ele.findOnce(0).childCount();
        //         //检测一下子节点数量是否正确
        //         //alert(subcount);exit();
        //         //将主框架实例化
        //         var main=ele.findOnce(0);
        //         for(var i=0;i<subcount;i++){
        //                try{
        //                    //取出标题，主要是为了验证正确性
        //                    var ltitle=main.child(i).child(0).child(0).child(0).child(0).text();
        //                    //alert(ltitle);
        //                    if("广告"==main.child(i).child(0).child(2).child(0).className()){
                        
        //                             play("global",i);
        //                             play("global","点击");
        //                             return main.child(i);
        //                    }else{
        //                         play("global",i);
        //                         play("global","广告不点击"); 
        //                         return false;
        //                    }
                            
        //                }catch(e){
                
        //                  play("global",i);
        //                play("global","点击")
        //                return main.child(i);
    
        //                }
        //         }
        // break;

        case "头条多多":
                 //头条多多
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(1).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(1);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).text();
                           //alert(ltitle);
                           if("广告"==main.child(i).child(0).child(0).child(2).child(0).child(0).child(0).className()){
                        
                                    play("global",i);
                                    play("global","点击");
                                    return main.child(i);
                           }else{
                                play("global",i);
                                play("global","广告不点击"); 
                                return false;
                           }
                        
                        }catch(e){
                             play("global",i);
                           play("global","点击")
                           return false;
    
                    }
                }
            break;
            //  case "天天快报":
            //                     //天天快报
            //         //1标识出主框架定界符
            //         var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
            //         //2定位到结构块层级父节点，并取出结构块数量
            //         var subcount=ele.findOnce(0).childCount();
            //         //检测一下子节点数量是否正确
            //         //alert(subcount);exit();
            //         //将主框架实例化
            //         var main=ele.findOnce(0);
            //         for(var i=0;i<=subcount;i++){
            //               try{
            //                    //取出标题，主要是为了验证正确性
            //                    var ltitle=main.child(i).child(1).child(0).child(0).child(2).child(1).text();
            //                    //alert(ltitle);
            //                    if("android.widget.LinearLayout"==main.child(i).className()){
                            
            //                             play("global",i);
            //                             play("global","点击");
            //                             return main.child(i);
            //                    }else{
            //                         play("global",i);
            //                         play("global","点击"); 
            //                         return main.child(i);
    
            //                    }
                                
            //               }catch(e){
                    
            //                 play("global",i);
            //               play("global","点击")
            //               return main.child(i);
    
            //               }
            //          }
            // break;
            case "天天快报"://天天快报
        var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
        //2定位到结构块层级父节点，并取出结构块数量
        var subcount=ele.findOnce(0).childCount();
        //检测一下子节点数量是否正确
        //alert(subcount);exit();
        //将主框架实例化
        var main=ele.findOnce(0);
        for(var i=0;i<subcount;i++){
        try{
            //取出标题，主要是为了验证正确性
            var ltitle=main.child(i).child().child(0).child(0).child(1).child(1).child(0).text();
            //alert(ltitle);
            try{
                //  alert(main.child(i).child(4).text());
                    if("android.widget.FrameLayout"==main.child(i).child(1).child(0).child(0).child(1).className()){
                    play("global",i);
                    //play("global","打开")
                    play("global","广告不点击");
                    return false;
                }else{
                play("global",i);
                play("global","点击");
                return main.child(i);
                }
            }catch(e){
            
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
        break;
             case "唔哩头条":
                                //唔哩头条
                    //1标识出主框架定界符
                    var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                    //2定位到结构块层级父节点，并取出结构块数量
                    var subcount=ele.findOnce(0).childCount();
                    //检测一下子节点数量是否正确
                    //alert(subcount);exit();
                    //将主框架实例化
                    var main=ele.findOnce(0);
                    for(var i=0;i<subcount;i++){
                           try{
                               //取出标题，主要是为了验证正确性
                               var ltitle=main.child(i).text();
                               //alert(ltitle);
                               if("android.widget.LinearLayout"==main.child(i).className()){
                            
                                        play("global",i);
                                        play("global","点击");
                                        return main.child(i);
                               }else{
                                    play("global",i);
                                    play("global","点击"); 
                                    return main.child(i);
    
                               }
                                
                           }catch(e){
                    
                             play("global",i);
                           play("global","点击")
                           return main.child(i);
    
                           }
                    }
            break;
             case "刷宝短视频":
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
            break;
             case "全民头条":
                            //全民头条
                //1标识出主框架定界符
                var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).child(0).child(0).child(2).child(0).child(0).text();
                           //alert(ltitle);
                           if("android.widget.FrameLayout"==main.child(i).className()){
                                    play("global",i);
                                    play("global","点击");
                                    return main.child(i);
                           }else{
                                play("global",i);
                                play("global","点击"); 
                                return main.child(i);
    
                           }
                            
                       }catch(e){
                
                         play("global",i);
                       play("global","点击")
                       return main.child(i);
    
                       }
                 }
            break;
            case "乐趣头条":
                            //乐趣头条
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).text();
                          //alert(ltitle);
                           if("android.widget.LinearLayout"==main.child(i).className()){
                        
                                    play("global",i);
                                    play("global","点击");
                                    return main.child(i);
                           }else{
                                play("global",i);
                                play("global","广告不点击"); 
                                return false;
                            }
                            
                       }catch(e){
                
                         play("global",i);
                       play("global","点击")
                       return main.child(i);
    
                       }
                }
            break;
            case "韭菜资讯":
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
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if("android.widget.RelativeLayout"==main.child(i).className()||"android.widget.FrameLayout"==main.child(i).className()){
                        
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
            break;
                        case "趣头条":
                            //趣头条
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                    try{
                        //取出标题，主要是为了验证正确性
                        var ltitle=main.child(i).child(0).text();
                        //alert(ltitle);
                        
                       
                            if("android.widget.FrameLayout"==main.child(i).className()){
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
            break;
            case "薪头条":
                
                //薪头条
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if(main.child(i).child(2).text()=="广告"){
                        
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
            break;
            // case "聚看点":
            //     //聚看点
            //     //1标识出主框架定界符
            //     var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //     //2定位到结构块层级父节点，并取出结构块数量
            //     var subcount=ele.findOnce(0).childCount();
            //     //检测一下子节点数量是否正确
            //     //alert(subcount);exit();
            //     //将主框架实例化
            //     var main=ele.findOnce(0);
            //     for(var i=0;i<subcount;i++){
            //           try{
            //                //取出标题，主要是为了验证正确性
            //               var ltitle=main.child(i).child(0).text();
            //                //alert(ltitle);
            //                if(main.child(i).child(1).text()=="广告"){
                        
            //                         play("global",i);
            //                         play("global","广告不点击");
            //                         return false;
            //                }else{
            //                     play("global",i);
            //                     play("global","点击"); 
            //                     return main.child(i);
            //                }
                            
            //          }catch(e){
                
            //              play("global",i);
            //            play("global","广告不点击")
            //            return false;
    
            //           }
            //     }
            // break;
            case "聚看点":
            //聚看点
            //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                  try{
                       //取出标题，主要是为了验证正确性
                      var ltitle=main.child(i).child(0).text();
                       //alert(ltitle);
                       
                        //if(main.child(i).child(1).child(2).child(1).id()=="item_artical_ad_three_bd_flag"||main.child(i).id()=="item_artical_ad_three_parent"){
                        if(main.child(i).child(2).child(1).id()=="item_artical_ad_three_source"){
                    
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
        break;
        case "趣看点":
            //趣看点
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
                      var ltitle=main.child(i).child(0).child(0).child(0).child(0).text();
                       //alert(ltitle);
                       
                       // if(main.child(i).child(0).child(0).child(0).child(1).id()=="adRightImageView"){
                        if(main.child(i).child(0).child(0).childCount()==1){
                    
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
        break;
        case "淘新闻":
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
        break;
            case "精彩看点":
                //精彩看点
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if(main.child(i).child(1).text()=="广告"||"android.widget.FrameLayout"==main.child(i).child(0).className()){
                        
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
            break;
            case "牛牛资讯":
                            //牛牛资讯
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if(main.child(i).child(1).text()=="广告"||main.child(i).child(2).text()=="广告"){
                        
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
            break;
            case "热点资讯":
                //热点资讯
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).child(0).text();
                           //alert(ltitle);
                           if(main.child(i).child(0).child(2).text()=="广告"){
                        
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
            break;
            case "淘最热点":
                //淘最热点
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if(main.child(i).child(2).text()=="广告"){
                        
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
            break;
           case "淘头条":
                        //淘头条
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if("android.widget.RelativeLayout"==main.child(i).className()){
                        
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
           break;
           case "氪资讯":
                //氪资讯
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if("android.widget.FrameLayout"==main.child(i).className()){
                        
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
           break;
           case "搜狐资讯":
                        //搜狐资讯
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           if(main.child(i).child(1).child(0).text()=="广告"){
                        
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
           break;
          case "惠视频":
                        //惠视频
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(1).text();
                           //alert(ltitle);
                           if(main.child(i).child(1).text()=="广告"){
                        
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
          break;
           case "快马小报":
                        //快马小报
                    //1标识出主框架定界符
                    var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                    //2定位到结构块层级父节点，并取出结构块数量
                    var subcount=ele.findOnce(0).childCount();
                    //检测一下子节点数量是否正确
                    //alert(subcount);exit();
                    //将主框架实例化
                    var main=ele.findOnce(0);
                    for(var i=0;i<subcount;i++){
                          try{
                               //取出标题，主要是为了验证正确性
                              var ltitle=main.child(i).child(0).text();
                               //alert(ltitle);
                               if(main.child(i).child(2).text()=="广告"){
                            
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
           break;
           case "快狗视频":
                            //快狗视频 注意没有二级页面
                    var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                    //先得到有多少个子节点
                    var subcount=ele.findOnce(0).childCount();
                    alert(subcount);exit();
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
            break;
            case "微头条":
                            //微头条
                //1标识出主框架定界符   false
                var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).child(0).child(0).child(1).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0).child(0).child(0).child(1);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).dec();
                           //alert(ltitle);
                           if(main.child(i).child(1).dec()=="广告"){
                        
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
            break;
            case "天天趣闻":
                            //天天趣闻
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
                           if(main.child(i).child(1).text()=="广告"){
                        
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
            break;
            case "全民头条":
                            //全民头条6
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                          // alert(ltitle);
                           if(main.child(i).child(1).text()=="广告"){
                        
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
            break;
            case "光影新闻":
                            //光影新闻
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(1).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(1);
                for(var i=0;i<subcount;i++){
                      try{
                           //取出标题，主要是为了验证正确性
                          var ltitle=main.child(i).child(0).text();
                          // alert(ltitle);
                           if(main.child(i).child(1).text()=="百度广告"||main.child(i).child(1).text()=="广点通广告"){
                        
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
            break;
            case "今日热闻":
                        //今日热闻  需要完善
                //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).text();
                           //alert(ltitle);
                           //var substr=main.child(i).child(0).child(0).child(0).child(0).child(0).child(2).text();
                           //if("android.widget.LinearLayout"==main.child(i).className()){
                            if("android.widget.RelativeLayout"==main.child(i).className()||main.child(i).child(1).text()=="广告"){
                           // if(substr=="广告"){
                        
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
            break;
            case "二头条":
                        //二头条
            //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                // //2定位到结构块层级父节点，并取出结构块数量
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
                        //var substr=main.child(i).child(0).child(0).child(0).child(0).child(0).child(2).text();
                        //if("android.widget.LinearLayout"==main.child(i).className()){
                            if("android.widget.FrameLayout"==main.child(i).child(0).className()){
                        // if(substr=="广告"){
                        
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
            break;
            case "中青看点":
            //中青看点        
            //1标识出主框架定界符
            var ele=className(v4feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).child(0).child(0).child(0).child(0).child(0).childCount();// var subcount=ele.findOnce(0).child(0).child(0).childCount();
            //检测一下子节点数量是否正确
           // alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0).child(0).child(0).child(0).child(0).child(0);
            for(var i=0;i<subcount;i++){
                try{
                    //取出标题，主要是为了验证正确性
                    var ltitle=main.child(i).child(0).child(0).text();
                    
                    try{
                                if(main.child(i).child(2).child(2).text()=="立即下载"){
                                play("global",i);
                                play("global","广告不点击");
                                //alert(ltitle);
                            } 
                    }catch(e){
                       // alert(e);
                       // 2 0 text 广告
                       //1 1
                       // 0 1 0
                       try{        
                           if(main.child(i).child(2).child(0).text().replace(/^\s+|\s+$/g,"")=="广告"||
                                    main.child(i).child(1).child(1).text().replace(/^\s+|\s+$/g,"")=="广告"||
                                    main.child(i).child(0).child(1).child(0).text().replace(/^\s+|\s+$/g,"")=="广告"){
                                play("global",i);
                                play("global","广告不点击");
                                alert(ltitle); 
                                    }else{
                                        play("global",i);
                                        play("global","点击");
                                        return main.child(i);
                                       // alert(ltitle);      
                                    } 
                                
                        }catch(e){
                            
                        play("global",i);
                        play("global","点击");
                        return main.child(i);
                       // alert(ltitle);    
                       }
                      
    
    
                    }
                   
                    // if(main.child(i).child(2).id()=="tv_jingxuan"){
                    
                    //             play("global",i);
                    //             play("global","广告不点击");
                    //           //  return false;
                    // }else{
                    //         play("global",i);
                    //         play("global","点击"); 
                    //         return main.child(i);
                    // }
                        
                }catch(e){
            
                //     play("global",i);
                // play("global","广告不点击")
                //return false;
    
                }
            }
            return false;
    
            //return false;
            break;
            case "闪电盒子":
                    // //闪电盒子
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
                       var ltitle=main.child(i).child(0).child(1).text();
                       //alert(ltitle);
                       if("action"==main.child(i).child(0).child(4).id()){
                    
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
                   play("global","点击")
                   return main.child(i);

                   }
            }
    break;
    case "引力资讯":
                    // //引力资讯
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
                       var ltitle=main.child(i).child(0).child(0).child(0).child(0).text();
                       //alert(ltitle);
                       if("adContainer"==main.child(i).id()||main.child(i).child(0).child(0).child(2).child(0).child(0).id()=="tv_newscount"){
                    
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
                   play("global","点击")
                   return main.child(i);

                   }
            }
    break;
        case "2345浏览器":
        //1标识出主框架定界符
            var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //2定位到结构块层级父节点，并取出结构块数量
            var subcount=ele.findOnce(0).childCount();
            //检测一下子节点数量是否正确
            //alert(subcount);exit();
            //将主框架实例化
            var main=ele.findOnce(0);
            for(var i=0;i<subcount;i++){
                try{
                    //取出标题，主要是为了验证正确性
                    var ltitle=main.child(i).child(0).text();
                    //alert(ltitle);
                    if(main.child(i).child(2).child(0).text()=="广告"){
                    
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
        break;
        case "北京知天下":
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //先得到有多少个子节点
                var subcount=ele.findOnce(0).childCount();
                //在将主框架实例化
                var main=ele.findOnce();
                for(var i=0;i<subcount;i++){
                       try{
                            var substr=main.child(i).child(0).child(2).child(0).text();
                            var ll=main.child(i).child(0).child(0).text();
                          //  alert(ll);
                            if(substr=="广告"){
                                play("global",i);
                                play("global","广告不点击");
                                return false
                            }else{
                                return main.child(i);
                                play("global",i);
                                play("global","点击"); 
                            }
                       }catch(e){
                        //alert(e)
                        return false;
                        play("global",i);
                        play("global","广告不点击")
                       }
                }
        break;
            case "掌上消息":
             var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
            //先得到有多少个子节点
            var subcount=ele.findOnce(0).childCount();
            //在将主框架实例化
            var main=ele.findOnce();
            for(var i=3;i<subcount;i++){
                try{
                    //  var substr=main.child(i).child(0).child(2).child(0).text();
                        var ll=main.child(i).child(0).text();
                       // alert(ll);
                        //if(substr=="广告"){
                        //   play("global",i);
                        //  play("global","广告不点击");
                        //}else{
                            
                            play("global",i);
                            play("global","点击");
                            return main.child(i); 
                    // }
                }catch(e){
                    //alert(e)
                    play("global",i);
                    play("global","广告不点击")
                    return false;
                }
    
            }
            break;
            // case "有米头条":
            //     var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
            //     //先得到有多少个子节点
            //     var subcount=ele.findOnce(0).childCount();
            //     //在将主框架实例化
            //     var main=ele.findOnce();
            //     for(var i=0;i<subcount;i++){
            //         try{
            //                 var ltitle=main.child(i).child(0).text();
            //               //  alert(ltitle);
            //                 if(ltitle!=""){
            //                     play("global",i);
            //                     play("global","点击"); 
            //                     return main.child(i);
            //                 }else{
            //                     play("global",i);
            //                     play("global","广告不点击")
            //                     return false;
            //                 } 
            //         }catch(e){
            //             //alert(e)
            //             play("global",i);
            //             play("global","广告不点击")
            //             return false;
            //         }
            //         }
            // break;
            case "有米头条":
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
        break;
            case "有看头-热点头条":
            break;
            case "波波视频":
                //波波视频 注意没有二级页面
                    var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                    //先得到有多少个子节点
                    var subcount=ele.findOnce(0).childCount();
                    //alert(subcount);exit();
                    //在将主框架实例化
                    var main=ele.findOnce();
                    for(var i=2;i<subcount;i++){
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
            break;
            case "盈贝头条":
                                //1标识出主框架定界符
                    var ele=className(androidx);//.className("LinearLayout").findOnce(5);
                    //2定位到结构块层级父节点，并取出结构块数量
                    var subcount=ele.findOnce(0).childCount();
                    //检测一下子节点数量是否正确
                    //alert(subcount);exit();
                    //将主框架实例化
                    var main=ele.findOnce(0);
                    for(var i=0;i<subcount;i++){
                        try{
                            //取出标题，主要是为了验证正确性
                            var ltitle=main.child(i).child(0).text();
                         //   alert(ltitle);
                            if(ltitle==""){
                                play("global",i);
                            play("global","广告不点击")
                            return false;
                            }else{
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
            break;
            case "新闻赚":
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
            break;
            case "网易新闻极速版":
              //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).text();
                          // alert(ltitle);
                           if(main.child(i).className()=="android.widget.LinearLayout"){
                            play("global",i);
                            play("global","广告不点击");
                            return false;
                           }else{
                            play("global",i);
                            play("global","点击");
                            return main.child(i);
                           }  
                       }catch(e){
                        //alert(e)
                         // var ltitle2=main.child(i).child(0).child(1).child(0);//.text();
                          // alert(ltitle2);
                         play("global",i);
                        play("global","广告不点击")
                        return false;
                       }
                }
            break;
            case "今日头条极速版":
                alert("未实现finditem");
            break;
            // case "百姓头条":
            //                 //1标识出主框架定界符
            //     var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //     //2定位到结构块层级父节点，并取出结构块数量
            //     var subcount=ele.findOnce(0).childCount();
            //     //检测一下子节点数量是否正确
            //     //alert(subcount);exit();
            //     //将主框架实例化
            //     var main=ele.findOnce(0);
            //     for(var i=0;i<subcount;i++){
            //         try{
            //             //取出标题，主要是为了验证正确性
            //             var ltitle=main.child(i).child(0).text();
            //            // alert(ltitle);
            //             try{
            //                 //  alert(main.child(i).child(4).text());
            //                     if(main.child(i).child(4).text()==""||main.child(i).child(0).id()=="rl_video_container"){
            //                     play("global",i);
            //                     //play("global","打开")
            //                     play("global","广告不点击");
            //                     return false;
            //                 }else{
            //                     play("global",i);
            //                     play("global","点击");
            //                     return main.child(i);
            //                 }
            //             }catch(e){
                            
            //                     play("global",i);
            //                     play("global","点击");
            //                     return main.child(i);
                                
            //             }
                        
            //         }catch(e){
                
            //             play("global",i);
            //             play("global","广告不点击")
            //             return false;
            //         }
            //     }
            // break;
            case "百姓头条":
                //1标识出主框架定界符
    var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
    //2定位到结构块层级父节点，并取出结构块数量
    var subcount=ele.findOnce(0).childCount();
    //检测一下子节点数量是否正确
    //alert(subcount);exit();
    //将主框架实例化
    var main=ele.findOnce(0);
    for(var i=0;i<subcount;i++){
        try{
            //取出标题，主要是为了验证正确性
            var ltitle=main.child(i).child(0).text();
          // alert(ltitle);//child(i).child(3)  广告
            ch3top=main.child(i).child(3).bounds().top; 
            ch3left=main.child(i).child(3).bounds().left;
            //ch3left 大于473的都是广告  小于35的都是视频
            if(ch3left>473||ch3left<35){
                play("global",i);
                play("global","广告不点击")
             //   alert(ltitle+" ch3top is:"+ch3top+ " ch3left is:"+ch3left)
               // return false;
            }else{
                play("global",i);
                play("global","点击")
               // alert(ltitle+" ch3top is:"+ch3top+ " ch3left is:"+ch3left)
            }
           
          
            
        }catch(e){
    
          //  play("global",i);
          //  play("global","广告不点击")
            return false;
        }
    }
break;
            case "本地看点":
                            //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).text();
                        //   alert(ltitle);
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
                
                        // play("global",i);
                        //play("global","广告不点击")
                       }
                }
            break;
            case "菠萝小组":
                            //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                       try{
                           //取出标题，主要是为了验证正确性
                           var ltitle=main.child(i).child(0).child(0).child(0).text();
                         //  alert(ltitle);
                             play("global",i);
                             play("global","点击");
                             return main.child(i);
                       }catch(e){          
                         play("global",i);
                        play("global","广告不点击")
                        return false;
                       }
                }
            break;
            case "大众看点":
                            //1标识出主框架定界符
                var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
                //2定位到结构块层级父节点，并取出结构块数量
                var subcount=ele.findOnce(0).childCount();
                //检测一下子节点数量是否正确
                //alert(subcount);exit();
                //将主框架实例化
                var main=ele.findOnce(0);
                for(var i=0;i<subcount;i++){
                    try{
                        //取出标题，主要是为了验证正确性
                        var ltitle=main.child(i).child(0).text();
                        
                            if(ltitle==""){
                                var ltitle2=main.child(i).child(0).child(1).child(0).text();
                            //    alert(ltitle2);
                                var substr=main.child(i).child(0).child(1).child(1).child(1).text();
                                if(substr=="广告"){
                                    play("global",i);
                                    play("global","广告不点击");
                                    return false;
                                }else{
                                    play("global",i);
                                play("global","点击");
                                return main.child(i);
                                }
                            
                            }else{
                               // alert(ltitle);
                                play("global",i);
                                play("global","点击");
                                return main.child(i);
                            }
                            
                    }catch(e){
                
                        //play("global",i);
                    // play("global","广告不点击")
                    }
                }
            break;
            // case "三言":
            //       var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
            //     //2定位到结构块层级父节点，并取出结构块数量
            //     var subcount=ele.findOnce(0).childCount();
            //     //检测一下子节点数量是否正确
            //     //alert(subcount);exit();
            //     //将主框架实例化
            //     var main=ele.findOnce(0);
            //     for(var i=0;i<subcount;i++){
            //         try{
            //             //取出标题，主要是为了验证正确性
            //             var ltitle=main.child(i).child(0).child(0).child(0).text();
            //             //alert(ltitle);
            //             if("android.widget.LinearLayout"==main.child(i).className()){
                        
            //                         play("global",i);
            //                         play("global","广告不点击");
            //                         return false;
    
            //             }else{
            //                     play("global",i);
            //                     play("global","点击"); 
            //                     return main.child(i);
            //             }
                            
            //         }catch(e){
                
            //             //play("global",i);
            //         // play("global","广告不点击")
            //         }
            //     }
            // break;
            case "三言"://三言
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
            var ltitle=main.child(i).child(0).child(0).child(0).text();
            //alert(ltitle);
            
           // if(main.child(i).child(0).classname()=="android.widget.FrameLayout"){
             //   if(main.child(i).child(1).child(0).id()=="iv_iv_item_ad_bottom_ad"||main.child(i).child(0).id()=="view_item_fragment_homelist_three_ad"){
                 if(main.child(i).child(0).child(1).child(0).text()==""||main.child(i).child(0).child(1).child(0).id()=="rl_homelist_item_video_img"){
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
        break;
        default:
            alert(appname+" 尚未实现新闻调试");
    
    }  
    }catch(e){
        //如果查找节点出错，返回false
        return false;
    }
  
    
    
    // var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
    // //先得到有多少个子节点
    // var subcount=ele.findOnce(0).childCount();
    // //在将主框架实例化
    // var main=ele.findOnce();
    // for(var i=0;i<subcount;i++){
    //        try{
    //           //  var substr=main.child(i).child(0).child(2).child(0).text();
    //             var ll=main.child(i).child(0).text();
    //             alert(ll);
    //             //if(substr=="广告"){
    //              //   play("global",i);
    //               //  play("global","广告不点击");
    //             //}else{
    //                 play("global",i);
    //                 play("global","点击"); 
    //            // }
    //        }catch(e){
    //         //alert(e)
    //         play("global",i);
    //         play("global","广告不点击")
    //        }
    
    // }
        //  if("悦头条"==appname){
        //     var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");
        //     if(ele.exists()){
        //         var childnum=ele.findOnce(1).childCount();
        //         if(childnum==4 ||childnum==1){
        //             return ele.findOnce(1);
        //         }else{
        //             play("global","广告不点击");
        //         }
            
        //     }
    
        //  }else if("北京知天下"==appname){
        //     var ele=className("android.support.v7.widget.RecyclerView").className("LinearLayout");//.className("LinearLayout").findOnce(2);
    
        //     if(ele.exists()){
        //          var cstr=ele.findOnce(0).child(0).child(2).child(0).text().replace(/^\s+|\s+$/g,"");
        //          if(cstr=="广告"){
        //           play("global","广告不点击");
        //          }else{
        //            return ele.findOnce(0);
        //          }
        //        }
        //  }else if("掌上消息"==appname){
        //     var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);
    
        //     if(ele.exists()){
        //         play("global","打开")
        //            return ele.findOnce(0);
                
        //        }
        //  }else if("有米头条"==appname){
        //     var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);
    
        //     if(ele.exists()){
        //          var cstr=ele.findOnce(0).child(0).text().replace(/^\s+|\s+$/g,"");
        //             alert(cstr);
        //            return ele.findOnce(0);
                 
        //        }
        //  }else if("有看头-热点新闻"==appname){
        //         var ele=className("android.support.v4.view.ViewPager").className("ListView").className('RelativeLayout');//.className("LinearLayout").findOnce(2);
        
        //         if(ele.exists()){
                    
        //             // var cstr=ele.findOnce(0).child(0).child(2).child(2).child(1).text().replace(/^\s+|\s+$/g,"");
        //             // var cstr=ele.findOnce(1).className('FrameLayout').child(1).text().replace(/^\s+|\s+$/g,"");//.child(1).child(2).child(2).child(1).text().replace(/^\s+|\s+$/g,"");
        //            // alert(cstr);
        //             //  if(cstr=="广告"){
        //             //   play("global","广告不点击");
        //             //  }else{
        //               //  play("global","打开");
        //                return ele.findOne(1000);
        //           //   }
        //            }
        //  }else if("波波视频"==appname){
        //         var ele=className("android.support.v7.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);
        
        //         if(ele.exists()){
        //            // alert(ele.findOnce(1));
        //            // play("global","打开");
        //            // thiscommon.clickxy_for_ele(ele.findOnce(1));
        //             return ele.findOnce(1);
        //            }
        //         }else if("盈贝头条"==appname){
        //             var ele=className("androidx.recyclerview.widget.RecyclerView").className("RelativeLayout");//.className("LinearLayout").findOnce(2);
            
        //             if(ele.exists()){
        //                // alert(ele.findOnce(1));
        //              //   play("global","打开");
        //               //  thiscommon.clickxy_for_ele(ele.findOnce(1));
        //                 return ele.findOnce(1);
        //                }
        //             }
    
    
    
    
    
    
          //          }, 2000); 
    
          //  }
      //  );
      
    
    //exit();
    //知天下
    // var ele=className("android.support.v7.widget.RecyclerView").className("LinearLayout").findOnce(1);
    // ele=ele.child(0).child(2).child(0).text();
    // alert(ele);
    // exit();
    }
}