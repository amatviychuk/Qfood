import React from 'react';
import './MenuBlock.css';

class MenuBlock extends React.Component {
    render() {

      // const data = {'blocks':[{'name':'PIZZA', 'products':[
      //    {'type':'small_title', 'text':'Classic pizza'},
      //    {'type':'price_label', 'text':'small/large'},
      //    {'type':'', 'text':''},
      //    {'type':'', 'text':''},
      //    {'type':'', 'text':''}
      // ]}]};

        return (
         <div className='block'>
            <div className='block_name'>PIZZA</div>

            <div className='small_name'>-Classic pizza-</div>

            <div className='price_label'>small/large</div>

            <div className='product'>
               <div className='name'>Pizza name</div>

               <div className='price'>5$/7$</div>
            </div>
            <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

            <div className='product'>
               <div className='name'>Pizza name</div>
               <div className='price'>5$/7$</div>
            </div>
            <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

            <div className='product'>
               <div className='name'>Pizza name</div>
               <div className='price'>5$/7$</div>
            </div>
            <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>



            <div className='small_name'>-Not classic pizza-</div>

            <div className='product'>
               <div className='name'>Pizza name</div>
               <div className='price'>6$/10$</div>
            </div>
            <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

            <div className='product'>
               <div className='name'>Pizza name</div>
               <div className='price'>6$/10$</div>
            </div>
            <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

            <div className='product'>
               <div className='name'>Pizza name</div>
               <div className='price'>6$/10$</div>
            </div>
            <div className='ingredients'>Tomato, salami, mashrooms, peperoni, salami, mashrooms, peperoni</div>

         </div>  
        );
    }
}

export default MenuBlock;