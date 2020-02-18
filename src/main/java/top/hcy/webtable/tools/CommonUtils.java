package top.hcy.webtable.tools;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;


public class CommonUtils {

    //返回短链 因为不是分布式项目 并发数小
    //根据时间戳获得36进制字符串
    public static String  getShortStr(int radix){
        long l = System.currentTimeMillis();
        String s = Long.toString(l, radix);
        return s;
    }



    //生成锻炼分享的账户
    public static JSONObject generateShareAccount(){
        JSONObject data = new JSONObject();
        Random random = new Random();
        data.put("username",getShortStr(random.nextInt(5)+20));
        data.put("passwd",getShortStr(random.nextInt(4)+21));
        return data;
    }


    public static ArrayList<HashMap<String,Object>> convertResultSetToList(ResultSet rs){
        ArrayList<HashMap<String,Object>> list = new ArrayList<>();
        HashMap<String,Object> rowData = null;
        try {
            ResultSetMetaData md = rs.getMetaData();
            int columnCount = md.getColumnCount();   //获得列数
            while (rs.next()) {
                rowData = new HashMap<String,Object>();
                for (int i = 1; i <= columnCount; i++) {
                    rowData.put(md.getColumnLabel(i), rs.getObject(i));
                }
                list.add(rowData);
            }
        }catch (Exception e){
            list  = null;
        }
        return list;
    }
}