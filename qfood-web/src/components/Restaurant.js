import React from 'react';
import './Restaurant.css';
import MenuBlock from './MenuBlock';

class Restaurant extends React.Component {
    render() {

        const data = {'rest_name':'Best Food', 'blocks':[{'name':'PIZZA', 'products':[
            {'type':'small_title', 'text':'Classic pizza'},
            {'type':'price_label', 'text':'small/large'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'small_title', 'text':'Not classic pizza'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'}]
         }, 
         {'name':'PIZZA', 'products':[
            {'type':'small_title', 'text':'Classic pizza'},
            {'type':'price_label', 'text':'small/large'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'small_title', 'text':'Not classic pizza'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'},
            {'type':'meal', 'name':'Margherita', 'price':'5$/7$', 'description':'Tomato, salami, mashrooms, peperoni, salami'}
         ]}
        ]};

        // const rest_name = this.props.match.params.rest_name;

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
    }
}

export default Restaurant;