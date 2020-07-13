import React from 'react';
import './MenuBlock.css';

class MenuBlock extends React.Component {
    render() {

      const renderBlock = this.props.block['products'].map((line, i) => {
         switch(line['type']) {
            case 'small_title':
               return (
               <div className='small_name'>-{line['text']}-</div>
               );

            case 'price_label':
               return (
               <div className='price_label'>{line['text']}</div>
               );

            case 'meal':
               return (
               <div>
                  <div className='product'>
                     <div className='name'>{line['name']}</div>
                     <div className='price'>{line['price']}</div>
                  </div>

                  <div className='ingredients'>{line['description']}</div>
               </div>
               );

            default:
            break;
         }
         return null;
      });

      return (
         <div className='block'>
            <div className='block_name'>{ this.props.block['name'] }</div>
            {renderBlock}
         </div>
      );
   }
}

export default MenuBlock;