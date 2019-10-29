


function touchreal(x,y){
   // var ra = new RootAutomator();
    ra.setScreenMetrics(device.width, device.height);
    ra.tap(x, y, 1);
   // ra.tap(x, y, 1);
 }

module.exports = {
    
//重启app继续  只有whilecontorl可以调用该函数，其他函数调用会把自己杀死，导致后续所有代码无法执行，只有让第三方执行
 restartapp:function() {
    thiscommon.clear_normal_thread();
    try {
        thiscommon.clean(Gdevicetype, Gpackagename_lists);
        //这里延迟一秒防止clean延迟导致刚打开的app被clean
        sleep(1000);
        var openstate = thiscommon.openAPP(appname, packagename, activityname, open_obj);
        if (openstate) {
            if ("layers" == apptype) {

                while_pagecheck();
            } else {
                while_findnews(autoread_obj);
            }
        }
    } catch (e) {
        //  alert("restartapp appname"+appname+"packagename "+packageName+" actiname "+activityname+" e:"+e);
    }

},
    //自定义打印函数
 mytoast:function(mystr) {
    if (Gdebug) {
        toast(mystr);
    }
},

 setgps_status:function() {
    if (Genv == "indoor") {
        // alert("关闭gps");
        thiscommon.setgps("close");
    } else if (Genv == "outdoor") {
        // alert("打开gps");

        thiscommon.setgps("open");

    }
},
    //语音广播手机型号
 voice_devicetype:function() {

    if ("xiaomi2s" == Gdevicetype) {
        thiscommon.play("global", "小米");
        thiscommon.play("global", "2");
        thiscommon.play("global", "s");
    } else if ("xiaomi4s" == Gdevicetype) {
        thiscommon.play("global", "小米");
        thiscommon.play("global", "4");
        thiscommon.play("global", "s");
    } else if ("xiaomi4" == Gdevicetype) {
        thiscommon.play("global", "小米");
        thiscommon.play("global", "4");
    } else if ("lnnl" == Gdevicetype) {
        thiscommon.play("global", "lnnl");
    } else if ("xiaominote2" == Gdevicetype) {
        thiscommon.play("global", "小米");
        thiscommon.play("global", "note");
        thiscommon.play("global", "2");

    } else if ("le" == Gdevicetype) {
        thiscommon.play("global", "乐视");
    } else if ("vmos" == Gdevicetype) {
        thiscommon.play("global", "虚拟机");
    }


},
//语音广播初始化模式
 voice_runstate:function() {
    var runstate_voicename = '';
    if ("autoread" == Grunstate) {
        runstate_voicename = "自动阅读";
    } else if ("bindwechat" == Grunstate) {
        runstate_voicename = "微信绑定";
    } else if ("trainwechat" == Grunstate) {
        runstate_voicename = "微信养号";
    } else if ("finditem" == Grunstate) {
        runstate_voicename = "广告不点击";
    } else if ("popupdebug" == Grunstate) {
        runstate_voicename = "弹窗跟踪调试";
    } else if ("analy" == Grunstate) {
        runstate_voicename = "统计收益"
    }
    this.play("global", "当前工作模式");
    this.play("global", runstate_voicename);
},
    //多次返回
    funmulityback:function() {
    try {
        if ("false" == mulityback) {
            back();
        } else if (mulityback.indexOf("true") > -1) {
            back();
            var marr = mulityback.split("||");
            sleep(marr[1]);
            back();
        } else {
            try {
                if (appname == "韭菜资讯" || appname == "亿刻看点") {
                } else {
                    back();
                }
            } catch (e) {

            }
            //纯坐标返回方法
            marr = mulityback.split("||");
            breakid = "";
            for (var i = 0; i < marr.length; i++) {
                if (breakid == "") {
                    thiscommon.touchreal(marr[i], marr[i + 1]);
                    breakid = i + 1;
                } else {
                    if (i != breakid) {
                        thiscommon.touchreal(marr[i], marr[i + 1]);
                        breakid = i + 1;
                    }
                }

            }//for end


        }//else end

    } catch (e) {

    }


},
     load_time:function() {
        return new java.text.SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
    },
    //生成机器码
// function builddevicecode(){
//     var mac=device.getMacAddress();
//     if(mac==null){
//      GdeviceMac="";
//      //alert("mac is kong");
//      toast("助手需要无线网络，请确认wifi开关处于开启状态");
//     }else{
//      GdeviceMac=mac;
//     // alert("this is fun "+device.getMacAddress());
//     }
//     var midhead="dqprop01h2";
//    // webView = ui.findById("webview");

//     //var aa=device.getMacAddress();;
//     var mid=GdeviceMac.replace(/:/g,"");
//     mid=mid.toLocaleLowerCase()
//    // alert(GdeviceMac);
//     tmpstr="";
//     for(var i in mid){
//         tmpstr+=mid[i]+mid[i].charCodeAt(0);
//      //    if(tmpstr.length==18){
//      //        break;
//      //    }
//     }
//     tmpstr=tmpstr.substring(0,18);
//    return midhead+mid+tmpstr;
// }
//生成机器码
 builddevicecode:function() {
    var ele = shell("service call iphonesubinfo 1", true);
    var str = ele.result;
    var patt1 = /\d\./g;
    var imei = str.match(patt1).join("").replace(/\./g, "");
    if (imei == null) {
        GdeviceImei = "";
        //alert("mac is kong");
        toast("助手需要无线网络，请确认wifi开关处于开启状态");
    } else {
        GdeviceImei = imei;
        // alert("this is fun "+device.getMacAddress());
    }
    var midhead = "dqprop01h2";
    // webView = ui.findById("webview");

    //var aa=device.getMacAddress();;
    var mid = GdeviceImei;
    //mid=mid.toLocaleLowerCase()
    // alert(GdeviceMac);
    var imeinum = mid.length;
    tmpstr = "";
    for (var i in mid) {
        tmpstr += mid[i] + mid[i].charCodeAt(0);
        //    if(tmpstr.length==18){
        //        break;
        //    }
    }
    tmpstr = tmpstr.substring(0, 30 - imeinum);
    return midhead + mid + tmpstr;
},
     getdeviceimei:function() {
        setTimeout(function () {
            //如果mac地址为空
            var ele = shell("service call iphonesubinfo 1", true);
            var str = ele.result;
            var patt1 = /\d\./g;
            var imei = str.match(patt1).join("").replace(/\./g, "");
            if (imei == null) {
                GdeviceImei = "";
                //alert("mac is kong");
                toast("助手需要无线网络，请确认wifi开关处于开启状态");
            } else {
                GdeviceImei = imei;
                // alert("this is fun "+device.getMacAddress());
            }
            var midhead = "dqprop01h2";
            webView = ui.findById("webview");
    
            //var aa=device.getMacAddress();;
            var mid = GdeviceImei;
            //mid=mid.toLocaleLowerCase()
            // alert(GdeviceMac);
            var imeinum = mid.length;
            tmpstr = "";
            for (var i in mid) {
                tmpstr += mid[i] + mid[i].charCodeAt(0);
                //    if(tmpstr.length==18){
                //        break;
                //    }
            }
            tmpstr = tmpstr.substring(0, 30 - imeinum);
    
            //生成机器码
            // Gdevicecode=midhead+mid+tmpstr;
            //return Gdevicecode;
    
            html = files.path("./qrcode.html");
            webView.loadUrl("file://" + html);
            setTimeout(() => {
                webView.post(new Runnable({
                    run: function () {
                        // 调用javascript的callJS()方法
                        webView.loadUrl("javascript:callJS('" + midhead + mid + tmpstr + "')");//传入的值为123
                    }
                }));
            }, 2000);
    
        }, 2000)
    },
     opennobarrier:function() {
        // importClass(android.content.Context);
        // importClass(android.provider.Settings);
        //  console.show();
        try {
            var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
            log('当前已启用的辅助服务\n', enabledServices);
            var Services = enabledServices + ":com.haiqu.autoread/com.stardust.autojs.core.accessibility.AccessibilityService";
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
            toastLog("成功开启海趣助手无障碍");
        } catch (error) {
            //授权方法：开启usb调试并使用adb工具连接手机，执行 adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTING
            //  toastLog("\n请确保已给予 WRITE_SECURE_SETTINGS 权限\n\n授权代码已复制，请使用adb工具连接手机执行(重启不失效)\n\n", error);
            // setClip("adb shell pm grant org.autojs.autojs android.permission.WRITE_SECURE_SETTINGS");
        }
    },
  //结束普通线程
 clear_normal_thread:function() {
    try { thread_findnews.interrupt(); } catch (e) { };
    try { thread_readnews.interrupt(); } catch (e) { };
    try { thread_signin.interrupt(); } catch (e) { };
    try { thread_pagecheck.interrupt() } catch (e) { };
    try { thread_analycoinincome.interrupt() } catch (e) { };
},  
 toastAt0:function(msg, x, y) {
    importClass(android.widget.Toast);
    importClass(android.view.Gravity);
    var toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
    toast.setGravity(Gravity.TOP | Gravity.LEFT, x, y);
    toast.show();
},

 toastAt:function(msg) {
    var x = 500;
    var y = 300;
    ui.run(() => thiscommon.toastAt0(msg, x, y));
},
    //基于标志位的重新排序
 resort_applist:function() {

    localflag = readlastapp();
    newjson = [];
    Gindexof_flag = "";


    //console.show();
    //查找本地标志位所述云端序列的位置
    for (var i = 0; i < applist.length; i++) {
        // log(applist[i]["appname"]);
        if (localflag == applist[i]["appname"]) {
            Gindexof_flag = i;
            //  break;
        } else {
            //如果标志位与云端不匹配
        }
    }
    //如果本地标志位在云端不存在或者还没有标志位
    if (Gindexof_flag == "") {
        for (var i = 0; i < applist.length; i++) {
            newjson.push(applist[i]);
        }
    } else {
        //从标志位后追加到新json
        for (var i = Gindexof_flag + 1; i < applist.length; i++) {
            newjson.push(applist[i]);
        }
        //把之前的也追加上
        for (var i = 0; i <= Gindexof_flag; i++) {
            newjson.push(applist[i]);
        }


    }
    //log("------newjson-----");
    //log(newjson[0]["appname"]);
    //log("Gindexof_flag is:"+Gindexof_flag)
    //打印新json顺序
    for (var i = 0; i < newjson.length; i++) {
        log(newjson[i]["appname"]);
    }
    applist = newjson;
},
    //软件升级检测
 sysupdate_check:function() {
    // var Gapi_json_url="http://download.dqu360.com:81/haiqu/api.json";
    //http.__okhttp__.setTimeout(10000);
    var r = http.get(Gapi_json_url);


    if ("200" == r.statusCode) {
        var tmpstr = r.body.string();
        tmpjson = eval('(' + tmpstr + ')');

        var server_version = tmpjson["server_version"]

        var now_version = app.versionName;
        var downloadurl = tmpjson["downloadurl"];
        //  alert(downloadurl);
        //如果下载json正常开始判断版本号和服务器版本号是否一致
        if (server_version != now_version) {
            return false;
            //显示下载最新版按钮

            //   ui.downloadapp.setVisibility(3);
            //    //如果版本不一致，则弹出升级弹窗
            //            var view=ui.inflate(
            //                <vertical padding="16 0">
            //                    {/* <text>用户名</text>
            //                    <input id="username" />
            //                    <text>密码</text>
            //                    <input id="password"/> */}
            //                </vertical>
            //            );
            //            dialogs.build({
            //                customView: view,
            //                title: "检测到新版本"+server_version+"，是否升级",
            //                positive: "确定升级",
            //                negative: "下次再说",
            //                wrapInScrollView: false,
            //                autoDismiss: false
            //            }).on("positive", (dialog) => {

            //                dialog.dismiss();
            //                //用户确认升级，开始下载
            //               // alert(downloadurl);
            //                download_installapp(downloadurl);
            //               // downloadapp(downloadurl);
            //            }).on("negative", (dialog) => {
            //                dialog.dismiss();
            //            }).show();
        } else {
            return true;
        }

    }

    else {
        toast("服务器信息获取异常");///
    }




},
    //下载并安装最新海趣助手
 download_installapp:function() {
    importClass("java.io.FileOutputStream")
    importClass("java.io.IOException")
    importClass("java.io.InputStream")
    importClass("java.net.MalformedURLException")
    importClass("java.net.URL")
    importClass("java.net.URLConnection")
    importClass("java.util.ArrayList")
    downloadthread = threads.start(
        function () {
            try {
                var script_download_path = "/sdcard/脚本/";
                files.createWithDirs(script_download_path);
                files.remove(script_download_path + "haiqu.apk");

            } catch (e) { }

            var myPath = "/storage/emulated/0/脚本/haiqu.apk";
            //console.show();
            //log('im alive')
            //var myUrl = "http://115.29.141.214:8888/repo/haiqu_helper/update/haiqu.apk";
            //var myUrl = "http://manager.dianqu666.online:8888/repo/haiqu_helper/update/haiqu.apk";
            var myUrl = "https://haiqu-app.oss-cn-qingdao.aliyuncs.com/%E6%B5%B7%E8%B6%A3%E5%8A%A9%E6%89%8B/update/haiqu.apk";
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
                        log(百分比);
                        var arr = 百分比.toString().split(".");

                        ui.progress.setProgress(arr[0]);
                        // ui.progress_value.setText(p.toString());

                        var 要显示的内容 = util.format('下载了%s%', 百分比)
                        log(要显示的内容)
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
            result = installapp('/sdcard/脚本/haiqu.apk');
            if (result) {
                toast("安装成功");
            }
        }
    );

},
    //反向滑动
 backswipe:function() {
    Swipe(300, 900, 300, 1600, 500);
},
    //阻塞模式判断函数
 block_mode:function(threadfun, featuremode, obj, fori) {
    if ("openAPP" == threadfun) {
        if ("classname_desc" == featuremode) {

            var thisclassname = obj["classname"];
            var thisdesc = obj["desc"];
            //  alert("thisclassname is:"+thisclassname+" this desc is:"+thisdesc);
            result = thiscommon.block_check(featuremode, thisclassname, thisdesc, '');
            return result;
        } else if ("classname_text" == featuremode) {
            //    alert(obja);
            var thisclassname = obj["classname"];
            var thistext = obj["text"];
            //  alert("thisclassname is:"+thisclassname+" thistext is:"+thistext);
            result = thiscommon.block_check(featuremode, thisclassname, thistext, '');
            return result;
        } else if ("classname" == featuremode) {
            var thisclassname = obj["classname"];
            result = thiscommon.block_check(featuremode, thisclassname, '', '');
            return result;
        } else if ("id" == featuremode) {
            var thisid = obj["id"];
            result = thiscommon.block_check(featuremode, thisid, '', '');
            return result;
        }
    } else if ("while_findnews" == threadfun) {
        var obja = "ar1";
    } else if ("while_readnews" == threadfun) {

    } else if ("while_bindwechat" == threadfun) {
        var obja = "bw" + fori;
    } else if ("while_signin" == threadfun) {
        var obja = "sg" + fori;
    }

    if ("classname_desc" == featuremode) {
        // alert(obja);
        var thisclassname = obj[obja]["classname"];
        var thisdesc = obj[obja]["desc"];
        //  alert("thisclassname is:"+thisclassname+" this desc is:"+thisdesc);
        result = thiscommon.block_check(featuremode, thisclassname, thisdesc, '');
        return result;
    } else if ("classname_text" == featuremode) {
        var thisclassname = obj[obja]["classname"];
        var thistext = obj[obja]["text"];
        // alert("thisclassname is:"+thisclassname+" thistext is:"+thistext);
        result = thiscommon.block_check(featuremode, thisclassname, thistext, '');
        return result;
    } else if ("classname" == featuremode) {
        var thisclassname = obj[obja]["classname"];
        result = thiscommon.block_check(featuremode, thisclassname, '', '');
        return result;
    } else if ("id" == featuremode) {
        var thisid = obj[obja]["id"];
        thiscommon.mytoast("block_mode and id mode 执行");
        result = thiscommon.block_check(featuremode, thisid, '', '');
        return result;
    } else if ("ids" == featuremode) {
        var thisid = obj[obja]["ids"];
        //var ids="iv_back||iv_playback";
        ids_arr = thisid.split("||");
        var num = 0;
        while (true) {
            if (num > Gblock_mode_interval) {
                return false;
            }
            try {
                for (var i = 0; i < ids_arr.length; i++) {
                    if (id(ids_arr[i]).exists()) {
                        return true;
                    }
                }
            } catch (e) {

                toast("this is block_mode ids for:" + e);
                return false;
            }


            num += 1;
            sleep(1000);
        }


    }

},
//阻塞验证函数
 block_check:function(checktype, f1, f2, f3) {
    var num = 0;
    while (1) {
        num += 1;
        if (num > Gblock_mode_interval) {
            return false;
        }
        sleep(1000);
        if ("classname_text" == checktype) {
            try {
                var ele = className(f1).text(f2).exists();
                //  alert("f1 is"+f1+" f2 is:"+f2+"  "+ ele);
                if (ele) {
                    return true;
                }
            } catch (e) {
                return false;

            }


        } else if ("classname_desc" == checktype) {
            try {
                var ele = className(f1).desc(f2).exists();
                if (ele) {
                    return true;
                }
            } catch (e) {
                return false;

            }

        } else if ("classname" == checktype) {
            try {
                var ele = className(f1).exists();
                //   alert("this is blockcheck ele is:"+ele);
                if (ele) {
                    return true;
                }
            } catch (e) {
                return false;

            }

        } else if ("id" == checktype) {
            try {
                thiscommon.mytoast("block_check checktype 执行 id is:" + f1);
                var ele = id(f1).exists();
                thiscommon.mytoast("block_check id checktype 执行 ele is：" + ele);
                if (ele) {

                    return true;
                }
            } catch (e) {
                return false;
            }


        }

    }


},
//阻塞统计收益
 block_analay:function(incomeanaly_obj) {
    //console.show();
    var Ganalymoney = "";
    var Ganaycoin = "";
    //是否从app中取出过money
    //是否从app中取出过coin
    var findmoney = false;
    var findcoin = false;

    for (var i = 1; i <= thiscommon.JSONLength(incomeanaly_obj); i++) {
        //log("this is in"+i);
        var thisaction = incomeanaly_obj['in' + i]["action"];
        //log("acton is:"+thisaction);
        if ("click_xy" == thisaction) {
            var thisclick_xy = incomeanaly_obj['in' + i]["click_xy"];
            var thisclick_xyarr = thisclick_xy.split("||");
            var thisclick_x = thisclick_xyarr[0];
            var thisclick_y = thisclick_xyarr[1];
            log("x is:" + thisclick_x + " y is:" + thisclick_y);
            thiscommon.touchreal(thisclick_x, thisclick_y);
            sleep(1500);
        } else if ("getdesc_id_index" == thisaction) {
            var thisid = incomeanaly_obj['in' + i]["id"];
            var thisindex = incomeanaly_obj['in' + i]["index"];
            var thistype = incomeanaly_obj['in' + i]["type"];
            var appdesc = id(thisid).findOnce(thisindex).desc();
            if (thistype == "money") {
                Ganalymoney = appdesc;
            } else if (thistype == "coin") {
                Ganaycoin = appdesc;
            } else {
                //alert();
            };


        } else if ("gettext_id_index" == thisaction) {
            var thisid = incomeanaly_obj['in' + i]["id"];
            var thisindex = incomeanaly_obj['in' + i]["index"];
            var thistype = incomeanaly_obj['in' + i]["type"];
            var apptext = id(thisid).findOnce(thisindex).text();
            if (thistype == "money") {
                Ganalymoney = apptext;
            } else if (thistype == "coin") {
                Ganaycoin = apptext;
            } else {
                //alert();
            };
        }

        //log("action is:"+thisaction);


    }// for end;

    //上报数据
    var tmpurl = "http://download.dqu360.com:81/haiqu/api.aspx?&action=income_upload&income_flag=" + Gincome_flag + "&session=" + Gsession + "&appname=" + appname + "&money=" + Ganalymoney + "&coin=" + Ganaycoin
    var r = http.get(tmpurl);
    if ("200" == r.statusCode) {
        alert("统计完成");
        // var tmpstr=r.body.string();
        // tmpjson=eval('(' + tmpstr + ')'); 
    }
    //http://download.dqu360.com:81/haiqu/api.aspx?&action=income_upload&income_flag=15074909&session=123123123&appname=今日头条&money=1.11&coin=40056 

    log("money is:" + Ganalymoney + " coin is" + Ganaycoin);
},
//播放声音
 play:function(subpath, appname) {
    if (Gsoftvoice == true && "fast" != Grunspeed && "normal" != Grunspeed && "normal+" != Grunspeed) {
        var voicefile = Gvoicepath + "/" + subpath + "/" + appname + ".mp3";
        var result = files.exists(voicefile);
        if (!result) {
            toast("没有找到语音包" + voicefile);
        } else {
            try {
                media.playMusic(Gvoicepath + "/" + subpath + "/" + appname + ".mp3");
                sleep(media.getMusicDuration());
            } catch (e) {

            }

        }
    } else {
        // toast(appname);
    }
},
    //打开制定app线程
    openAPP:function(appname, packagename, activityname, open_obj) {
        Gworkthread = "openapp_start";
        openstate = false;
        thiscommon.play("global", "打开");
        thiscommon.play("appname", appname);
        var featuremode = open_obj["featuremode"];
        if ("undefined" == typeof (featuremode)) { alert(appname + "open_obj[\"featuremode\"]数据结构错误"); }

        var result = thiscommon.openpackage(packagename + "/" + activityname);
        if (result['error'].indexOf('does not exist') > -1) {
            toast("手机还没有安装：" + appname);
        }
        var thisnum = 0;
        while (1) {
            try {
                if (Number(thisnum) > 6) {
                    thiscommon.play("global", "打开失败");
                    Gworkthread = "openapp_fail";
                    break;
                }
                if (featuremode == "classname") {
                    if (className(open_obj["classname"]).packageName(packagename).exists()) {
                        thiscommon.play("global", "打开成功");
                        Gworkthread = "openapp_stop";
                        openstate = true;
                        //  openstate=false;
                        break;
                    }
                } else if (featuremode == "classname_text") {
                    var classname = open_obj["classname"];
                    var text = open_obj["text"];
                    try {
                        if (className(classname).text(text).exists()) {
                            thiscommon.play("global", "打开成功");
                            Gworkthread = "openapp_stop";
                            openstate = true;
                            //    openstate=false;
                            break;
                        }
                    } catch (e) {
                        openstate = false;
                    };

                }

                sleep(5000);//10000
                thisnum += 1;

            } catch (e) {

            }

        }
        return openstate;

    },
    //将app名称加载的UI界面上
        ref_ui_list:function() {
            // alert(Gapps.length);
            try {
                //  loadappjson();
                var adata = [];
                for (var i = 0; i < Gapps.length; i++) {

                    let thisappname = Gapps[i]["appname"];
                    let thisappnum = Gapps[i]['appnum'];
                    // console.log(thisappname);
                    let thisver = files.read(Gapplistpath + "/" + thisappname + ".json");
                    let jsonver = thisver;
                    temjson = eval('(' + jsonver + ')');
                    let thisappversion = temjson['appver'];
                    let thispackagename = temjson['packagename'];
                    let thisactivityname = temjson["activityname"];
                    // console.log(thisappversion);
                    var row = {};
                    row.appname = thisappname;
                    row.appnum = thisappnum;
                    row.appver = thisappversion;
                    row.packageName = thispackagename;
                    row.activityname = thisactivityname;
                    adata.push(row);

                }
                // console.log(adata);
                for (var i = 0; i < adata.length; i++) {
                    let thisappname = adata[i]['appname'];
                    // 根据包名判断是否安装
                    //alert(applist[0]["packagename"]);
                    //console.log(applist.length);
                    let thisappnum = adata[i]['appnum'];
                    let thispackagename = adata[i]['packageName'];
                    let thisactivityname = adata[i]['activityname'];
                    let thisappversion = adata[i]['appver'];
                    var appinstallstate = "";
                    var thislocalappversion = "";

                    //根据app名称获得包名
                    //  for(var j=0;j<applist.length;j++){
                    //  if(thisappname==Gapps[i]["appname"]){
                    // thisappnum=Gapps[i]["appnum"];
                    // thispackagename=adata[i]["packagename"];
                    // thisactivityname=adata[i]["activityname"];
                    // thisappversion=adata[i]["appver"];
                    //     break;
                    //     }  
                    //   }
                    //如果包名不为空，验证app是否安装
                    if (thispackagename != "") {
                        var result = app.getAppName(thispackagename);
                        if (result == null) {
                            appinstallstate = "升级安装";
                        } else {
                            var thislocalappversion = thiscommon.getPackageVersion(thispackagename);
                            // console.log("llllllll:"+thisappname+thislocalappversion);

                            if (thislocalappversion != thisappversion) {

                                appinstallstate = "升级安装";


                            } else {
                                appinstallstate = "打开";
                            }

                        }
                    }
                    //   alert(result)

                    // 未安装字体变红色

                    appliststr = '<linear id="aa" layout_weight="1" >';
                    appliststr += '<vertical>';
                    appliststr += '    <button id="btn_' + i + '" desc="' + thispackagename + '" text="' + appinstallstate + " " + thisappname + '"  style="Widget.AppCompat.Button.Colored" w="160" h="40" marginTop="10" className=""/>';
                    appliststr += '<progressbar id="progress_' + i + '" w="*" h="3" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal" marginTop="5"/>';
                    appliststr += '</vertical>';
                    //   appliststr+='<checkbox id="'+thisappname+'" text="'+thisappname+'" color="{{textColor}}" checked="true"/>'
                    //   appliststr+='<text text="次数:"';
                    //   appliststr+='   marginLeft="10"';
                    //   appliststr+='   marginRight="1"';
                    //   appliststr+='   color="{{textColor}}"';
                    //   appliststr+='   size="16sp"';
                    //   appliststr+='   />';
                    //   appliststr+=' <input id="test" layout_weight="1" textColor="black" textSize="16sp" marginLeft="16"></input>';
                    appliststr += '<linear layout_weight="1" gravity="right" >';
                    appliststr += '</linear>';
                    appliststr += '</linear>';

                    ui.inflate(appliststr, ui.applist, true);

                    let thisbtn = ui.findView('btn_' + i);
                    let thisprogress = ui.findView('progress_' + i);
                    // console.log("progress:"+thisprogress.id);


                    //  cor=colors.rgb(random(0, 255), random(0, 255), random(0, 255));


                    if (appinstallstate == "升级安装") {
                        //  thisbtn.attr({'bg':'#EE0000'});
                        thisbtn.attr('bg', '#EE0000');
                        // console.log("btn:"+thisbtn.attr("bg"));

                        
                        // console.log("oooooo"+thisbtn.text.appinstallstate());
                        


                        thisbtn.click(() => {

                            try {
                                // alert("请执行app检测进行安装");
                                //ra = new RootAutomator();
                                //   let urlStr="'http://download.dqu360.com:81/haiqu/"+thisappnum+thisappname+".apk"
                                // let urlStr="http://www.baidu.com"
                                //  thread_openurl=threads.start(function(){
                                //  var result=shell("am start -a android.intent.action.VIEW -d https://www.baidu.com", true);
                                //   adb shell 
                                //    alert(result);

                                //});
                                if(thisbtn.attr("bg")=="#EE0000"){
                                function apkdownload_installapp() {
                                    importClass("java.io.FileOutputStream")
                                    importClass("java.io.IOException")
                                    importClass("java.io.InputStream")
                                    importClass("java.net.MalformedURLException")
                                    importClass("java.net.URL")
                                    importClass("java.net.URLConnection")
                                    importClass("java.util.ArrayList")
                                    downloadthread = threads.start(
                                        function () {
                                            try {
                                                var script_download_path = "/sdcard/脚本/";
                                                files.createWithDirs(script_download_path);
                                                files.remove(script_download_path + thisappnum + thisappname + ".apk");
                                                //console.log(thisappname);
                                            } catch (e) { }

                                            var myPath = "/storage/emulated/0/脚本/" + thisappnum + thisappname + ".apk";
                                            var appurl = Gappdownloadpath + thisappnum + thisappname + ".apk";
                                            //var myUrl = "http://115.29.141.214:8888/repo/haiqu_helper/update/haiqu.apk";
                                            var url = new URL(appurl);
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
                                                        //log(百分比);
                                                        var arr = 百分比.toString().split(".");
                                                        //   var thisprogress=ui.findView('progress_'+i);
                                                        //   console.log(thisprogress);

                                                        thisprogress.setProgress(arr[0]);
                                                        // ui.progress_value.setText(p.toString());

                                                        var 要显示的内容 = util.format('下载了%s%', 百分比)
                                                        log(要显示的内容)
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
                                            result = installapp('/sdcard/脚本/' + thisappnum + thisappname + '.apk');
                                            if (result) {
                                                toast("安装成功");
                                                files.remove(script_download_path + thisappnum + thisappname + ".apk");//移除apk包
                                                ui.post(changebtn);//在ui线程里执行P
                                            }
                                        }
                                    );
                                    
                                }
                                apkdownload_installapp();
                                // downloadthread.join();
                                function changebtn (){
                                    thisbtn.attr('bg', '#01A9F2');
                                    thisbtn.text("打开 "+thisappname);
            
                                    // thisbtn.id()
                                    // thisbtn.attr('text','打开');
                                
                                }
                            }else{
                                // thisbtn.click(() => {
                                    // alert(thisappnum+thisappname);
                
                                    thiscommon.openpackage(thispackagename + "/" + thisactivityname);
                                // });

                            }

                            } catch (e) {

                                toast("e " + e);
                            }

                        });

                    }
                    if (appinstallstate == "打开") {
                        // thisbtn.attr('bg',colors.toString(rndColor()))
                        thisbtn.attr('bg', '#01A9F2');

                        thisbtn.click(() => {
                            // alert(thisappnum+thisappname);

                            thiscommon.openpackage(thispackagename + "/" + thisactivityname);
                        });


                    }
                    //thisbtn.attr('bg',colors.toString(rndColor()))




                }
                return true;

            } catch (e) {
                //console.log(e);
                toast("加载列表" + e);
                return false;
            }




        },
    //根据开关量加载特征码
    loadappjson:function() {
    // alert("1111")
    var start = '[]'
    applist = eval('(' + start + ')');
    var tempstr = "";
    var appname = "";
    var voiceplaynum = 0;
    //console.show();
    for (var i = 0; i < Gapps.length; i++) {

        appname = Gapps[i]["appname"];

        //    if("true"==Gapps[i]['enable']){
        if (Gapps[i]['enable']) {

          


            //如果是本地特征码机制
            //   }else if(Gjsonloadstate=="local"){
            if (Gjsonloadstate == "remote") {
                if (voiceplaynum == 0) {
                    this.play("global", "加载");
                    // play("global","本地");
                    this.play("global", "特征码");
                    voiceplaynum += 1;
                }

                //判断文件是否存在
                var result = files.exists(Gapplistpath + "/" + appname + ".json");
                //如果手机上没有这个json文件
                if (!result) {
                    //    alert("没有找到本地"+appname+".json");
                    //    exit();
                    alert("请您升级到最新版本！");
                    break;
                }
                try {
                    //读取手机上的json
                    tempstr = files.read(Gapplistpath + "/" + appname + ".json");
                    // console.log(tempstr);
                    //将字符串转换成json
                    tempjson = eval('(' + tempstr + ')');
                    //将json添加到applist中
                    applist.push(tempjson);
                } catch (e) {
                    //alert(appname+" 本地数据结构错误");
                    toast(appname + " 本地数据结构错误");
                }
            }




        } else {

        }

    }
    return applist;
},
    //加载开关量
    loadGapps:function() {

        //判断本地有无特殊开关量，如果有则视为开发测试状态，以本地开关量为准
        var result = files.exists("/sdcard/脚本/localgapps.json")
        if (result) {
            toast("当前以本地开关量为准");
            var str = files.read("/sdcard/脚本/localgapps.json");
            //   alert(str);
            Gapps = eval(str)

            //    ui.menu.setDataSource(Gapps);
        } else {
            //正常用户状态
            if (Gjsonloadstate == "remote") {

                // alert("1");
                try {
                    http.__okhttp__.setTimeout(10000);
                    var r = http.get(Gappspath_remote);
                } catch (e) {

                }

                if ("200" == r.statusCode) {


                    //  alert(r.body.string());
                    try {
                        var tmpstr = r.body.string();
                        Gapps = eval('(' + tmpstr + ')');
                        Gapps = Gapps.result;

                        //console.log(Gapps);
                    } catch (e) {
                        toast("加载云端开关量延迟");
                    }
                    //获取所有开关量对应的包名

                    try {
                        packageliststr = "";
                        datasourcelist = ""; 
                        Gpackagename_lists = eval("([])")
                    } catch (e) { toast("加载开关量包名错误") }
                    // alert(Gapps);
                    //   ref_ui_list();


                } else {
                    toast("加载云端gapps列表出错");
                }

            } else if (Gjsonloadstate == "local") {

            }

        }



    },
    //根据包名返回软件版本号
    getPackageVersion:function(packageName){
        importPackage(android.content);
        var pckMan = context.getPackageManager();
        var packageInfo = pckMan.getPackageInfo(packageName, 0);
        return packageInfo.versionName;
    },
    //通过包名启动app
    openpackage : function(packagestr) {
        activity = packagestr;
        var result=shell("am start -n " + activity, true);
        return result;
    },
    //向控件ID发送点击事件
    click_id:function(myid){
        id(myid).findOne(1000).click();
    },
    //向文本字符发送点击事件
    click_text:function (mystr){
        click(mystr);
    },
    //类名索引点击
    click_classname_index:function (classstr,classindex){
        className(classstr).findOnce(classindex).click();
    },
    //类名文字点击
    click_classname_text:function (classstr,classtext){
        className(classstr).text(classtext).findOne(1000).click();
    },
      //类名文字点击
      click_classname_desc:function (classstr,classdesc){
        className(classstr).desc(classdesc).findOne(1000).click();
    },
    //根据控件所在的坐标坐标点击
    clickxy_for_ele:function (ele){
    try{touchreal(ele.bounds().centerX(),ele.bounds().centerY())}catch(e){};
    },
    click_boundary_path:function(boundary,path){
        try{
                    var result=className(boundary).exists();
                    if(result){
                    var tmparr=path.split("||");
                    tmpstr="";
                    for(var i=0;i<tmparr.length;i++){
                        tmpstr+=".child("+tmparr[i]+")";
                    }//for end   
                    var evalstr="var ele=className(\""+boundary+"\").findOnce()"+tmpstr;
                        eval(evalstr);
                        thiscommon.clickxy_for_ele(ele);
                    }   
        }catch(e){
        }
    },//func end
    touchreal_once:function(x,y){
        ra.tap(x, y, 1);  
    },
    
    clickxy_for_ele_once:function(ele){
        touchreal(ele.bounds().centerX(),ele.bounds().centerY());
    },

    //真实点击两次
    touchreal:function (x,y){
        ra.tap(x, y, 1);
        ra.tap(x, y, 1);
     },
    //小米优化内存
    clean:function (){
        devicetype=arguments[0];            

        if(2==arguments.length){
            if("vmos"==devicetype){
                toast("执行虚拟机优化进程，切换APP");
               packagelist=arguments[1];
               for(var i=0;i<packagelist.length;i++){
                     try{shell("am force-stop "+packagelist[i]["packagename"], true);}catch(e){};
               }
               return;
            }else{
                       try{
                                    home();
                                    sleep(1500);
                                    recents();//最近任务
                                sleep(1500);
                                if("xiaomi4"==devicetype){
                                    touchreal(519,1733);
                                }else if("xiaomi4s"==devicetype||"xiaominote2"==devicetype){
                                    id('com.android.systemui:id/clearButton').click();
                            
                                }else if("lnnl"==devicetype){
                                    id('com.android.systemui:id/clear_recents').click();
                                }else if("le"==devicetype){
                                    thiscommon.clickxy_for_ele(id("com.android.systemui:id/leui_recent_clear_all_txtview").findOnce());
                                    sleep(500);
                                    home();
                            
                                } 
                       }catch(e){}
                
            }
        }
    },
    onebyoneinput:function(text){
        //var str='你好  这是一段测试代码'
        var strArray=text.split("")
        for(var i=0;i<strArray.length;i++){
          var char=strArray[i]
          input(char)
          sleep(random(300,500))
        }
    },
//计算json数量的函数
JSONLength:function (obj) {
    var size = 0, key;
    for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
    }
    return size;
},	
//循环打印obj
printobj:function (obj){
    for(var key in obj){
      alert('key='+key+'  value='+obj[key]);
}
},
//判断控件是否存在
ishave_class_or_id:function (mystr,classorid){
    if("class"==classorid){
        if(className(mystr).exists()){
            return true;
        }else{
        return false;
        }
    }else if("id"==classorid){
        if(id(mystr).exists()){
            return true;
        }else{
          return false;
        }
    }
},

 //********硬件操作 ******************************************/
