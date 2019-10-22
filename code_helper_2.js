same_ac=false;
thread_activity_check=threads.start(function(){
    var activityjson=[];

    setInterval(function(){
        same_ac=false
        var thisactivity = currentActivity();

if(0==activityjson.length){
    activityjson.push(thisactivity)
    log("发现新窗体类名："+thisactivity);
}else{
    for(var i=0;i<activityjson.length;i++){
    if(thisactivity==activityjson[i]){
      //  log(activityjson[i]);
        same_ac=true;
        }
    }//for end

    if(same_ac==false){
        activityjson.push(thisactivity)
        log("发现新窗体类名："+thisactivity);
    }

}//else end

    },500);
})


function printobj (obj){
    for(var key in obj){
      alert('key='+key+'  value='+obj[key]);
}
}
