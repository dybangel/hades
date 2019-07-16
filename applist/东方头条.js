function finditem(){ 
    // var ele=className(v7feature);//.className("LinearLayout").findOnce(5);
    // var subcount=ele.findOnce(0).childCount();
    // var main=ele.findOnce(0);
    // for(var i=0;i<subcount;i++){
    //     try{
    //         //取出标题，主要是为了验证正确性
    //         var ltitle=main.child(i).child(0).text();
    //        // alert(ltitle);
    //         if(main.child(i).childCount()==5||main.child(i).child(1).childCount()==4){
    //                     play("global",i);
    //                     play("global","广告不点击");
    //                       return false;
    //         }else{
    //                 play("global",i);
    //                 play("global","点击"); 
    //                 return main.child(i);
    //         }
                
    //     }catch(e){
    
    //     play("global",i);
    //     play("global","广告不点击")
    //     return false;
    //     }
    // }
        var ele=className(v7feature);
        var subcount=ele.findOnce(1).childCount();
        var main=ele.findOnce(1);
        for(var i=0;i<subcount;i++){
            try{
             //能取出标题的就是正常的区块，当然，里面有可能有广告需要进一步排除
                var ltitle=main.child(i).child(0).text();
                //如果ggimageview　能取出,而且左上角x（left）坐标，大于700，而且不报错，那这个区块是一个广告
                    var ggimageview1=main.child(i).child(1).child(1);
                   // alert(ggimageview1.bounds().left+" ::"+ltitle);
                    if(ggimageview1.bounds().left>700){
                        //alert("这是广告:"+ltitle);
                        play('global',i);
                        play('global','广告不点击'); 
                    }else{
                        //alert("正常新闻"+ltitle+" "+ggimageview1.bounds().left);
                         play('global',i);
                        play('global','点击');
                        return main.child(i);
                    }             
            }catch(e){
            }
            
        }
        return false;

}

