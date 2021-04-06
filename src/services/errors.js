// 旨在封装error code 后期可以翻译
export const ERROR_CODE ={
    SUCCESS: 10000,
    BAD_REQUEST: 10400,
    TOKEN_INVALID: 10401,
    FORBIDDEN_ERROR: 10403,
    NOT_FOUND_ERROR: 10404,
    UNKNOW_ERROR: -1,

    LOGIN_ERROR: 11001,
    REG_USERNAME_ERROR: 11002,
    REG_EMAIL_ERROR: 11003,
    REG_FIELD_ERROR: 11004,
    CHANGE_PASS_ERROR: 11005,
    REFRESH_ERROR: 11006,
    USER_NOT_APPROVED: 11007,
    REG_SERVICE_ERROR: 11008,

    //post-process: rules
    RULES_CORRECT_ERROR: 10001,
    RULES_UPDATE_ERROR: 10002,
    RULES_FORBIDDEN: 10003,
    RULES_NOT_FOUND: 10004,

    // # post-process: wfst
    WFST_CORRECT_ERROR: 10005,
    PUNC_PREDICT_ERROR: 10006,
    TEXT_SPLIT_ERROR: 10007,

    // # hot-word
    HOTWORD_UPDATE_ERROR: 10008,
    HOTWORD_FORBIDDEN: 10009,
    HOTWORD_NOT_FOUND: 10010,
    HOTWORD_UPDATE_TASK_404: 10011,
    HOTWORD_FIX_TASK_404: 10012,

    // # auto LM
    LM_FILE_NOT_FOUND: 10013,
    LM_FORBIDDEN: 10014,
    LM_UPLOAD_ERROR: 10015,
    LM_DUPLICATE_FILE: 10016,
    LM_ENV_NOT_FOUND: 10017,
    LM_ENV_UPDATE_ERROR: 10018,
    LM_ENV_DELETE_ERROR: 10019,
    LM_ENV_EXIST: 10020,
    LM_TASK_NOT_FOUND: 10021,
    LM_BAD_REQUEST: 10022,
    LM_TASK_ERROR: 10023,

    // # regrex
    REGREX_CORRECT_ERROR: 10024,

    // # backend server
    BACKEND_ERROR: 12000,
}

export const ERROR_MESSAGE = {
    [ERROR_CODE.SUCCESS]: '成功',
    [ERROR_CODE.NOT_FOUND_ERROR]: '资源未找到',
    [ERROR_CODE.FORBIDDEN_ERROR]: '没有权限',
    [ERROR_CODE.BAD_REQUEST]: '请求参数错误',
    [ERROR_CODE.TOKEN_INVALID]: 'token失效',
    [ERROR_CODE.UNKNOW_ERROR]: '未知错误',

    [ERROR_CODE.LOGIN_ERROR]: '用户名或密码错误',
    [ERROR_CODE.REG_USERNAME_ERROR]: '用户名已存在',
    [ERROR_CODE.REG_EMAIL_ERROR]: '邮箱已存在',
    [ERROR_CODE.REG_FIELD_ERROR]: '注册信息错误',
    [ERROR_CODE.CHANGE_PASS_ERROR]: '密码更改错误',
    [ERROR_CODE.REFRESH_ERROR]: 'token刷新失败',
    [ERROR_CODE.USER_NOT_APPROVED]: '用户未被批准，请联系管理员。',
    [ERROR_CODE.REG_SERVICE_ERROR]: '注册服务错误，请联系管理员。',

    //post-process: rules
    [ERROR_CODE.RULES_CORRECT_ERROR]: '规则纠错服务错误',
    [ERROR_CODE.RULES_UPDATE_ERROR]: '更新用户项目列表失败',
    [ERROR_CODE.RULES_FORBIDDEN]: '你没有该项目权限',
    [ERROR_CODE.RULES_NOT_FOUND]: '用户规则表未找到',

    // # post-process: wfst
    [ERROR_CODE.WFST_CORRECT_ERROR]: '智能纠错服务错误',
    [ERROR_CODE.PUNC_PREDICT_ERROR]: '标点预测服务错误',
    [ERROR_CODE.TEXT_SPLIT_ERROR]: '文本分割服务错误',

    // # hot-word
    [ERROR_CODE.HOTWORD_UPDATE_ERROR]: 'hot word project update error',
    [ERROR_CODE.HOTWORD_FORBIDDEN]: 'you have no permission to access this hot-word project',
    [ERROR_CODE.HOTWORD_NOT_FOUND]: 'user hot-word project not found',
    [ERROR_CODE.HOTWORD_UPDATE_TASK_404]: 'hotword update tasks not found',
    [ERROR_CODE.HOTWORD_FIX_TASK_404]: 'hotword fix tasks not found',

    // # auto LM
    [ERROR_CODE.LM_FILE_NOT_FOUND]: 'LM dependencies(model, train set or test set) not found',
    [ERROR_CODE.LM_FORBIDDEN]: 'you have no permission to access the LM env',
    [ERROR_CODE.LM_UPLOAD_ERROR]: 'LM upload file failed, please retry',
    [ERROR_CODE.LM_DUPLICATE_FILE]: 'already exist the same file in this env, you have to change file name or delete the old file',
    [ERROR_CODE.LM_ENV_NOT_FOUND]: 'LM env not found',
    [ERROR_CODE.LM_ENV_UPDATE_ERROR]: 'LM env update error',
    [ERROR_CODE.LM_ENV_DELETE_ERROR]: 'LM env delete error, maybe is under creating!',
    [ERROR_CODE.LM_ENV_EXIST]: '环境名已存在',
    [ERROR_CODE.LM_TASK_NOT_FOUND]: 'LM task not found',
    [ERROR_CODE.LM_BAD_REQUEST]: 'LM request params error',
    [ERROR_CODE.LM_TASK_ERROR]: 'LM task execute error',

    // # regrex
    [ERROR_CODE.REGREX_CORRECT_ERROR]: 'regrex correct error',

    // # backend server
    [ERROR_CODE.BACKEND_ERROR]: '服务器错误，请联系管理员',
}
