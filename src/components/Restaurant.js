import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';
import Header from './Header'; 

class Restaurant extends React.Component {
    constructor (props) {
        super(props)
        this.state = {data: null};
    }

    rest_name = this.props.match.params.rest_name;

    render() {

        const { data } = this.state;
               
        if (data != null) {
            const renderBlocks = data['blocks'].map((block, i) => {
                return (
                    <MenuBlock block={block} key={i} id={i}/>
                );
            });

            return (
                <div>
                    <Header name={data['rest_name']} address={data['rest_address']} />
                    <div className='menu_column'>
                        <span className="menu"> MENU </span>
                        {renderBlocks}
                    </div>
                </div>
            );
        } else {
            let d = require('../menus/' + this.rest_name + '.json');
            this.setState({ data: d });
            return (<p>Loading...</p>);
        }
    }
}

export default Restaurant;