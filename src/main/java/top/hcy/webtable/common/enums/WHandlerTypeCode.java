package top.hcy.webtable.common.enums;

/**
 * @ProjectName: webtable
 * @Package: top.hcy.webtable.common
 * @ClassName: HandlerTypeCode
 * @Author: hcy
 * @Description: web table handler type
 * @Date: 2020/1/14 19:42
 * @Version: 1.0
 */
public enum WHandlerTypeCode {

    GTABLE(0,"获取表详情"),
    GFiled(1,"获取表详情");

    private int type;
    private String msg;

    WHandlerTypeCode(int code, String msg) {
        this.msg = msg;
    }

    public int getCode() {
        return type;
    }
    public String getMsg() {
        return msg;
    }

}