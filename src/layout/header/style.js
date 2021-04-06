import styled from 'styled-components';

export const HeaderBlock = styled.header`
    height:64px;
    color: rgba(0,0,0,.65);
    line-height: 64px;
    background: #001529;
`

export const LogoBlock = styled.div`
    padding:0 20px;
    display:inline-block;
    & .logo-i{
        color:#FF8C00;
        margin-right: 10px;
        font-weight:bold;
        
        & .iconfont{
            font-size:20px;
        }
    }
`

export const LogoImg = styled.img.attrs({
    src:'http://www.didiglobal.com/DDlogo.ico'
})`
    display:inline-block;
    width:25px;
    margin-right: 15px;
    vertical-align:text-top;
`

export const LogoTitle = styled.div`
    color:#fff;
    display:inline-block;
`
export const HeaderBtn = styled.div`
    float:right;
    color:#fff;
    font-size:16px;
    margin:0 5px;
    padding:0 20px;
`

export const UserInfoWapper = styled.div`
    float:right;
    color:#fff;
    font-size:16px;
    margin:0 5px;
    padding:0 20px;
`



