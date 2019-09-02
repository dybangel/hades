Gappspath_remote="http://download.dqu360.com:81/haiqu/api.aspx?&appid=FWEFASDFSFA&action=getgapps"
var r=http.get(Gappspath_remote);
if("200"==r.statusCode){
    jsonstr=r.body.string();
    
//alert(Gjsonstr);
    json=eval('('+jsonstr+')');

   // alert(JSONLength(json));
   percent=9;
   jcount=1;
   wcount=0;
   splits=""; 
   allitems="";

   for(var i=0;i<JSONLength(json);i++){
        thisstr=JSON.stringify(json[i]);
       jcount+=1;
        if(jcount<=percent){
        splits+='    '+thisstr+",\r\n";
       }else{
           jcount=1;
           wcount+=1;
           splits+='    '+thisstr+",\r\n";
           //如果大于percent 开始写入
           files.write("./localgapps"+wcount+".json", '[\r\n'+splits+'\r\n]');
           splits="";
        }

        allitems+=thisstr+"\r\n";
        
//        break;
    }
    files.write("./localgapps.json", allitems);
    if(splits!=""){
        wcount+=1;
    files.write("./localgapps"+wcount+".json", '[\r\n'+splits+'\r\n]');

    }
 alert('ok'+splits);
}

//计算json数量的函数
function JSONLength (obj) {
    var size = 0, key;
    for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
