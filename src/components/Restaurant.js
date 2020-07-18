import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';
import Header from './Header';

class Restaurant extends React.Component {
    constructor (props) {
        super(props)
        this.state = {data: null};
    }

    rest_name = this.props.location.search.substr(3);

    render() {

        console.log(this.props.location.search);

        const { data } = this.state;

        if (data != null) {
            const renderBlocks = data['blocks'].map((block, i) => {
                return (
                    <MenuBlock block={block} key={i}/>
                );
            });

            return (
                <div>
                    <Header name={data['rest_name']} blocks={data['blocks']}/>
                    <div className='menu_column'>
                        {renderBlocks}
                    </div>
                </div>
            );
        } else {
            var d;
            try {
                d = require('../jsons/' + this.rest_name + '.json');
            } catch (error) {
                return (<p>Menu not found:(</p>)
            }
            
            this.setState({ data: d })
            return (<p>Menu not found:(</p>)
        }
    }
}

export default Restaurant;
