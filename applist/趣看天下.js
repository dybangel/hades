function  finditem(){ 
        var ele=className(v7feature);
        var subcount=ele.findOnce(0).childCount();
        var main=ele.findOnce(0);
        for(var i=1;i<subcount;i++){
         try{
            var gg1=main.child(i);
            if("广告"==gg1.child(4).child(0).text()){
                        play("global",i);
                        play("global","广告不点击");
                        return false;
                } 
          }catch(e){
           }
        try{
            var gg2=main.child(i);
            if("广告"==gg2.child(5).text()){
                     play("global",i);
                     play("global","广告不点击");
                     return false;
            } 
            }catch(e){
            }
         try{
                var gg2=main.child(i);
                if("广告"==gg2.child(7).text()){
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