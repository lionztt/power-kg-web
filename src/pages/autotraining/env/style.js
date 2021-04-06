import styled from 'styled-components';

export const ContentWapper = styled.main`
    margin:30px 10px 0;
`
export const ContentBox = styled.div`
    background:#fff;
    padding: 0 20px;
    min-height: calc(100vh - 156px);
    & .edit-btn{
        background: #faad14;
        color: #fff;
        border-color: #faad14;
    }
    & .edit-btn:focus,.edit-btn:hover{
        background:#fbc457;
        border-color: #fbc457;
    }
    & .start-btn{
        background: #52c41a;
        border-color: #52c41a;
        color: #fff;
    }
    & .start-btn:focus,.start-btn:hover{
        background: #74d445;
        border-color: #74d445;
    }
    & .stop-btn{
        background: #181918;
        border-color: #181918;
        color: #fff;
    }
    & .stop-btn:focus,.stop-btn:hover{
        background: #656765;
        border-color: #656765;
    }

`

export const AddBtnWapper = styled.div`
    text-align: right;
    padding: 20px;
`

