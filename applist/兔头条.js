function finditem(){
    var ele=className(v7feature);
    var subcount=ele.findOnce(1).childCount();
    var main=ele.findOnce(1);
    for(var i=1;i<subcount;i++){
        try{
            var gg1=main.child(i);              
                  if(gg1.child(0).child(2).child(0).text()=="广告"){
                      play("global",i);
                      play("global","广告不点击");
                      return false;
             } 
       }catch(e){ 
        }    
        try{
            var gg2=main.child(i);              
                    if(gg2.child(0).child(0).child(1).child(1).child(0).text()=="广告"){
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