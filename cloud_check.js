"ui";
ui.layout(
    <vertical>
    <horizontal>
        
        <button id="idcheckcode"w="auto" text="1、检测云端js json jpg"/>
        <button id="idcheckapk" w="auto" text="2、安装云端apk"/>
     
       
    </horizontal>

    <horizontal>
        
     <horizontal id="progressw" w="*" gravity="center" marginTop="0">
                    {/* <text id="progress_value" textColor="black" textSize="16sp" margin="0" text=""/> */}
                    <progressbar id="progress" w="*" h="3" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
                </horizontal>
       
    </horizontal>

    </vertical>
    
    );
var view=ui.inflate(
    <vertical padding="16 0">
        {/* <text>用户名</text>
        <input id="username" />
        <text>密码</text>
        <input id="password"/> */}
    </vertical>
);

ui.idcheckcode.click(()=>{
   thread_checkcode=threads.start(function(){
    checkcode();
   }); 
});
ui.idcheckapk.click(()=>{
    thread_checkapk=threads.start(function(){
        checkapk();
    });
})
// ui.test.click(()=>{
//   download_installapp("002北京知天下.apk");
// });
// 云端下载gapps开关量

Gappspath_remote="http://download.dqu360.com:81/haiqu/api.aspx?&action=test_executesql&sql=SELECT fappnum AS appnum, fappname AS appname, 'true' AS enable FROM t_appinfo where fischeck=1 ORDER BY appname"
Gapplistpath_remote="http://download.dqu360.com:81/haiqu/applist/"
Gapplogo_remote="http://download.dqu360.com:81/haiqu/images/applogo/"

Gjsonstate=true;
Gjsstate=true;
Glogostate=true;
Ginstallstate=false;
function checkcode(){
    var r=http.get(Gappspath_remote)
if("200"==r.statusCode){
    str=r.body.string();
    Gapps=eval(str);
    console.show();
    console.setPosition(400, 500);
    log("正在检测json js logo.......")
    for(var i=0;i<Gapps.length;i++){
    let appname=Gapps[i]["appname"];
    let appnum=Gapps[i]["appnum"];
    var r=http.get(Gapplistpath_remote+"/"+appname+".json")
        //json 文件验证
        if("200"==r.statusCode){
                 //json 文件解析测试
                str=r.body.string();
                try{eval('('+str+')')
                      //  log(appname+" json存在并解析正常")            
                }catch(e){
                       log(appname+" json格式有误！！！！！！")
                   Gjsonstate=false;
                }

        }else{
            log(appname+" json不存在！！！！！！")
            Gjsonstate=false;
        }

        //js 文件验证
    var r=http.get(Gapplistpath_remote+"/"+appname+".js")
            if("200"==r.statusCode){
                //json 文件解析测试
            str=r.body.string();
            try{eval(str)
                    //log(appname+" js存在并解析正常")            
            }catch(e){
                    log(appname+" js格式有误！！！！！！")
                    Gjsstate=false
            }

        }else{
         log(appname+" js不存在！！！！！！")
         Gjsstate=false
        }
    //jpg文件验证 images\applogo
    var r=http.get(Gapplogo_remote+"/"+appnum+appname+".jpg")
                if("200"==r.statusCode){
                    //json 文件解析测试
                //str=r.body.string();
                

            }else{
                log(appname+" logo不存在！！！！！！")
                Glogostate=false;
                  
            }

    //
    }// for end;
    log("检测完毕");
    if(Gjsonstate==true && Gjsstate==true &&Glogostate==true){
     log("测试通过")
    }else{
        log("发现异常");
    }
}else{
    log("同步开关量失败")
}
}

