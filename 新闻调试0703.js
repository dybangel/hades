toast("新闻调试");
const thiscommon=require("./mycommon.js");
const thisswipe=require("./myswipe.js");
var ele=className("android.support.v7.widget.RecyclerView").className("LinearLayout");
if(ele.exists()){
    var childnum=ele.findOnce(1).childCount();
    if("3"==childnum){
        play("global",childnum);
        play("global","广告不点击");
    }else{
        play("global",childnum);
        play("global","打开");
        thiscommon.clickxy_for_ele(ele.findOnce(1));
    }
}

function play(subpath,appname){
     media.playMusic("/storage/emulated/0/voice/"+subpath+"/"+appname+".mp3");
     sleep(media.getMusicDuration());
 }