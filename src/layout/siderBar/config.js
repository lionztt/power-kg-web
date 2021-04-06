
const allMenus = [
    //  叶子菜单项的key也是其链接地址,非叶子节点的key不是url
    // title:菜单名称（不可为空）；key：唯一值（不可为空）；icon：左侧图标名称（可为空）；subs：子项菜单 
    {
        title:'知识图谱',
        key:'/aftertreatment',
        icon:'icontupushujuyuan',
        subs:[
            {
                title:'图谱全貌',
                key:'/aftertreatment/correction',
                icon:'iconzhishitupu'
            },
            {
                title:'实体查询',
                key:'/aftertreatment/textsegmentation',
                icon:'iconshitishibie'
            },
            {
                title:'关系查询',
                key:'/aftertreatment/punctuationpred',
                icon:'iconguanxitu'
            },
        ]
    },
    {
        title:'自然语言处理',
        key:'/nlp',
        icon:'iconziranyuyanchuli',
        subs:[
            {
                title:'实体识别',
                key:'/ner',
                icon:'iconshitishibie'
            },
            {
                title:'关系抽取',
                key:'/rc',
                icon:'iconguanxichouqu'
            },
        ]
    },
    {
        title:'账户管理',
        key:'/autotraining',
        icon:'iconzhanghuguanli',
        subs:[
            // {
            //     title:'角色管理',
            //     key:'/autotraining/env',
            //     icon:'iconjiaoseguanli'
            // },
            {
                title:'用户管理',
                key:'/autotraining/audiomodel',
                icon:'iconyonghu1'
            },
            {
                title:'日志管理',
                key:'/autotraining/logManage',
                icon:'iconrizhiguanli'
            },
            // {
            //     title:'训练集',
            //     key:'/autotraining/trainset',
            //     icon:'iconicon_common_train'
            // },
            // {
            //     title:'测试集',
            //     key:'/autotraining/testset',
            //     icon:'iconDDshuipingceshi'
            // },
        ]
    }
]

// 将有权限的菜单放进store，这里做一个转换 -》1.url与权限字符串的分别对应value、key
// correction 页的处理比较特殊，需要在本页单独判断是否有权限（store中取值）
const authToUrl = {
    'rules-correct':['/aftertreatment/correction'],
    'wfst-correct':['/aftertreatment/correction'],
    'punc-predict':['/aftertreatment/punctuationpred'],
    'text-split':['/aftertreatment/textsegmentation'],
    'hot-word':['/hotword/update'],
    'nlp':['/ner','/rc'],
    'auto-lm':['/autotraining/model','/autotraining/logManage','/autotraining/audiomodel','/autotraining/env']
}
export function createMenus( authArr ){
    // 获取store中的权限数组，然后根据权限对应url字典，根据allMenu生成新的menu
    let urlKeys = new Set()
    authArr.filter(item=>item in authToUrl).forEach(item=>{authToUrl[item].forEach(childItem=>urlKeys.add(childItem))})
    const findMenus = (menusNode) => {
        if(!menusNode.subs){
            return urlKeys.has(menusNode.key)?menusNode:null
        }
        let subMenus = menusNode.subs.filter(menusNode_=>findMenus(menusNode_))
        return subMenus.length === 0?null:Object.assign(menusNode, {'subs':subMenus});
    }
    return allMenus.map(menu=>findMenus(menu)).filter(x=>x); // 去掉权限
    // return allMenus
}