function checkapk(){
    dialogs.build({
        customView: view,
        title: "警告：检测apk会根据云端开关卸载掉本地对应的apk文件",
        positive: "确定检测",
        negative: "下次再说",
        wrapInScrollView: false,
        autoDismiss: false
    }).on("positive", (dialog) => {
        dialog.dismiss();
        thread_uninstall=threads.start(function(){

                            var r=http.get(Gappspath_remote)
                        if("200"==r.statusCode){
                            str=r.body.string();
                            Gapps=eval(str);
                            console.show();
                            console.setPosition(400, 500);
                        //    alert(Gapps.length);exit();
                            for(var i=0;i<Gapps.length;i++){
                                let appname=Gapps[i]["appname"];
                                var r=http.get(Gapplistpath_remote+"/"+appname+".json")
                                if("200"==r.statusCode){
                                    str=r.body.string();
                                    try{
                                       var appjson= eval('('+str+')')
                                          //  log(appname+" json存在并解析正常")            
                                    }catch(e){
                                           log(appname+" json格式有误！！！！！！")
                                     
                                    }
                                }
                                var thispackagename=appjson["packagename"];
                            log("正在卸载 "+appname);
                           // var result=shell("adb uninstall " + packagename, true);
                            var result=shell(" pm uninstall  "+thispackagename, true);
                           // alert(result["error"])
                               // break;
                            }
                          

                            //in
                            for(var i=0;i<Gapps.length;i++){
                                let appname=Gapps[i]["appname"];
                                let appnum=Gapps[i]["appnum"];
                                log("下载安装"+appnum+appname+".apk"+" "+i+"/"+Gapps.length)
                                if(Ginstallstate==false){
                                    Ginstallstate=true;
                                try {  download_installapp(appnum+appname+".apk")}catch(e){}
                                }
                                while(true){
                                    if(Ginstallstate==false){
                                        break;
                                    }
                                    sleep("1000");
                                }
                            }
                        } 
                        
        });
       

    }).on("negative", (dialog) => {
        dialog.dismiss();
    }).show();
}



function download_installapp(appname){
    importClass("java.io.FileOutputStream")
    importClass("java.io.IOException")
    importClass("java.io.InputStream")
    importClass("java.net.MalformedURLException")
    importClass("java.net.URL")
    importClass("java.net.URLConnection")
    importClass("java.util.ArrayList")
  downloadthread=threads.start(
    function(){
        try{
         var script_download_path = "/sdcard/脚本/";
         files.createWithDirs(script_download_path);
         files.remove(script_download_path+"haiqu.apk");
  
        }catch(e){}
    
  var myPath = "/storage/emulated/0/脚本/app.apk";
  //console.show();
  //log('im alive')
  var myUrl = "http://download.dqu360.com:81/haiqu/apk/app/"+encodeURI(appname);
  var url = new URL(myUrl);
  var conn = url.openConnection(); //URLConnection
  var inStream = conn.getInputStream(); //InputStream
  var fs = new FileOutputStream(myPath); //FileOutputStream
  var connLength = conn.getContentLength(); //int
  var startTime = java.lang.System.currentTimeMillis();
  var buffer = util.java.array('byte', 1024); //byte[]
  // buffer = new byte[1204]; //byte[]
  var prevTime = java.lang.System.currentTimeMillis();
  var bytePrev = 0; //前一次记录的文件大小
  var byteSum = 0; //总共读取的文件大小
  var byteRead; //每次读取的byte数
  //log('要下载的文件大小=')
  //log(connLength)
  threads.start(
  function () {
    while (1) {
      var 当前写入的文件大小 = byteSum
      var 百分比 = 当前写入的文件大小 / connLength * 100
    //  log(百分比);
      var arr=百分比.toString().split(".");
      
      ui.progress.setProgress(arr[0]);
     // ui.progress_value.setText(p.toString());
  
      var 要显示的内容 = util.format('下载了%s%', 百分比)
   //   log(要显示的内容)
      if (当前写入的文件大小 >= connLength) {
        break;
      }
      sleep(1000)
    }
  }
  )
  while ((byteRead = inStream.read(buffer)) != -1) {
  byteSum += byteRead;
  //当前时间
  var currentTime = java.lang.System.currentTimeMillis();
  fs.write(buffer, 0, byteRead); //读取
  }
  //开始安装
  toast("下载完成，正在安装")
  result=installapp('/sdcard/脚本/app.apk');
  if(result){
    Ginstallstate=false;
     toast("安装成功");
  }
    }
  );
  
  }

  function installapp(path){  
    var result=shell(" pm install -r -d " + path, true);
    return result;

}