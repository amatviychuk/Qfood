import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';
import Header from './Header'; 

class Restaurant extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: null, 
            loading: false
        };
    }

    rest_name = this.props.match.params.rest_name;

    getMenuFromGit() {
        this.setState({loading: true})
        fetch("https://raw.githubusercontent.com/AndrewMos/Qfood/menus/" + this.rest_name + ".json")
        .then(response => response.json())
        .then((jsonData) => {
          this.setState({data: jsonData})
        })
        .catch((error) => {
            this.setState({data: null})
        })
    }

  

    render() {
               
        if (this.state.data != null || this.state.language != null) {
            const renderBlocks = this.state.data['blocks'].map((block, i) => {
                return (
                    <MenuBlock block={block} key={i} id={i}/>
                );
            });

            return (
                <div>
                    <Header name={this.state.data['rest_name']} address={this.state.data['rest_address']} links={this.state.data['links']} />
                    <div className='menu_column'>
                        <span className="menu"> MENU </span>
                        {renderBlocks}
                    </div>
                </div>
            );
        } else {
            
            if(!this.state.loading) {
                this.getMenuFromGit();
            } 
            return (<p>Hard to find your restaurant, sorry...</p>);
        }
    }
}

export default Restaurant;