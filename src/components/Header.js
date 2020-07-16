import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        const openCloseHeader = () => {this.setState({isOpen:!this.state.isOpen})}
        const renderLinks = this.props.blocks.map((block, i) => {
            return (
                <a key={i} href={'#'+block['name']}>
                    <span>{block['name']}</span>
                </a>
            );
        });
        return (
        <div onClick={openCloseHeader} className='header'>{this.props.name} {this.state.isOpen?renderLinks:null} </div>
        );
    }
}

export default Header;