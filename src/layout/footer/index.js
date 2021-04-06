import React from 'react';
import { FooterWapper } from './style'
import {SYSTERMNAME} from '../config'

function Footer() {
  return (
    <FooterWapper className="ant-layout-footer">
        {SYSTERMNAME} v.0.1 | Copyright © 2020. All rights reserved 
    </FooterWapper>
  )
}

export default Footer;
