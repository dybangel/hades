function finditem(){
            var ele=className(v7feature);
            var subcount=ele.findOnce(0).childCount();
            var main=ele.findOnce(0);
            for(var i=1;i<subcount;i++){
                try{
                    var gg1=main.child(i).child(1).child(0);
                    if(gg1.text()=="广告"){
                                play("global",i);
                                play("global","广告不点击");
                                  return false;
                    }
                }catch(e){
                }
                try{
                    var gg2=main.child(i).child(2).child(0);
                    if(gg2.text()=="广告"){
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
function getcoinincome(){
    Swipe(915,1080,915,2400,500);
    sleep(1000);
    coin=className('android.view.View').boundsInside(200,0,400, 693).findOnce().desc()
    income=className('android.view.View').boundsInside(1053,577,1267,682).findOnce().desc();
    income=income.replace(/元/g,'');
   // alert(coin+"  "+income);
    callback_updatecoinincome(coin,income);
    Ganalybreak==true;
}