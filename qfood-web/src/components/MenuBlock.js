import React from 'react';
import './MenuBlock.css';

class MenuBlock extends React.Component {
    render() {
        return (
         <div className='block'>
             <div className='block_name'>
                PIZZA
             </div>
             <div className='product'>
                <div className='name'>Pizza name</div>
                <div className='price'>5$</div>
             </div>
             <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

             <div className='product'>
                <div className='name'>Pizza name</div>
                <div className='price'>5$</div>
             </div>
             <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

             <div className='product'>
                <div className='name'>Pizza name</div>
                <div className='price'>5$</div>
             </div>
             <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

         </div>  
        );
    }
}

export default MenuBlock;