function  finditem(){
    var ele=className(androidx);
    var subcount=ele.findOnce(1).childCount();
    var main=ele.findOnce(1);
    for(var i=1;i<subcount;i++){
        try{
            var gg1=main.child(i).child(4).text();
            if(gg1.indexOf("广告")>0){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg2=main.child(i);
            if(gg2.className=="android.widget.RelativeLayout"){
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