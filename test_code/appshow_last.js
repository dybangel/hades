importClass('android.database.sqlite.SQLiteDatabase');
importClass("android.content.ContentValues");
importClass("android.content.Context");
importClass("android.database.Cursor"); 
  
//打开或创建test.db数据库        
db  =  context.openOrCreateDatabase("haiqu.db",  Context.MODE_PRIVATE,  null);   
//创建person表
db.execSQL("create table if not exists " +  "t_tag" + "(_id integer primary key,appnum,appname)");  
//取出数据库内容
//  查询  c 是 Cursor类
var c = db.query("t_tag", null, "", null, null, null, null, null);        
lastappname="";
while  (c.moveToNext())  {              
    var  appnum  = c.getInt(c.getColumnIndex("appnum"));              
    var  appname  = c.getString(c.getColumnIndex("appname"));                
  lastappname=appname;
   continue;
} 

if(lastappname==null){
   alert("没有记录上次阅读的app");
}else{
    alert("上次阅读到了："+lastappname);
}

db.close();        
exit();
                     
