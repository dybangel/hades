using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;

public partial class api : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        string getstr = HttpContext.Current.Request.Url.Query;

         getstr = getstr.Replace("?", "");
        
        getstr = getstr.Replace("&appid=pPyZWvH3Fa6PXba10aJ009", "");//hbuliderµÄ
        getstr = getstr.Replace("&appid=FWEFASDFSFA","");//ÎÒµÄ
        int start = getstr.LastIndexOf("&");
        int stop = getstr.Length - start;
         string where = getstr.Substring(0,start);
       // Response.Write("<script>console.log('where=" + where + "')</script>");
        string procedure = getstr.Substring(start,stop).Replace("&action=", "").ToString();

        string action = Request["action"];
        string mysql = "";
        //»ñÈ¡ÒÑ¾­Ìí¼ÓµÄÉè±¸ÊýÁ¿
        if("savejson"==action){
             //returnjson("status", "ok");
            string retString= Request["jsonstr"];
             Response.Write(retString);
            // string createText = "Hello and Welcome" ;//+ Environment.NewLine;
            File.WriteAllText(@"C:\wwwroot\api\api\api\haiqu\gapps.json", retString);
     
              Response.End();
        }else if("income_getflag"==action){
            //select and insert income_flag
            mysql="SELECT CAST(CONVERT(timestamp, GETDATE()) AS INT) AS fincome_flag";
            DataTable dt = executesql(mysql);
            string income_flag=dt.Rows[0]["fincome_flag"].ToString();
            mysql="insert into t_incomeflag(fincomeflag)values('"+income_flag+"')";
            //INSERT INTO t_incomeflag
            executesql(mysql);

            //return income_flag
            string jsonString = string.Empty;
            jsonString = JsonConvert.SerializeObject(dt);
            Response.Write(jsonString);

            Response.End();
            }else if("income_upload"==action){
                string thisincome_flag=Request["income_flag"];
                string thissession=Request["session"];
                string thisappname=Request["appname"];
                string thismoney=Request["money"];
                string thiscoin=Request["coin"];

            mysql="INSERT INTO t_incomeanaly(fincomeflag,fsession,fappname,fmoney,fcoin,fanaly_time)VALUES('"+thisincome_flag+"','"+thissession+"','"+thisappname+"','"+thismoney+"','"+thiscoin+"',GETDATE())";
           //Response.Write(mysql);
           executesql(mysql);
            Response.End();
                }else if("getgapps"==action){
                
                //string dststr=" var applist=[{\"appname\":\"近日头条123\",\"appver\":\"2.0.1\"}];";
                //devicetype
                    string devicetype=Request["devicetype"];
                    string sql_where_devicetype="";
                    if("vmos"==devicetype){
                             sql_where_devicetype=" fenable=0 and fmachine='vm'";
                        }else{
                            sql_where_devicetype=" fenable=1 and fmachine='phy'";
                        }
                 mysql = "select fappnum as appnum,fappname as appname , fmachine as machine,CASE fenable WHEN '1' THEN 'true' WHEN '0' THEN 'false' END AS enable from t_appinfo where "+sql_where_devicetype;
                 DataTable dt = executesql(mysql);
                 string jsonString = string.Empty;

                jsonString = JsonConvert.SerializeObject(dt);

                Response.Write(jsonString);
               //dststr= Encoding.GetEncoding("GBK").GetString(dststr);
                //Response.Write(dststr);Response.End();
               // 
                Response.End();
        }else if("showapplist"==action){
            string str = File.ReadAllText(@"D:\api\api\api\haiqu\index.html");
          
            mysql = "select fappnum as appnum,fappname as appname , CASE fenable WHEN '1' THEN 'true' WHEN '0' THEN 'false' END AS enable,'' as state from t_appinfo where fenable=1";
            DataTable dt = executesql(mysql);
            string jsonString = string.Empty;
            jsonString = JsonConvert.SerializeObject(dt);

            str=str.Replace("$htmlstrstr$",jsonString);
            Response.Write(str);

        }else if("showdiffapplist"==action){
            string str = File.ReadAllText(@"D:\api\api\api\haiqu\index.html");
             string dststr= Request["jsonstr"];
            str=str.Replace("$htmlstrstr$",dststr);

           // string dststr= Request["jsonstr"];
         

            Response.Write(str);
        }else if("test_executesql"==action){
             string dststr= Request["sql"];
           //  DataTable dt = executesql(mysql);
            string jsonString = string.Empty;
            jsonString = JsonConvert.SerializeObject(executesql(dststr));
            Response.Write(jsonString);

            }else if("checklicence"==action){
                     string thisfsn = Request["fsn"];
                    string thissession=Request["fsession"];
            //  returnjson("status", mysql);
            //  Response.End();
                     mysql="select fsn,fsession,fupsession_time,DATEDIFF(Hour, fupsession_time, GETDATE()) as fupsession_time_diff ,freg_time from t_licence where fsn='"+thisfsn+"'";
                    DataTable dt= executesql(mysql);
                if(dt.Rows.Count>0){
                     string dbsession=dt.Rows[0]["fsession"].ToString();
                     string dbfreg_time=dt.Rows[0]["freg_time"].ToString();
                    if(dbsession==""){
                    //if fsession is null ,update session return ok
                         mysql="update t_licence set fsession='"+thissession+"',fupsession_time=GETDATE(),freg_time=GETDATE() where fsn='"+thisfsn+"'";
                         executesql(mysql);
                           returnjson("status","ok");
                    }else{
                            
                            
                            //check fsession
                            if(dbsession==thissession){
                                //if dbsession== thissession,return ok
                               returnjson("status","ok");

                            }else{
                               //if dbsession !=thissession
                                string dbfupsession_time=dt.Rows[0]["fupsession_time"].ToString();
                               string dbfupsession_time_diff=dt.Rows[0]["fupsession_time_diff"].ToString();

                               if(dbfupsession_time==""|| int.Parse(dbfupsession_time_diff)>24) {
                               mysql="update t_licence set fsession='"+thissession+"',fupsession_time=GETDATE() where fsn='"+thisfsn+"'";
                               executesql(mysql);//dbsession !=fsession  but uptime>24
                              returnjson("status","ok");

                               }else if( int.Parse(dbfupsession_time_diff)<24){
                            //dbsession !=fsession  but uptime<24 false 您的设备码与云端记录不符,可能由于您当前的激活码在别的机器上使用过
                               returnjson("status","error2");

                                   }
                     

                                 }
                          }
                Response.End();
             }else{
                   returnjson("status", "error1");
                   Response.End();
             }
             returnjson("status", "thisfsn:"+thisfsn+" thissession:"+thissession);
            // string jsonString = string.Empty;

            // jsonString = JsonConvert.SerializeObject(executesql(mysql));
            // Response.Write(jsonString);

            //  returnjson("status", "this is sql");
            Response.End();

        }else if("test_getquery"==action){

        }
        Response.End();
       
        if ("getcount" == action)
        {
            mysql = "SELECT COUNT(*) AS wcount FROM Fooke_Udid";
        }
        //Í¨¹ýUDIDÌí¼Ó°×Ãûµ¥
        else if ("adddata_fromudid" == action)
        {
            string datas = Request["datas"];

            //ÅÐ¶ÏÊÇ·ñÓÐÖØ¸´¼ÇÂ¼£¬Èç¹ûÓÐÔòÍË³ö
            mysql = "SELECT COUNT(udid) AS numcount FROM Fooke_Udid WHERE (udid = '" + datas + "')";
            DataTable dt = executesql(mysql);
            if (0 < Convert.ToInt32(dt.Rows[0]["numcount"]))
            {
                returnjson("status", "UDIDÒÑ¾­´æÔÚ");
                Response.End();
            }


            mysql = "INSERT INTO Fooke_Udid(udid)VALUES('" + datas + "')";
            executesql(mysql);
            returnjson("status", "ok");
            Response.End();
        }
        //Í¨¹ýuseridÌí¼Ó°×Ãûµ¥
        else if ("adddata_fromuserid" == action)
        {
            string datas = Request["datas"];
            //ÅÐ¶ÏuseridÊÇ·ñ´æÔÚ
            mysql = "select count(udid) as numcount from Fooke_User where (userid='" + datas + "')";
            DataTable dt = executesql(mysql);
            if (0 == Convert.ToInt32(dt.Rows[0]["numcount"]))
            {
                returnjson("status", "ÑûÇëÂë´æÔÚ");
                Response.End();
            }

            //ÅÐ¶Ïuserid¶ÔÓ¦µÄudidÊÇ·ñÓÐÖØ¸´

            mysql = "INSERT INTO Fooke_Udid (udid) SELECT DeviceIdentifier FROM Fooke_User WHERE(UserID = '" + datas + "')";
            executesql(mysql);
            returnjson("status", "ok");
            Response.End();
        }
        //¸ü»»Éè±¸
        else if ("devicechange" == action)
        {
            string olduserid = Request["olduserid"];
            string newudid = Request["newudid"];
            mysql = "select userid,strTokey from fooke_user where userid='" + olduserid + "'";
            DataTable dt = new DataTable();
            dt = executesql(mysql);
            string oldstrtokey = dt.Rows[0]["strtokey"].ToString();
            string jsonString = string.Empty;
            dt.Clear();

            mysql = "select userid,strTokey from fooke_user where DeviceIdentifier='" + newudid + "'";

            dt.Clear();
            dt = executesql(mysql);
            if (0 == dt.Rows.Count)
            {
                returnjson("status", "¸ÃUDID²»´æÔÚ£¬1¡¢ÇëÈ·ÈÏÐÂÉè±¸ÒÑ¾­°²×°º£ºç 2¡¢È·ÈÏÔÚÐÂÉè±¸ÉÏÁªÍø´ò¿ª¹ýº£ºç 3¡¢È·ÈÏUDIDÕ³ÌùÎÞÎó");
                Response.End();
            }


            string newuserid = dt.Rows[0]["userid"].ToString();
            string newstrtokey = dt.Rows[0]["strtokey"].ToString();

            mysql = "update fooke_user set strtokey='" + newstrtokey + "' where userid='" + olduserid + "'";
            executesql(mysql);


            mysql = "update fooke_user set strtokey='" + oldstrtokey + "' where userid='" + newuserid + "'";
            executesql(mysql);
            returnjson("status", "ok");
            dt.Dispose();
            Response.End();
        }
        //×Ô¶¨ÒåsqlÓï¾ä
        else if (action.IndexOf("sql_") >= 0)
        {

            mysql = Request["sql"];
            //  returnjson("status", mysql);
            //  Response.End();
            // returnjson("status", mysql);
            string jsonString = string.Empty;

            jsonString = JsonConvert.SerializeObject(executesql(mysql));
            Response.Write(jsonString);

            //  returnjson("status", "this is sql");
            Response.End();
            // executesql();
        }
        else if ("appupdate" == action)
        {
            Hashtable hash1 = new Hashtable();
            hash1.Add("status", "1.4.9");
            hash1.Add("mode", "apk");
            List<Hashtable> L_hash = new List<Hashtable>();
            L_hash.Add(hash1);
            Response.Write(JsonConvert.SerializeObject(L_hash));
            //returnjson("status", "1.1.6");
            Response.End();
        } else if ("haiqu_appupdate" == action)
        {
            Hashtable hash1 = new Hashtable();
            hash1.Add("status", "1.0.7");
            hash1.Add("mode", "wgt");
            List<Hashtable> L_hash = new List<Hashtable>();
            L_hash.Add(hash1);
            Response.Write(JsonConvert.SerializeObject(L_hash));
            //returnjson("status", "1.1.6");
            Response.End();
        }
        else if ("ticheng" == action)
        {
            string amount = Request["amount"];
            string userid = Request["userid"];
            string username = Request["username"];
            var sql = "exec [Stored_FindUserParent] @NodeID=N'" + userid + "'";
            DataTable dt = new DataTable();
            dt = executesql(sql);
            string tuserid = "";
            string tparentid = "";
            string tnickname = "";
            string tNodeLevel = "";
            string tempstr = "";
            float tcpercent = 0.00f;
            //returnjson("status", dt.Rows.Count.ToString());
            //    Response.End();
            for (int i = 1; i <= dt.Rows.Count - 1; i++)
            {
                tuserid = dt.Rows[i]["userid"].ToString();
                tparentid = dt.Rows[i]["parentid"].ToString();
                tnickname = dt.Rows[i]["nickname"].ToString();
                tNodeLevel = dt.Rows[i]["NodeLevel"].ToString();
                //µÚÒ»´ú7%
                if (1 == i)
                {
                    tcpercent = 0.07f;
                }
                //µÚ¶þ´ú6%
                else if (2 == i)
                {
                    tcpercent = 0.06f;
                }
                //µÚÈý´ú5%
                else if (3 == i)
                {
                    tcpercent = 0.05f;
                }
                //Èý¼¶·ÖÏúÑéÖ¤
                else if (i > 3) {
                    break;
                }
                float ticheng = (float)(Convert.ToDouble(amount) * tcpercent);
                ticheng = (float)(Math.Round(Convert.ToDecimal(ticheng), 2, MidpointRounding.AwayFromZero));
                // tempstr = tempstr + "userid:" + tuserid + " parentid:" + tparentid + " nickname:" + tnickname + " NodeLevel:" + tNodeLevel;
                sql = "exec [Stored_SaveAmount] @strKey=N'" + getRandrom(14) + GetTimeStamp() + "',@UserID=N'" + tuserid + "',@Nickname=N'" + tnickname + "',@FormID=N'" + userid + "',@Formname=N'" + username + "',@Affairs=N'1',@Mode=N'ÈÎÎñÌá³É',@Amount=N'" + ticheng.ToString() + "',@Remark=N'ÏÂ¼¶ºÃÓÑÍê³ÉÈÎÎñ»ñµÃ½±ÀøÌá³É" + ticheng.ToString() + "Ôª'";
                executesql(sql);
            }

            returnjson("status", "ok");
            Response.End();

        }
        else if ("jicha" == action)
        {
            
            string amount = Request["amount"];
            string userid = Request["userid"];
            string username = Request["username"];
            var sql = "exec [Stored_FindUserParent] @NodeID=N'" + userid + "'";

            DataTable dt = new DataTable();
            //µÃµ½Ê¦¸µ½á¹û¼¯
            dt = executesql(sql);
          
              dt.Columns.Add("umbrella", typeof(string));
              dt.Columns.Add("jichaticheng", typeof(string));
            dt.Columns.Add("jichatichengamount", typeof(string));
            dt.Columns.Add("GC", typeof(string));
            //Ñ­»·¼ÆËã³öÃ¿Ò»¸öÊ¦¸µÉ¡ÏÂ³ÉÔ±ÊýÁ¿
            DataTable dtdt = new DataTable();
            //Ñ­»·Ç°ÉùÃ÷Ìá³ÉÄÜÁ¿²ÛÎª4%£¬¼¶±ðÎª0.00£¬ÉÏÒ»¸ö¼¶±ðÎª0.00
            float GC = 0.15f;
            float GL = 0.00f;
            float GUP = 0.00f;
            for (int i = 1; i <= dt.Rows.Count-1; i++) {
                //¼¶²î3¼¶·ÖÏúÑéÖ¤
              /*  if (i > 3) {
                    break;
                }*/
                string dtuserid = dt.Rows[i]["userid"].ToString();
               /* string dtsql = " WITH CTE AS (";
                dtsql += " SELECT UserID, ParentID FROM Fooke_User WHERE(UserID = "+dtuserid+")";
                dtsql += " UNION ALL";
                dtsql += " SELECT a.UserID, a.ParentID FROM Fooke_User AS a";
                dtsql += " INNER JOIN CTE AS b ON b.userID = a.ParentID)";

                dtsql += " SELECT count(*)as umbrellacount FROM Fooke_User AS a";
                dtsql += " INNER JOIN CTE AS t ON a.UserID = t.UserID";*/
                //ÕâÀïÊ¹ÓÃ´¥·¢Æ÷±ífooke_usertree ¿ìËÙ»ñÈ¡
                string dtsql = "select UmbrellaDown as umbrellacount from fooke_usertree where userid='" + dtuserid+"'";

                //Ê¦¸µÉ¡ÏÂÐÅÏ¢×¨ÓÃdtdt
               dtdt=executesql(dtsql);
                dt.Rows[i]["umbrella"] = dtdt.Rows[0]["umbrellacount"];
                //¸ù¾ÝÕâ¸öÓÃ»§É¡ÏÂµÄ»áÔ±Êý¼ÆËãËüÓ¦¸ÃµÃµ½µÄÌá³É±ÈÀý
                float levelpercent=getlevelpercent(Convert.ToInt32(dt.Rows[i]["umbrella"]));
                //Êµ¼ÊÌá³ÉÎªÌá³É±ÈÀý-ÉÏÒ»¸öÕæÊµ·¢ÉúµÄÌá³É
                float sjlevelpercent =(float) (Convert.ToDecimal(levelpercent) - Convert.ToDecimal(GUP));
                decimal cha = Convert.ToDecimal(GC) - Convert.ToDecimal(sjlevelpercent);
                // decimal level = Convert.ToDecimal() - Convert.ToDecimal();
                //Èç¹ûGC-levelpercent >=0,²¢ÇÒlevelpercent¡µGLËµÃ÷»¹¿ÉÒÔÌá³É
                if (cha >= 0 && Convert.ToDecimal(levelpercent) > Convert.ToDecimal(GL))
                {
                    //¼ÆËãµ½µ×Ó¦¸Ã¸ø¶àÉÙÌá³É£¬½ð¶î³ËÒÔ°Ù·Ö±È
                    decimal jichaticheng = Convert.ToDecimal(amount) * Convert.ToDecimal(sjlevelpercent);
                    //ËÄÉáÎåÈë
                     jichaticheng=(Math.Round(Convert.ToDecimal(jichaticheng), 2, MidpointRounding.AwayFromZero));
                    //¼ÇÂ¼Êµ¼Ê°Ù·Ö±È
                    dt.Rows[i]["jichaticheng"] = sjlevelpercent.ToString();
                    //¼ÇÂ¼Êµ¼ÊÌá³É
                    dt.Rows[i]["jichatichengamount"] = jichaticheng;
                    //¸üÐÂGC ¸üÐÂGL ¸üÐÂGUP
                    GC = (float)(cha);
                    dt.Rows[i]["GC"] = GC;
                    GL = levelpercent;
                    GUP = GUP+sjlevelpercent;
                   
                }else if(cha < 0 && Convert.ToDecimal(levelpercent) > Convert.ToDecimal(GL)){
                     decimal finishcha =Convert.ToDecimal(sjlevelpercent)- Convert.ToDecimal(GC);
                    decimal jichaticheng = Convert.ToDecimal(amount) * Convert.ToDecimal(finishcha);
                    jichaticheng=(Math.Round(Convert.ToDecimal(jichaticheng), 2, MidpointRounding.AwayFromZero));
                   // dt.Rows[i]["jichaticheng"] = finishcha.ToString();
                    dt.Rows[i]["jichatichengamount"] = jichaticheng;
                    dt.Rows[i]["jichaticheng"] =GC.ToString();
                    GC = 0.00f;
                    dt.Rows[i]["GC"] = GC;
                    GL = levelpercent;
                }
                else {
                    dt.Rows[i]["jichaticheng"] ="0.00";
                    // decimal finishcha = Convert.ToDecimal(sjlevelpercent)-Convert.ToDecimal(GC) ;
                    // decimal jichaticheng = Convert.ToDecimal(amount) * Convert.ToDecimal(finishcha);
                    //dt.Rows[i]["jichaticheng"] =finishcha.ToString();
                    //dt.Rows[i]["jichatichengamount"] = jichaticheng;
                  //  break;
                }
        
                dtdt.Clear();
            }
            //Ñ­»·¿ªÊ¼Éú³ÉÌá³É
            for (int i=1;i<=dt.Rows.Count-1;i++) {
                string thisuserid = dt.Rows[i]["userid"].ToString();
                string thisnickname= dt.Rows[i]["nickname"].ToString();
                string thisamount = dt.Rows[i]["jichatichengamount"].ToString();
                if ("null"!=thisamount&&"0.00"!=thisamount) {
                    string thissql = "exec[Stored_SaveAmount] @strKey = N'" + getRandrom(14) + GetTimeStamp() + "',@UserID = N'" + thisuserid + "',";
                    thissql+=" @Nickname = N'"+ thisnickname + "',@FormID = N'"+ userid + "',@Formname = N'"+ username + "',@Affairs = N'1',@Mode = N'¼¶²îÌá³É',@Amount = N'"+ thisamount + "',@Remark = N'ÏÂ¼¶ºÃÓÑÍê³ÉÈÎÎñ»ñµÃ¼¶²î½±ÀøÌá³É"+ thisamount + "Ôª'";
                    executesql(thissql);
                }
                //dt.Rows[i]["jichatichengamount"]
            }

            /* [{"userid":30010792,"parentid":100088,"nickname":"HH866333029727607","NodeLevel":1,"umbrella":null,"jichaticheng":null,"jichatichengamount":null},
            //{ "userid":100088,"parentid":0,"nickname":"ÐÂÊÖ100088","NodeLevel":2,"umbrella":"62","jichaticheng":"0.00","jichatichengamount":null}]
            */
            /*
             *exec[Stored_FindAmount] @UserID = N'100088',@Mode = N'¼¶²îÌá³É',@strKey = N'9C6DB5EEA6633C4E885E37C5'
        ±£´æÌá³É¸øÉÏ¼¶¼¶²î
  exec[Stored_SaveAmount] @strKey = N'9C6DB5EEA6633C4E885E37C5',@UserID = N'100088',@Nickname = N'ÐÂÊÖ100088',@FormID = N'30038944',@Formname = N'HH89107631',@Affairs = N'1',@Mode = N'¼¶²îÌá³É',@Amount = N'0.02',@Remark = N'ÏÂ¼¶ºÃÓÑÍê³ÉÈÎÎñ»ñµÃ¼¶²î½±ÀøÌá³É0.02Ôª'
  */ 
           /* string jsonString = string.Empty;
            jsonString = JsonConvert.SerializeObject(dt);
            Response.Write(jsonString);
            Response.End();*/
           returnjson("status", "ok");
            Response.End();

           //
        }
        else if ("checkreg" == action) {
            string sn = Request["sn"];
            string uuid = Request["uuid"];
           // returnjson("status", "¼¤»îÂëÒì³£(000)");
            //Response.End();
            //¿´sn´æÔÚ·ñ
        string sql = "SELECT TOP (1) fid, fsn, fuuid FROM Fooke_licence WHERE(fsn = '"+sn+"')";
            DataTable dt = new DataTable();
            dt = executesql(sql);
            if (dt.Rows.Count == 0)
            {
                returnjson("status", "¼¤»îÂëÒì³£(000)");
                Response.End();
            } 
            else {
                //¿´¼¤»îÂëÊÇ·ñ±»Ê¹ÓÃ¹ý
                if (dt.Rows[0]["fuuid"] == "NULL" || dt.Rows[0]["fuuid"] == "")
                {
                    //¼¤»îÂëÃ»ÓÐ±»Ê¹ÓÃ¹ý
                    sql = "update Fooke_licence set fuuid=" + uuid + " WHERE(fsn = '" + sn + "')";
                    executesql(sql);
                    returnjson("status", "¼¤»î³É¹¦");
                    Response.End();
                }
                else {
                    //¼¤»îÂë±»Ê¹ÓÃ¹ý
                    if (dt.Rows[0]["fuuid"].ToString() == uuid)
                    {
                        //ËµÃ÷ÊÇ±¾ÈË
                        returnjson("status", "ÐòÁÐºÅÓëUUIDÆ¥Åä");
                        Response.End();
                    }
                    else {
                        //ËµÃ÷²»ÊÇ±¾ÈË
                        returnjson("status", "¸Ã¼¤»îÂëÒÑ¾­±»Ê¹ÓÃ¹ý,Çë¹ºÂòÐÂµÄ¼¤»îÂë\n ÄãµÄ»úÆ÷ÂëÊÇ£º" + uuid+"\n´íÎó±àÂë:"+dt.Rows[0]["fuuid"].ToString());
                        Response.End();
                    }

                }

            }   
        }
        else //Ö´ÐÐ´æ´¢¹ý³Ì
        {
            mysql = "exec [" + procedure + "] " + HttpUtility.UrlDecode(where);

        }
        SqlConnection MyConnection = new SqlConnection("data source=localhost;initial catalog=haiqu;password=hh123456;persist s" +
"ecurity info=True;user id=sa;workstation id=BAIHAO;packet size=4096");

        try
        {
            SqlCommand MyDataSetCommand = new SqlCommand(mysql, MyConnection);

            DataSet ds = new DataSet();
            SqlDataAdapter ada = new SqlDataAdapter(MyDataSetCommand);
            DataTable dt = new DataTable();
            ada.Fill(dt);
            string jsonString = string.Empty;
            if (0==dt.Rows.Count) {
               
                returnjson("status","NULL");
                
            }
            else {
             
                jsonString = JsonConvert.SerializeObject(dt);
                Response.Write(jsonString);
            }
            
            

           
            MyConnection.Close();
            dt.Dispose();
            ds.Dispose();
            ada.Dispose();
        }
        catch
        {
            returnjson("status", "error111");
        }
        finally {
        
        }

    }
    //Ëæ»úÊý
 protected string getRandrom(int num)
    {

        string chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";


        Random randrom = new Random((int)DateTime.Now.Ticks);

        string str = "";
        for (int i = 0; i < num; i++)
        {
            str += chars[randrom.Next(chars.Length)];
        }

        return str;

}


    public static string GetTimeStamp()
    {
        TimeSpan ts = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0);
        return Convert.ToInt64(ts.TotalSeconds).ToString();
    }

    //ÏòÇ°Ì¨´òÓ¡json
    protected void returnjson(string tag,string str) {
        Hashtable hash1 = new Hashtable();
        hash1.Add(tag, str);
        List<Hashtable> L_hash = new List<Hashtable>();
        L_hash.Add(hash1);
        Response.Write(JsonConvert.SerializeObject(L_hash));
    }
    //¸ù¾ÝÉ¡ÏÂÈËÊýÅÐ¶Ï¼¶±ð
    protected float getlevelpercent(int umbrellacount) {
        float levelpercent = 0f;
        /* if (umbrellacount >= 200 && umbrellacount < 500)
         {
             return 0.03f;//Í­
         }
         else if (umbrellacount >= 500 && umbrellacount < 1000) {
             return 0.06f;//Òø
         }
         else if (umbrellacount >= 1000 && umbrellacount < 3000)
         {
             return 0.09f;//½ð
         }
         else if (umbrellacount >= 3000 && umbrellacount < 5000)
         {
             return 0.12f;//×êÊ¯
         }
         else if (umbrellacount >= 5000 )
         {
             return 0.15f;//×êÊ¯
         }*/
        if (umbrellacount >= 200 && umbrellacount < 500)
        {
            return 0.03f;//??
        }
        else if (umbrellacount >= 500 && umbrellacount < 1000)
        {
            return 0.06f;//??
        }
        else if (umbrellacount >= 1000 && umbrellacount < 3000)
        {
            return 0.09f;//??
        }
        else if (umbrellacount >= 3000 && umbrellacount < 5000)
        {
            return 0.12f;//¡Á¨º??
        }
        else if (umbrellacount >= 5000)
        {
            return 0.15f;//¡Á¨º??
        }
        return levelpercent;
    }
    //Ö´ÐÐsql·µ»Ødt
    protected DataTable executesql(string sql,string tag="") {

        SqlConnection MyConnectiondc = new SqlConnection("data source=localhost;initial catalog=HaiQu;password=hh123456;persist s" +
"ecurity info=True;user id=sa;workstation id=BAIHAO;packet size=4096");
        DataTable dt = new DataTable();
        DataSet ds = new DataSet();
        try
        {
            SqlCommand MyDataSetCommand = new SqlCommand(sql, MyConnectiondc);
           
            SqlDataAdapter ada = new SqlDataAdapter(MyDataSetCommand);
            ada.Fill(dt);
            if ("andwrite" == tag)
            {
                string jsonString = string.Empty;
                jsonString = JsonConvert.SerializeObject(dt);
                Response.Write(jsonString);
            }
            ada.Dispose();
            return dt;
            
        }
        catch
        {
            returnjson("status", "error");
            return dt;

        }
        finally {
            MyConnectiondc.Close();
            dt.Dispose();
            ds.Dispose();
            

        }


    }




}

//  Response.Write("<script>console.log('kv=" + getstr + "')</script>");
// Response.Write("<script>console.log('kvL=" + getstr.Length.ToString() + "')</script>");
// Response.Write("<script>console.log('lastindex=" + Convert.ToString(getstr.LastIndexOf("&")) + "')</script>");

// Response.Write("<script>console.log('procedure=" + procedure + "')</script>");
//  Convert.ToString(getstr.LastIndexOf("&"));


//   Response.End();

//  getstr = getstr.Replace("&action=procedure","");
// string[] split = getstr.Split('&');//?action=d&user=dyb
// foreach (string s in split)
//  {
//   Response.Write("<script>console.log('kv=" + getstr + "')</script>");
// Console.Write(a + ",");
//    }

// Response.Write("<script>console.log('getstr="+getstr+"')</script>");
// Response.End();










//   Response.Write("<script>console.log('action is:"+action+"')</script>");

/* DataTable dt = SqlHelper.ExecuteDataTable("select * from T_User where id=@id", new SqlParameter("id", id));



 Response.End();*/
