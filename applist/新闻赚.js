function finditem(){  
    var ele=className("android.widget.ListView");
    var subcount=ele.findOnce(0).childCount();
    var main=ele.findOnce(0);
    for(var i=1;i<subcount;i++){
                var bd=main.child(i).bounds();
                var y1=bd.top;
                var y2=bd.bottom;
                if(y1>400 && y2<2360){  
                try{  
                var gg1=main.child(i).child(0).desc();
                if(gg1.indexOf("广告")>0){
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
}