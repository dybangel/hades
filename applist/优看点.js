function  finditem(){ 
        var ele=className(v7feature);
        var subcount=ele.findOnce(0).childCount();
        var main=ele.findOnce(0);
        for(var i=1;i<subcount;i++){
         try{
            var gg1=main.child(i);
            if("com.memory.online:id/iv_open_video"==gg1.child(0).child(0).child(1).child(1).id()){
                        play("global",i);
                        play("global","广告不点击");
                        return false;
                } 
          }catch(e){
           }
        try{
            var gg2=main.child(i);
            if("com.memory.online:id/tv_ad_tips"==gg2.child(0).child(2).id()){
                     play("global",i);
                     play("global","广告不点击");
                     return false;
            } 
            }catch(e){
            }
         try{
            var gg3=main.child(i);
            if("广告 3"==gg3.child(0).child(1).text()){
                        play("global",i);
                        play("global","广告不点击");
                        return false;
            } 
            }catch(e){
            }
            try{
                var gg4=main.child(i);
                if("广告 2"==gg4.child(0).child(1).text()){
                            play("global",i);
                            play("global","广告不点击");
                            return false;
                } 
                }catch(e){
                }
            try{
                var gg5=main.child(i);
                if("com.memory.online:id/iv_ad_logo"==gg5.child(0).child(2).id()){
                            play("global",i);
                            play("global","广告不点击");
                            return false;
                } 
                }catch(e){
                }
            try{
                var gg6=main.child(i);
                if("android.support.v7.widget.RecyclerView"==gg6.child(0).className()){
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