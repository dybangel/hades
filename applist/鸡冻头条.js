function  finditem(){
    var ele=className(v7feature);
    var subcount=ele.findOnce(0).childCount();
    var main=ele.findOnce(0);
    for(var i=1;i<subcount;i++){
        try{
            var gg1=main.child(i).child(0);
            if(gg1.text()=="你知道么？企业招聘要查征信了！"){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg2=main.child(i).child(0);
            if(gg2.text()=="网红女神教你每天收入500~3000"){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg3=main.child(i).child(0);
            if(gg3.text()=="男人怎么可以更长久试下这六个步骤！"){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg4=main.child(i).child(0);
            if(gg4.text()=="点击一下，让你了解自己的真实信用额度"){
            play('global',i);
            play('global','广告不点击'); 
            return false;
                }
            }catch(e){
                } 
        try{
            var gg5=main.child(i).child(0);
            if(gg5.text()=="想用百分百的信用给你最安心的爱"){
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