importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Bitmap);
pm = context.getPackageManager();
importClass(android.util.DisplayMetrics)
//var name = rawInput("请输入你想要获取的应用图标的应用名", "优看点");
//packageName = app.getPackageName(name);
//alert(paceageName);
packageName="com.aimotech.yingbeitt";

appInfo = pm.getApplicationInfo(packageName, 0);
bmp = appInfo.loadIcon(pm).getBitmap();
files.create("/sdcard/脚本/1.jpg");
f = new File("/sdcard/脚本/1.jpg");
fOut = new FileOutputStream(f);
bmp.compress(Bitmap.CompressFormat.JPEG, 100, fOut);
fOut.flush();
fOut.close();
app.viewFile("/sdcard/脚本/1.jpg")