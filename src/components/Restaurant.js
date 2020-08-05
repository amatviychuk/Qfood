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

            document.body.style = 'background: ' + this.state.data['design'].find(t => t.name === "background_color").color + ';';

            const renderBlocks = this.state.data['blocks'].map((block, i) => {
                return (
                    <MenuBlock design={this.state.data['design']} block={block} key={i} id={i}/>
                );
            });

            return (
                <div>

                    <Header 
                        name={this.state.data['rest_name']} 
                        address={this.state.data['rest_address']} 
                        links={this.state.data['links']} 
                        design={this.state.data['design']}    
                    />
                    <div style={{background: this.state.data['design'].find(t => t.name === "menu_head").color}} className='menu_column'>
                        <span style={{color: this.state.data['design'].find(t => t.name === "menu_head_font").color}} className="menu"> MENU </span>
                        {renderBlocks}
                    </div>
                </div>
            );
        } else {
            
            if(!this.state.loading) {
                this.getMenuFromGit();
            } 
            return (null);
        }
    }
}

export default Restaurant;