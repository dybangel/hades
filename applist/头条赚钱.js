function finditem(){
    var ele=className(v7feature);
    var subcount=ele.findOnce(0).childCount();
    var main=ele.findOnce(0);
    for(var i=1;i<subcount;i++){
        try{
            var gg1=main.child(i).child(1).child(0).child(3);
            if(gg1.id()=='com.jxbz.ztt:id/money_item_ad_notice1'){
                play('global',i);
                play('global','广告不点击'); 
                return false;
            }
        }catch(e){
            }
        try{
            var gg2=main.child(i).child(0).child(0).child(3);
            if(gg2.id()=="com.jxbz.ztt:id/money_item_ad_notice"){
                play('global',i);
                play('global','广告不点击'); 
                return false;
            }
        }catch(e){
            }
         try{
                var gg3=main.child(i).child(0).child(0).child(3);
                if(gg3.className()=="android.widget.ImageView"){
                    play('global',i);
                    play('global','广告不点击'); 
                    return false;
                }
            }catch(e){
                }
         try{
            var gg3=main.child(i).child(0).child(1).child(1);
            if(gg3.id()=="com.jxbz.ztt:id/ad_item_ad_notice2"){
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