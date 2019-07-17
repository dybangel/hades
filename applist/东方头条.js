function finditem(){ 
   try{
                    var ele=className(v7feature);
                    var subcount=ele.findOnce(1).childCount();
                    var main=ele.findOnce(1);
                    for(var i=1;i<subcount;i++){

                        try{
                        var gg1=main.child(i).child(1).child(1);
                        if(gg1.bounds().left>700){
                            play('global',i);
                            play('global','广告不点击'); 
                            return false;
                        }
                        }catch(e){

                        }

                        try{
                        var gg2=main.child(i).child(1).child(3);
                        if(gg2.bounds().left>700){
                            play('global',i);
                            play('global','广告不点击'); 
                            return false;
                        }
                        }catch(e){

                        }


                        try{
                        var gg3=main.child(i).child(2).child(0);
                        var subcount=gg3.childCount();
                        //   alert(subcount);
                        if(subcount>3){
                            play('global',i);
                            play('global','广告不点击'); 
                            return false;
                        }
                        }catch(e){
                        
                        }


                        play('global',i);
                        play('global','点击');
                        return main.child(i);

                        
                    }

   }catch(e){


   }

      //  return false;

}

