toast("同步js中......");
var r=http.get("https://raw.githubusercontent.com/dybangel/hades/master/main_noui.js");
var tmpstr=r.body.string();
files.write("main_noui.js",tmpstr);

var r=http.get("https://raw.githubusercontent.com/dybangel/hades/master/myswipe.js");
var tmpstr=r.body.string();
files.write("myswipe.js",tmpstr);

var r=http.get("https://raw.githubusercontent.com/dybangel/hades/master/mycommon.js");
var tmpstr=r.body.string();
files.write("mycommon.js",tmpstr);
//appver_check.js
var r=http.get("https://raw.githubusercontent.com/dybangel/hades/master/appver_check.js");
var tmpstr=r.body.string();
files.write("appver_check.js",tmpstr);

var r=http.get("https://raw.githubusercontent.com/dybangel/hades/master/app_clear_data.js");
var tmpstr=r.body.string();
files.write("app_clear_data.js",tmpstr);

var r=http.get("https://raw.githubusercontent.com/dybangel/hades/master/appshow_last.js");
var tmpstr=r.body.string();
files.write("appshow_last.js",tmpstr);

alert("老铁！同步成功！\n  main_noui.js \n myswipe.js \n mycommon.js \n appver_check.js \n app_clear_data.js \nappshow_last.js");
