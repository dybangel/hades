function  finditem(){
    var ele=className("android.view.ViewGroup");
    var subcount=ele.findOnce(2).childCount();
    var main=ele.findOnce(2);
    for(var i=1;i<subcount;i++){
        try{
            play('global',i);
            play('global','点击');
            return main.child(i);
            }catch(e){
            }  
    }
}