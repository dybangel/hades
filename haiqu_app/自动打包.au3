#Include <File.au3>
#include <Array.au3>

;源路径
$appname = "红小牛,乐看看,趣玩赚,小鸟点点,熊赚赚,亿点点,有钱赚,有赏,运赚,中合好运,赚赚多多";
$repo="repo2,repo3,repo4,repo5,repo6,repo7,repo8,repo9,repo10,repo11,repo12";
$hbuliderid="135,136,137,138,139,140,141,142,143,144,145";	替换\xxx\js\reg.js  中字符 localStorage.appId = '134'
$packagename="com.cow.momo,com.lekankan.reach,com.quwanzhuan,com.brid.mel,com.bear.cn,diandian.sound,com.youqian.lucky,com.youshang.happy";
$packagename&=",com.lucky.man,com.zhongheluck.cn,zhuanduo.mcn";  替换\xxx\mainfest.js 中字符串 com.pretty.fish
;$packagename="com.pretty.fish,com.cow.momo";
$htmlfile="index.html,detail.html reg.html,withdraw.html"  ;替换4个文件中repo1/css repo1/js 为对应昂库

$cardpath="./card"; copy card/repox/* xxx\images\
$csspath="./css";;本地样式 copy css/repox/* xxx/css

$arrayappname = StringSplit($appname,",",1);
$arrayrepo=StringSplit($repo,",",1);

$arrayhbuliderid=StringSplit($hbuliderid,",",1);
$arraypackagename=StringSplit($packagename,",",1);
$arrayhtmlfile=StringSplit($htmlfile,",",1);

dircopy("./project/好鱼多","./release/好鱼多",1);复制目录
For $i= 0 To UBound($arrayappname) -1
;MsgBox(64,"分割字符串", "分割后的数量：" & $array[$i]);
If $i<>0 Then
dircopy("./project/好鱼多","./release/"&$arrayappname[$i],1);复制目录
;MsgBox(0,"","./base/card/"&$arrayrepo[$i]&"/*.*"&" to "&$arrayappname[$i]&"/images")
dircopy("./base/card/"&$arrayrepo[$i]&"/a.png","./release/"&$arrayappname[$i]&"/images/a.png",1);复制目录
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/a.png","./release/"&$arrayappname[$i]&"/images/a.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/b.png","./release/"&$arrayappname[$i]&"/images/b.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/c.png","./release/"&$arrayappname[$i]&"/images/c.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/d.png","./release/"&$arrayappname[$i]&"/images/d.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/e.png","./release/"&$arrayappname[$i]&"/images/e.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/f.png","./release/"&$arrayappname[$i]&"/images/f.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/g.png","./release/"&$arrayappname[$i]&"/images/g.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/h.png","./release/"&$arrayappname[$i]&"/images/h.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/i.png","./release/"&$arrayappname[$i]&"/images/i.png",1 )
FileCopy ( "./base/card/"&$arrayrepo[$i]&"/j.png","./release/"&$arrayappname[$i]&"/images/j.png",1 )
FileCopy ( "./base/mainfest/"&$arrayrepo[$i]&"/manifest.json","./release/"&$arrayappname[$i]&"/manifest.json",1 )


EndIf;
Next
MsgBox(0, "", "准备复制") 
;Exit;


;;;;;;;;复制文件夹
For $i= 1 To UBound($arrayappname) -1
	;MsgBox(0,"",$arrayappname[$i])
					$path="./release/"&$arrayappname[$i]&"/"&"manifest.json";
					$jspath="./release/"&$arrayappname[$i]&"/js/reg.js";     \xxx\js\reg.js 
					$indexhtmlpath="./release/"&$arrayappname[$i]&"/html/index.html";
					$detailhtmlpath="./release/"&$arrayappname[$i]&"/html/detail.html";
					$reghtmlpath="./release/"&$arrayappname[$i]&"/html/reg.html";
					$withdrawhtmlpath="./release/"&$arrayappname[$i]&"/html/withdraw.html";
					
				;打开文件
				;$file = FileOpen($path, 0)
				$jsfile=FileOpen($jspath,0);
				
				$indexhtmlfile=FileOpen($indexhtmlpath,0);
				$detailhtmlfile=FileOpen($detailhtmlpath,0);
				$reghtmlfile=FileOpen($reghtmlpath,0);
				$withdrawhtmlfile=FileOpen($withdrawhtmlpath,0);
				
				$Lines="";
				$jsLines="";
				$indexhtmlLines="";
				$detailhtmLines="";
				$reghtmlLines="";
				$withdrawhtmlLines="";
				;;manifest.json修改
				While 1
					
								;$line = FileReadLine($file);
								$jsline=FileReadLine($jsfile);
								
								$indexhtmlline= FileReadLine($indexhtmlfile);;
								$detailhtmline= FileReadLine($detailhtmlfile);;
								$reghtmlline= FileReadLine($reghtmlfile);
								$withdrawhtmlline= FileReadLine($withdrawhtmlfile);;
								
								 If @error = -1 Then ExitLoop
									;	$line = StringReplace($line, "好鱼多", $arrayappname[$i])
						;				MsgBox(0,"",$arraypackagename[$i])
									;	$line = StringReplace($line, "com.pretty.fish",$arraypackagename[$i] )
										;;替换regjs文件里的id
										$jsline=StringReplace($jsline, "localStorage.appId = '134'","localStorage.appId = '"&$arrayhbuliderid[$i]&"'" )

										;;html文件替换
										$indexhtmlline=StringReplace($indexhtmlline, "repo1/css",$arrayrepo[$i]&"/css")
										$indexhtmlline=StringReplace($indexhtmlline, "repo1/js",$arrayrepo[$i]&"/js")
										
										$detailhtmline=StringReplace($detailhtmline, "repo1/css",$arrayrepo[$i]&"/css")
										$detailhtmline=StringReplace($detailhtmline, "repo1/js",$arrayrepo[$i]&"/js")
										
										$reghtmlline=StringReplace($reghtmlline, "repo1/css",$arrayrepo[$i]&"/css")
										$reghtmlline=StringReplace($reghtmlline, "repo1/js",$arrayrepo[$i]&"/js")
										
										$withdrawhtmlline=StringReplace($withdrawhtmlline, "repo1/css",$arrayrepo[$i]&"/css")
										$withdrawhtmlline=StringReplace($withdrawhtmlline, "repo1/js",$arrayrepo[$i]&"/js")

								;If $line <> "" Then
									;$Lines &= $line & @CRLF;
								;EndIf
									If $jsline <> "" Then
									$jsLines &= $jsline & @CRLF;
								EndIf
								If $indexhtmlline <> "" Then
									$indexhtmlLines &= $indexhtmlline & @CRLF;
								EndIf
								If $detailhtmline <> "" Then
									$detailhtmLines&= $detailhtmline & @CRLF;
								EndIf
								If $reghtmlline <> "" Then
									$reghtmlLines &= $reghtmlline & @CRLF;
								EndIf
								If $withdrawhtmlline <> "" Then
									$withdrawhtmlLines &= $withdrawhtmlline & @CRLF;
								EndIf
				Wend
			;	FileClose($file);
				FileClose($jsfile);
				FileClose($indexhtmlfile);
				FileClose($detailhtmlfile);
				FileClose($reghtmlfile);
				FileClose($withdrawhtmlfile);

				;重新覆盖文件
			;	$file2 = FileOpen($path, 2)
				$jsfile2 = FileOpen($jspath, 2)
				$indexhtmlfile2=FileOpen($indexhtmlpath, 2)
				$detailhtmlfile2=FileOpen($detailhtmlpath, 2)
				$reghtmlfile2=FileOpen($reghtmlpath, 2)
				$withdrawhtmlfile2=FileOpen($withdrawhtmlpath, 2)
				
			;	FileWrite($file2, $Lines)
				FileWrite($jsfile2, $jsLines)
				FileWrite($indexhtmlfile2,$indexhtmlLines)
				FileWrite($detailhtmlfile2,$detailhtmLines)
				FileWrite($reghtmlfile2,$reghtmlLines)
				FileWrite($withdrawhtmlfile2,$withdrawhtmlLines)
				
				;FileClose($file2)
				FileClose($jsfile2)
				FileClose($indexhtmlfile2)
				FileClose($detailhtmlfile2)
				FileClose($reghtmlfile2)
				FileClose($withdrawhtmlfile2)
;Exit;	
Next;
MsgBox(0, "", "复制完成，修改了js html文件") 





