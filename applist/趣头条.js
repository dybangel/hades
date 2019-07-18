function finditem(){ 
        var ele=className(v7feature);
        var subcount=ele.findOnce(0).childCount();
        var main=ele.findOnce(0);
        for(var i=1;i<subcount;i++){     
            try{
            if("android.widget.FrameLayout"==main.child(i).className()){
                play('global',i);
                play('global','广告不点击'); 
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