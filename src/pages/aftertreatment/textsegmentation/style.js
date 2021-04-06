import styled from 'styled-components';

export const ContentWapper = styled.main`
    margin:30px 10px 0;
`
export const ContentBox = styled.div`
    min-width: 900px;   
    background:#fff;
    padding: 20px 35px;
    min-height: calc(100vh - 156px);
`
export const SearchInput = styled.div`
    width:60%;
    margin:20px auto;
`
export const Answer = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:row;
    #graphin-container{
        width:60%;
    }
`
export const TextAnswer = styled.div`
    width:40%;
    & .ant-tag{
        margin:5px;
    }
`