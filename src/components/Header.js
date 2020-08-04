import React from 'react';
import './Header.css';
import fbIcon from '../icons/fb.png';
import igIcon from '../icons/insta.png';

class Header extends React.Component {

    render() {
      const renderLinks = this.props.links.map((link, i) => {
        switch (link['name']) {
          case 'instagram':
            return(
              <a key={i} href={link['link']}><img src={igIcon} alt="" className="icon" /> </a>
            );

            case 'facebook':
              return(
                <a key={i} href={link['link']}><img src={fbIcon} alt="" className="icon" /> </a>
              );
        
          default:
            return null;
        }
      });
      return (
        <div style={{backgroundImage: `url(${this.props.header_img})`}} className="header_img">
          <div className="info_block"> 
            <div style={{backgroundImage: `url(${this.props.logo_img})`}} className="logo_circle"></div>
            <div className="rest_name">{this.props.name}</div>
            <div className="rest_address">{this.props.address}</div>
            <div className="social_block">
              {renderLinks}
            </div>
          </div>
        </div>
      );
    }
}

export default Header;