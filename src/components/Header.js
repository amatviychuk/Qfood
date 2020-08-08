import React from 'react';
import './Header.css';
import fbIcon from '../icons/fb.png';
import igIcon from '../icons/insta.png';
import fbIcon_white from '../icons/fb_white.png';
import igIcon_white from '../icons/insta_white.png';

class Header extends React.Component {

    render() {
      const theme = this.props.design.find(t => t.name === "theme").data==='dark';

      const renderLinks = this.props.links.map((link, i) => {
        switch (link['name']) {
          case 'instagram':
            return(
              <a key={i} href={link['link']}><img src={theme?igIcon:igIcon_white} alt="" className="icon" /> </a>
            );

            case 'facebook':
              return(
                <a key={i} href={link['link']}><img src={theme?fbIcon:fbIcon_white} alt="" className="icon" /> </a>
              );
        
          default:
            return null;
        }
      });
      return (
        <div style={{backgroundImage: `url(${this.props.design.find(t => t.name === "header_img").link})`}} className="header_img">
          <div className="info_block"> 
            <div style={{backgroundImage: `url(${this.props.design.find(t => t.name === "logo_img").link})`}} className="logo_circle"></div>
            <div style={{color: this.props.design.find(t => t.name === "header_font").color }} className="rest_name">{this.props.name}</div>
            <div style={{color: this.props.design.find(t => t.name === "header_font").color }} className="rest_address">{this.props.address}</div>
            <div className="social_block">
              {renderLinks}
            </div>
          </div>
        </div>
      );
    }
}

export default Header;