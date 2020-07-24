import React from 'react';
import './Header.css';
import fbIcon from '../icons/fb.png';
import igIcon from '../icons/insta.png';
import forkIcon from '../icons/fork.png';

class Header extends React.Component {

    render() {
      return (
        <div className="header_img">
          <div className="info_block"> 
            <div style={{backgroundImage: `url(${forkIcon})`}} className="logo_circle"></div>
            <div className="rest_name">{this.props.name}</div>
      <div className="rest_address">{this.props.address}</div>
            <div className="social_block">
              <img src={fbIcon} alt="" className="icon" />
              <img src={igIcon} alt="" className="icon" />
            </div>
          </div>
        </div>
      );
    }
}

export default Header;