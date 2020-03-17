import React from 'react';
import bizlogo from '../../bizlogo.png'
import ISPInfo from './ISPInfo'
function Header() {
    return (
      <div >
        <header>
        <img src={bizlogo} alt="Logo" />;
        <span> -- searching ISP made easy!</span>
        <ISPInfo/>
        </header>
      </div>
    );
  }
  
  export default Header;