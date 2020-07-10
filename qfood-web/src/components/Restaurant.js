import React from 'react';
import './Restaurant.css';

class Restaurant extends React.Component {
    render() {
        const rest_name = this.props.match.params.rest_name;
        return (
            <div className='header'>{rest_name}</div>
        );
    }
}

export default Restaurant;