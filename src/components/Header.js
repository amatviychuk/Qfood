import React from 'react';
import './Header.css';

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     };
    // }

    // 

    render() {
      return (
        <div className="header_img">
          <div className="info_block"> 
            <div className="logo_circle"></div>
      <div className="rest_name">{this.props.name}</div>
            <div className="rest_address">Address 34</div>
          </div>
        </div>
      );
    }
}

export default Header;