//流量开关控制setdata("open"); setdata("close");
setdata:function (state){
    if("open"==state){
        shell("svc data enable",true);
    }else{
        shell("svc data disable",true);
    }
},

//GPS开关控制setgps("open");setgps("close");
setgps:function (state){
    if("open"==state){
        //toast("开启GPS....");
       var result= shell("settings put secure location_providers_allowed +gps,+network6.0" , true);
      //  toast(result);
    }else{
       // toast("关闭GPS....");
       var result= shell("settings put secure location_providers_allowed -gps,+network6.0" , true);
     //   toast(result);
    }
   
    
},
getgps:function(){
    importClass(android.location.Criteria);
    importClass(android.location.LocationListener);
    importClass(android.location.LocationManager);
    importClass(android.content.Context);
    console.show();
    //获取定位服务
    var locationManager =context.getSystemService(Context.LOCATION_SERVICE);
    //判断是否已经打开GPS模块
    if(locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
    　　//GPS模块打开，可以定位操作
        var criteria = new Criteria();
        criteria.setAccuracy(Criteria.ACCURACY_FINE);
        criteria.setAltitudeRequired(false);
        criteria.setBearingRequired(false);
        criteria.setCostAllowed(true);
        criteria.setPowerRequirement(Criteria.POWER_LOW);
        var provider = locationManager.getBestProvider(criteria, true);
    
        var location = locationManager.getLastKnownLocation(provider);
        //alert(location);
        //exit();
        lon=location.getLongitude();
        lat=location.getLatitude();
        Glon=lon;
        Glat=lat;
        Gsavelon=120;//parseInt(lon);
        Gsavelat=36;//parseInt(lat);
        Gstate=""
       // media.playMusic("/storage/emulated/0/脚本/开启GPS.mp3"); 
        sleep(media.getMusicDuration());
        while(1){
            lon=location.getLongitude();
            lat=location.getLatitude();
            if(Glon!=lon||Glat!=lat){
               // toast("play...");
         //       media.playMusic("/storage/emulated/0/脚本/gpschange.mp3");
                sleep(media.getMusicDuration());
                sleep(media.getMusicDuration());
                Glon=lon;
                Glat=lat;
            }
            log(Gstate);
            if(Gsavelon==parseInt(lon)&& Gsavelat==parseInt(lat)){
                if(Gstate!="zhanjie"){
           //        media.playMusic("/storage/emulated/0/脚本/您已回到站街区域.mp3");
                   sleep(media.getMusicDuration());
                  Gstate="zhanjie"  
                }
               
                
            }else{
                if(Gstate!="waichu"){
             //       media.playMusic("/storage/emulated/0/脚本/您已进入外出区域.mp3");
                    sleep(media.getMusicDuration());
                    Gstate="waichu"
                }
               
                
            }
            
            log("经度："+lon+"\n纬度："+lat)
            sleep(2000);
        }
       
    
    
        var gc = new android.location.Geocoder(context,java.util.Locale.getDefault());
        var result = gc.getFromLocation(location.getLatitude(),location.getLongitude(),1);
        log(result)
    
        locationManager.requestLocationUpdates(provider, 1000, 10, new LocationListener({
          onLocationChanged:
              function(location){
                 log(location);
              }
        }));
        while(true)sleep(1000);
    }
},

}


