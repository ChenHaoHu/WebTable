package top.hcy.webtable.common;

public enum RespCode {
    SUCCESS(1000, "请求成功"),
    ERROR(1001,"请求失败"),
    WARN(1002, "请求错误"),
    REQUEST_URI_ERROR(1003, "URI错误"),
    REQUEST_METHOD_ERROR(1004, "请求方法错误"),
    REQUEST_PARAM_WARN(1005, "请求参数不合法");


    private int code;
    private String msg;

    RespCode(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }
    public String getMsg() {
        return msg;
    }
}