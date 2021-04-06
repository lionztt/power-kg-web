import React, {Component} from 'react'
import {ContentWapper,ContentBox} from './style'
import img from  '../../assets/images/皮卡丘.png'
class NER extends Component{

    render(){
        return(  
            <ContentWapper>
              <ContentBox>
                <img src={img} style={{display:'block',margin:'0px auto 30px',width:'150px'}}/>
                <p>NER</p>
              </ContentBox>
            </ContentWapper>
            
        )
    }
}

export default NER;