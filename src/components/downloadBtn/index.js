/**
 * @desc:这是一个文件下载组件
 * @param:参数说明
 *    api_url:接口地址
 *    icon: 下载图片设置
 *    text: 下载文本设置
 *    downFileBtnClass: 按钮样式设置
 * 
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Tooltip} from 'antd';
import {
    DownloadOutlined
} from '@ant-design/icons';
import axios from 'axios'

class FileDown extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loadingStatus: true,
            buttonDisabled: false
        }
    }

    loadTxtFile(fileName, content,url){
        console.log(content)
        let aLink = document.createElement('a');
        let blob = new Blob([content], {
            type: 'application/octet-stream'
        });
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob)
        // aLink.href = url
        // aLink.click();
        //此写法兼容可火狐浏览器
        document.body.appendChild(aLink);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", false, false);
        aLink.dispatchEvent(evt);
        document.body.removeChild(aLink)

        URL.revokeObjectURL(blob);
        

    }

    //文件下载操作
    handleDownFile = (event, api_url,fileName) => {
        event.preventDefault();
        event.stopPropagation();
        //开启loading 按钮置灰
        this.setState({
            loadingStatus: false,
            buttonDisabled: true,
        });

        let instance = axios.create({
            baseURL:'http://10.186.0.210:8001/',
            responseType:'blob',
            timeout:10000,
            headers:{"Content-Type":"multipart/form-data"}
        })
        let url = api_url

        instance.get(url).then(res=>{
            console.log(res)
            let backEndFileName = ""
            if(res.headers){
                // let regex1 = /"(.+?)"/g;   // "" 
                backEndFileName = res.headers['content-disposition'].split('filename=')[1].replace(/"/g,"")
                console.log(backEndFileName)
            }
            if(backEndFileName.length>0){
                fileName = backEndFileName
            }
            this.loadTxtFile(fileName,res.data,url)
            this.setState({
                loadingStatus: true,
                buttonDisabled: false,
            });
        }).catch((error) => {
            //关闭loading 按钮恢复正常
            this.setState({
                loadingStatus: false,
                buttonDisabled: false,
            });
            console.log('文件下载失败', error);
        })
    };

  render() {
    const {api_url, text, style, className, btnType, fileName,btnDisabled} = this.props;
    const {loadingStatus, buttonDisabled} = this.state;
    // btnType 用于展现不同的下载样式 分为iconBtn wordBtn 
    if(btnType==='iconBtn'){
        return(
            <Tooltip placement="bottomLeft" title={text}>
                <Button 
                    type="primary" 
                    style={style}
                    className={className}
                    onClick={(event) => this.handleDownFile(event, api_url,fileName)}
                    disabled={buttonDisabled||btnDisabled}
                    loading={!loadingStatus}
                    size="small" 
                    icon={<DownloadOutlined />}
                />
            </Tooltip>
        )
    }
    return (
      <Button
        type="primary"
        style={style}
        // icon={<DownloadOutlined />}
        className={className}
        onClick={(event) => this.handleDownFile(event, api_url, fileName)}
        disabled={buttonDisabled||btnDisabled}
        loading={!loadingStatus}
      >
        {loadingStatus ? text : '下载中...'}
      </Button>
    );
  }
}

//定义属性 类型以及是否必填项
FileDown.proTypes = {
  api_url: PropTypes.isRequired
};
//定义属性的默认值
FileDown.defaultProps = {
  text: '文件下载',
  icon: 'download',
  className: {},
  btnDisabled:false
};
export default FileDown;