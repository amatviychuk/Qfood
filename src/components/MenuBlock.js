import React from 'react';
import './MenuBlock.css';
// import Background from './../images/back1.png';

class MenuBlock extends React.Component {
    render() {

      var sectionStyle = {
         // backgroundImage: `url(${Background})`
      }

      const renderBlock = this.props.block['products'].map((line, i) => {
         switch(line['type']) {
            case 'small_title':
               return (
               <div className='small_name' key={i}>-{line['text']}-</div>
               );

            case 'price_label':
               return (
               <div className='price_label' key={i}><span className='s_name'>{line['text']}</span></div>
               );

            case 'meal':
               return (
               <div key={i}>
                  <div className='product'>
                     <div className='name'>{line['name']}</div>
                     <div className='dots'/>
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
         <div className='block' style={sectionStyle} id={this.props.block['name']}>
            <div className='block_name'>{ this.props.block['name'] }</div>
            {renderBlock}
         </div>
      );
   }
}

export default MenuBlock;