var packagename = getPackageName("韭菜资讯")
launch(packagename);
var thispackagename = currentPackage();
var thisactivity = currentActivity();
log("当前包名为："+packagename);
log("当前窗体名："+thisactivity);
log("剪切板信息："+getClip())