import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';
import Header from './Header'; 

class Restaurant extends React.Component {
    constructor (props) {
        super(props)
        this.state = {data: null, loading: false};
    }

    rest_name = this.props.match.params.rest_name;

    getMenuFromGit() {
        this.setState({loading: true})
        fetch("https://raw.githubusercontent.com/AndrewMos/Qfood/deploy-v2/src/menus/" + this.rest_name + ".json")
        .then(response => response.json())
        .then((jsonData) => {
          this.setState({data: jsonData})
        })
        .catch((error) => {
            this.setState({data: null})
        })
    }
   
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
            if(!this.state.loading) this.getMenuFromGit();
            return (<p>Hard to find your restaurant, sorry...</p>);
        }
    }
}

export default Restaurant;