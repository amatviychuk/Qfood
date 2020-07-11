import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';

class Restaurant extends React.Component {
    render() {
        const rest_name = this.props.match.params.rest_name;
        return (
            <div>
                <div className='header'>{rest_name}</div>
                <div className='menu_column'>
                    <MenuBlock />
                    <MenuBlock />
                    <MenuBlock />
                </div>
            </div>
        );
    }
}

export default Restaurant;