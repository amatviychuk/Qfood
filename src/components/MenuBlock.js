import React from 'react';
import './MenuBlock.css';

class MenuBlock extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {


      const renderBlock = this.props.block['products'].map((line, i) => {
         switch(line['type']) {
            // case 'small_title':
            //    return (
            //    <div className='small_name' key={i}>-{line['text']}-</div>
            //    );

            // case 'price_label':
            //    return (
            //    <div className='price_label' key={i}><span className='s_name'>{line['text']}</span></div>
            //    );

            case 'meal':
               return (
               <div key={i} className="meal_block">
                  <div className="product">
                     <div className='name_price'>
                        <span className='name'>{line['name']}</span>
                        <span className='price'>{line['price']}</span>
                     </div>
                     <div className='ingredients'>{line['description']}</div>
                  </div>
               </div>
               );

            default:
            break;
         }
         return null;
      });

      const openClose = () => {this.setState({isOpen:!this.state.isOpen})}

      return (

         <div className='block' id={this.props.block['name']}>
            <div onClick={openClose} className='block_name'>{this.props.block['name']}</div>
            {this.state.isOpen?renderBlock:null}
         </div>
      );
   }
}

export default MenuBlock;