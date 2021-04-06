let allTreeData = [
    {
        title: '后处理',
        key: 'aftertreatment',
        children: [
            {
                title: '纠错处理',
                key: 'correction',
                children: [
                    {
                        title: '规则纠错',
                        key: 'rules-correct',
                        children:[]
                        
                    },
                    {
                        title: '智能纠错',
                        key: 'wfst-correct',
                        children:[]
                    }
                ]
            },
            {
                title: '标点预测',
                key: 'punc-predict',
                children: []
            },
            {
                title: '文本分割',
                key: 'text-split',
                children: []
            }
        ]
    },
    {
        title: '热词更新',
        key: 'hot-word',
        children: []
    },
    {
        title: '模型自学习',
        key: 'auto-lm',
        children: []
    }
];

const changeTreeNode = (service,treeData) =>{
    treeData.forEach(item=>{
        if(service.service_name===item.key){
            item.children = service.project_list.map(project=>({key:item.key+'@'+project.name,title:project.desc,default:project.default}))
            return
        }else if(item.children&&item.children.length>0){
            changeTreeNode(service,item.children)
        }
    })
}

export const createTreeData = list =>{

    console.log("first",allTreeData)
    if(list&&list.length>0){
        list.forEach(item=>{
            changeTreeNode(item,allTreeData)
        })
    }
    console.log("last",allTreeData)
    return allTreeData
}

export const getTreeDataDefault = list =>{
    let defaultKeys = []
    if(list&&list.length>0){
        list.forEach(item=>{
            item.project_list.forEach(itemChild=>{
                if(itemChild.default === 1){
                    defaultKeys.push(item.service_name+"@"+itemChild.name)
                }
            })
        })
    }
    return defaultKeys
}

export const tranSelected2Services = list =>{
    let services = {}
    let notFirst = list.filter(item=>item.indexOf('@')!==-1)
    let isFirst = list.filter(item=>item.indexOf('@')===-1)
    isFirst.forEach(item=>{
        services[item]=[]
    })
    notFirst.forEach(item=>{
        let arr = item.split("@")
        if(arr[0] in services){
            services[arr[0]].push(arr[1])
        }else{
            services[arr[0]] = [arr[1]]
        }
    })
    delete services.correction
    delete services.aftertreatment
    return services
}