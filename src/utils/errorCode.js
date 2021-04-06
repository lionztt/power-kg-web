// 旨在封装error code 后期可以翻译
const errorCodes = {
    10000 :'success',

    11001 : '用户名或密码错误',
    11002 : '用户名已存在',
    11003 : '邮箱已存在',
    11004 : '注册信息错误',
    11005 : '密码更改错误',
    11006 : 'token刷新失败',
    11007 : '用户未被批准，请联系管理员。',

    10001 : '规则纠错服务错误',
    10002 : '更新用户项目列表失败',
    10003 : '你没有该项目权限',
    10004 : '用户规则表未找到',
    10005 : '智能纠错服务错误',
    10006 : '标点预测服务错误',
    10007 : '文本分割服务错误',
    10015 : '训练集上传失败，服务错误',
    10016 : '训练集上传失败，文件名重复',
    10017 : '训练集上传失败，文件名重复',
    10018 : '训练集上传失败，文件名重复',
    10019 : '训练集上传失败，文件名重复',
    10020 : '环境名已存在',
}

export default errorCodes;