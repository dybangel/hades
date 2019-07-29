function finditem(){
            var ele=className(v7feature);
            var subcount=ele.findOnce(1).childCount();
            var main=ele.findOnce(1);
            for(var i=1;i<subcount;i++){
                try{
                    var gg1=main.child(i).child(0).child(2).child(2);
                    if(gg1.text()=='立即查看'){
                     play('global',i);
                     play('global','广告不点击'); 
                     return false;
                     }
                 }catch(e){
                 }
                 try{
                    var gg2=main.child(i).child(0).child(0).child(0).child(2).child(2);
                    if(gg2.text()=="立即查看"){
                     play('global',i);
                     play('global','广告不点击'); 
                     return false;
                     }
                 }catch(e){
                 }
                 try{
                    var gg3=main.child(i).child(1).child(4);
                    if(gg3.text()=='立即下载'){
                     play('global',i);
                     play('global','广告不点击'); 
                     return false;
                     }
                 }catch(e){
                 }
                 try{
                    var gg4=ele.findOnce(2);
                    if(gg4.id()=='com.cnode.blockchain:id/scrollView'){
                     play('global',i);
                     play('global','广告不点击'); 
                     return false;
                     }
                 }catch(e){
                 }
                 try{
                    var gg5=main.child(i).child(1).child(2);
                    if(gg5.text()=='立即查看'){
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