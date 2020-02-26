package top.hcy.webtable.db.mysql;

import com.alibaba.druid.pool.DruidDataSourceFactory;
import lombok.extern.slf4j.Slf4j;
import top.hcy.webtable.common.constant.WGlobal;
import top.hcy.webtable.db.DBUtils;
import top.hcy.webtable.tools.CommonUtils;

import javax.sql.DataSource;
import java.io.InputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Properties;


@Slf4j
public class MySqlDbUtils implements DBUtils {

    private static Properties p;
    private static DataSource dataSource = WGlobal.dataSource;

    public static Connection getConnection() {
        if (dataSource == null){
            log.error("datasource can not be null. please execute setDataSource");
        }else{
            try {
                return dataSource.getConnection();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static ArrayList<HashMap<String,Object>> find(String sql,String... values) {
        ArrayList<HashMap<String,Object>> list = new ArrayList<>();
        Connection connection = null;
        try{
            int size = values.length;
            connection  = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < size; i++) {
                preparedStatement.setString(i+1,values[i]);
            }
            ResultSet rs = preparedStatement.executeQuery();

            list = CommonUtils.convertResultSetToList(rs);
            connection.close();
        }catch (Exception e){
             e.printStackTrace();
            log.error(sql+"  "+ values+ "  "+ e.getMessage());
        }finally {
            if(connection!=null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return list;
    }

    public static int insert(String sql,ArrayList<ArrayList<String>> values) {
        int execute = 0;
        Connection connection = null;
        try{
            connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            int size = values.size();
            for (int i = 0; i < size; i++) {
                ArrayList<String> value = values.get(i);
                int valueSize = value.size();
                for (int j = 0; j < valueSize; j++) {
                    preparedStatement.setString(i*valueSize+j+1,value.get(j));
                }
            }
            execute = preparedStatement.executeUpdate();
        }catch (Exception e){
            //e.printStackTrace();
            log.error(sql+"  "+ values+ "  "+ e.getMessage());
        }finally {
            if(connection!=null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return execute;
    }

    public static int update(String sql,ArrayList<String> values,String... conditionValues) {
        int execute = 0;
        Connection connection = null;
        try{
            connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            int size = values.size();
            for (int i = 0; i < size; i++) {
                preparedStatement.setString(i+1,values.get(i));
            }
            int len = conditionValues.length;
            for (int i = 0; i < len; i++) {
                preparedStatement.setString(size+i+1,conditionValues[i]);
            }
            execute = preparedStatement.executeUpdate();
        }catch (Exception e){
            //e.printStackTrace();
            log.error(sql+"  "+ values+ "  "+ e.getMessage());
        }finally {
            if(connection!=null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return execute;
    }

    public static int delete(String sql,String... values) {
        int execute = 0;
        Connection connection = null;
        try{
            connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            int size = values.length;
            for (int i = 0; i < size; i++) {
                preparedStatement.setString(i+1,values[i]);
            }
            execute = preparedStatement.executeUpdate();
        }catch (Exception e){
            //e.printStackTrace();
            log.error(sql+"  "+ values+ "  "+ e.getMessage());
        }finally {
            if(connection!=null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return execute;
    }

    public static ArrayList<String> getPrimayKey(String table) {
        ArrayList<String> list = new ArrayList<>();
        Connection connection = null;
        try{
            connection = getConnection();
            DatabaseMetaData d = connection.getMetaData();
            ResultSet rs = d.getPrimaryKeys(connection.getCatalog(), null, table);
            ArrayList<HashMap<String, Object>> h = CommonUtils.convertResultSetToList(rs);
            int size = h.size();
            for (int i = 0; i < size; i++) {
                list.add(h.get(i).get("COLUMN_NAME").toString());
            }

        }catch (Exception e){
            //e.printStackTrace();
            log.error(table+ "  "+ e.getMessage());
        }finally {
            if(connection!=null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return list;
    }
}