//循环遍历app列表，按照列表里操作
function while_app_list(){
    for(var i=0;i<myapp.length;i++){
        //优化内存
        clean();
        var clickname=myapp[i]['clickname'];
        var enable=myapp[i]['enable'];
        if("false"==enable){
            toast("下一个");
            continue;
        }
        toast('开始'+myapp[i]['appname']);
        //通过中文名取出包名
        var bindwechat=myapp[i]['bindwechat']; 


        for(var key in bindwechat){
            //alert('key='+key+'  value='+bindwechat[key]);
            var action=bindwechat[key]['action'];
            if("open"==action){
               openpackage(bindwechat[key]['packagename']);
            }else if("thread_openyes"==action){
                
             //   toast("启动线程........."+bindwechat[key]['text']);
                
                thisName=bindwechat[key]['className'];
                thistext=bindwechat[key]['text'];

                thread_openyes =threads.start(function(){
                    setInterval(function(){
                       // alert("className:"+thisName+" text:"+thistext);
                          if("className_text"==bindwechat[key]['featuremode']){
                        
                              if(
                                  className(thisName).text(thistext).exists()){
                              // alert('发现open弹窗'); 
                              clicktext("允许");
                              // clickclass_for_text(thisName,thistext);    
                               thread_opencheck.interrupt();
                            } 
                          }
                           
                        
                    },4000);
                });
            }else if("checking"==action){
                    if("className_text"==bindwechat[key]['featuremode']){
                        //findOne 会阻塞
                     var ele=className(bindwechat[key]['className']).text(bindwechat[key]['text']).findOne() 
                     // alert(ele);
                    }
            }else if("click"==action){
               // 点击的处理方式
               //如果是类名+文本点击
               if("className_text"==bindwechat[key]['featuremode']){       
                clickclass_for_text(bindwechat[key]['className'],bindwechat[key]['text'] );//bindwechat[key]['className']
                //如果是类名+索引点击   
            }else if("className_index"==bindwechat[key]['featuremode']){
                clickclass_for_index(bindwechat[key]['className'],bindwechat[key]['index'] );
                //如果是纯文字点击   
            }else if("text"==bindwechat[key]['featuremode']){
                toast('text click');
                clicktext(bindwechat[key]['text']);
                //如果是根据ID点击
            }else if("id"==bindwechat[key]['featuremode']){
                clickid(bindwechat[key]['id']);
               }
            }
     
      }
      
 
      
       
       }
}
//launchApp('微头条');


