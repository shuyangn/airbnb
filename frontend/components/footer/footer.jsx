import React from "react";
import { MdCopyright } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';

class Footer extends React.Component {
    render () {
      return (
        <div className="footer">
          <div className="copyright">
            <MdCopyright /> 2022 宁舒阳 Shuyang Ning
          </div>
          <div className="personal-links">
            <a href="https://www.linkedin.com/in/shuyang-ning/"><FaLinkedin style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
            <a href="https://github.com/shuyangn"><FaGithub style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
            <a href="https://google.com"><FaAngellist style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
        </div>
      );
    }
  }

  export default Footer;