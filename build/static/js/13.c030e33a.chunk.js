(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[13],{426:function(e,t,n){"use strict";var a=n(56),r=n(57),o=n(59),l=n(58),i=n(0),c=n.n(i),u=n(77),d=n.n(u),s=n(152),p=n(78),m=n(441),f=n(47),h=n.n(f),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleDownFile=function(e,t,n){e.preventDefault(),e.stopPropagation(),r.setState({loadingStatus:!1,buttonDisabled:!0});var a=h.a.create({baseURL:"http://10.186.0.210:8001/",responseType:"blob",timeout:1e4,headers:{"Content-Type":"multipart/form-data"}}),o=t;a.get(o).then((function(e){console.log(e);var t="";e.headers&&(t=e.headers["content-disposition"].split("filename=")[1].replace(/"/g,""),console.log(t)),t.length>0&&(n=t),r.loadTxtFile(n,e.data,o),r.setState({loadingStatus:!0,buttonDisabled:!1})})).catch((function(e){r.setState({loadingStatus:!1,buttonDisabled:!1}),console.log("\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25",e)}))},r.state={loadingStatus:!0,buttonDisabled:!1},r}return Object(r.a)(n,[{key:"loadTxtFile",value:function(e,t,n){console.log(t);var a=document.createElement("a"),r=new Blob([t],{type:"application/octet-stream"});a.download=e,a.href=URL.createObjectURL(r),document.body.appendChild(a);var o=document.createEvent("MouseEvents");o.initEvent("click",!1,!1),a.dispatchEvent(o),document.body.removeChild(a),URL.revokeObjectURL(r)}},{key:"render",value:function(){var e=this,t=this.props,n=t.api_url,a=t.text,r=t.style,o=t.className,l=t.btnType,i=t.fileName,u=t.btnDisabled,d=this.state,f=d.loadingStatus,h=d.buttonDisabled;return"iconBtn"===l?c.a.createElement(s.a,{placement:"bottomLeft",title:a},c.a.createElement(p.a,{type:"primary",style:r,className:o,onClick:function(t){return e.handleDownFile(t,n,i)},disabled:h||u,loading:!f,size:"small",icon:c.a.createElement(m.a,null)})):c.a.createElement(p.a,{type:"primary",style:r,className:o,onClick:function(t){return e.handleDownFile(t,n,i)},disabled:h||u,loading:!f},f?a:"\u4e0b\u8f7d\u4e2d...")}}]),n}(i.PureComponent);b.proTypes={api_url:d.a.isRequired},b.defaultProps={text:"\u6587\u4ef6\u4e0b\u8f7d",icon:"download",className:{},btnDisabled:!1},t.a=b},504:function(e,t,n){"use strict";n.r(t);var a=n(488),r=n(36),o=n.n(r),l=n(53),i=n(56),c=n(57),u=n(154),d=n(59),s=n(58),p=n(0),m=n.n(p),f=n(60),h=n(219),b=n(78),g=n(440),v=n(422),x=n(421),w=n(499),y=n(494),E=n(47),j=n.n(E),O=n(208),k=n(15),S=n(34),C=n(35);function F(){var e=Object(S.a)(["\n    width:80px;\n    text-align:right;\n    margin-right:15px;\n    &+span{\n        width:56%;\n        \n    }\n"]);return F=function(){return e},e}function I(){var e=Object(S.a)(["\n    display:flex;\n    align-items: center;\n    font-size:14px;\n    margin-bottom:15px;\n\n    & .fixBtn{\n        width:138px;\n    }\n\n    & p.ant-upload-drag-icon{\n        margin-bottom:10px;\n    }\n"]);return I=function(){return e},e}function L(){var e=Object(S.a)(["\n\n"]);return L=function(){return e},e}function _(){var e=Object(S.a)(["\n    text-align: center;\n    margin: 20px;\n"]);return _=function(){return e},e}function D(){var e=Object(S.a)(["\n    display: inline-block;\n    width: 50%;\n"]);return D=function(){return e},e}function T(){var e=Object(S.a)(["\n    float: left;\n    width: 50%;\n"]);return T=function(){return e},e}function U(){var e=Object(S.a)(["\n    margin:20px 40px;\n"]);return U=function(){return e},e}function R(){var e=Object(S.a)(["\n    position: absolute;\n    right: 0;\n    z-index: 100;\n"]);return R=function(){return e},e}function N(){var e=Object(S.a)(["\n    // position:relative;\n    vertical-align: top;\n    display:inline-block;\n    width:calc(100% - 80px);\n"]);return N=function(){return e},e}function P(){var e=Object(S.a)(["\n    width:65px;\n    text-align:right;\n    margin-right:15px;\n"]);return P=function(){return e},e}function A(){var e=Object(S.a)(["\n    margin-bottom: 10px;\n    padding: 0 40px 0 0;\n    & .ant-input{\n        width:200px;\n    }\n    & .ant-btn{\n        margin-left:30px;\n    }\n\n    & .add-btn{\n        background: #52c41a;\n        border-color: #52c41a;\n        color: #fff;\n    }\n    & .add-btn:focus,.add-btn:hover{\n        background: #74d445;\n        border-color: #74d445;\n    }\n    & .ant-form-item-with-help{\n        margin-bottom:0;\n    }\n    & .ant-form-item-explain{\n        margin-left:10px;\n    }\n"]);return A=function(){return e},e}function B(){var e=Object(S.a)(["\n    margin-bottom: 10px;\n    position:relative;\n    // padding: 0 40px 0 0;\n    font-size:14px;\n    // overflow:hidden;\n    & *{\n        display:inline-block;\n        vertical-align: text-top;\n    }\n    & .ant-input{\n        width:200px;\n    }\n    & .ant-btn{\n        margin-left:30px;\n    }\n\n    & .add-btn{\n        background: #52c41a;\n        border-color: #52c41a;\n        color: #fff;\n    }\n    & .add-btn:focus,.add-btn:hover{\n        background: #74d445;\n        border-color: #74d445;\n    }\n"]);return B=function(){return e},e}function q(){var e=Object(S.a)(["\n    min-width: 900px; \n    background:#fff;\n    padding: 40px;\n    min-height: calc(100vh - 156px);\n"]);return q=function(){return e},e}function z(){var e=Object(S.a)(["\n    margin:30px 10px 0;\n"]);return z=function(){return e},e}var H=C.b.main(z()),M=C.b.div(q()),J=C.b.div(B()),G=C.b.div(A()),K=C.b.label(P()),Q=C.b.div(N()),V=(C.b.div(R()),C.b.div(U())),W=C.b.div(T()),X=C.b.div(D()),Y=(C.b.div(_()),C.b.audio(L())),Z=C.b.div(I()),$=(C.b.label(F()),n(508)),ee=n(426),te=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={fileList:[],uploading:!1,modelStatus:!1,modelType:""},e.handleUpload=function(t){var n=e.state.fileList,a=new FormData;a.append("file",n[0]),e.setState({uploading:!0});var r=Object(u.a)(e);console.log(a);var i="api/v1/hotword/fix/"+t+"/";n.length>0&&j.a.create({baseURL:"http://10.186.0.210:8001/",timeout:1e3,headers:{"Content-Type":"multipart/form-data"}}).post(i,a).then((function(e){function n(){return(n=Object(l.a)(o.a.mark((function n(){var l;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l="/10.186.0.210:8001/api/v1/hotword/fix-status/"+t+"/?task_id="+e.data.data.task_id,console.log(l),n.next=4,Object(k.b)({url:l}).then((function(e){console.log(e),"SUCCESS"===e.data[0].task_status&&(r.props.handleFix(e.data[0].result),r.setState({fileList:[],uploading:!1}),window.clearInterval(a)),"FAILED"===e.data[0].task_status&&(r.props.handleFix(e.data[0].result),r.setState({uploading:!1}),h.a.error("\u8bc6\u522b\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01"),window.clearInterval(a))}));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log(e),h.a.success("\u4e0a\u4f20\u97f3\u9891\u6210\u529f\uff0c\u7b49\u5f85\u8bc6\u522b\uff01");var a=setInterval((function(){return function(){return n.apply(this,arguments)}()}),1e4)})).catch((function(t){e.setState({uploading:!1}),h.a.error("\u4e0a\u4f20\u97f3\u9891\u5931\u8d25")}))},e.handleChangeHotword=function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hot";"cold"===a&&(t.hot_value=-t.hot_value),e.setState({modelStatus:!0,modelType:a});var r=Object(u.a)(e),i="api/v1/hotword/conf/"+n+"/";t&&Object(k.c)({url:i,params:{name:n,words:[t]}}).then((function(e){function t(){return(t=Object(l.a)(o.a.mark((function t(){var l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l="/10.186.0.210:8001/api/v1/hotword/update-status/"+n+"/?task_id="+e.data.task_id,console.log(l),t.next=4,Object(k.b)({url:l}).then((function(e){console.log(e),"SUCCESS"===e.data[0].task_status&&(r.props.handleFix(e.data[0].result),r.setState({modelStatus:!1,modelType:""}),window.clearInterval(a),r.reload(),h.a.success("\u70ed\u8bcd\u66f4\u65b0\u6210\u529f\uff01")),"FAILED"===e.data[0].task_status&&(r.props.handleFix(e.data[0].result),r.setState({modelStatus:!1,modelType:""}),window.clearInterval(a),h.a.error("\u66f4\u65b0\u5931\u8d25\uff0c\u672c\u6b21\u66f4\u65b0\u5c06\u5728\u4e0b\u6b21\u63d0\u4ea4\u65f6\u751f\u6548"))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log(e);var a=setInterval((function(){return function(){return t.apply(this,arguments)}()}),1e3)})).catch()},e.renderUserAudioInfo=function(e){return e!=={}?m.a.createElement(p.Fragment,null,m.a.createElement(Y,{controls:!0}),m.a.createElement(b.a,{type:"primary"},"\u8bc6\u522b")):m.a.createElement(p.Fragment,null)},e.reload=function(){e.componentDidMount()},e}return Object(c.a)(n,[{key:"callback",value:function(e){console.log(e)}},{key:"onFinish",value:function(e){console.log(e)}},{key:"handleDownloadConf",value:function(e){var t="api/v1/hotword/download/?type=conf&name="+e;Object(k.b)({url:t}).then((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectedProject,r=t.projects,o=t.hotwordCorrections,l=t.rulesFixResult,i=t.handleChangeSelectedProject,c=this.state,u=c.uploading,d=c.fileList,s=c.modelStatus,p=c.modelType,f={accept:".wav,.pcm",onRemove:function(t){e.setState((function(e){var n=e.fileList.indexOf(t),a=e.fileList.slice();return a.splice(n,1),{fileList:a}}))},beforeUpload:function(t){return e.setState((function(e){return{fileList:[].concat(Object(a.a)(e.fileList),[t])}})),t.size/1024/1024<=10||(h.a.error("\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u572810M\u4ee5\u4e0b\uff01"),e.onRemove(t)),!1},fileList:d};return m.a.createElement(H,null,m.a.createElement(M,null,m.a.createElement(J,null,m.a.createElement(K,null,"\u9879\u76ee\u540d\u79f0"),m.a.createElement(Q,null,m.a.createElement(g.a,{style:{width:200},value:n.name,onChange:i},r.map((function(e){return m.a.createElement(g.a.Option,{key:e.name,value:e.name},e.display_name)})))),m.a.createElement(ee.a,{style:{position:"absolute",right:"0"},api_url:"api/v1/hotword/download/?type=conf&name="+n.name,text:"\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6",fileName:n.name+"_hotword_config.txt"})),m.a.createElement(J,null,m.a.createElement(K,null,"\u70ed\u8bcd\u914d\u7f6e"),m.a.createElement(Q,null,m.a.createElement(v.a.TextArea,{value:o,disabled:!0,style:{width:"100%"},rows:4,placeholder:""}))),m.a.createElement(G,{style:{paddingLeft:"28px"}},m.a.createElement(x.a,{name:"addhotForm",layout:"inline",onFinish:function(t){return e.handleChangeHotword(t,n.name,"hot")}},m.a.createElement(x.a.Item,{name:"word",label:"\u70ed\u8bcd",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u70ed\u8bcd!"}]},m.a.createElement(v.a,null)),m.a.createElement(x.a.Item,{name:"hot_value",label:"\u589e\u52a0\u70ed\u5ea6",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u70ed\u8bcd\u70ed\u5ea6!"}]},m.a.createElement(w.a,{min:1,max:100})),m.a.createElement(x.a.Item,{shouldUpdate:!0},(function(){return m.a.createElement(b.a,{htmlType:"submit",type:"danger",loading:s&&"hot"===p,disabled:"cold"===p},s&&"hot"===p?"\u70ed\u5ea6\u8bad\u7ec3\u4e2d":"\u589e\u52a0\u70ed\u5ea6")})))),m.a.createElement(G,{style:{paddingLeft:"28px"}},m.a.createElement(x.a,{name:"coldHotForm",layout:"inline",onFinish:function(t){return e.handleChangeHotword(t,n.name,"cold")}},m.a.createElement(x.a.Item,{name:"word",label:"\u70ed\u8bcd",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u70ed\u8bcd!"}]},m.a.createElement(v.a,null)),m.a.createElement(x.a.Item,{name:"hot_value",label:"\u51cf\u5c11\u70ed\u5ea6",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u70ed\u8bcd\u70ed\u5ea6!"}]},m.a.createElement(w.a,{min:1,max:100})),m.a.createElement(x.a.Item,{shouldUpdate:!0},(function(){return m.a.createElement(b.a,{htmlType:"submit",type:"primary",loading:s&&"cold"===p,disabled:"hot"===p},s&&"cold"===p?"\u70ed\u5ea6\u8bad\u7ec3\u4e2d":"\u51cf\u5c11\u70ed\u5ea6")})))),m.a.createElement(V,null,m.a.createElement(W,{style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",height:"208px"}},m.a.createElement(Z,null,m.a.createElement(ee.a,{className:"fixBtn",style:{float:"right"},api_url:"api/v1/hotword/download/?type=demo&name=test",text:"\u4e0b\u8f7d\u793a\u4f8b\u6587\u4ef6",fileName:"hotword_example.wav"})),m.a.createElement(Z,null,m.a.createElement(y.a,f,m.a.createElement(b.a,{className:"fixBtn"},m.a.createElement($.a,null),"\u4e0a\u4f20\u97f3\u9891\u6587\u4ef6"))),m.a.createElement(Z,null,m.a.createElement(b.a,{type:"primary",className:"fixBtn",onClick:function(){return e.handleUpload(n.name)},loading:u,disabled:s},u?"\u8bc6\u522b\u4e2d":"\u5f00\u59cb\u8bc6\u522b"))),m.a.createElement(X,null,m.a.createElement(v.a.TextArea,{disabled:!0,value:l,style:{width:"100%"},rows:9,placeholder:"\u8bc6\u522b\u7ed3\u679c"})))))}},{key:"componentDidMount",value:function(){this.props.pageInit()}}]),n}(p.Component);t.default=Object(f.b)((function(e){return{projects:e.getIn(["hotword","projects"]),hotwordCorrections:e.getIn(["hotword","corrections"]),selectedProject:e.getIn(["hotword","selectedProject"]),rulesFixResult:e.getIn(["hotword","rulesFixResult"])}}),(function(e){return{pageInit:function(){e(O.a.handlePageInit())},handleChangeSelectedProject:function(t){e(O.a.handleChangeSelectedProject(t))},handleFix:function(t){e(O.a.changeFixResult(t))}}}))(te)}}]);
//# sourceMappingURL=13.c030e33a.chunk.js.map