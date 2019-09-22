function finditem(){  
    //1标识出主框架定界符
    var ele=className(v7feature);
    //2定位到结构块层级父节点，并取出结构块数量
    var subcount=ele.findOnce(0).childCount();
    //将主框架实例化
    var main=ele.findOnce(0);
    for(var i=1;i<subcount;i++){
          try{
                var gg1=main.child(i).child(2).child(0);
                if(gg1.text()=="广告"){
                        play("global",i);
                        play("global","广告不点击");
                        return false;
                }
                }catch(e){
                }
                try{
                    var gg2=main.child(i);
                    if(gg2.childCount()==3){
                            play("global",i);
                            play("global","广告不点击");
                            return false;
                    }
                }catch(e){
                }
                try{
                    var gg3=main.child(i);
                    if(gg3.childCount()==1){
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