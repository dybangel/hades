module.exports = {
    //用于检索非广告的新闻条目
    finditem:function(){


    /******************************自定义部分开始********************************************/    
    var ele=className("android.support.v7.widget.RecyclerView");//.className("LinearLayout").findOnce(5);
    //先得到有多少个子节点
    var subcount=ele.findOnce(0).childCount();
    //在将主框架实例化
    var main=ele.findOnce();
    for(var i=3;i<subcount;i++){
        try{
            //  var substr=main.child(i).child(0).child(2).child(0).text();
                var ll=main.child(i).child(0).text();
               // alert(ll);
                //if(substr=="广告"){
                //   play("global",i);
                //  play("global","广告不点击");
                //}else{
                    
                    play("global",i);
                    play("global","点击");
                    return main.child(i); 
            // }
        }catch(e){
            //alert(e)
            play("global",i);
            play("global","广告不点击")
            return false;
        }

    }

/******************************自定义部分结束********************************************/ 
    }
}