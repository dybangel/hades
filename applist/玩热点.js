function finditem(){
    var ele=className("android.widget.ListView");
    var subcount=ele.findOnce(0).childCount();
    var main=ele.findOnce(0);
    for(var i=1;i<subcount;i++){
        try{
            var gg1=main.child(i).child(1).child(0).child(2);
            if(gg1.id()=='ad_mark1'){
                play('global',i);
                play('global','广告不点击'); 
                return false;
            }
        }catch(e){
            }
        try{
            var gg2=main.child(i).child(0).child(0).child(2);
            if(gg2.id()=='ad_mark1'){
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