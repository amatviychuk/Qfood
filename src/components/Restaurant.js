import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';
import Header from './Header';
import Data from '../jsons/menu1.json';

class Restaurant extends React.Component {
    constructor (props) {
        super(props)
        this.state = {data: null};
    }

    rest_name = this.props.match.params.rest_name;

    uploadHandler = () => {
        fetch('https://github.com/AndrewMos/Qfood/blob/master/qfood-back/Restaurants/good_food/2_13072020.json')
          .then((response) => response.json())
          .then((success) => {
            this.setState({ data: success })
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
    };

    render() {

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
            // this.uploadHandler();
            this.setState({ data: Data })
            return (<p>Loading...</p>)
        }
    }
}

export default Restaurant;
