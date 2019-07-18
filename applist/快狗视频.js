function finditem(){ 
                //1标识出主框架定界符
                var ele=className(v4feature);
                //先得到有多少个子节点
                var subcount=ele.findOnce(1).childCount();
                //在将主框架实例化
                var main=ele.findOnce(1);
                for(var i=0;i<subcount;i++){
                                try{
                                    var gg1=main.child(i).child(2).child(0).child(0);
                                    if(gg1.text()=="广告"){
                                        play("global",i);
                                        play("global","广告不点击")
                                        return false;
                                    }
                                }catch(e){
                                }  
                                try{
                                    var gg2=main.child(i).child(1).child(0).child(0);
                                    if(gg2.text()=="广告"){
                                        play("global",i);
                                        play("global","广告不点击")
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