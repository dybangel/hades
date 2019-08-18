function finditem(){  
    var ele=className("android.webkit.WebView");
    var subcount=ele.findOnce(1).childCount();
    var main=ele.findOnce(1);
    for(var i=3;i<subcount;i++){
                var bd=main.child(i).bounds();
                var y1=bd.top;
                var y2=bd.bottom;
                if(y1>400 && y2<2360){  
                try{
                play('global',i);
                play('global','点击');
                return main.child(i);
                }catch(e){
                }
            }
    }
}