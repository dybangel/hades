function  finditem(){
    var ele=className(v7feature);
    var subcount=ele.findOnce(0).childCount();
    var main=ele.findOnce(0);
    for(var i=1;i<subcount;i++){
        try{
            var gg1=main.child(i).child(0).child(0).child(2);
            if(gg1.id()=="com.zhangku.qukandian:id/ad_one_text"){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg2=main.child(i).child(0).child(0).child(1);
            if(gg2.id()=="com.zhangku.qukandian:id/ad_one_text"){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg3=main.child(i).child(1).child(2);
            if(gg3.id()=="com.zhangku.qukandian:id/ad_texts"){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg4=main.child(i).child(0).child(0).child(1).child(0);
            if(gg4.id()=="com.zhangku.qukandian:id/bottomRedIv"){
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