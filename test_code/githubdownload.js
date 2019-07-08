toast("234234234");
仓库名字="hades"
作者名字="dybangel"
githubUrl="https://github.com/"+作者名字+"/"+仓库名字+"/archive/master.zip"
console.show();
github下载的脚本=download()

log("111");
//engines.execScript('auto.js&github',github下载的脚本)
function download(){
  try{
    var r=http.get(githubUrl)
    log('code=',r.statusCode)
    var zipFile=r.body.bytes()
    if(zipFile){
      var zippath=savezip(zipFile)
     // return files.read(zippath)
    }else{
      console.error('下载github代码失败')
      exit()
    }
  }catch(err){
    console.error(err)
    exit()
  }
}


function savezip(zipFile){
  var path=files.join(files.cwd(),"zip文件专用/test.zip")
  files.createWithDirs(path)
  log("path=",path)
  // path= /storage/emulated/0/脚本/zip文件专用/test.zip
  files.writeBytes(path,zipFile)
  log("保存完成.....");
  //var r=unzip(path)
 // log("解压状态为："+r)
 // return r
}


function unzip(zippath){
  //同一目录下的同一文件名
  var dirpath=zippath.replace(".zip", "")+"/"
  log('将要解压的文件夹路径=',dirpath)
  files.createWithDirs(dirpath)
  com.stardust.io.Zip.unzip(new java.io.File(zippath), new java.io.File(dirpath))
  log("unzip 完成");

  return dirpath+仓库名字+"-master"+"/index.js"
}


function 返回路径的父目录(path){
  var r=path.split("/")
  r[r.length-1]=""
  r=r.join('/')
  // 尾部带斜杆
  log("父目录=",r)
}