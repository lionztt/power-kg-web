import React, { Component } from 'react'
import { ContentWapper, ContentBox } from './style'
import img from '../../assets/images/皮卡丘.png'
import { SYSTERMNAME } from '../../layout/config'
class Home extends Component {

  render() {
    return (
      <ContentWapper>
        <ContentBox>
          <img src={img} style={{ display: 'block', margin: '0px auto 30px', width: '150px' }} />
          <p>HI, 欢迎使用{SYSTERMNAME}</p>
        </ContentBox>
      </ContentWapper>

    )
  }
}

export default Home;