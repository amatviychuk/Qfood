import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';

class Restaurant extends React.Component {
    constructor (props) {
        super(props)
        this.state = {data: null};
    }

    rest_name = this.props.match.params.rest_name;

    uploadHandler = () => {
        fetch('http://localhost:5000/find_rest/' + this.rest_name, {
          method: 'GET',
        })
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
                    <div className='header'>{data['rest_name']}</div>
                    <div className='menu_column'>
                        {renderBlocks}
                    </div>
                </div>
            );
        } else {
            this.uploadHandler();
            return (<p>Loading...</p>)
        }
    }
}

export default Restaurant;