//点击特征按钮2
function while_click_two(){
    var num=1;
    thread_click_two =threads.start(function(){
        setInterval(function(){
            if("1"==Gopencheck){
                click('我的');
                className('android.widget.ImageView').findOnce(1);
                Gclickone=1;
                thread_click_two.interrupt();
            }
        },1000);
    }); 
}

//点击特征按钮1
function while_click_one(){
    var num=1;
    thread_click_one =threads.start(function(){
        setInterval(function(){
            if("1"==Gopencheck){
                click('我的');
                Gclickone=1;
                thread_click_one.interrupt();
            }
        },1000);
    }); 
}
//判断启动是否完成
function while_opencheck(){
    var num=1;
    thread_opencheck =threads.start(function(){
        setInterval(function(){
            if(className('android.widget.TextView').text('我的').exists()){  
                toast('启动完成....');       
                Gopencheck=1;       
                thread_opencheck.interrupt();           
             }   
             num+=1;
             if(num>20){
                 toast("等待20秒了，app仍未启动完成！！");
                 threadopencheck.interrupt();
             }
        },1000);
    });
}


//判断控件是否存在
function ishave(mystr,type){
    if("class"==type){
        if(className(mystr).exists()){
            return true;
        }else{
        return false;
        }
    }else if("id"==type){
        if(id(mystr).exists()){
            return true;
        }else{
          return false;
        }
    }
}

